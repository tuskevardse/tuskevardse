import { cx } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-navy text-white shadow-[0_20px_45px_-24px_rgba(18,60,115,0.7)] hover:bg-[#0f315f]",
  secondary:
    "bg-white/90 text-brand-navy ring-1 ring-brand-navy/12 hover:bg-white",
  ghost: "bg-brand-sky/65 text-brand-navy hover:bg-brand-sky",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-6 py-3.5 text-sm sm:text-base",
};

export function buttonLinkClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cx(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-[0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function ButtonLink({ className, size = "md", variant = "primary", ...props }: ButtonLinkProps) {
  return <a className={buttonLinkClassName({ variant, size, className })} {...props} />;
}
