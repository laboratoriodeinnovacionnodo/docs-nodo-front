import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ tag, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
        <span className="w-4 h-px bg-primary" />
        {tag}
      </span>
      <h1
        className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight text-balance"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionBlock({ title, children, className }: SectionBlockProps) {
  return (
    <div className={cn("mb-10", className)}>
      <h2
        className="text-lg font-bold text-foreground mb-4"
        style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

interface CodeSnippetProps {
  code: string;
}

export function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <pre className="bg-foreground/5 border border-border rounded-xl p-4 text-xs text-foreground overflow-x-auto font-mono leading-relaxed">
      <code>{code}</code>
    </pre>
  );
}
