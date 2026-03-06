import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";

const typeScale = [
  { name: "Display / Hero", class: "text-5xl", weight: "ExtraBold 800", sample: "Plataforma de diseño NODO", font: "Plus Jakarta Sans" },
  { name: "Heading 1", class: "text-4xl", weight: "Bold 700", sample: "Guía de estilo UI", font: "Plus Jakarta Sans" },
  { name: "Heading 2", class: "text-3xl", weight: "Bold 700", sample: "Sistema de componentes", font: "Plus Jakarta Sans" },
  { name: "Heading 3", class: "text-2xl", weight: "Bold 700", sample: "Paleta de colores", font: "Plus Jakarta Sans" },
  { name: "Heading 4", class: "text-xl", weight: "SemiBold 600", sample: "Tipografía y escala", font: "Plus Jakarta Sans" },
  { name: "Body Large", class: "text-lg", weight: "Regular 400", sample: "Texto de párrafo principal con buena legibilidad.", font: "Inter" },
  { name: "Body Base", class: "text-base", weight: "Regular 400", sample: "El cuerpo de texto estándar para contenido de la interfaz.", font: "Inter" },
  { name: "Body Small", class: "text-sm", weight: "Regular 400", sample: "Descripción secundaria, metadatos, subtexto.", font: "Inter" },
  { name: "Label / Caption", class: "text-xs", weight: "Medium 500", sample: "ETIQUETA — BADGE — TAG", font: "Inter" },
];

export function TypographySection() {
  return (
    <div>
      <SectionHeader
        tag="03 — Tipografía"
        title="Sistema tipográfico"
        description="Dos familias cuidadosamente seleccionadas para máxima legibilidad y jerarquía visual. Plus Jakarta Sans para títulos, Inter para todo el resto."
      />

      <SectionBlock title="Familias tipográficas">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Títulos — Plus Jakarta Sans
            </p>
            <p
              className="text-3xl font-extrabold text-foreground leading-tight mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              ABCDEFGHIJKLM
            </p>
            <p
              className="text-3xl font-extrabold text-muted-foreground leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              abcdefghijklm
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {["700 Bold", "800 ExtraBold"].map((w) => (
                <span key={w} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Cuerpo — Inter
            </p>
            <p className="text-3xl font-normal text-foreground leading-tight mb-2 font-sans">
              ABCDEFGHIJKLM
            </p>
            <p className="text-3xl font-normal text-muted-foreground leading-tight font-sans">
              abcdefghijklm
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {["400 Regular", "500 Medium", "600 SemiBold"].map((w) => (
                <span key={w} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Escala tipográfica">
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[1fr_120px_120px_120px] gap-4 px-5 py-3 border-b border-border bg-muted">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Muestra</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Nivel</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Clase</p>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Peso</p>
          </div>
          {typeScale.map((item, i) => (
            <div
              key={item.name}
              className={`px-5 py-4 ${i < typeScale.length - 1 ? "border-b border-border" : ""} flex flex-col sm:grid sm:grid-cols-[1fr_120px_120px_120px] sm:gap-4 sm:items-center gap-1`}
            >
              <p
                className={`${item.class} text-foreground leading-tight truncate`}
                style={
                  item.font === "Plus Jakarta Sans"
                    ? { fontFamily: "var(--font-plus-jakarta-sans)", fontWeight: item.weight.includes("800") ? 800 : 700 }
                    : {}
                }
              >
                {item.sample}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm sm:text-foreground font-medium">{item.name}</p>
              <code className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded self-start sm:self-auto">
                {item.class}
              </code>
              <p className="text-xs text-muted-foreground">{item.weight}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Implementación en Next.js">
        <CodeSnippet
          code={`// layout.tsx
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
})

// Uso en componentes
<h1 style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>Título</h1>
<p className="font-sans">Cuerpo de texto</p>`}
        />
      </SectionBlock>
    </div>
  );
}
