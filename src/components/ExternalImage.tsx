"use client";

import React from "react";

interface ExternalImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * A wrapper for external images that bypasses Next.js Image optimization.
 * Use this for images hosted on external domains that may not be accessible
 * to the Next.js server (e.g., behind captcha or auth).
 */
export default function ExternalImage({
  src,
  alt,
  className = "",
  width,
  height,
}: ExternalImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}
