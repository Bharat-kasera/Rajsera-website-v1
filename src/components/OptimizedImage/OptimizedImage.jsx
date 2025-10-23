"use client";
import Image from "next/image";
import { useState } from "react";

/**
 * OptimizedImage component with loading states and blur placeholder
 * @param {Object} props
 * @param {string} props.src - Image source
 * @param {string} props.alt - Alt text
 * @param {number} props.width - Image width (optional for fill layout)
 * @param {number} props.height - Image height (optional for fill layout)
 * @param {boolean} props.fill - Use fill layout (default: false)
 * @param {string} props.priority - Priority loading (default: false)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @param {string} props.objectFit - Object fit property (default: "cover")
 * @param {string} props.sizes - Responsive sizes
 */
const OptimizedImage = ({
  src,
  alt = "",
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  style = {},
  objectFit = "cover",
  sizes,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`optimized-image-wrapper ${className}`}
      style={{
        position: fill ? "relative" : "inline-block",
        overflow: "hidden",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        quality={90}
        sizes={
          sizes ||
          (fill
            ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            : undefined)
        }
        style={{
          objectFit: fill ? objectFit : undefined,
          transition: "opacity 0.3s ease-in-out",
          opacity: isLoading ? 0.5 : 1,
          ...(!fill && { width: "100%", height: "auto" }),
        }}
        onLoadingComplete={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage;

