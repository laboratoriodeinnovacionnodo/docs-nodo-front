export type PageSection =
  | "intro"
  | "events"
  | "colors"
  | "typography"
  | "buttons"
  | "forms"
  | "cards"
  | "spacing"
  | "icons"
  | "custom";

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  section: PageSection | string;
  isCustom?: boolean;
}

export interface CustomPage {
  id: string;
  label: string;
  content: string;
  createdAt: Date;
}
