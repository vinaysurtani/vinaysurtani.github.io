import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm font-medium text-foreground tracking-tight hover:text-muted-foreground transition-colors"
        >
          vs<span className="text-muted-foreground">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-md',
            'text-muted-foreground hover:text-foreground hover:bg-accent transition-colors'
          )}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  )
}
