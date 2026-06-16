import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
};

export function SectionHeading({
  align = "left",
  tone = "default",
  className,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const centered = align === "center";
  const inverse = tone === "inverse";

  return (
    <div className={cx("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cx("mb-4 text-sm font-semibold uppercase tracking-[0.2em]", inverse ? "text-brand-sky" : "text-brand-blue")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cx("text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl", inverse ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {description ? (
        <p className={cx("mt-5 text-lg leading-8", inverse ? "text-white/78" : "text-muted")}>{description}</p>
      ) : null}
    </div>
  );
}
