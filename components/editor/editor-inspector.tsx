"use client";

import { useEffect, useState } from "react";

type InspectorBubble = {
  id: string;
  x: number;
  y: number;
  copied: boolean;
};

const BUBBLE_TIMEOUT_MS = 2400;

function findEditorId(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  const textElement = target.closest<HTMLElement>("[data-editor-text]");
  if (textElement?.dataset.editorText) {
    return textElement.dataset.editorText;
  }

  const blockElement = target.closest<HTMLElement>("[data-editor-block]");
  if (blockElement?.dataset.editorBlock) {
    return blockElement.dataset.editorBlock;
  }

  return null;
}

export function EditorInspector() {
  const [bubble, setBubble] = useState<InspectorBubble | null>(null);

  useEffect(() => {
    let timeoutId: number | undefined;

    async function showBubble(id: string, x: number, y: number, copied: boolean) {
      setBubble({ id, x, y, copied });

      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setBubble(null), BUBBLE_TIMEOUT_MS);
    }

    async function handleClick(event: MouseEvent) {
      if (!event.ctrlKey) {
        return;
      }

      const id = findEditorId(event.target);
      if (!id) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      let copied = false;
      if (event.shiftKey && navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(id);
          copied = true;
        } catch {
          copied = false;
        }
      }

      await showBubble(id, event.clientX, event.clientY, copied);
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  if (!bubble) {
    return null;
  }

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed z-[9999] max-w-[min(28rem,calc(100vw-2rem))] rounded-2xl bg-brand-navy px-4 py-3 text-sm font-semibold text-white shadow-[0_24px_70px_-30px_rgba(19,34,56,0.65)] ring-1 ring-white/20"
      style={{
        left: bubble.x + 14,
        top: bubble.y + 14,
      }}
    >
      <span className="block text-xs uppercase tracking-[0.14em] text-brand-sky">
        {bubble.copied ? "Azonosító kimásolva" : "Szerkesztői azonosító"}
      </span>
      <code className="mt-1 block break-all font-mono text-sm text-white">{bubble.id}</code>
    </div>
  );
}
