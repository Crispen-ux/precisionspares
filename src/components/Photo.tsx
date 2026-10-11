import Image from "next/image";

/**
 * Photo with a quiet fallback. If no image is supplied the block still looks
 * intentional: a blueprint-grid panel with a terminal strip motif.
 */
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  contain = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  contain?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${contain ? "bg-[#eef0f1]" : "bg-ink-2"} ${className}`}>
      {!contain && <div className="grid-bg-dark absolute inset-0" aria-hidden="true" />}
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={contain ? "object-contain" : "object-cover"}
        />
      )}
    </div>
  );
}
