import React from 'react'
import { motion } from 'framer-motion'

const serviceCategories = [
  {
    title: '技术咨询服务',
    description: '专业的AI专家团队为您提供全面的技术规划、架构设计和实施指导，帮助企业快速落地AI能力。',
    items: ['AI战略评估', '数据治理规划', '模型选型建议', '系统架构设计'],
    icon: '🧠'
  },
  {
    title: '系统集成服务',
    description: '提供从需求分析、解决方案设计到系统部署、性能优化的端到端服务，保障项目顺利推进。',
    items: ['多模型接入', 'API网关部署', '私有化部署', '性能调优'],
    icon: '🛠️'
  },
  {
    title: '定制开发服务',
    description: '根据客户业务场景，定制开发AI应用，包括智能客服、知识库、内容生成等多种应用形态。',
    items: ['智能客服', 'AI助手', '知识库系统', '行业模型定制'],
    icon: '🎯'
  },
  {
    title: '运维支持服务',
    description: '建立标准化运维体系，提供7×24小时技术支持、监控预警与故障处理，确保系统稳定运行。',
    items: ['24小时值守', '系统监控', '安全巡检', '持续优化'],
    icon: '🛡️'
  }
]

const cooperationPlan = [
  {
    title: '阶段一：需求洞察',
    detail: '深入了解您的业务目标与技术现状，明确项目范围与核心诉求。'
  },
  {
    title: '阶段二：方案定制',
    detail: '制定最合适的技术方案与实施计划，确保方案可行、可落地。'
  },
  {
    title: '阶段三：集成交付',
    detail: '项目团队协作推进开发、测试与部署，确保交付达到预期效果。'
  },
  {
    title: '阶段四：运营优化',
    detail: '提供持续的监控运维与业务优化建议，助力您持续释放AI价值。'
  }
]

export default function ServicesPage() {
  return (
    <div className="container stack-xl reveal">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-center mb-12">
          <h1 className="h1 mb-4">专业服务</h1>
          <p className="p-xl">
            从咨询规划到实施运维，我们提供全生命周期的AI服务，陪伴您完成每一次创新升级。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {serviceCategories.map((service) => (
            <div key={service.title} className="card p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="p mb-4">{service.description}</p>
              <ul className="feature-list">
                {service.items.map((item) => (
                  <li key={item} className="feature-item">
                    <span className="feature-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="card p-8 mt-12">
          <h2 className="h2 mb-6">合作流程</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {cooperationPlan.map((step) => (
              <div key={step.title} className="space-y-3">
                <div className="text-primary font-semibold">{step.title}</div>
                <p className="p">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card p-8 mt-12 text-center">
          <h2 className="h2 mb-4">需要专属方案？</h2>
          <p className="p-xl mb-6 max-w-3xl mx-auto">
            我们提供免费咨询服务，为您评估项目可行性与收益预期。欢迎预约技术顾问开展深入交流。
          </p>
          <a href="#/contact" className="btn btn-primary">
            预约咨询
          </a>
        </section>
      </motion.div>
    </div>
  )
}
