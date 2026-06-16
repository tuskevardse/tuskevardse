"use client";

import Image from "next/image";
import { useState } from "react";

import { cx } from "@/lib/utils";

type BrandLockupProps = {
  compact?: boolean;
  className?: string;
  logoId?: string;
};

export function BrandLockup({ className, compact = false, logoId }: BrandLockupProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div className={cx("flex items-center gap-3", className)}>
        <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold uppercase tracking-[0.14em] text-white">
          TD
        </div>
        <div>
          <div className="font-heading text-base font-semibold text-brand-navy">Tüskevár DSE</div>
          {!compact ? <div className="text-sm text-muted">Diák Sportegyesület</div> : null}
        </div>
      </div>
    );
  }

  return (
    <div className={cx("flex items-center gap-3", className)}>
      <Image
        alt="Tüskevár Diák Sportegyesület logó"
        className={cx("h-auto w-auto", compact ? "max-h-12 max-w-[3rem]" : "max-h-28 max-w-[7rem]")}
        height={compact ? 64 : 112}
        id={logoId}
        priority
        src="/assets/brand/logo.png"
        width={compact ? 64 : 112}
        onError={() => setImageFailed(true)}
      />
      <div className={compact ? "hidden sm:block" : "block"}>
        <div className="font-heading text-lg font-semibold text-brand-navy sm:text-xl">Tüskevár DSE</div>
        {!compact ? <div className="text-sm text-muted sm:text-base">Tüskevár Diák Sportegyesület</div> : null}
      </div>
    </div>
  );
}
