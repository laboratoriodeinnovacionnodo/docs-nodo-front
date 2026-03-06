"use client";

import { useState } from "react";
import { SectionHeader, SectionBlock } from "./section-ui";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Tag,
  X,
  ImageIcon,
  CheckCircle2,
  Circle,
  XCircle,
  PlayCircle,
  Megaphone,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TIPOS_EVENTO = [
  {
    key: "PENDIENTE",
    label: "Pendiente",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    dot: "bg-orange-500",
    icon: Circle,
    desc: "El evento fue registrado pero aún no ha comenzado. Está confirmado en agenda y visible para los asistentes.",
  },
  {
    key: "EN_CURSO",
    label: "En curso",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
    icon: PlayCircle,
    desc: "El evento está ocurriendo en este momento. El sistema lo marca automáticamente cuando llega la hora de inicio.",
  },
  {
    key: "FINALIZADO",
    label: "Finalizado",
    color: "bg-green-100 text-green-700 border-green-200",
    dot: "bg-green-500",
    icon: CheckCircle2,
    desc: "El evento concluyó. Permanece en el historial para consultas, reportes y seguimiento estadístico.",
  },
  {
    key: "CANCELADO",
    label: "Cancelado",
    color: "bg-red-100 text-red-700 border-red-200",
    dot: "bg-red-400",
    icon: XCircle,
    desc: "Nosotros no notificamos a los involucrados simplemente el evento fue dado de baja antes de realizarse. Se libera el espacio reservado.",
  },
  {
    key: "MASIVO",
    label: "Masivo",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    dot: "bg-purple-500",
    icon: Megaphone,
    desc: "Evento de gran convocatoria que puede ocupar múltiples áreas simultáneamente (auditorio + explanada, etc.).",
  },
  {
    key: "ESCOLAR",
    label: "Escolar",
    color: "bg-pink-100 text-pink-700 border-pink-200",
    dot: "bg-pink-500",
    icon: GraduationCap,
    desc: "Actividad educativa destinada a recorrer el edificio del Nodo Tecnologico en el marco de una visita didactica.",
  },
];

const AREAS = [
  { key: "COWORKING", label: "Coworking", group: "Trabajo" },
  { key: "AUDITORIO", label: "Auditorio", group: "Eventos" },
  { key: "LABORATORIO", label: "Laboratorio", group: "Trabajo" },
  { key: "AULA_1", label: "Aula 1", group: "Aulas" },
  { key: "AULA_2", label: "Aula 2", group: "Aulas" },
  { key: "AULA_3", label: "Aula 3", group: "Aulas" },
  { key: "AULA_4", label: "Aula 4", group: "Aulas" },
  { key: "AULA_5", label: "Aula 5", group: "Aulas" },
  { key: "AULA_6", label: "Aula 6", group: "Aulas" },
  { key: "RECEPCION_ESTE", label: "Recepción Este", group: "Recepción" },
  { key: "RECEPCION_OESTE", label: "Recepción Oeste", group: "Recepción" },
  { key: "EXPLANADA", label: "Explanada", group: "Exteriores" },
  { key: "PLAZA", label: "Plaza", group: "Exteriores" },
  { key: "SALA_REUNIONES", label: "Sala de Reuniones", group: "Trabajo" },
];

const AREA_GROUPS = ["Trabajo", "Eventos", "Aulas", "Recepción", "Exteriores"];

const GROUP_COLORS: Record<string, string> = {
  Trabajo: "bg-sky-100 text-sky-700 border-sky-200",
  Eventos: "bg-purple-100 text-purple-700 border-purple-200",
  Aulas: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Recepción: "bg-orange-100 text-orange-700 border-orange-200",
  Exteriores: "bg-green-100 text-green-700 border-green-200",
};

function ModalPreview() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* Placeholder for calendar screenshot */}
        <div
          className="w-full rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-3 text-center px-6 h-56 sm:h-72 cursor-pointer hover:bg-primary/8 transition-colors"
          onClick={() => setOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          aria-label="Ver demo del modal de evento"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p
              className="text-sm font-semibold text-foreground"
              style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
            >
              Captura del calendario de eventos
            </p>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs leading-relaxed">
              Aquí irá tu imagen del calendario. Haz clic para ver un demo del modal de evento.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <Calendar className="w-3 h-3" />
            Imagen por agregar · Clic para ver demo modal
          </span>
        </div>
      </div>

      {/* Demo modal */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card rounded-2xl shadow-2xl w-full max-w-lg border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 border-b border-border">
              <div className="flex-1 min-w-0 pr-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Pendiente
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 border border-sky-200">
                    Coworking
                  </span>
                </div>
                <h3
                  className="text-base font-bold text-foreground leading-tight text-balance"
                  style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
                >
                  Taller de Innovación Digital
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-accent transition-colors shrink-0"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Placeholder for modal screenshot */}
            <div className="p-5 border-b border-border">
              <div className="w-full h-32 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary/50" />
                <p className="text-xs text-muted-foreground">Aquí irá tu captura del modal real</p>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 space-y-3">
              {[
                { icon: Clock, label: "Horario", value: "Lunes 10 Mar · 09:00 – 13:00 hs" },
                { icon: MapPin, label: "Área", value: "Coworking — Planta baja" },
                { icon: Users, label: "Capacidad", value: "30 asistentes confirmados" },
                { icon: Tag, label: "Organizado por", value: "Equipo de Innovación NODO" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{label}</p>
                    <p className="text-sm text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 pb-5">
              <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Ver detalles completos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function EventsSection() {
  return (
    <div>
      <SectionHeader
        tag="02 — Módulo de Eventos"
        title="Página de Eventos"
        description="El módulo de eventos es el eje central de la gestión de actividades en el NODO. Permite visualizar, filtrar y administrar todos los eventos del espacio desde una interfaz de calendario unificada."
      />

      {/* Vista del calendario */}
      <SectionBlock title="Vista del calendario">
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          La página principal de eventos presenta un calendario mensual/semanal donde cada evento aparece como un bloque de color según su tipo y estado. Los administradores pueden navegar por fechas, filtrar por área o tipo, y hacer clic sobre cualquier evento para acceder a su detalle.
        </p>
        <img
          src="/calendariopublico.png"
          alt="Captura del calendario de eventos"
          className="w-full max-w-sm mx-auto aspect-[5/7] object-cover rounded-2xl"
        />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Navegación temporal", desc: "Botones de mes anterior/siguiente y selector rápido para ir a una fecha específica." },
            { title: "Vista compacta en mobile", desc: "En pantallas pequeñas el calendario se adapta a una vista de lista agrupada por día." },
            { title: "Indicadores visuales", desc: "Cada evento muestra un chip de color según su estado, facilitando la lectura rápida." },
          ].map(({ title, desc }) => (
            <div key={title} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  {title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Modal de detalle */}
      <SectionBlock title="Modal de detalle del evento">
        <div className="mt-6">
          <img
            src="/calendariomodal.png"
            alt="Captura del calendario de eventos"
            className="w-full max-w-sm mx-auto aspect-[9/16] object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5 bg-secondary border border-border rounded-xl p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Tip de uso</p>
          <p className="text-sm text-foreground leading-relaxed">
            El modal es solo lectura para usuarios con rol <strong>Viewer</strong>. Los usuarios con rol <strong>Editor</strong> o <strong>Admin</strong> verán los botones de edición y cancelación habilitados.
          </p>
        </div>
      </SectionBlock>

      {/* Tipos de evento */}
      <SectionBlock title="Tipos de evento">
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          Cada evento en el sistema NODO tiene un estado y una categoría que determinan su comportamiento visual y las acciones disponibles. Los estados se actualizan automáticamente según la fecha/hora, aunque también pueden cambiarse manualmente por un administrador.
        </p>
        <div className="space-y-3">
          {TIPOS_EVENTO.map(({ key, label, color, dot, icon: Icon, desc }) => (
            <div
              key={key}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-card border border-border rounded-xl p-4"
            >
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border",
                    color
                  )}
                >
                  <span className={cn("w-1.5 h-1.5 rounded-full", dot)} />
                  {label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* Áreas */}
      <SectionBlock title="Áreas disponibles">
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          Cada evento se vincula a una o más áreas físicas del NODO. Las áreas están agrupadas por categoría funcional. En eventos masivos es posible asignar múltiples áreas simultáneamente.
        </p>
        <div className="space-y-4">
          {AREA_GROUPS.map((group) => {
            const items = AREAS.filter((a) => a.group === group);
            return (
              <div key={group}>
                <p
                  className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2"
                >
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((area) => (
                    <span
                      key={area.key}
                      className={cn(
                        "inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border",
                        GROUP_COLORS[group]
                      )}
                    >
                      {area.label}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-muted">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Resumen de áreas ({AREAS.length} en total)
            </p>
          </div>
          <div className="p-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
            {AREAS.map((area) => (
              <div key={area.key} className="flex items-center gap-2 py-1">
                <MapPin className="w-3 h-3 text-primary shrink-0" />
                <span className="text-sm text-foreground">{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>
    </div>
  );
}
