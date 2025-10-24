import React from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    title: '联系电话',
    content: '400-123-4567',
    icon: '📞',
    link: 'tel:400-123-4567'
  },
  {
    title: '邮箱地址',
    content: 'contact@aicorp.com',
    icon: '✉️',
    link: 'mailto:contact@aicorp.com'
  },
  {
    title: '工作时间',
    content: '周一至周五 9:00-18:00',
    icon: '🕐'
  },
  {
    title: '公司地址',
    content: '北京市朝阳区科技园区创新大厦',
    icon: '📍'
  }
]

const faqs = [
  {
    question: '如何开始使用你们的服务？',
    answer: '您可以直接联系我们的销售团队或在线提交咨询表单，我们会在24小时内与您取得联系，根据您的需求提供相应的解决方案。'
  },
  {
    question: '支持私有化部署吗？',
    answer: '是的，我们支持云端部署和私有化部署两种方式。针对数据安全要求较高的企业客户，我们提供完整的私有化部署方案和技术支持。'
  },
  {
    question: '技术支持服务包含哪些内容？',
    answer: '我们提供7×24小时技术支持，包括系统监控、故障处理、性能优化、版本升级等全方位服务，确保系统稳定运行。'
  },
  {
    question: '如何保证数据安全？',
    answer: '我们采用企业级安全防护体系，包括数据加密传输、访问控制、审计日志等多重安全措施，确保您的数据安全可控。'
  }
]

export default function ContactPage() {
  return (
    <div className="container stack-xl reveal">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-center mb-12">
          <h1 className="h1 mb-4">联系我们</h1>
          <p className="p-xl">有任何问题或需求，欢迎随时与我们取得联系</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-accent hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-6">社交媒体</h2>
              <div className="flex gap-4">
                <a href="#" className="btn" aria-label="微信">
                  <span className="text-xl">💬</span> 微信
                </a>
                <a href="#" className="btn" aria-label="微博">
                  <span className="text-xl">📱</span> 微博
                </a>
                <a href="#" className="btn" aria-label="邮件订阅">
                  <span className="text-xl">📧</span> 订阅
                </a>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-semibold mb-6">在线咨询</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-background border border-line rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  公司名称
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 bg-background border border-line rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入公司名称"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  邮箱 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-background border border-line rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入邮箱地址"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-background border border-line rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="请输入联系电话"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  咨询内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-line rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="请简要描述您的需求或问题"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                提交咨询
              </button>
            </form>
          </div>
        </div>

        <div className="card p-8 mt-8">
          <h2 className="text-2xl font-semibold mb-6">常见问题</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-line pb-4 last:border-b-0">
                <h3 className="font-semibold mb-2 text-primary">{faq.question}</h3>
                <p className="p">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
