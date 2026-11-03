import { site } from "@/config/site";

export function Logo() {
  const { logo, nome } = site.escritorio;
  if (logo.imagem) return <img src={logo.imagem} alt={nome} className="h-10 w-auto" />;
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 font-display text-lg italic text-primary">
        {logo.iniciais}
      </span>
      <span className="font-display text-lg leading-tight text-foreground">{nome}</span>
    </span>
  );
}
