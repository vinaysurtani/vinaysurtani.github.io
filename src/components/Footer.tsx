export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vinay Surtani
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  )
}
