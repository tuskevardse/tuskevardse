"use client";

import { useState } from "react";

import { publicAiPreprompt } from "@/content/ai-preprompt";
import { buttonLinkClassName } from "@/components/ui/button-link";

export function CopyablePreprompt() {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(publicAiPreprompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }

  return (
    <div className="space-y-4" data-editor-block="aiPrompt.copyablePreprompt">
      <textarea
        className="min-h-80 w-full resize-y rounded-[1.25rem] border border-brand-navy/12 bg-white px-4 py-4 font-mono text-sm leading-6 text-ink outline-none"
        data-editor-block="aiPrompt.copyablePreprompt.textarea"
        readOnly
        value={publicAiPreprompt}
      />
      <button
        className={buttonLinkClassName({ size: "lg", variant: "primary" })}
        data-editor-text="aiPrompt.copyablePreprompt.copyButton"
        onClick={copyPrompt}
        type="button"
      >
        {copied ? "Vágólapra másolva" : "Preprompt másolása"}
      </button>
    </div>
  );
}
