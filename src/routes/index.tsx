import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { site, telefoneLink } from "@/config/site";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppButton, WhatsAppFloat } from "@/components/site/WhatsAppButton";
import { Logo } from "@/components/site/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seo.titulo },
      { name: "description", content: site.seo.descricao },
      { property: "og:title", content: site.seo.titulo },
      { property: "og:description", content: site.seo.descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { advogado, contato, areas, fotos, redes, escritorio } = site;
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 md:grid-cols-12 md:items-center md:pt-20">
          <div className="animate-fade-up md:col-span-6">
            <p className="eyebrow">{advogado.titulo} · {advogado.oab}</p>
            <h1 className="mt-5 text-5xl text-foreground md:text-7xl">{advogado.nome}</h1>
            <p className="mt-6 font-display text-2xl italic text-primary md:text-3xl">{advogado.chamada}</p>
            <p className="mt-6 max-w-md text-muted-foreground">{advogado.apresentacao}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton label="Agendar conversa" />
              <a href="#atuacao" className="inline-flex items-center rounded-full px-6 py-3 text-sm text-foreground underline-offset-4 hover:underline">Áreas de atuação</a>
            </div>
          </div>
          <div className="relative md:col-span-6 md:pl-10">
            <div className="absolute -right-6 top-8 h-[85%] w-[80%] rounded-t-full bg-primary/15" aria-hidden />
            <img
              src={fotos.advogado}
              alt={`Retrato de ${advogado.nome}`}
              width={896}
              height={1152}
              className="animate-fade-up relative mx-auto aspect-[4/5] w-full max-w-md rounded-t-full object-cover"
            />
            <div className="absolute -bottom-4 left-0 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm md:left-4">
              <p className="eyebrow">Atendimento</p>
              <p className="mt-1 text-sm text-foreground">Presencial e online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-card py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:items-center">
          <Reveal>
            <img src={fotos.escritorio} alt={`Escritório ${escritorio.nome}`} width={1280} height={896} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading eyebrow="Sobre" title="Um olhar atento para a sua história" />
            <div className="mt-8 space-y-4 text-muted-foreground">
              {advogado.biografia.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-8 space-y-2 border-l-2 border-secondary/50 pl-5 text-sm text-foreground">
              {advogado.formacao.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Áreas */}
      <section id="atuacao" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal><SectionHeading eyebrow="Áreas de atuação" title="Como posso ajudar" /></Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {areas.map((a, i) => (
              <Reveal key={a.titulo} delay={i * 100} className="group bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10">
                <span className="font-display text-xl italic text-secondary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-3xl text-foreground transition-colors group-hover:text-primary">{a.titulo}</h3>
                <p className="mt-3 text-muted-foreground">{a.descricao}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow !text-primary-foreground/70">Contato</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Vamos conversar sobre o seu caso?</h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">Entre em contato para agendar um atendimento. As informações compartilhadas são tratadas com sigilo profissional.</p>
            <a href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(contato.mensagemWhatsapp)}`} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5">
              Conversar pelo WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={150} className="space-y-6">
            <ContactItem icon={<Phone className="h-5 w-5" />} label="Telefone"><a href={telefoneLink()} className="hover:underline">{contato.telefone}</a></ContactItem>
            <ContactItem icon={<Mail className="h-5 w-5" />} label="E-mail"><a href={`mailto:${contato.email}`} className="break-all hover:underline">{contato.email}</a></ContactItem>
            <ContactItem icon={<MapPin className="h-5 w-5" />} label="Endereço">
              <a href={contato.endereco.mapa} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {contato.endereco.linha1}<br />{contato.endereco.linha2}<br />CEP {contato.endereco.cep}
              </a>
            </ContactItem>
            <ContactItem icon={<Clock className="h-5 w-5" />} label="Horários">
              {contato.horarios.map((h) => <span key={h.dias} className="block">{h.dias}: {h.horas}</span>)}
            </ContactItem>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex gap-5">
            {redes.map((r) => <a key={r.nome} href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{r.nome}</a>)}
          </div>
          <p>{advogado.nome} · {advogado.oab} · © {new Date().getFullYear()}</p>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}

function ContactItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-primary-foreground/15 pb-6">
      <span className="mt-1 text-primary-foreground/70">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">{label}</p>
        <div className="mt-1 text-lg">{children}</div>
      </div>
    </div>
  );
}
