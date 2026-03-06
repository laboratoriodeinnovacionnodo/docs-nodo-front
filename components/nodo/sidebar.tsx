"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { NavItem, CustomPage } from "./types";
import {
  X,
  Plus,
  ChevronRight,
  Menu,
  Palette,
  Type,
  Square,
  LayoutGrid,
  AlignLeft,
  Ruler,
  Smile,
  Layers,
  BookOpen,
  FileText,
  Trash2,
  Calendar,
} from "lucide-react";

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "intro", label: "Introducción", icon: "BookOpen", section: "intro" },
  { id: "events", label: "Eventos", icon: "Calendar", section: "events" },
  // { id: "colors", label: "Colores", icon: "Palette", section: "colors" },
  // { id: "typography", label: "Tipografía", icon: "Type", section: "typography" },
  // { id: "buttons", label: "Botones", icon: "Square", section: "buttons" },
  // { id: "forms", label: "Formularios", icon: "AlignLeft", section: "forms" },
  // { id: "cards", label: "Tarjetas", icon: "LayoutGrid", section: "cards" },
  // { id: "spacing", label: "Espaciado", icon: "Ruler", section: "spacing" },
  // { id: "icons", label: "Iconografía", icon: "Smile", section: "icons" },
];

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Calendar,
  Palette,
  Type,
  Square,
  AlignLeft,
  LayoutGrid,
  Ruler,
  Smile,
  Layers,
  FileText,
};

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
  customPages: CustomPage[];
  onAddPage: (label: string) => void;
  onDeletePage: (id: string) => void;
}

export function Sidebar({
  activeSection,
  onSectionChange,
  customPages,
  onAddPage,
  onDeletePage,
}: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPageLabel, setNewPageLabel] = useState("");

  function handleAdd() {
    if (newPageLabel.trim()) {
      onAddPage(newPageLabel.trim());
      setNewPageLabel("");
      setShowAddModal(false);
    }
  }

  function handleItemClick(id: string) {
    onSectionChange(id);
    setMobileOpen(false);
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-border">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <Layers className="w-4 h-4 text-primary-foreground" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Sistema NODO
          </p>
          <p className="text-xs text-muted-foreground">Guía de estilo UI</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-2 mb-2">
          Fundamentos
        </p>
        {DEFAULT_NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon] ?? FileText;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group",
                isActive
                  ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 shrink-0",
                  isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-accent-foreground"
                )}
              />
              <span>{item.label}</span>
              {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
            </button>
          );
        })}

        {customPages.length > 0 && (
          <>
            <div className="pt-4 pb-1">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-2 mb-2">
                Páginas personalizadas
              </p>
            </div>
            {customPages.map((page) => {
              const isActive = activeSection === page.id;
              return (
                <div key={page.id} className="flex items-center gap-1 group">
                  <button
                    onClick={() => handleItemClick(page.id)}
                    className={cn(
                      "flex-1 flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150",
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <FileText
                      className={cn(
                        "w-4 h-4 shrink-0",
                        isActive ? "text-primary-foreground" : "text-muted-foreground"
                      )}
                    />
                    <span className="truncate">{page.label}</span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                  <button
                    onClick={() => onDeletePage(page.id)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all"
                    aria-label="Eliminar página"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </>
        )}
      </nav>

      {/* Add page */}
      {/* <div className="px-3 pb-5 pt-2 border-t border-border">
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-dashed border-primary/40 text-primary text-sm font-medium hover:bg-primary/5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Agregar sección
        </button>
      </div> */}
    </div>
  );

  return (
    <>
      {/* Mobile topbar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-card border-b border-border sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-bold text-foreground" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Sistema NODO
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          "lg:hidden fixed top-0 left-0 h-full w-72 bg-card border-r border-border z-50 transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <span className="text-sm font-bold text-foreground" style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
            Navegación
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg hover:bg-accent transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>
        <div className="h-[calc(100%-60px)] overflow-hidden">{sidebarContent}</div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 bg-card border-r border-border h-screen sticky top-0 shrink-0">
        {sidebarContent}
      </aside>

      {/* Add page modal */}
      {/* {showAddModal && (
        <div className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl shadow-2xl w-full max-w-md border border-border p-6">
            <div className="flex items-center justify-between mb-5">
              <h2
                className="text-lg font-bold text-foreground"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
              >
                Nueva sección
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg hover:bg-accent transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Agrega una nueva sección personalizada a tu guía de estilo.
            </p>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Nombre de la sección
            </label>
            <input
              autoFocus
              type="text"
              value={newPageLabel}
              onChange={(e) => setNewPageLabel(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Ej: Animaciones, Grid, Tokens..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdd}
                disabled={!newPageLabel.trim()}
                className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}
