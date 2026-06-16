import { cx } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  tone?: "default" | "sky" | "navy";
};

const toneClasses = {
  default: "bg-white/92 ring-1 ring-white/70",
  sky: "bg-brand-sky/80 ring-1 ring-brand-blue/10",
  navy: "bg-brand-navy text-white ring-1 ring-white/10",
};

export function Card({ className, tone = "default", ...props }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-[1.75rem] p-6 shadow-[0_30px_90px_-45px_rgba(19,34,56,0.35)] backdrop-blur-sm",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
