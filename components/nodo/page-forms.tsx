import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";
import { Search, Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

export function FormsSection() {
  return (
    <div>
      <SectionHeader
        tag="05 — Formularios"
        title="Inputs y formularios"
        description="Componentes de formulario con estados claros: default, focus, error, success y disabled. Diseñados para máxima accesibilidad."
      />

      <SectionBlock title="Inputs base">
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-lg">
          {/* Default */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Ej: María García"
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            <p className="text-xs text-muted-foreground mt-1">Estado: default</p>
          </div>
          {/* With icon */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Buscar
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar sección..."
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>
          </div>
          {/* Error */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                defaultValue="correo-invalido"
                className="w-full px-3.5 py-2.5 rounded-xl border border-destructive bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-destructive/40 transition-all pr-9"
              />
              <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-destructive" />
            </div>
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Ingresa un email válido
            </p>
          </div>
          {/* Success */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Usuario
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="nodo_user"
                className="w-full px-3.5 py-2.5 rounded-xl border border-green-400 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-green-400/40 transition-all pr-9"
              />
              <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
            </div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Nombre de usuario disponible
            </p>
          </div>
          {/* Disabled */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1.5">
              Campo deshabilitado
            </label>
            <input
              type="text"
              disabled
              placeholder="No editable"
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-muted text-muted-foreground text-sm cursor-not-allowed opacity-60"
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Textarea y Select">
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-lg">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Descripción
            </label>
            <textarea
              rows={4}
              placeholder="Escribe una descripción..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none leading-relaxed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Categoría
            </label>
            <select className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none">
              <option value="">Seleccionar...</option>
              <option value="ui">Diseño UI</option>
              <option value="ux">Experiencia UX</option>
              <option value="brand">Branding</option>
            </select>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Checkbox y Toggle">
        <div className="bg-card border border-border rounded-2xl p-6 space-y-4 max-w-lg">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="opt1"
              defaultChecked
              className="w-4 h-4 accent-primary rounded cursor-pointer"
            />
            <label htmlFor="opt1" className="text-sm text-foreground cursor-pointer">
              Recibir notificaciones
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="opt2" className="w-4 h-4 accent-primary rounded cursor-pointer" />
            <label htmlFor="opt2" className="text-sm text-foreground cursor-pointer">
              Newsletter mensual
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="r1" name="plan" defaultChecked className="w-4 h-4 accent-primary cursor-pointer" />
            <label htmlFor="r1" className="text-sm text-foreground cursor-pointer">Plan básico</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="r2" name="plan" className="w-4 h-4 accent-primary cursor-pointer" />
            <label htmlFor="r2" className="text-sm text-foreground cursor-pointer">Plan profesional</label>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Código de ejemplo">
        <CodeSnippet
          code={`/* Input base */
<input
  type="text"
  placeholder="Placeholder..."
  className="w-full px-3.5 py-2.5 rounded-xl border border-border 
    bg-background text-foreground text-sm 
    placeholder:text-muted-foreground 
    focus:outline-none focus:ring-2 focus:ring-primary/40 
    focus:border-primary transition-all"
/>

/* Input con error */
<input className="... border-destructive focus:ring-destructive/40" />
<p className="text-xs text-destructive mt-1">Mensaje de error</p>`}
        />
      </SectionBlock>
    </div>
  );
}
