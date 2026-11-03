/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * Para personalizar para outro advogado, altere apenas este arquivo
 * e substitua as imagens em src/assets/ (advogado.jpg, escritorio.jpg).
 */
import fotoAdvogado from "@/assets/advogado.jpg";
import fotoEscritorio from "@/assets/escritorio.jpg";

export const site = {
  escritorio: {
    nome: "Marina Valente Advocacia",
    // Logotipo: deixe `imagem` vazio para usar o monograma com as iniciais.
    logo: { imagem: "" as string, iniciais: "MV" },
  },

  advogado: {
    nome: "Dra. Marina Valente",
    titulo: "Advogada",
    oab: "OAB/SP 123.456",
    chamada: "Advocacia com escuta, clareza e cuidado em cada etapa.",
    apresentacao:
      "Atendimento próximo e orientação jurídica transparente para pessoas e famílias que precisam de segurança para tomar decisões importantes.",
    biografia: [
      "Sou advogada formada pela Universidade de São Paulo, com atuação dedicada ao Direito de Família, Sucessões e Direito Civil.",
      "Acredito que cada caso envolve uma história. Por isso, meu trabalho começa pela escuta atenta e segue com explicações claras, para que você compreenda suas opções e participe de cada decisão.",
      "Atendo presencialmente no escritório e também de forma online, com o mesmo cuidado e sigilo.",
    ],
    formacao: [
      "Bacharel em Direito — Universidade de São Paulo",
      "Pós-graduação em Direito de Família e Sucessões",
    ],
  },

  contato: {
    telefone: "(11) 3000-0000",
    whatsapp: "5511900000000", // apenas números, com DDI e DDD
    mensagemWhatsapp: "Olá! Gostaria de agendar um atendimento.",
    email: "contato@marinavalente.adv.br",
    endereco: {
      linha1: "Rua Exemplo, 123 — Sala 45",
      linha2: "Jardim Paulista, São Paulo — SP",
      cep: "01400-000",
      mapa: "https://maps.google.com/?q=Rua+Exemplo+123+São+Paulo",
    },
    horarios: [
      { dias: "Segunda a sexta", horas: "9h às 18h" },
      { dias: "Sábado", horas: "Mediante agendamento" },
    ],
  },

  areas: [
    { titulo: "Direito de Família", descricao: "Divórcio, guarda, pensão alimentícia, união estável e regulamentação de convivência." },
    { titulo: "Sucessões", descricao: "Inventário judicial e extrajudicial, testamentos e planejamento sucessório." },
    { titulo: "Direito Civil", descricao: "Contratos, responsabilidade civil, cobranças e questões patrimoniais." },
    { titulo: "Direito do Consumidor", descricao: "Orientação e defesa em relações de consumo, cobranças indevidas e falhas na prestação de serviços." },
  ],

  fotos: {
    advogado: fotoAdvogado,
    escritorio: fotoEscritorio,
  },

  redes: [
    { nome: "Instagram", url: "https://instagram.com/" },
    { nome: "LinkedIn", url: "https://linkedin.com/" },
  ],

  seo: {
    titulo: "Dra. Marina Valente — Advocacia de Família e Sucessões em São Paulo",
    descricao:
      "Advocacia humanizada em Direito de Família, Sucessões e Direito Civil. Atendimento presencial em São Paulo e online.",
    idioma: "pt-BR",
  },

  /** Identidade visual — cores em hexadecimal e fontes do Google Fonts */
  tema: {
    cores: {
      fundo: "#F4F0E8",
      superficie: "#FFFFFF",
      primaria: "#59634A",
      primariaTexto: "#FFFFFF",
      secundaria: "#8A6E58", // marrom suave
      texto: "#2F2A24",
      textoSuave: "#6E665C",
      borda: "#E2DACB",
    },
    fontes: {
      titulos: "Cormorant Garamond",
      textos: "Manrope",
      googleFontsUrl:
        "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Manrope:wght@400;500;600&display=swap",
    },
  },
};

export const whatsappLink = () =>
  `https://wa.me/${site.contato.whatsapp}?text=${encodeURIComponent(site.contato.mensagemWhatsapp)}`;

export const telefoneLink = () => `tel:+55${site.contato.telefone.replace(/\D/g, "")}`;

export const themeCss = () => {
  const c = site.tema.cores;
  const f = site.tema.fontes;
  return `:root{--background:${c.fundo};--foreground:${c.texto};--card:${c.superficie};--card-foreground:${c.texto};--popover:${c.superficie};--popover-foreground:${c.texto};--primary:${c.primaria};--primary-foreground:${c.primariaTexto};--secondary:${c.secundaria};--secondary-foreground:${c.primariaTexto};--muted:color-mix(in oklab,${c.borda} 45%,${c.fundo});--muted-foreground:${c.textoSuave};--accent:${c.secundaria};--accent-foreground:${c.primariaTexto};--border:${c.borda};--input:${c.borda};--ring:${c.primaria};--font-display-family:"${f.titulos}",Georgia,serif;--font-body-family:"${f.textos}",system-ui,sans-serif;}`;
};
