import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Building2,
  BellRing,
  Tag,
  MapPin,
  Camera,
  Users,
  Lock,
  Flame,
  HelpCircle,
  Briefcase,
  TrendingUp,
  Handshake,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/paradiso-fachada.png.asset.json";

const TITLE =
  "Comunidade Paradiso Itaquera para Corretores e Imobiliárias | Aprova Casa";
const DESCRIPTION =
  "Entre na comunidade exclusiva do Residencial Paradiso Itaquera, organizada pela Aprova Casa. Receba material de vendas, condições comissionadas, plantas e liberação de unidades em primeira mão.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/FPdq5qG64vx9lF6PY1QHdy";

function CtaButton({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="glow-flame bg-flame inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl px-8 py-5 text-base font-extrabold tracking-wide text-primary-foreground uppercase transition-transform hover:scale-[1.02] active:scale-100 sm:text-lg"
      >
        <MessageCircle className="size-6" />
        {label}
      </a>
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" />
        Acesso restrito a corretores e imobiliárias parceiras
      </p>
    </div>
  );
}

const benefits = [
  {
    icon: Building2,
    title: "Material oficial do empreendimento",
    text: "Plantas, memorial descritivo, tabela de preços e fotos da obra liberadas para você vender com segurança.",
  },
  {
    icon: Tag,
    title: "Condições e comissões exclusivas",
    text: "Campanhas, descontos e condições especiais para corretores e imobiliárias parceiras da Aprova Casa.",
  },
  {
    icon: Camera,
    title: "Obra em tempo real",
    text: "Fotos, vídeos e atualizações mensais do canteiro para você mostrar evolução ao cliente.",
  },
  {
    icon: MapPin,
    title: "Venda Itaquera com argumento",
    text: "Dados de mobilidade, comércio, metrô e valorização da região para fortalecer sua apresentação.",
  },
  {
    icon: BellRing,
    title: "Liberação antecipada de unidades",
    text: "Seja avisado assim que novas fases e apartamentos forem liberados, antes do anúncio público.",
  },
  {
    icon: Handshake,
    title: "Suporte da equipe Aprova Casa",
    text: "Tire dúvidas sobre financiamento, subsídio, documentação e acompanhe seus clientes com respaldo.",
  },
];

const faq = [
  {
    q: "Quem pode entrar na comunidade?",
    a: "A comunidade é exclusiva para corretores autônomos e imobiliárias parceiras da Aprova Casa que atuam na venda do Residencial Paradiso Itaquera.",
  },
  {
    q: "Preciso pagar alguma taxa de adesão?",
    a: "Não. O acesso à comunidade e ao material de vendas é gratuito para parceiros cadastrados.",
  },
  {
    q: "Vou receber spam ou mensagens o dia todo?",
    a: "Não. A comunicação é feita apenas pela equipe da Aprova Casa, com poucos avisos por semana e sempre relevantes para a venda.",
  },
  {
    q: "Meus clientes ficam expostos no grupo?",
    a: "Não. A comunidade reúne apenas corretores e imobiliárias. Seus clientes são condugidos em atendimento particular.",
  },
  {
    q: "Como acesso as tabelas e o material de divulgação?",
    a: "Assim que entrar, você recebe orientações para acessar os materiais mais recentes e acompanhar novas liberações.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg.url}
          alt="Fachada do Residencial Paradiso Itaquera"
          width={900}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="bg-glow absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:py-32">
          <span className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Comunidade de corretores e imobiliárias
          </span>
          <h1 className="mt-7 text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl">
            Venda mais com o{" "}
            <span className="text-flame">Paradiso Itaquera</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85">
            Entre na comunidade exclusiva organizada pela Aprova Casa e receba
            material de vendas, condições comissionadas e liberação de
            unidades em primeira mão.
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Um canal direto para quem quer fechar mais negócios em Itaquera —
            sem ruído, só o que move a venda.
          </p>
          <div className="mt-10 w-full">
            <CtaButton label="Entrar na comunidade" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
            O que você recebe
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight uppercase sm:text-4xl">
            Por dentro do <span className="text-flame">Paradiso</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="rounded-2xl border border-border bg-card/70 p-6 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <b.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Scarcity */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 className="text-2xl font-black tracking-tight uppercase sm:text-3xl">
          As melhores unidades saem primeiro
        </h2>
        <p className="mt-4 text-muted-foreground">
          Quem está na comunidade vê as condições especiais e unidades liberadas
          antes do anúncio público. Não perca vendas por chegar tarde.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-card/70 p-6 text-left">
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="flex items-center gap-2">
              <Flame className="size-4 text-primary" /> Unidades reservadas na
              fase atual
            </span>
            <span className="text-primary">72%</span>
          </div>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="bg-flame h-full w-[72%] rounded-full" />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Atualizado semanalmente pela equipe de vendas do empreendimento.
          </p>
        </div>
        <div className="mt-10">
          <CtaButton label="Quero acompanhar o projeto" />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex size-12 items-center justify-center rounded-full border border-primary/60 text-primary">
            <HelpCircle className="size-6" />
          </span>
          <p className="mt-4 text-xs font-bold tracking-[0.25em] text-primary uppercase">
            Dúvidas frequentes
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight uppercase">
            Antes de entrar
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card/70 px-5"
            >
              <AccordionTrigger className="text-left text-base font-bold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-5 pb-20">
        <div className="bg-glow rounded-3xl border border-border bg-card/60 px-6 py-14 text-center">
          <h2 className="text-3xl font-black tracking-tight uppercase sm:text-4xl">
            Seu próximo fechamento pode estar a{" "}
            <span className="text-flame">um clique</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Entre agora na comunidade do Residencial Paradiso Itaquera e
            comece a vender com mais informação e respaldo.
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton label="Entrar no WhatsApp agora" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Residencial Paradiso Itaquera — Comunidade organizada pela
          Aprova Casa
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Este canal não possui vínculo direto com a marca WhatsApp Inc. Imagens
          meramente ilustrativas.
        </p>
      </footer>
    </main>
  );
}
