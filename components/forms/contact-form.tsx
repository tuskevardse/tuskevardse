"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { siteContact } from "@/content/site";

import { ButtonLink, buttonLinkClassName } from "../ui/button-link";
import { Card } from "../ui/card";

const sportOptions = ["Labdarúgás", "Kosárlabda", "Úszás", "Kenu", "Falmászás", "Túra"];
const inquiryOptions = ["Szülői érdeklődés", "Támogatói / partneri megkeresés"];

export function ContactForm() {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [inquiryType, setInquiryType] = useState(inquiryOptions[0]);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleSport(sport: string) {
    setSelectedSports((current) =>
      current.includes(sport) ? current.filter((value) => value !== sport) : [...current, sport],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      inquiryType,
      parentName: String(formData.get("parentName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      childName: String(formData.get("childName") ?? "").trim(),
      ageGroup: String(formData.get("ageGroup") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      sportsInterest: selectedSports,
    };

    if (!payload.parentName || !payload.email || !payload.message) {
      setStatus({
        type: "error",
        message: "A név, e-mail cím és üzenet megadása kötelező.",
      });
      setIsSubmitting(false);
      return;
    }

    const subject = encodeURIComponent(`Tüskevár DSE érdeklődés - ${payload.inquiryType}`);
    const body = encodeURIComponent(
      [
        `Megkeresés típusa: ${payload.inquiryType}`,
        `Név: ${payload.parentName}`,
        `E-mail: ${payload.email}`,
        `Telefonszám: ${payload.phone || "-"}`,
        `Gyermek / szervezet: ${payload.childName || "-"}`,
        `Korosztály / érintett csoport: ${payload.ageGroup || "-"}`,
        `Sportági érdeklődés: ${payload.sportsInterest.length ? payload.sportsInterest.join(", ") : "-"}`,
        "",
        "Üzenet:",
        payload.message,
      ].join("\n"),
    );

    try {
      window.location.href = `${siteContact.emailBaseHref}?subject=${subject}&body=${body}`;
      setStatus({
        type: "success",
        message:
          "Megnyitottuk az e-mail küldést. A megkeresés a Google Workspace postafiókba érkezik, külön szerver nélkül.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Nem sikerült megnyitni az e-mail küldést.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="h-fit">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">Kapcsolatfelvétel</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink">Küldjetek üzenetet közvetlenül</h3>
      <p className="mt-3 text-base leading-7 text-muted">
        Az űrlap szülői érdeklődésre és támogatói / partneri megkeresésre is használható. A küldés a szervezet
        Google Workspace e-mail címére előkészített levélként történik, külön szerver és fizetős szolgáltatás nélkül.
      </p>

      <form id="contact-form" className="mt-8 grid gap-4" onSubmit={handleSubmit}>
        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-ink">Megkeresés típusa</legend>
          <div className="flex flex-wrap gap-3">
            {inquiryOptions.map((option) => {
              const active = inquiryType === option;
              return (
                <button
                  key={option}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active ? "bg-brand-navy text-white" : "bg-brand-sky text-brand-navy"
                  }`}
                  type="button"
                  onClick={() => setInquiryType(option)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </fieldset>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Szülő / kapcsolattartó neve
          <input
            className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
            name="parentName"
            placeholder="Például: Kovács Anna"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-ink">
          E-mail cím
          <input
            className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
            name="email"
            placeholder="nev@email.hu"
            required
            type="email"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-ink">
            Telefonszám
            <input
              className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
              name="phone"
              placeholder="+36 ..."
              type="tel"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-ink">
            Gyermek neve / szervezet neve
            <input
              className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
              name="childName"
              placeholder="Ha szeretnétek megadni"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Korosztály / érintett csoport
          <input
            className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
            name="ageGroup"
            placeholder="Például: alsó tagozat / felső tagozat / partnercég"
          />
        </label>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium text-ink">Érdeklődési sportág</legend>
          <div className="flex flex-wrap gap-3">
            {sportOptions.map((sport) => {
              const active = selectedSports.includes(sport);
              return (
                <button
                  key={sport}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active ? "bg-brand-navy text-white" : "bg-brand-sky text-brand-navy"
                  }`}
                  type="button"
                  onClick={() => toggleSport(sport)}
                >
                  {sport}
                </button>
              );
            })}
          </div>
        </fieldset>

        <label className="grid gap-2 text-sm font-medium text-ink">
          Rövid üzenet
          <textarea
            className="min-h-36 rounded-[1.5rem] border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
            name="message"
            placeholder="Mi érdekel benneteket, milyen korosztályról van szó, mi lenne fontos a kezdésnél, vagy miben tudnátok támogatni a DSE-t?"
            required
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            className={buttonLinkClassName({
              variant: "primary",
              size: "lg",
              className: "cursor-pointer border-0",
            })}
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Küldés..." : "Érdeklődés elküldése"}
          </button>
          <ButtonLink href="/ai-asszisztens" size="lg" variant="ghost">
            Inkább kérdeznék előbb
          </ButtonLink>
        </div>
      </form>

      {status.type !== "idle" ? (
        <p className={`mt-4 text-sm ${status.type === "success" ? "text-green-700" : "text-red-600"}`}>{status.message}</p>
      ) : null}
    </Card>
  );
}
