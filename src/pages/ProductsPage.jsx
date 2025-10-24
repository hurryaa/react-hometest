import React from 'react'
import { motion } from 'framer-motion'
import { site } from '../config'

const productHighlights = [
  {
    title: '统一调度中心',
    description: '通过统一调度中心管理多模型调用，灵活配置策略，实现资源智能调度和成本优化。'
  },
  {
    title: '可视化监控面板',
    description: '实时监控各类AI服务的调用情况，支持智能告警与报表导出，帮助您掌控业务状态。'
  },
  {
    title: '企业级安全防护',
    description: '全链路数据加密、访问控制与审计跟踪，确保企业数据安全可控。'
  }
]

const productSteps = [
  { title: '接入评估', detail: '对接企业现有系统，梳理业务流程与目标需求，制定接入策略。' },
  { title: '方案设计', detail: '结合企业实际情况，构建最优的大模型应用架构与产品方案。' },
  { title: '快速部署', detail: '提供标准化组件与脚手架，支持云端部署与私有化落地。' },
  { title: '运营优化', detail: '持续跟踪运行数据，提供模型效果优化建议与运营支持。' }
]

export default function ProductsPage() {
  return (
    <div className="container stack-xl reveal">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-center mb-12">
          <h1 className="h1 mb-4">产品中心</h1>
          <p className="p-xl">
            一站式大模型服务平台，从API网关、模型聚合到会员服务，打造您专属的AI生产力体系。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {site.products.map((product) => (
            <div key={product.title} className="card p-8">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
              <p className="p mb-6">{product.desc}</p>
              <ul className="feature-list">
                {product.features.map((feature) => (
                  <li key={feature} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="card p-8 mt-12">
          <h2 className="h2 mb-6">产品亮点</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {productHighlights.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="p">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-8 mt-12">
          <h2 className="h2 mb-6">落地流程</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {productSteps.map((step) => (
              <div key={step.title} className="space-y-3">
                <div className="text-2xl font-semibold text-secondary">{step.title}</div>
                <p className="p">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
