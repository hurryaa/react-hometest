import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from 'next-themes'
import { AICorpNavbar } from './components/AICorpNavbar'
import { Footer } from './components/Footer'
import { site } from './config'
import { useRouter } from './hooks/useRouter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import CasesPage from './pages/CasesPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const bgRef = useRef(null)
  const { currentPath } = useRouter()

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return () => io.disconnect()
  }, [currentPath])

  const onMove = (event) => {
    const el = bgRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
  }

  const renderPage = () => {
    const cleanPath = currentPath.split('?')[0].split('#')[0]

    switch (cleanPath) {
      case '/':
      case '/home':
        return <HomePage />
      case '/about':
        return <AboutPage />
      case '/products':
        return <ProductsPage />
      case '/services':
        return <ServicesPage />
      case '/cases':
        return <CasesPage />
      case '/contact':
        return <ContactPage />
      default:
        return <NotFoundPage />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed top-0 left-0 right-0 z-50">
          <AICorpNavbar />
        </div>

        <main className="grid-bg pt-20" ref={bgRef} onMouseMove={onMove}>
          {renderPage()}
        </main>

        <Footer brand="AICorp" year={new Date().getFullYear()} navItems={site.nav} />
      </div>
    </ThemeProvider>
  )
}
