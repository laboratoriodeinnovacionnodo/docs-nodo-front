import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";
import { Layers, Zap, Shield, Globe, Users, Calendar } from "lucide-react";

export function IntroSection() {
  return (
    <div>
      <SectionHeader
        tag="01 — Introducción"
        title="Guía de manejo de sitios web del NODO"
        description="Esta guía centraliza los lineamientos de diseño, interacción y contenido para todos los sitios web del sistema NODO. Está dirigida a los equipos de comunicación, diseño y desarrollo que administran la plataforma, con el objetivo de garantizar una experiencia coherente, profesional y accesible en cada punto de contacto digital."
      />

      {/* Propósito */}
      <SectionBlock title="¿Para qué sirve esta guía?">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          El sistema NODO gestiona espacios de coworking, laboratorios, aulas y áreas de eventos. Sus sitios web son la puerta de entrada principal para usuarios, organizadores y comunidad. Esta guía asegura que todos los módulos —desde el calendario de eventos hasta los formularios de reserva— hablen el mismo idioma visual y funcional.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Globe,
              title: "Presencia digital unificada",
              desc: "Todos los sitios y módulos del NODO comparten la misma identidad visual.",
            },
            {
              icon: Users,
              title: "Orientada a equipos",
              desc: "Facilita la incorporación de nuevos administradores y colaboradores.",
            },
            {
              icon: Calendar,
              title: "Gestión de contenido",
              desc: "Lineamientos claros para publicar, actualizar y organizar eventos y recursos.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3
                className="text-sm font-bold text-foreground mb-1"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                {title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Principios de diseño */}
      {/* <SectionBlock title="Principios de diseño">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Minimalista", desc: "Solo lo esencial, sin ruido visual." },
            { label: "Moderna tipo SaaS", desc: "Interfaces limpias propias de productos digitales profesionales." },
            { label: "Profesional y limpia", desc: "Claridad en cada componente y decisión tipográfica." },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="flex flex-col gap-1.5 bg-secondary border border-border rounded-xl px-4 py-3.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-semibold text-secondary-foreground">{label}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-4">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock> */}

      {/* Alcance */}
      <SectionBlock title="Alcance de esta guía">
        <div className="space-y-2">
          {[
            // "Paleta de colores y tokens de diseño",
            // "Sistema tipográfico (Plus Jakarta Sans + Inter)",
            // "Componentes de UI: botones, formularios, tarjetas",
            "Módulo de Eventos: calendario, modal de detalle y tipos de evento",
            // "Espaciado, iconografía y patrones de layout responsivo",
            // "Secciones personalizadas agregables por el equipo",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
