import Image from "next/image";

export function LogoMark({ size = 136, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <Image
      src={dark ? "/images/whitelogo.png" : "/images/logo.png"}
      alt=""
      width={size}
      height={size}
      priority
      className="shrink-0 object-contain"
    />
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return <LogoMark dark={dark} />;
}
