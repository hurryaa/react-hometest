import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="container stack-xl reveal">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="h1 mb-6">关于我们</h1>
          <p className="p-xl">致力于为企业和个人提供领先的AI技术服务</p>
        </div>

        <div className="space-y-8">
          <section className="card p-8">
            <h2 className="h2 mb-4">公司简介</h2>
            <p className="p mb-4">
              AICorp 是一家专注于人工智能技术服务的创新型企业。我们致力于将最前沿的AI技术转化为实用的产品和服务，
              帮助企业和个人在AI时代获得竞争优势。
            </p>
            <p className="p">
              凭借专业的技术团队和丰富的行业经验，我们为客户提供从大模型API网关到会员服务的全方位解决方案，
              助力客户在数字化转型过程中实现业务创新和价值提升。
            </p>
          </section>

          <section className="card p-8">
            <h2 className="h2 mb-4">我们的使命</h2>
            <p className="p">
              让每个企业和个人都能轻松享受AI技术带来的便利与价值，推动人工智能技术的普及与应用，
              成为您值得信赖的AI技术合作伙伴。
            </p>
          </section>

          <section className="card p-8">
            <h2 className="h2 mb-6">核心优势</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">技术实力</h3>
                <p className="p">
                  拥有经验丰富的AI研发团队，深耕大模型应用领域，持续技术创新
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">服务质量</h3>
                <p className="p">
                  提供7×24小时技术支持，快速响应客户需求，确保服务稳定可靠
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">安全保障</h3>
                <p className="p">
                  企业级安全防护体系，严格的数据隐私保护措施，让您无忧使用
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">灵活定制</h3>
                <p className="p">
                  根据客户实际需求提供个性化方案，满足不同行业场景应用
                </p>
              </div>
            </div>
          </section>

          <section className="card p-8">
            <h2 className="h2 mb-6">联系方式</h2>
            <div className="space-y-3">
              <p className="p">
                <span className="font-semibold">邮箱：</span>
                <a href="mailto:contact@aicorp.com" className="text-accent hover:text-primary transition-colors">
                  contact@aicorp.com
                </a>
              </p>
              <p className="p">
                <span className="font-semibold">电话：</span>
                <a href="tel:400-123-4567" className="text-accent hover:text-primary transition-colors">
                  400-123-4567
                </a>
              </p>
              <p className="p">
                <span className="font-semibold">地址：</span>
                北京市朝阳区科技园区创新大厦
              </p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
