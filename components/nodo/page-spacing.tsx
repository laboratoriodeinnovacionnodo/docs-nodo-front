import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";

const spacingScale = [
  { token: "spacing-1", value: "4px", class: "p-1", rem: "0.25rem" },
  { token: "spacing-2", value: "8px", class: "p-2", rem: "0.5rem" },
  { token: "spacing-3", value: "12px", class: "p-3", rem: "0.75rem" },
  { token: "spacing-4", value: "16px", class: "p-4", rem: "1rem" },
  { token: "spacing-5", value: "20px", class: "p-5", rem: "1.25rem" },
  { token: "spacing-6", value: "24px", class: "p-6", rem: "1.5rem" },
  { token: "spacing-8", value: "32px", class: "p-8", rem: "2rem" },
  { token: "spacing-10", value: "40px", class: "p-10", rem: "2.5rem" },
  { token: "spacing-12", value: "48px", class: "p-12", rem: "3rem" },
  { token: "spacing-16", value: "64px", class: "p-16", rem: "4rem" },
];

const radiusScale = [
  { name: "sm", class: "rounded-sm", value: "0.375rem", usage: "Badges pequeños" },
  { name: "md", class: "rounded-md", value: "0.5rem", usage: "Botones XS" },
  { name: "lg", class: "rounded-lg", value: "0.625rem", usage: "Inputs" },
  { name: "xl", class: "rounded-xl", value: "0.75rem", usage: "Botones y cards" },
  { name: "2xl", class: "rounded-2xl", value: "1rem", usage: "Cards grandes" },
  { name: "full", class: "rounded-full", value: "9999px", usage: "Pills y avatares" },
];

export function SpacingSection() {
  return (
    <div>
      <SectionHeader
        tag="07 — Espaciado"
        title="Sistema de espaciado"
        description="Escala de espaciado basada en múltiplos de 4px. Consistencia total entre márgenes, padding, gaps y tamaños de elementos."
      />

      <SectionBlock title="Escala de espaciado">
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[100px_80px_100px_1fr] gap-4 px-5 py-3 border-b border-border bg-muted">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Clase</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">px</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">rem</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Visual</p>
          </div>
          {spacingScale.map((s, i) => (
            <div
              key={s.token}
              className={`flex flex-col sm:grid sm:grid-cols-[100px_80px_100px_1fr] sm:gap-4 sm:items-center gap-2 px-5 py-3 ${i < spacingScale.length - 1 ? "border-b border-border" : ""}`}
            >
              <code className="text-xs font-mono text-secondary-foreground bg-secondary px-2 py-0.5 rounded self-start sm:self-auto w-fit">
                {s.class}
              </code>
              <span className="text-sm text-foreground font-medium">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.rem}</span>
              <div className="flex items-center">
                <div
                  className="bg-primary/20 border border-primary/30 rounded"
                  style={{ width: s.value, height: "20px", minWidth: "4px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Radio de borde">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {radiusScale.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-2xl p-4 text-center">
              <div
                className={`w-12 h-12 bg-primary/15 border-2 border-primary/30 mx-auto mb-3 ${r.class}`}
              />
              <code className="text-xs font-mono text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded block mb-1">
                {r.class}
              </code>
              <p className="text-xs text-muted-foreground">{r.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{r.usage}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Uso recomendado">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Padding interno de cards", value: "p-5 (20px) · p-6 (24px)" },
            { title: "Gap entre elementos", value: "gap-3 (12px) · gap-4 (16px)" },
            { title: "Margin entre secciones", value: "mb-8 (32px) · mb-10 (40px)" },
            { title: "Padding de página", value: "px-4 · md:px-6 · lg:px-8" },
            { title: "Radio de botones", value: "rounded-xl (12px)" },
            { title: "Radio de cards grandes", value: "rounded-2xl (16px)" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 bg-card border border-border rounded-xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <code className="text-xs font-mono text-muted-foreground">{item.value}</code>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Ejemplo de layout con espaciado">
        <CodeSnippet
          code={`/* Contenedor de página */
<main className="px-4 py-6 md:px-6 md:py-8 lg:px-8">

  /* Grid de tarjetas */
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-card border border-border rounded-2xl p-5">
      ...
    </div>
  </div>

  /* Espaciado entre secciones */
  <section className="mb-10">
    <h2 className="text-xl font-bold mb-4">Sección</h2>
    ...
  </section>
</main>`}
        />
      </SectionBlock>
    </div>
  );
}
