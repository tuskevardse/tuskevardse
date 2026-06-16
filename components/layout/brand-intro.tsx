"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Rect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

function getCenteredRect(target: HTMLImageElement) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const ratio = target.naturalWidth > 0 && target.naturalHeight > 0 ? target.naturalWidth / target.naturalHeight : 1;

  let width = viewportWidth * 0.9;
  let height = width / ratio;

  if (height > viewportHeight * 0.9) {
    height = viewportHeight * 0.9;
    width = height * ratio;
  }

  return {
    top: (viewportHeight - height) / 2,
    left: (viewportWidth - width) / 2,
    width,
    height,
  } satisfies Rect;
}

export function BrandIntro() {
  const [currentRect, setCurrentRect] = useState<Rect | null>(null);
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let startAnimation = 0;
    let hideOverlay = 0;
    let finished = 0;

    const findTarget = (attempt = 0) => {
      const target = document.getElementById("header-brand-logo");
      if (!(target instanceof HTMLImageElement)) {
        if (attempt < 24) {
          frame = window.requestAnimationFrame(() => findTarget(attempt + 1));
        }
        return;
      }

      const nextTargetRect = target.getBoundingClientRect();
      if (nextTargetRect.width === 0 || nextTargetRect.height === 0) {
        if (attempt < 24) {
          frame = window.requestAnimationFrame(() => findTarget(attempt + 1));
        }
        return;
      }

      const startRect = getCenteredRect(target);
      const endRect = {
        top: nextTargetRect.top,
        left: nextTargetRect.left,
        width: nextTargetRect.width,
        height: nextTargetRect.height,
      } satisfies Rect;

      setCurrentRect(startRect);
      setTargetRect(endRect);
      setIsVisible(true);

      startAnimation = window.setTimeout(() => {
        frame = window.requestAnimationFrame(() => {
          setIsAnimating(true);
          setCurrentRect(endRect);
        });
      }, 2000);

      hideOverlay = window.setTimeout(() => {
        setIsVisible(false);
      }, 3080);

      finished = window.setTimeout(() => {
        setTargetRect(null);
        setCurrentRect(null);
      }, 3300);
    };

    findTarget();

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(startAnimation);
      window.clearTimeout(hideOverlay);
      window.clearTimeout(finished);
    };
  }, []);

  if (!currentRect || !targetRect) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 240ms ease",
      }}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(246,251,255,0.98)_45%,rgba(234,243,255,0.94)_100%)]"
        style={{
          opacity: isAnimating ? 0 : 1,
          transition: "opacity 1000ms ease",
        }}
      />

      <div
        className="absolute"
        style={{
          top: currentRect.top,
          left: currentRect.left,
          width: currentRect.width,
          height: currentRect.height,
          transition: "top 1000ms cubic-bezier(0.22, 1, 0.36, 1), left 1000ms cubic-bezier(0.22, 1, 0.36, 1), width 1000ms cubic-bezier(0.22, 1, 0.36, 1), height 1000ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1000ms ease",
          opacity: isAnimating ? 0.16 : 1,
          willChange: "top, left, width, height, opacity",
        }}
      >
        <Image
          alt=""
          className="h-full w-full object-contain"
          height={512}
          priority
          src="/assets/brand/logo.png"
          width={512}
        />
      </div>
    </div>
  );
}
