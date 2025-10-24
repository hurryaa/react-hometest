import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  {
    company: '某大型电商企业',
    industry: '电商零售',
    challenge: '面临客服咨询量大、人力成本高、响应速度慢等问题',
    solution: '接入大模型API网关，构建智能客服系统，实现7×24小时自动化服务',
    results: ['客服成本降低60%', '响应速度提升5倍', '客户满意度提升40%'],
    icon: '🛒'
  },
  {
    company: '某金融科技公司',
    industry: '金融科技',
    challenge: '需要快速处理大量金融文档，人工审核效率低、错误率高',
    solution: '使用大模型聚合平台，结合GPT-4和Claude进行智能文档分析',
    results: ['文档处理效率提升10倍', '错误率降低85%', '合规性提升30%'],
    icon: '💰'
  },
  {
    company: '某教育培训机构',
    industry: '在线教育',
    challenge: '课程内容生产周期长，个性化辅导资源不足',
    solution: '采用ChatGPT镜像服务，开发AI助教系统提供个性化学习辅导',
    results: ['内容生产效率提升3倍', '学员学习效果提升45%', '续费率提升25%'],
    icon: '📚'
  },
  {
    company: '某咨询公司',
    industry: '企业咨询',
    challenge: '报告编写耗时长，市场研究信息收集困难',
    solution: '使用ChatGPT Plus会员服务，提升团队协作与研究效率',
    results: ['报告产出速度提升4倍', '研究深度提升50%', '客户交付周期缩短40%'],
    icon: '📊'
  },
  {
    company: '某互联网公司',
    industry: '互联网',
    challenge: '多模型接入复杂，管理维护成本高',
    solution: '部署API网关统一管理，实现多模型智能调度',
    results: ['开发成本降低70%', '系统稳定性提升95%', '响应速度提升3倍'],
    icon: '💻'
  },
  {
    company: '某制造业企业',
    industry: '智能制造',
    challenge: '生产文档管理混乱，技术知识传承困难',
    solution: '构建企业知识库+AI问答系统，实现智能知识管理',
    results: ['知识查询效率提升8倍', '新员工培训周期缩短60%', '生产效率提升20%'],
    icon: '🏭'
  }
]

export default function CasesPage() {
  return (
    <div className="container stack-xl reveal">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="text-center mb-12">
          <h1 className="h1 mb-4">成功案例</h1>
          <p className="p-xl">看看我们如何帮助各行业客户实现AI驱动的业务创新</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{item.company}</h3>
                <span className="inline-block px-3 py-1 mt-2 text-xs rounded-full bg-primary/20 text-primary">
                  {item.industry}
                </span>
              </div>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted mb-1">业务挑战</h4>
                  <p className="p text-sm">{item.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted mb-1">解决方案</h4>
                  <p className="p text-sm">{item.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-muted mb-2">实施效果</h4>
                  <ul className="space-y-1">
                    {item.results.map((result) => (
                      <li key={result} className="text-sm flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="card p-8 mt-12 text-center">
          <h2 className="h2 mb-4">您的项目也能创造成功</h2>
          <p className="p-xl mb-6 max-w-2xl mx-auto">
            无论您处于哪个行业，面临什么挑战，我们都能为您提供专业的AI解决方案
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#/contact" className="btn btn-primary">
              免费咨询
            </a>
            <a href="#/products" className="btn">
              了解产品
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
