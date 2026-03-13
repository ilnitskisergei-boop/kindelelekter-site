import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type SupportedLang = "et" | "ru";

interface ContactPayload {
  name?: string;
  phone?: string;
  message?: string;
  lang?: SupportedLang | string;
  company?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ContactPayload;

    const name = data.name?.toString().trim();
    const phone = data.phone?.toString().trim();
    const message = data.message?.toString().trim();
    const lang = (data.lang as SupportedLang) || "et";
    const company = data.company?.toString().trim();

    const errors: Record<string, string> = {};

    // Honeypot check – real users should never fill this
    if (company) {
      return NextResponse.json(
        {
          ok: false,
          error: "Spam detected.",
        },
        { status: 400 }
      );
    }

    if (!name) {
      errors.name = "Name is required.";
    }

    if (!phone) {
      errors.phone = "Phone is required.";
    } else if (!/^[0-9+\s-]{6,}$/.test(phone)) {
      errors.phone = "Please provide a valid phone number.";
    }

    if (!message) {
      errors.message = "Message is required.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          errors,
        },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP config missing", {
        SMTP_HOST,
        SMTP_USER,
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = "New contact request from website";

    const textBody = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Language: ${lang}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const htmlBody = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Language:</strong> ${lang}</p>
      <p><strong>Message:</strong></p>
      <p>${(message ?? "").replace(/\n/g, "<br />")}</p>
    `;

    try {
      await transporter.sendMail({
        from: `"Kindel Elekter" <${CONTACT_EMAIL}>`,
        to: CONTACT_EMAIL,
        subject,
        text: textBody,
        html: htmlBody,
      });
    } catch (error) {
      console.error("SMTP SEND ERROR:", error);

      return NextResponse.json(
        {
          ok: false,
          error: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Contact request received.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid request payload.",
      },
      { status: 400 }
    );
  }
}

