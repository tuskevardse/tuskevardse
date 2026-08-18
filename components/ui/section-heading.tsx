import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  className?: string;
  editorId?: string;
};

export function SectionHeading({
  align = "left",
  tone = "default",
  className,
  editorId,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const centered = align === "center";
  const inverse = tone === "inverse";

  return (
    <div
      className={cx("max-w-3xl", centered && "mx-auto text-center", className)}
      data-editor-block={editorId ? `${editorId}.heading` : undefined}
    >
      {eyebrow ? (
        <p
          className={cx("mb-4 text-sm font-semibold uppercase tracking-[0.2em]", inverse ? "text-brand-sky" : "text-brand-blue")}
          data-editor-text={editorId ? `${editorId}.eyebrow` : undefined}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cx("text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl", inverse ? "text-white" : "text-ink")}
        data-editor-text={editorId ? `${editorId}.title` : undefined}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cx("mt-5 text-lg leading-8", inverse ? "text-white/78" : "text-muted")}
          data-editor-text={editorId ? `${editorId}.description` : undefined}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
