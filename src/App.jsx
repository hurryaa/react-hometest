import React, { useEffect, useRef } from 'react'
import { ThemeProvider } from 'next-themes'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import { Features } from './components/Features'
import { Marquee } from './components/Marquee'
import InteractiveGrid from './components/InteractiveGrid'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { site } from './config'

export default function App() {
  const bgRef = useRef(null)

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

    return () => io.disconnect()
  }, [])

  const onMove = (event) => {
    const el = bgRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
      <div className="min-h-screen bg-background text-foreground">
        <div className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto">
        <Navbar />
        </div>

        <main className="grid-bg" ref={bgRef} onMouseMove={onMove}>
          <Hero hero={site.hero} />

          <Marquee logos={site.logos} />

          <Products products={site.products} />

          <Features features={site.features} className="grid-bg" />

          <InteractiveGrid />

          <CTA
            title="开启您的AI之旅"
            subtitle="立即开始体验我们的人工智能解决方案"
            buttons={[
              { label: '免费试用', href: '#products', icon: '🚀' },
              { label: '预约演示', href: '#contact', icon: '💬' },
            ]}
          />
        </main>

        <Footer brand="AICorp" year={new Date().getFullYear()} navItems={site.nav} />
      </div>
    </ThemeProvider>
  )
}
