import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";
import { Download, ArrowRight, Plus, Loader2, Trash2 } from "lucide-react";

export function ButtonsSection() {
  return (
    <div>
      <SectionHeader
        tag="04 — Botones"
        title="Sistema de botones"
        description="Los botones son el principal elemento de acción. Cada variante comunica un nivel de importancia diferente. Consistencia en tamaños, pesos y radios."
      />

      <SectionBlock title="Variantes principales">
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          {/* Primary */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="sm:w-48 shrink-0">
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Primary</p>
              <p className="text-xs text-muted-foreground">Acción principal</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Acción principal
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold opacity-50 cursor-not-allowed">
                Deshabilitado
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Loader2 className="w-4 h-4 animate-spin" />
                Cargando...
              </button>
            </div>
          </div>
          <div className="h-px bg-border" />

          {/* Secondary */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="sm:w-48 shrink-0">
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Secondary</p>
              <p className="text-xs text-muted-foreground">Acción secundaria</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-secondary/80 transition-colors border border-border">
                Acción secundaria
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold flex items-center gap-2 hover:bg-secondary/80 transition-colors border border-border">
                <ArrowRight className="w-4 h-4" />
                Con icono
              </button>
            </div>
          </div>
          <div className="h-px bg-border" />

          {/* Outline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="sm:w-48 shrink-0">
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Outline</p>
              <p className="text-xs text-muted-foreground">Acción terciaria</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-5 py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors">
                Cancelar
              </button>
              <button className="px-5 py-2.5 rounded-xl border border-border text-foreground text-sm font-semibold hover:bg-accent transition-colors">
                Neutro
              </button>
            </div>
          </div>
          <div className="h-px bg-border" />

          {/* Ghost */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="sm:w-48 shrink-0">
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>Ghost & Destructive</p>
              <p className="text-xs text-muted-foreground">Acciones de bajo énfasis</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-5 py-2.5 rounded-xl text-foreground text-sm font-medium hover:bg-accent transition-colors">
                Ghost
              </button>
              <button className="px-5 py-2.5 rounded-xl text-destructive border border-destructive/20 bg-destructive/5 text-sm font-semibold hover:bg-destructive/10 transition-colors flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Tamaños">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="text-center">
              <button className="block px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold mb-2 mx-auto">
                XS
              </button>
              <p className="text-xs text-muted-foreground">px-3 py-1.5<br/>text-xs</p>
            </div>
            <div className="text-center">
              <button className="block px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold mb-2 mx-auto">
                SM
              </button>
              <p className="text-xs text-muted-foreground">px-4 py-2<br/>text-sm</p>
            </div>
            <div className="text-center">
              <button className="block px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold mb-2 mx-auto">
                MD
              </button>
              <p className="text-xs text-muted-foreground">px-5 py-2.5<br/>text-sm</p>
            </div>
            <div className="text-center">
              <button className="block px-6 py-3 rounded-xl bg-primary text-primary-foreground text-base font-semibold mb-2 mx-auto">
                LG
              </button>
              <p className="text-xs text-muted-foreground">px-6 py-3<br/>text-base</p>
            </div>
            <div className="text-center">
              <button className="block px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground text-lg font-bold mb-2 mx-auto">
                XL
              </button>
              <p className="text-xs text-muted-foreground">px-8 py-3.5<br/>text-lg</p>
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Botones con iconos">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Download className="w-4 h-4" />
              Descargar
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground border border-border text-sm font-semibold flex items-center gap-2 hover:bg-secondary/80 transition-colors">
              <Plus className="w-4 h-4" />
              Agregar
            </button>
            <button className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity" aria-label="Agregar">
              <Plus className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-xl border border-border text-foreground flex items-center justify-center hover:bg-accent transition-colors" aria-label="Descargar">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Código de ejemplo">
        <CodeSnippet
          code={`/* Primary button */
<button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground 
  text-sm font-semibold hover:opacity-90 transition-opacity">
  Acción principal
</button>

/* Secondary button */
<button className="px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground 
  border border-border text-sm font-semibold hover:bg-secondary/80 transition-colors">
  Secundario
</button>

/* Outline button */
<button className="px-5 py-2.5 rounded-xl border border-primary 
  text-primary text-sm font-semibold hover:bg-primary/5 transition-colors">
  Outline
</button>`}
        />
      </SectionBlock>
    </div>
  );
}
