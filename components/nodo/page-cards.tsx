import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";
import { ArrowRight, Star, TrendingUp, Users, MoreVertical } from "lucide-react";

export function CardsSection() {
  return (
    <div>
      <SectionHeader
        tag="06 — Tarjetas"
        title="Tarjetas y contenedores"
        description="Las tarjetas son la unidad base de agrupación de contenido en NODO. Usan fondo blanco, borde sutil y radio generoso para un look moderno y limpio."
      />

      <SectionBlock title="Variantes de tarjeta">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Basic */}
          <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Básica</p>
            <h3
              className="text-base font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Tarjeta estándar
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Contenedor base para agrupar información relacionada con borde sutil.
            </p>
          </div>

          {/* With accent */}
          <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-shadow border-t-2 border-t-primary">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Destacada</p>
            <h3
              className="text-base font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Con acento superior
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Borde superior en color primario para tarjetas de alto énfasis.
            </p>
          </div>

          {/* Interactive */}
          <div className="bg-card border border-border rounded-2xl p-5 hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Interactiva</p>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3
              className="text-base font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Clickeable
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hover con sombra y borde primario. Incluye flecha indicadora.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Tarjetas de métricas">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Usuarios activos", value: "12,430", change: "+8.2%", up: true, icon: Users },
            { label: "Sesiones", value: "48,192", change: "+12.5%", up: true, icon: TrendingUp },
            { label: "Calificación", value: "4.9 / 5", change: "+0.3", up: true, icon: Star },
            { label: "Retención", value: "89.4%", change: "-1.2%", up: false, icon: TrendingUp },
          ].map(({ label, value, change, up, icon: Icon }) => (
            <div key={label} className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-muted-foreground">{label}</p>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
              </div>
              <p
                className="text-2xl font-extrabold text-foreground"
                style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
              >
                {value}
              </p>
              <p className={`text-xs font-medium mt-1 ${up ? "text-green-600" : "text-destructive"}`}>
                {change} vs mes anterior
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Tarjeta de perfil">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-20 bg-primary/10" />
            <div className="px-5 pb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center -mt-7 mb-3 shadow-md">
                <span className="text-xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>MG</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className="text-base font-bold text-foreground"
                    style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                  >
                    María García
                  </h3>
                  <p className="text-sm text-muted-foreground">Lead Designer · NODO</p>
                </div>
                <button className="p-1.5 rounded-lg hover:bg-accent transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex gap-2 mt-3">
                <span className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">UI Design</span>
                <span className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Código de ejemplo">
        <CodeSnippet
          code={`/* Tarjeta base */
<div className="bg-card border border-border rounded-2xl p-5 
  hover:shadow-md transition-shadow">
  <h3 className="text-base font-bold text-foreground mb-2">Título</h3>
  <p className="text-sm text-muted-foreground">Contenido de la tarjeta.</p>
</div>

/* Tarjeta destacada con acento */
<div className="bg-card border border-border rounded-2xl p-5 
  border-t-2 border-t-primary">
  ...
</div>`}
        />
      </SectionBlock>
    </div>
  );
}
