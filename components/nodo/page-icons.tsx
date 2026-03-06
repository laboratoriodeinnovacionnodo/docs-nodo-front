import { SectionHeader, SectionBlock, CodeSnippet } from "./section-ui";
import {
  Home, Search, Settings, Bell, User, Heart, Star, Bookmark, Share2,
  Download, Upload, Trash2, Edit, Plus, X, Check, ChevronRight, ChevronDown,
  ArrowRight, ArrowLeft, Info, AlertCircle, CheckCircle2, XCircle,
  Mail, Phone, Calendar, Clock, MapPin, Globe, Lock, Unlock, Eye,
  EyeOff, Filter, LayoutGrid, List, Layers, Zap, Shield, TrendingUp,
  Users, FileText, Image, Video, Music, Code, Terminal, Database,
} from "lucide-react";

const iconGroups = [
  {
    name: "Navegación",
    icons: [
      { name: "Home", Icon: Home },
      { name: "Search", Icon: Search },
      { name: "Settings", Icon: Settings },
      { name: "ChevronRight", Icon: ChevronRight },
      { name: "ChevronDown", Icon: ChevronDown },
      { name: "ArrowRight", Icon: ArrowRight },
      { name: "ArrowLeft", Icon: ArrowLeft },
    ],
  },
  {
    name: "Acciones",
    icons: [
      { name: "Plus", Icon: Plus },
      { name: "X", Icon: X },
      { name: "Check", Icon: Check },
      { name: "Edit", Icon: Edit },
      { name: "Trash2", Icon: Trash2 },
      { name: "Download", Icon: Download },
      { name: "Upload", Icon: Upload },
      { name: "Share2", Icon: Share2 },
      { name: "Filter", Icon: Filter },
    ],
  },
  {
    name: "Estado",
    icons: [
      { name: "Info", Icon: Info },
      { name: "AlertCircle", Icon: AlertCircle },
      { name: "CheckCircle2", Icon: CheckCircle2 },
      { name: "XCircle", Icon: XCircle },
      { name: "Bell", Icon: Bell },
      { name: "Lock", Icon: Lock },
      { name: "Unlock", Icon: Unlock },
    ],
  },
  {
    name: "Social y perfil",
    icons: [
      { name: "User", Icon: User },
      { name: "Users", Icon: Users },
      { name: "Heart", Icon: Heart },
      { name: "Star", Icon: Star },
      { name: "Bookmark", Icon: Bookmark },
      { name: "Mail", Icon: Mail },
      { name: "Phone", Icon: Phone },
      { name: "Globe", Icon: Globe },
      { name: "MapPin", Icon: MapPin },
    ],
  },
  {
    name: "Contenido",
    icons: [
      { name: "FileText", Icon: FileText },
      { name: "Image", Icon: Image },
      { name: "Video", Icon: Video },
      { name: "Music", Icon: Music },
      { name: "Calendar", Icon: Calendar },
      { name: "Clock", Icon: Clock },
      { name: "Eye", Icon: Eye },
      { name: "EyeOff", Icon: EyeOff },
    ],
  },
  {
    name: "Técnico",
    icons: [
      { name: "Code", Icon: Code },
      { name: "Terminal", Icon: Terminal },
      { name: "Database", Icon: Database },
      { name: "Layers", Icon: Layers },
      { name: "Zap", Icon: Zap },
      { name: "Shield", Icon: Shield },
      { name: "TrendingUp", Icon: TrendingUp },
      { name: "LayoutGrid", Icon: LayoutGrid },
      { name: "List", Icon: List },
    ],
  },
];

export function IconsSection() {
  return (
    <div>
      <SectionHeader
        tag="08 — Iconografía"
        title="Sistema de iconos"
        description="NODO usa Lucide React como biblioteca de iconos principal. Trazo uniforme de 1.5px, esquinas redondeadas y estilo outline para máxima coherencia."
      />

      <SectionBlock title="Tamaños estándar">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex flex-wrap items-end gap-8">
            {[
              { size: "w-3 h-3", px: "12px", usage: "Inline, badges" },
              { size: "w-4 h-4", px: "16px", usage: "Botones, inputs" },
              { size: "w-5 h-5", px: "20px", usage: "Navegación" },
              { size: "w-6 h-6", px: "24px", usage: "Iconos de acción" },
              { size: "w-8 h-8", px: "32px", usage: "Cards, features" },
              { size: "w-10 h-10", px: "40px", usage: "Ilustraciones" },
          ].map(({ size, px, usage }) => (
              <div key={px} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center">
                  <Layers className={`${size} text-primary`} />
                </div>
                <code className="text-xs font-mono text-muted-foreground">{size}</code>
                <p className="text-xs text-muted-foreground">{px}</p>
                <p className="text-xs text-muted-foreground text-center">{usage}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      {iconGroups.map((group) => (
        <SectionBlock key={group.name} title={group.name}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {group.icons.map(({ name, Icon }) => (
              <div
                key={name}
                className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-accent hover:border-primary/20 transition-colors cursor-pointer group"
              >
                <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                <p className="text-xs text-muted-foreground text-center leading-tight">{name}</p>
              </div>
            ))}
          </div>
        </SectionBlock>
      ))}

      <SectionBlock title="Implementación">
        <CodeSnippet
          code={`// Instalación
pnpm add lucide-react

// Importación
import { Search, Bell, Settings } from 'lucide-react'

// Uso en componentes
<Search className="w-4 h-4 text-muted-foreground" />
<Bell className="w-5 h-5 text-primary" />

// Con color dinámico por estado
<Check className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />`}
        />
      </SectionBlock>
    </div>
  );
}
