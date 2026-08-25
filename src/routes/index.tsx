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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/paradiso-hero.jpg";

const TITLE = "Residencial Paradiso Itaquera | Comunidade Oficial no WhatsApp";
const DESCRIPTION =
  "Entre na comunidade do Residencial Paradiso Itaquera e receba plantas, condições especiais, andamento da obra e promoções em primeira mão.";

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

const WHATSAPP_URL = "https://chat.whatsapp.com/";

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
        Entrada gratuita — sem corretor insistente, você decide quando falar
      </p>
    </div>
  );
}

const benefits = [
  {
    icon: Building2,
    title: "Tudo sobre o empreendimento",
    text: "Plantas, metragens, torres, áreas de lazer e memorial descritivo direto da fonte.",
  },
  {
    icon: Tag,
    title: "Condições e promoções",
    text: "Descontos por tempo limitado, unidades em oferta e campanhas antes de virarem públicas.",
  },
  {
    icon: Camera,
    title: "Obra em tempo real",
    text: "Fotos e vídeos do canteiro todo mês para você acompanhar a evolução do Paradiso.",
  },
  {
    icon: MapPin,
    title: "Feito para Itaquera",
    text: "Mobilidade, comércio, metrô e valorização da região analisados sem enrolação.",
  },
  {
    icon: BellRing,
    title: "Aviso de unidades liberadas",
    text: "Novas fases e apartamentos liberados avisados na hora, antes do lançamento oficial.",
  },
  {
    icon: Users,
    title: "Dúvidas respondidas",
    text: "Financiamento, subsídio, entrada parcelada e documentação explicados de forma simples.",
  },
];

const faq = [
  {
    q: "Preciso pagar algo para entrar na comunidade?",
    a: "Não. A comunidade é totalmente gratuita e serve para manter você informado sobre o Residencial Paradiso Itaquera.",
  },
  {
    q: "Vou receber mensagens o dia inteiro?",
    a: "Não. Só a equipe publica, com poucos avisos por semana: novidades da obra, condições especiais e unidades liberadas.",
  },
  {
    q: "Meu número fica visível para outras pessoas?",
    a: "Não. Na comunidade do WhatsApp apenas os administradores enviam mensagens e seu contato não é exposto aos demais participantes.",
  },
  {
    q: "Consigo tirar dúvidas sobre financiamento?",
    a: "Sim. Você pode falar em particular com a equipe para simular parcelas, entrada e possibilidade de subsídio.",
  },
  {
    q: "Posso sair quando quiser?",
    a: "Claro. Basta sair do grupo pelo próprio WhatsApp, sem precisar avisar ninguém.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Torres do Residencial Paradiso Itaquera iluminadas ao entardecer"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="bg-glow absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:py-32">
          <span className="rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Comunidade oficial
          </span>
          <h1 className="mt-7 text-4xl leading-[1.05] font-black tracking-tight uppercase sm:text-6xl">
            Residencial{" "}
            <span className="text-flame">Paradiso Itaquera</span> na palma da
            sua mão
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/85">
            Acompanhe o projeto de perto: obra, plantas, condições de pagamento e
            promoções relâmpago direto no seu WhatsApp.
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Um canal só para quem quer morar ou investir em Itaquera — sem
            grupos lotados, sem spam, só informação que importa.
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
          Quem está na comunidade vê as condições especiais antes de qualquer
          anúncio. Não fique sabendo depois que a unidade já foi vendida.
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
            Seu próximo endereço pode estar a{" "}
            <span className="text-flame">um clique</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Entre agora e receba as próximas novidades do Residencial Paradiso
            Itaquera em primeira mão.
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton label="Entrar no WhatsApp agora" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Residencial Paradiso Itaquera — Comunidade de moradores e
          investidores
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          Este canal não possui vínculo direto com a marca WhatsApp Inc. Imagens
          meramente ilustrativas.
        </p>
      </footer>
    </main>
  );
}
