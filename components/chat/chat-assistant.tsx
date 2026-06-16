"use client";

import { useState } from "react";

import { buttonLinkClassName } from "../ui/button-link";
import { Card } from "../ui/card";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starterPrompts = [
  "Melyik sportág lehet jó első lépés?",
  "Az úszás vagy a kenu illene jobban?",
  "A falmászás vagy a túra lehet jobb belépő?",
  "Mit vigyünk az első alkalomra?",
  "Hogyan tudunk jelentkezni?",
  "Mivel tud egy támogató segíteni?",
];

function buildStaticReply(text: string) {
  const normalized = text.toLowerCase();

  if (normalized.includes("foci") || normalized.includes("labdar")) {
    return "A labdarúgás jó első lépés lehet azoknak, akik szeretnek futni, kezdeményezni és csapatban játszani. Érdemes a kapcsolat oldalon megírni a gyermek korosztályát és azt, hogy volt-e már sportos tapasztalata.";
  }
  if (normalized.includes("kosár")) {
    return "A kosárlabda tempót, figyelmet és koordinációt fejleszt. Jó irány lehet, ha a gyermek szereti a gyors helyzeteket és a csapatjátékot.";
  }
  if (normalized.includes("úsz")) {
    return "Az úszás jó választás lehet, ha fontos a vízbiztonság, az állóképesség és a fokozatos fejlődés. Érdemes jelezni, mennyire magabiztos a gyermek vízben.";
  }
  if (normalized.includes("kenu")) {
    return "A kenu természetközeli sportélményt ad, és fejleszti az egyensúlyt, a kitartást és a fókuszt. Jó irány lehet szabadtéri mozgást kedvelő gyerekeknek.";
  }
  if (normalized.includes("mász") || normalized.includes("falmász")) {
    return "A falmászás koncentrációt, testtudatot és bátorságot fejleszt. Jó belépő lehet olyan gyerekeknek, akik szeretik az egyéni kihívásokat.";
  }
  if (normalized.includes("túra")) {
    return "A túra kevésbé versenyjellegű, közösségi és természetközeli mozgásforma. Jó választás lehet, ha a gyermek nyugodtabb, szabadtéri programokban érzi jól magát.";
  }
  if (normalized.includes("első") || normalized.includes("vigy") || normalized.includes("készülj")) {
    return "Az első alkalomra kényelmes sportfelszerelés, kulacs és nyugodt felkészítés a legfontosabb. A pontos részleteket az egyesülettel érdemes egyeztetni.";
  }
  if (normalized.includes("jelent") || normalized.includes("csatlakoz")) {
    return "A csatlakozás első lépése egy rövid érdeklődő üzenet elküldése a kapcsolat oldalon. Név, e-mail cím, korosztály és sportági érdeklődés már elég a beszélgetés elindításához.";
  }
  if (normalized.includes("támogat") || normalized.includes("szponzor") || normalized.includes("partner")) {
    return "Támogatóként anyagi, tárgyi, szakmai vagy önkéntes segítséggel lehet kapcsolódni. A támogatói megkeresést a kapcsolat oldalon érdemes elküldeni.";
  }
  if (normalized.includes("kapcsolat") || normalized.includes("elérhet")) {
    return "Elérhetőség: Tüskevár Általános Iskola és Gimnázium, 1041 Budapest, Lőrincz utca 40-42., e-mail: tuskevar@tuskevar.edu.hu, telefon: +36 1 274 4097.";
  }

  return "Ebben a költségmentes változatban az asszisztens előre szerkesztett, helyben futó válaszokkal segít. Kérdezhetsz sportágválasztásról, első alkalomról, csatlakozásról vagy támogatói lehetőségekről.";
}

export function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Szia, a Tüskevár DSE segítő felülete vagyok. Kérdezhetsz a sportágakról, a csatlakozásról, az első alkalomról vagy a támogatói lehetőségekről is.",
    },
  ]);
  const [input, setInput] = useState("");
  const [provider] = useState("0 Ft statikus");

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", content: trimmed },
      { role: "assistant", content: buildStaticReply(trimmed) },
    ]);
    setInput("");
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-brand-navy/10 bg-white/90 px-6 py-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-blue">AI asszisztens</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">Párbeszédes érdeklődési felület</h2>
          </div>
          <div className="rounded-full bg-brand-sky px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy">
            {provider}
          </div>
        </div>
      </div>

      <div className="space-y-4 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-6 py-6">
        <div className="flex flex-wrap gap-2">
          {starterPrompts.map((prompt) => (
            <button
              key={prompt}
              className="rounded-full bg-brand-sky px-4 py-2 text-sm font-medium text-brand-navy transition hover:bg-brand-blue hover:text-white"
              type="button"
              onClick={() => sendMessage(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="grid gap-3">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-[90%] rounded-[1.5rem] px-5 py-4 text-base leading-7 ${
                message.role === "assistant"
                  ? "bg-white text-ink shadow-[0_20px_40px_-28px_rgba(19,34,56,0.3)]"
                  : "ml-auto bg-brand-navy text-white"
              }`}
            >
              {message.content}
            </div>
          ))}
        </div>

        <form
          className="grid gap-3"
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage(input);
          }}
        >
          <textarea
            className="min-h-28 rounded-[1.5rem] border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-blue"
            placeholder="Írd meg például azt, hogy melyik sportág illene jobban a gyermekedhez, mit érdemes vinni az első alkalomra, vagy hogyan tudnál támogatóként kapcsolódni."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div className="flex items-center gap-3">
            <button
              className={buttonLinkClassName({
                variant: "primary",
                size: "lg",
                className: "cursor-pointer border-0",
              })}
              type="submit"
            >
              Üzenet küldése
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}
