import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site, telefoneLink } from "@/config/site";
import { Logo } from "./Logo";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#inicio" aria-label="Início"><Logo /></a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{n.label}</a>
          ))}
          <a href={telefoneLink()} className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            <Phone className="h-4 w-4" /> {site.contato.telefone}
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-5 py-4 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-foreground">{n.label}</a>
          ))}
          <a href={telefoneLink()} className="py-2 text-primary">{site.contato.telefone}</a>
        </nav>
      )}
    </header>
  );
}
