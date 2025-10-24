import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import { Features } from '../components/Features'
import { Marquee } from '../components/Marquee'
import InteractiveGrid from '../components/InteractiveGrid'
import { CTA } from '../components/CTA'
import { site } from '../config'

export default function HomePage() {
  return (
    <>
      <Hero hero={site.hero} />
      <Marquee logos={site.logos} />
      <Products products={site.products} />
      <Features features={site.features} className="grid-bg" />
      <InteractiveGrid />
      <CTA
        title="开启您的AI之旅"
        subtitle="立即开始体验我们的人工智能解决方案"
        buttons={[
          { label: '免费试用', href: '#/products', icon: '🚀' },
          { label: '预约演示', href: '#/contact', icon: '💬' },
        ]}
      />
    </>
  )
}
