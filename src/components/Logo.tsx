export function LogoMark({ size = 136, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <img
      src={dark ? "/images/whitelogo.png" : "/images/logo.png"}
      alt=""
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return <LogoMark dark={dark} />;
}
