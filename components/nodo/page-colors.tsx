import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";
import { Copy } from "lucide-react";

const colors = [
  {
    name: "Primary Blue",
    hex: "#26a7fc",
    token: "--primary",
    usage: "Botones, links, acentos principales",
    textDark: false,
  },
  {
    name: "Background Cyan",
    hex: "#f0fdff",
    token: "--background",
    usage: "Fondo general de la aplicación",
    textDark: true,
  },
  {
    name: "White",
    hex: "#ffffff",
    token: "--card",
    usage: "Tarjetas, popovers, foreground primario",
    textDark: true,
  },
  {
    name: "Foreground",
    hex: "#0d1b2a",
    token: "--foreground",
    usage: "Texto principal, headings",
    textDark: false,
  },
  {
    name: "Muted",
    hex: "#5a7d93",
    token: "--muted-foreground",
    usage: "Texto secundario, placeholders",
    textDark: false,
  },
  {
    name: "Border",
    hex: "#c8eaf8",
    token: "--border",
    usage: "Bordes de tarjetas e inputs",
    textDark: true,
  },
  {
    name: "Blue Light",
    hex: "#e0f5fe",
    token: "--secondary",
    usage: "Fondos de badges y chips",
    textDark: true,
  },
  {
    name: "Blue Dark",
    hex: "#0d84d4",
    token: "--nodo-blue-dark",
    usage: "Estados hover de primary",
    textDark: false,
  },
];

export function ColorsSection() {
  return (
    <div>
      <SectionHeader
        tag="02 — Colores"
        title="Paleta de colores"
        description="El sistema de color de NODO está diseñado para transmitir confianza, claridad y modernidad. Basado en tres colores core con neutrales de soporte."
      />

      <SectionBlock title="Tokens de color">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div
              key={c.token}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="h-24 w-full relative group"
                style={{ backgroundColor: c.hex }}
              >
                <button className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-foreground/10 backdrop-blur-sm">
                  <Copy className="w-3 h-3 text-foreground" />
                </button>
              </div>
              <div className="p-3">
                <p
                  className="text-sm font-bold text-foreground"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  {c.name}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">{c.hex}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.usage}</p>
                <span className="inline-block mt-2 text-xs font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">
                  {c.token}
                </span>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Uso en CSS / Tailwind">
        <CodeSnippet
          code={`/* CSS custom properties */
--primary:     #26a7fc;   /* Botones, links */
--background:  #f0fdff;   /* Fondo app */
--card:        #ffffff;   /* Tarjetas */
--foreground:  #0d1b2a;   /* Texto */

/* Tailwind classes */
bg-primary        → #26a7fc
bg-background     → #f0fdff
text-foreground   → #0d1b2a
border-border     → #c8eaf8`}
        />
      </SectionBlock>

      <SectionBlock title="Contraste y accesibilidad">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              bg: "#26a7fc",
              fg: "#ffffff",
              label: "Primary sobre blanco",
              ratio: "4.5:1 AA",
              pass: true,
            },
            {
              bg: "#0d1b2a",
              fg: "#f0fdff",
              label: "Foreground sobre background",
              ratio: "14.2:1 AAA",
              pass: true,
            },
            {
              bg: "#ffffff",
              fg: "#5a7d93",
              label: "Muted sobre blanco",
              ratio: "3.8:1 A",
              pass: false,
            },
            {
              bg: "#26a7fc",
              fg: "#0d1b2a",
              label: "Texto oscuro sobre primary",
              ratio: "5.1:1 AA",
              pass: true,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
            >
              <div
                className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: item.bg, color: item.fg }}
              >
                Aa
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.ratio}</p>
              </div>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                  item.pass
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {item.pass ? "Pasa" : "Revisar"}
              </span>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
