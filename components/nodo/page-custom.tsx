import { SectionHeader, SectionBlock } from "./section-ui";
import type { CustomPage } from "./types";
import { FileText, Edit3 } from "lucide-react";

interface CustomPageViewProps {
  page: CustomPage;
  onEdit: (id: string, content: string) => void;
}

export function CustomPageView({ page, onEdit }: CustomPageViewProps) {
  return (
    <div>
      <SectionHeader
        tag="Sección personalizada"
        title={page.label}
        description="Esta es una sección personalizada. Puedes editar el contenido directamente."
      />

      <SectionBlock title="Contenido">
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{page.label}</span>
            </div>
            <button
              onClick={() => {
                const newContent = prompt("Editar contenido:", page.content);
                if (newContent !== null) onEdit(page.id, newContent);
              }}
              className="flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
            >
              <Edit3 className="w-3.5 h-3.5" />
              Editar
            </button>
          </div>
          <div className="p-5">
            {page.content ? (
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{page.content}</p>
            ) : (
              <div className="flex flex-col items-center py-12 text-center">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-4">
                  <Edit3 className="w-5 h-5 text-muted-foreground" />
                </div>
                <p
                  className="text-base font-bold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Sección vacía
                </p>
                <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                  Esta sección aún no tiene contenido. Haz clic en editar para agregar información.
                </p>
                <button
                  onClick={() => {
                    const newContent = prompt("Agregar contenido:", "");
                    if (newContent !== null) onEdit(page.id, newContent);
                  }}
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Agregar contenido
                </button>
              </div>
            )}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Metadatos">
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { label: "ID de sección", value: page.id },
              { label: "Nombre", value: page.label },
              {
                label: "Creada",
                value: page.createdAt.toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                }),
              },
            ].map((meta) => (
              <div key={meta.label} className="px-4 py-3">
                <p className="text-xs text-muted-foreground mb-0.5">{meta.label}</p>
                <p className="text-sm font-medium text-foreground font-mono">{meta.value}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}
