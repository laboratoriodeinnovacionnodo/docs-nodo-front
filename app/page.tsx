"use client";

import { useState, useCallback } from "react";
import { Sidebar } from "@/components/nodo/sidebar";
import { IntroSection } from "@/components/nodo/page-intro";
import { EventsSection } from "@/components/nodo/page-events";
import { ColorsSection } from "@/components/nodo/page-colors";
import { TypographySection } from "@/components/nodo/page-typography";
import { ButtonsSection } from "@/components/nodo/page-buttons";
import { FormsSection } from "@/components/nodo/page-forms";
import { CardsSection } from "@/components/nodo/page-cards";
import { SpacingSection } from "@/components/nodo/page-spacing";
import { IconsSection } from "@/components/nodo/page-icons";
import { CustomPageView } from "@/components/nodo/page-custom";
import type { CustomPage } from "@/components/nodo/types";

function generateId() {
  return `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function StyleGuidePage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [customPages, setCustomPages] = useState<CustomPage[]>([]);

  const handleAddPage = useCallback((label: string) => {
    const newPage: CustomPage = {
      id: generateId(),
      label,
      content: "",
      createdAt: new Date(),
    };
    setCustomPages((prev) => [...prev, newPage]);
    setActiveSection(newPage.id);
  }, []);

  const handleDeletePage = useCallback((id: string) => {
    setCustomPages((prev) => prev.filter((p) => p.id !== id));
    setActiveSection((prev) => (prev === id ? "intro" : prev));
  }, []);

  const handleEditPage = useCallback((id: string, content: string) => {
    setCustomPages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, content } : p))
    );
  }, []);

  const activeCustomPage = customPages.find((p) => p.id === activeSection);

  const renderContent = () => {
    if (activeCustomPage) {
      return (
        <CustomPageView
          page={activeCustomPage}
          onEdit={handleEditPage}
        />
      );
    }
    switch (activeSection) {
      case "intro":       return <IntroSection />;
      case "events":      return <EventsSection />;
      // case "colors":      return <ColorsSection />;
      // case "typography":  return <TypographySection />;
      // case "buttons":     return <ButtonsSection />;
      // case "forms":       return <FormsSection />;
      // case "cards":       return <CardsSection />;
      // case "spacing":     return <SpacingSection />;
      // case "icons":       return <IconsSection />;
      default:            return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        customPages={customPages}
        onAddPage={handleAddPage}
        onDeletePage={handleDeletePage}
      />

      <main className="flex-1 min-w-0 overflow-x-hidden">
        {/* Breadcrumb bar */}
        <div className="hidden lg:flex items-center justify-between px-8 py-3.5 border-b border-border bg-card sticky top-0 z-20">
          <nav className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Sistema NODO</span>
            <span className="text-border">/</span>
            <span className="text-foreground font-medium capitalize">
              {activeCustomPage?.label ?? activeSection}
            </span>
          </nav>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground font-medium">v1.0.0 — Sistema NODO</span>
          </div>
        </div>

        {/* Page content */}
        <div className="px-4 py-6 md:px-6 md:py-8 lg:px-10 lg:py-10 max-w-5xl mx-auto">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="border-t border-border px-4 py-5 md:px-6 lg:px-10 mt-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Sistema NODO · Guía de Sistemas UI v1.0.0
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
