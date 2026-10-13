import type { ReactNode } from "react";

// Shared wrapper for the legal pages. Plain CSS, so it works with or without Tailwind.
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main className="legal" style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px 72px", lineHeight: 1.7, color: "#1f2937" }}>
      <style>{`
        .legal h1 { font-size: 2rem; margin: 0 0 4px; }
        .legal h2 { font-size: 1.25rem; margin: 32px 0 8px; }
        .legal ul { padding-left: 22px; }
        .legal a { color: #1d4ed8; text-decoration: underline; }
      `}</style>
      <h1>{title}</h1>
      <p style={{ color: "#6b7280", marginTop: 0 }}>Last updated: {updated}</p>
      {children}
    </main>
  );
}
