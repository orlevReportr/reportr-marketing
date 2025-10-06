import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <div>
          <span className="font-semibold">Reportr</span> — AI Meeting to Client-Ready Reports
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}