import { ReactNode } from "react"

interface LegalDocumentProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalDocument({ title, lastUpdated, children }: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 font-[family-name:var(--font-playfair)]">{title}</h1>
            <p className="text-sm text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="legal-content space-y-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}
