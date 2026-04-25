import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
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
  const [isOpen, setIsOpen] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
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

          <div className="flex items-center gap-2">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen(o => !o)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>

            {/* Theme toggle */}
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
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[57px] z-40 bg-background/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={cn(
          'fixed left-0 right-0 top-[57px] z-50 border-b border-border bg-background/95 backdrop-blur-sm md:hidden',
          'transition-all duration-200 ease-in-out',
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-2 opacity-0 pointer-events-none'
        )}
      >
        <nav className="mx-auto max-w-5xl px-6 py-4 flex flex-col">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
