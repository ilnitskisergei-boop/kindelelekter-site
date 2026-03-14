"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "et" | "ru";

interface HomePageProps {
  lang: Lang;
}

const content: Record<
  Lang,
  {
    navServices: string;
    navAbout: string;
    navContact: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    heroBadgeLine: string;
    heroExperienceLabel: string;
    heroExperienceValue: string;
    heroExperienceText: string;
    heroResponseLabel: string;
    heroResponseValue: string;
    heroResponseText: string;
    heroSafetyLabel: string;
    heroSafetyValue: string;
    heroSafetyText: string;
    heroProjectsLabel: string;
    heroProjectsValue: string;
    heroProjectsText: string;
    trustIntro: string;
    trustCertifiedTitle: string;
    trustCertifiedText: string;
    trustFastTitle: string;
    trustFastText: string;
    trustAreaTitle: string;
    trustAreaText: string;
    servicesTitle: string;
    servicesIntro: string;
    service1Title: string;
    service1Text: string;
    service2Title: string;
    service2Text: string;
    service3Title: string;
    service3Text: string;
    service4Title: string;
    service4Text: string;
    service5Title: string;
    service5Text: string;
    service6Title: string;
    service6Text: string;
    aboutTitle: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
    whyTitle: string;
    why1: string;
    why2: string;
    why3: string;
    why4: string;
    ctaBannerTitle: string;
    ctaBannerText: string;
    ctaPrimary: string;
    ctaSecondary: string;
    contactTitle: string;
    contactIntro: string;
    contactAreaLabel: string;
    contactAreaValue: string;
    contactPhoneLabel: string;
    contactPhoneValue: string;
    contactEmailLabel: string;
    contactEmailValue: string;
    contactHoursLabel: string;
    contactHoursValue: string;
    footerTagline: string;
    mapTitle: string;
    mapSubtitle: string;
    worksTitle: string;
    worksSubtitle: string;
  }
> = {
  et: {
    navServices: "Teenused",
    navAbout: "Meist",
    navContact: "Kontakt",
    heroEyebrow:  "Usaldusväärsed elektritööd Tallinnas ja Harjumaal",
    heroTitle: "Elektritööd Tallinnas ja Harjumaal",
    heroSubtitle:
    "Sertifitseeritud elektrik korteritele, majadele ja ettevõtetele.",
    heroPrimaryCta: "Küsi pakkumist",
    heroSecondaryCta: "Helista",
    heroBadgeLine: "Korterid ja majad • Selge hinnapakkumine • Kvaliteetne töö",
    heroExperienceLabel: "Kogemus",
    heroExperienceValue: "10+ aastat",
    heroExperienceText: "Kogemus elektritöödes Tallinnas ja Harjumaal.",
    heroResponseLabel: "Reageerimine",
    heroResponseValue: "Kiire ja paindlik",
    heroResponseText: "Paindlik ajaplaneerimine ja selge suhtlus.",
    heroSafetyLabel: "Ohutus",
    heroSafetyValue: "Sertifitseeritud töö",
    heroSafetyText: "Elektritööd vastavalt kehtivatele nõuetele.",
    heroProjectsLabel: "Tüüpilised objektid",
    heroProjectsValue: "Kodud ja väikeärid",
    heroProjectsText: "Alates väikestest töödest kuni põhjalike uuendusteni.",
    trustIntro:
      "Usaldusväärne elektriteenus korteritele, eramajadele ja väikeärile Tallinnas ja Harjumaal.",
    trustCertifiedTitle: "Sertifitseeritud spetsialist",
    trustCertifiedText: "Tööd teeb kutsetunnistusega elektrik.",
    trustFastTitle: "Kiire reageerimine",
    trustFastText: "Vastame päringutele kiiresti ja anname selge ajakava.",
    trustAreaTitle: "Tallinn & Harjumaa",
    trustAreaText: "Kohalik elektrik, kes tunneb piirkonda ja nõudeid.",
    servicesTitle: "Teenused",
    servicesIntro:
      "Elektritööd korteritele, majadele ja väiksematele äripindadele.",
    service1Title: "Elektripaigaldus",
    service1Text:
      "Uue juhtmestiku, vooluahelate ja elektrikilpide paigaldus renoveeritavates ja uutes hoonetes.",
    service2Title: "Elektriremont",
    service2Text:
      "Vigaste juhtmete, pistikupesade ja seadmete remont ning vanade süsteemide uuendamine.",
    service3Title: "Rikete leidmine",
    service3Text:
      "Lekkevoolude, lülitite ja kaitsmete probleemide ning muude riketega tegelemine.",
    service4Title: "Valgustus ja pistikupesad",
    service4Text:
      "Valgustite, lülitite, pistikupesade ja dimmerite paigaldus ning ümbertõstmine.",
    service5Title: "Elektrikilbi uuendus",
    service5Text:
      "Põhikilpide ja kaitselülitite kaasajastamine vastavalt kehtivatele nõuetele.",
    service6Title: "Päikesesüsteemide ühendamine",
    service6Text:
      "Päikesepaneelide inverterite ja süsteemide ohutu ühendamine olemasoleva elektrikilbiga.",
    aboutTitle: "Kindel Elekter",
    aboutParagraph1:
      "Kindel Elekter on väike elektriettevõte, mille fookus on läbimõeldud, turvalisel ja korrektselt dokumenteeritud tööl Tallinnas ja Harjumaal. Iga objektiga tegeleb sertifitseeritud elektrik, järgides kohalikke nõudeid ja standardeid.",
    aboutParagraph2:
      "Hindame selget suhtlust, puhtaid lahendusi ja vastupidavaid tulemusi. Meie eesmärk on, et elektrisüsteem oleks teile ohutu, mugav kasutada ja tehniliselt korras ka pikemas plaanis.",
    whyTitle: "Miks valida Kindel Elekter",
    why1: "Sertifitseeritud ja kogenud elektrik, kes vastutab kogu tööprotsessi eest.",
    why2: "Selgitame enne tööde algust erinevad võimalused, riskid ja hinnad.",
    why3: "Puhas kaabeldus, korras elektrikilbid ja läbimõeldud lahendused igas objektis.",
    why4: "Keskendume Tallinnale ja Harjumaale – kiire reageerimine ja kohalik tugi.",
    ctaBannerTitle: "Vajad elektrikut Tallinnas või Harjumaal?",
    ctaBannerText:
      "Kirjelda lühidalt oma soovi või probleemi ning saadame sulle pakkumise ja ajaplaani.",
    ctaPrimary: "Küsi pakkumist",
    ctaSecondary: "Helista",
    contactTitle: "Kontakt",
    contactIntro:
      "Kirjelda lühidalt oma probleemi või tööd ja vastame esimesel võimalusel.",
    contactAreaLabel: "Piirkond",
    contactAreaValue: "Tallinn / Harjumaa",
    contactPhoneLabel: "Telefon",
    contactPhoneValue: "+37253902654",
    contactEmailLabel: "E-post",
    contactEmailValue: "kindelelekter.ee@gmail.com",
    contactHoursLabel: "Tööaeg",
    contactHoursValue: "E–R: 09:00–18:00\nL–P: kokkuleppel",
    footerTagline: "Elektritööd Tallinnas ja Harjumaal.",
    mapTitle: "Meie piirkond",
    mapSubtitle: "Tallinn ja Harjumaa",
    worksTitle: "Meie tööd",
    worksSubtitle: "Näited tehtud elektritöödest",
  },
  ru: {
    navServices: "Услуги",
    navAbout: "О нас",
    navContact: "Контакты",
    heroEyebrow: "Надёжные электротехнические работы",
    heroTitle: "Электромонтажные работы в Таллине и Харьюмаа",
    heroSubtitle:
      "Быстрый и надёжный электрик для квартир, домов и бизнеса",
    heroPrimaryCta: "Запросить цену",
    heroSecondaryCta: "Позвонить",
    heroBadgeLine:
      "Частные дома и малый бизнес · Прозрачные цены · Гарантированное качество",
    heroExperienceLabel: "Опыт",
    heroExperienceValue: "10+ лет",
    heroExperienceText: "Электромонтажные работы в Таллине и Харьюмаа.",
    heroResponseLabel: "Реакция",
    heroResponseValue: "Быстро и надёжно",
    heroResponseText: "Гибкое планирование сроков и понятное общение.",
    heroSafetyLabel: "Безопасность",
    heroSafetyValue: "Сертифицированные работы",
    heroSafetyText: "Работа в соответствии с местными нормами и стандартами.",
    heroProjectsLabel: "Объекты",
    heroProjectsValue: "Дома и малый бизнес",
    heroProjectsText: "От небольших работ до полной модернизации системы.",
    trustIntro:
      "Надёжный электротехнический сервис для квартир, частных домов и малого бизнеса в Таллине и Харьюмаа.",
    trustCertifiedTitle: "Сертифицированный специалист",
    trustCertifiedText: "Все работы выполняет квалифицированный электрик.",
    trustFastTitle: "Быстрая реакция",
    trustFastText: "Быстро отвечаем на запросы и даём понятные сроки.",
    trustAreaTitle: "Таллин и Харьюмаа",
    trustAreaText: "Местная компания, хорошо знающая требования и объекты.",
    servicesTitle: "Услуги",
    servicesIntro:
      "Комплексные решения для электрических систем квартир, частных домов и небольших коммерческих помещений.",
    service1Title: "Электромонтаж",
    service1Text:
      "Монтаж новой проводки, линий, распределительных щитов и контуров в новых и реновируемых зданиях.",
    service2Title: "Электроремонт",
    service2Text:
      "Ремонт повреждённой проводки, розеток и оборудования, замена устаревших и небезопасных систем.",
    service3Title: "Поиск неисправностей",
    service3Text:
      "Диагностика и устранение неисправностей, срабатывающих автоматов, мигающего света и других проблем.",
    service4Title: "Освещение и розетки",
    service4Text:
      "Установка и перенос светильников, выключателей, розеток и диммеров для удобства и безопасности.",
    service5Title: "Модернизация щита",
    service5Text:
      "Современные распределительные щиты и устройства защиты в соответствии с актуальными требованиями.",
    service6Title: "Подключение солнечных систем",
    service6Text:
      "Безопасное подключение инверторов и солнечных систем к существующей электросети.",
    aboutTitle: "Kindel Elekter",
    aboutParagraph1:
      "Kindel Elekter — небольшая электротехническая компания, которая уделяет особое внимание надёжной, безопасной и хорошо документированной работе в Таллине и Харьюмаа. Каждым объектом занимается сертифицированный электрик в соответствии с местными нормами и стандартами.",
    aboutParagraph2:
      "Мы ценим понятное общение, аккуратное исполнение и долгосрочные решения. Наша цель — чтобы ваша электросистема была безопасной, удобной в использовании и технически надёжной на долгие годы.",
    whyTitle: "Почему выбирают нас",
    why1: "Сертифицированный и опытный электрик, отвечающий за весь процесс работ.",
    why2: "До начала работ объясняем варианты, риски и стоимость.",
    why3: "Аккуратная прокладка кабелей, опрятные щиты и продуманные решения на каждом объекте.",
    why4: "Фокус на Таллине и Харьюмаа — быстрая реакция и локальная поддержка.",
    ctaBannerTitle: "Нужен электрик в Таллине или Харьюмаа?",
    ctaBannerText:
      "Кратко опишите задачу или проблему, и мы отправим предложение и ориентировочные сроки.",
    ctaPrimary: "Запросить предложение",
    ctaSecondary: "Позвонить",
    contactTitle: "Контакты",
    contactIntro:
      "Пришлите краткое описание работ, фотографии или вопросы — мы ответим как можно скорее.",
    contactAreaLabel: "Регион",
    contactAreaValue: "Таллин / Харьюмаа",
    contactPhoneLabel: "Телефон",
    contactPhoneValue: "+37253902654",
    contactEmailLabel: "E-mail",
    contactEmailValue: "kindelelekter.ee@gmail.com",
    contactHoursLabel: "Время работы",
    contactHoursValue: "Пн–Пт: 09:00–18:00\nСб–Вс: по договорённости",
    footerTagline: "Электротехнические работы в Таллине и Харьюмаа.",
    mapTitle: "Наш регион",
    mapSubtitle: "Таллин и Харьюмаа",
    worksTitle: "Наши работы",
    worksSubtitle: "Примеры выполненных электротехнических работ",
  },
};

export default function HomePage({ lang }: HomePageProps) {
  const t = content[lang];
  const isRu = lang === "ru";
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitted(false);

    const newErrors: { name?: string; phone?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = isRu ? "Пожалуйста, укажите имя" : "Palun sisesta nimi";
    }
    if (!phone.trim()) {
      newErrors.phone = isRu ? "Пожалуйста, укажите телефон" : "Palun sisesta telefon";
    } else if (!/^[0-9+\s-]{6,}$/.test(phone.trim())) {
      newErrors.phone = isRu
        ? "Пожалуйста, введите корректный номер телефона"
        : "Palun sisesta korrektne telefoninumber";
    }
    if (!message.trim()) {
      newErrors.message = isRu
        ? "Пожалуйста, кратко опишите свой запрос"
        : "Palun kirjelda lühidalt oma soovi";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
          company,
          lang,
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.ok) {
        setSubmitError(
          json?.error ||
            (isRu
              ? "Отправка запроса не удалась. Пожалуйста, попробуйте ещё раз или свяжитесь по телефону."
              : "Päringu saatmine ebaõnnestus. Palun proovi uuesti või võta ühendust telefoni teel.")
        );
        return;
      }

      setSubmitted(true);
      setName("");
      setPhone("");
      setMessage("");
      setErrors({});
    } catch (err) {
      setSubmitError(
        isRu
          ? "Отправка запроса не удалась. Пожалуйста, проверьте подключение к сети и попробуйте ещё раз."
          : "Päringu saatmine ebaõnnestus. Palun kontrolli võrguühendust ja proovi uuesti."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* TOP NAVIGATION */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-gray-900 text-sm font-bold">
              KE
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Kindel Elekter
            </span>
          </div>

          {/* Desktop navigation + language switcher */}
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#services" className="hover:text-gray-900">
              {t.navServices}
            </a>
            <a href="#about" className="hover:text-gray-900">
              {t.navAbout}
            </a>
            <a href="#contact" className="hover:text-gray-900">
              {t.navContact}
            </a>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-xs">
              <Link
                href="/et"
                className={
                  lang === "et"
                    ? "font-semibold text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }
              >
                ET
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/ru"
                className={
                  lang === "ru"
                    ? "font-semibold text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }
              >
                RU
              </Link>
            </div>
          </div>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 text-xs text-gray-600 md:hidden">
            <Link
              href="/et"
              className={
                lang === "et"
                  ? "font-semibold text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }
            >
              ET
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/ru"
              className={
                lang === "ru"
                  ? "font-semibold text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }
            >
              RU
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-gray-950 text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24 lg:px-8">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                {t.heroEyebrow}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="mt-4 text-base text-gray-300 sm:text-lg">
                {t.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-300"
                >
                  {t.heroPrimaryCta}
                </a>
                <a
                  href={`tel:${t.contactPhoneValue}`}
                  className="inline-flex items-center justify-center rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-gray-400 hover:bg-gray-900/60"
                >
                  {t.heroSecondaryCta}
                </a>
              </div>
              <p className="mt-4 text-xs text-gray-400">{t.heroBadgeLine}</p>
            </div>

            <div className="grid w-full max-w-md grid-cols-2 gap-4 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-5 text-sm text-gray-200 shadow-lg lg:max-w-sm">
              <div className="space-y-1 rounded-xl border border-gray-800/80 bg-gray-900/60 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  {t.heroExperienceLabel}
                </p>
                <p className="text-lg font-semibold leading-tight text-white break-words max-w-full">
                  {t.heroExperienceValue}
                </p>
                <p className="text-xs text-gray-400">
                  {t.heroExperienceText}
                </p>
              </div>
              <div className="space-y-1 rounded-xl border border-gray-800/80 bg-gray-900/60 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  {t.heroResponseLabel}
                </p>
                <p className="text-lg font-semibold leading-tight text-white break-words max-w-full">
                  {t.heroResponseValue}
                </p>
                <p className="text-xs text-gray-400">
                  {t.heroResponseText}
                </p>
              </div>
              <div className="space-y-1 rounded-xl border border-gray-800/80 bg-gray-900/60 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  {t.heroSafetyLabel}
                </p>
                <p className="text-lg font-semibold leading-tight text-white break-words max-w-full">
                  {t.heroSafetyValue}
                </p>
                <p className="text-xs text-gray-400">
                  {t.heroSafetyText}
                </p>
              </div>
              <div className="space-y-1 rounded-xl border border-gray-800/80 bg-gray-900/60 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  {t.heroProjectsLabel}
                </p>
                <p className="text-lg font-semibold leading-tight text-white break-words max-w-full">
                  {t.heroProjectsValue}
                </p>
                <p className="text-xs text-gray-400">
                  {t.heroProjectsText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST HIGHLIGHTS */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-gray-700">{t.trustIntro}</p>
            <div className="grid gap-4 text-sm text-gray-800 sm:grid-cols-3 sm:gap-6">
              <div className="flex items-start gap-2">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-semibold text-green-700">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">{t.trustCertifiedTitle}</p>
                  <p className="text-xs text-gray-500">{t.trustCertifiedText}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">{t.trustFastTitle}</p>
                  <p className="text-xs text-gray-500">{t.trustFastText}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-xs font-semibold text-yellow-800">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">{t.trustAreaTitle}</p>
                  <p className="text-xs text-gray-500">{t.trustAreaText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  {t.servicesTitle}
                </h2>
                <p className="mt-2 text-sm text-gray-600 sm:text-base">
                  {t.servicesIntro}
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {t.service1Title}
                </h3>
                <p className="text-sm text-gray-600">{t.service1Text}</p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {t.service2Title}
                </h3>
                <p className="text-sm text-gray-600">{t.service2Text}</p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {t.service3Title}
                </h3>
                <p className="text-sm text-gray-600">{t.service3Text}</p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {t.service4Title}
                </h3>
                <p className="text-sm text-gray-600">{t.service4Text}</p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {t.service5Title}
                </h3>
                <p className="text-sm text-gray-600">{t.service5Text}</p>
              </div>

              <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  {t.service6Title}
                </h3>
                <p className="text-sm text-gray-600">{t.service6Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT + WHY CHOOSE US */}
        <section id="about" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  {t.aboutTitle}
                </h2>
                <p className="mt-4 text-sm text-gray-600 sm:text-base">
                  {t.aboutParagraph1}
                </p>
                <p className="mt-3 text-sm text-gray-600 sm:text-base">
                  {t.aboutParagraph2}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.whyTitle}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-yellow-400">
                      ●
                    </span>
                    <span>{t.why1}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-yellow-400">
                      ●
                    </span>
                    <span>{t.why2}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-yellow-400">
                      ●
                    </span>
                    <span>{t.why3}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-yellow-400">
                      ●
                    </span>
                    <span>{t.why4}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="bg-gray-900">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-950 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {t.ctaBannerTitle}
                </h2>
                <p className="mt-2 text-sm text-gray-300 sm:text-base">
                  {t.ctaBannerText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-300"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href={`tel:${t.contactPhoneValue}`}
                  className="inline-flex items-center justify-center rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-gray-500 hover:bg-gray-900/60"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WORKS / PROJECTS */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {t.worksTitle}
              </h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                {t.worksSubtitle}
              </p>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                "/work/work1.jpg",
                "/work/work2.jpg",
                "/work/work3.jpg",
                "/work/work4.jpg",
                "/work/work5.jpg",
                "/work/work6.jpg",
                "/work/work7.jpg",
                "/work/work8.jpg",
              ].map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                  >
                    <img
                      src={src}
                      alt={t.worksTitle}
                      className="h-56 w-full object-cover transition-transform duration-200 group-hover:scale-[1.04]"
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index < 2 ? "high" : undefined}
                    />
                  </button>
                ))}
            </div>
          </div>
        </section>

        {/* MAP / AREA */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {t.mapTitle}
              </h2>
              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                {t.mapSubtitle}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-100">
                <div className="relative h-64 w-full sm:h-80 lg:h-96">
                  <iframe
                    title="Tallinn area map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25970.484646860918!2d24.7036!3d59.4370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c9f0f1e3f%3A0x400f7d1c6970500!2sTallinn!5e0!3m2!1sen!2see!4v1710160000000!5m2!1sen!2see"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {t.contactTitle}
              </h2>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                {t.contactIntro}
              </p>
            </div>

            {/* CONTACT FORM */}
            <form
              id="contact"
              onSubmit={handleSubmit}
              className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-7"
              noValidate
            >
              {/* Honeypot field for bots */}
              <div className="hidden">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  {isRu ? "Отправить запрос" : "Saada päring"}
                </h3>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {isRu
                    ? "Заполните форму, и мы свяжемся с вами в ближайшее время."
                    : "Täida vorm ja võtame sinuga ühendust esimesel võimalusel."}
                </p>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    {isRu ? "Имя" : "Nimi"}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`block w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none transition placeholder:text-gray-400 sm:text-base ${
                      errors.name
                        ? "border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300"
                        : "border-gray-200 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
                    }`}
                    placeholder="Sinu nimi"
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    {isRu ? "Телефон" : "Telefon"}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`block w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none transition placeholder:text-gray-400 sm:text-base ${
                      errors.phone
                        ? "border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300"
                        : "border-gray-200 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
                    }`}
                    placeholder="+372 ..."
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div className="lg:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    {isRu ? "Сообщение" : "Sõnum"}
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={`block w-full resize-none rounded-xl border px-3 py-2 text-sm shadow-sm outline-none transition placeholder:text-gray-400 sm:text-base ${
                      errors.message
                        ? "border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300"
                        : "border-gray-200 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-300"
                    }`}
                    placeholder="Kirjelda lühidalt oma soovi või probleemi"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-80 sm:px-6 sm:text-sm"
                >
                  {isSubmitting
                    ? isRu
                      ? "Отправка..."
                      : "Saatmine..."
                    : isRu
                    ? "Отправить запрос"
                    : "Saada päring"}
                </button>
                <div className="flex flex-col gap-1 text-xs">
                  {submitted && !submitError && (
                    <p className="text-green-600">
                      {isRu ? "Запрос отправлен" : "Päring on vormistatud"}
                    </p>
                  )}
                  {submitError && (
                    <p className="text-red-500">{submitError}</p>
                  )}
                </div>
              </div>
            </form>

            {/* CONTACT INFO */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  {t.contactAreaLabel}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {t.contactAreaValue}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  {t.contactPhoneLabel}
                </h3>
                <a
                  href={`tel:${t.contactPhoneValue}`}
                  className="mt-2 inline-flex text-sm font-medium text-gray-800 hover:text-gray-900"
                >
                  +372 539 026 54
                </a>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  {t.contactEmailLabel}
                </h3>
                <p className="mt-2 text-sm text-gray-800">
                  {t.contactEmailValue}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  {t.contactHoursLabel}
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm text-gray-700">
                  {t.contactHoursValue}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  SkyBuilding OÜ
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  KMKR: EE102011340
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  {isRu ? "Лицензия" : "Litsents"}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  B-pädevus
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE LIGHTBOX */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                ×
              </button>
              <img
                src={activeImage}
                alt={t.worksTitle}
                className="max-h-[80vh] w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>
          </div>
        )}
      </main>

      {/* SEO TEXT */}
      <section className="border-t border-gray-100 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
            {isRu
              ? "Электромонтажные работы в Таллине и Харьюмаа"
              : "Elektritööd Tallinnas ja Harjumaal"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            {isRu ? (
              <>
                Выполняем электромонтажные работы на новых и ремонтируемых объектах в Таллине и
                Харьюмаа. Если вам нужен электрик в Таллине, электромонтаж в Харьюмаа, работы в
                квартире, модернизация электрощита или установка освещения, предлагаем безопасные и
                продуманные решения в соответствии с действующими требованиями и вашими
                повседневными задачами.
              </>
            ) : (
              <>
                Teostame elektritöid nii uutele kui renoveeritavatele objektidele Tallinnas ja
                Harjumaal. Kui otsid lahendust märksõnadele elektrik Tallinn, elektritööd Harjumaa,
                korteri elektritööd, elektrikilbi uuendus või valgustuse paigaldus, pakume
                läbimõeldud ja turvalisi lahendusi, mis vastavad kehtivatele nõuetele ja sinu
                igapäevastele vajadustele.
              </>
            )}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-1 text-[11px] sm:items-end">
            <p>{t.footerTagline}</p>
          </div>
          <p>
            © {new Date().getFullYear()} Kindel Elekter. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/37256122745"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-lg shadow-[#22c55e]/40 transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-14 sm:w-14"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 sm:h-6 sm:w-6"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12.04 2C6.59 2 2.2 6.27 2.2 11.58c0 1.98.64 3.82 1.74 5.34L2 22l5.25-1.7a9.9 9.9 0 004.79 1.22h.01c5.45 0 9.84-4.27 9.84-9.58C21.89 6.27 17.5 2 12.04 2zm0 17.4h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12 1.01.99-3.02-.2-.31A7.1 7.1 0 014 11.58c0-3.94 3.25-7.14 7.25-7.14 3.99 0 7.24 3.2 7.24 7.14 0 3.93-3.25 7.14-7.24 7.14zm4-5.34c-.22-.11-1.31-.64-1.51-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.35-1.77-1.1-.65-.57-1.09-1.27-1.22-1.48-.13-.22-.01-.33.1-.44.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.27-.02-.38-.06-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.39h-.43c-.15 0-.39.05-.6.27-.2.22-.79.77-.79 1.88 0 1.1.81 2.16.92 2.31.11.15 1.59 2.45 3.86 3.33.54.23.96.37 1.29.47.54.17 1.03.15 1.42.09.43-.06 1.31-.53 1.5-1.04.19-.5.19-.93.13-1.02-.06-.09-.2-.15-.41-.26z"
          />
        </svg>
      </a>

      {/* FLOATING CALL BUTTON */}
      <a
        href={`tel:${t.contactPhoneValue}`}
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/40 transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.55)] hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-14 sm:w-14"
        aria-label={t.heroSecondaryCta}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 sm:h-6 sm:w-6"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l1.96-1.96a1 1 0 011-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.33a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1z"
          />
        </svg>
      </a>
    </div>
  );
}

