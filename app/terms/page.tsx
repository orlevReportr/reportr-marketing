import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/site-footer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { promises as fs } from "fs"
import path from "path"

export const metadata = {
  title: "Terms of Service | Reportr",
  description: "Reportr's Terms of Service - Understand the terms and conditions for using our AI-powered documentation platform",
}

async function getTermsOfService() {
  const filePath = path.join(process.cwd(), "TERMS_OF_SERVICE.md")
  const fileContent = await fs.readFile(filePath, "utf8")
  return fileContent
}

export default async function TermsOfServicePage() {
  const content = await getTermsOfService()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <article className="prose prose-slate dark:prose-invert max-w-none
              prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-6 prose-h1:font-[family-name:var(--font-playfair)] prose-h1:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground prose-h2:border-b prose-h2:border-border prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
              prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-foreground prose-h4:font-semibold
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-4
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-ul:text-muted-foreground prose-ul:my-4 prose-ul:space-y-2
              prose-ol:text-muted-foreground prose-ol:my-4 prose-ol:space-y-2
              prose-li:my-2
              prose-table:w-full prose-table:my-8 prose-table:border prose-table:border-border
              prose-thead:border-b-2 prose-thead:border-border prose-thead:bg-muted/50
              prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:border prose-th:border-border
              prose-td:px-4 prose-td:py-3 prose-td:text-muted-foreground prose-td:border prose-td:border-border
              prose-tr:border-b prose-tr:border-border
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
