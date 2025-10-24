export const site = {
  name: 'AICorp',
  nav: [
    { label: '首页', href: '#/' },
    { label: '产品', href: '#/products' },
    { label: '服务', href: '#/services' },
    { label: '案例', href: '#/cases' },
    { label: '联系我们', href: '#/contact' },
    { label: '关于我们', href: '#/about' }
  ],
  hero: {
    eyebrow: '以极简之美，释放 AI 价值',
    title: '领先的AI技术服务提供商',
    subtitle: '智能化转型的最佳伙伴',
    desc: '为企业和个人提供全方位的AI解决方案，从API网关到会员服务，一站式满足您的所有需求。',
    ctaPrimary: { label: '开始体验', href: '#/products' },
    ctaSecondary: { label: '联系我们', href: '#/contact' },
    buttons: [
      { label: '产品服务', href: '#/products', icon: '🚀' },
      { label: '技术方案', href: '#/services', icon: '⚡' },
      { label: '成功案例', href: '#/cases', icon: '🎯' },
      { label: '立即咨询', href: '#/contact', icon: '💬' }
    ]
  },
  products: [
    {
      icon: '🚀',
      title: '大模型API网关系统',
      desc: '企业级API管理平台，统一接入多家大模型服务，提供负载均衡、流量控制、监控告警等完整功能。',
      features: ['统一接口标准', '智能负载均衡', '实时监控分析', '灵活计费策略'],
      link: '#/products'
    },
    {
      icon: '🌐',
      title: '大模型聚合使用网站',
      desc: '一站式AI模型体验平台，整合GPT-4、Claude、文心一言等主流大模型，随时切换，按需使用。',
      features: ['多模型聚合', '统一账户体系', '使用记录追踪', '灵活套餐选择'],
      link: '#/products'
    },
    {
      icon: '🔐',
      title: 'ChatGPT官方镜像服务',
      desc: '稳定、高速的ChatGPT访问服务，解决网络限制问题，提供与官方一致的使用体验和完整功能支持。',
      features: ['官方同步更新', '稳定高速访问', '数据安全保障', '7×24小时可用'],
      link: '#/products'
    },
    {
      icon: '💎',
      title: 'ChatGPT会员代充服务',
      desc: '便捷的ChatGPT Plus/Team会员充值服务，支持多种支付方式，专业客服团队全程协助，安全快速到账。',
      features: ['多种套餐选择', '即时开通服务', '安全支付保障', '专属客服支持'],
      link: '#/products'
    }
  ],
  features: [
    {
      title: '技术领先',
      desc: '采用最新AI技术栈，持续跟进行业前沿，为客户提供最优质的服务体验。'
    },
    {
      title: '安全可靠',
      desc: '企业级安全防护，数据加密传输，严格隐私保护，让您安心使用。'
    },
    {
      title: '7×24服务',
      desc: '全天候技术支持，快速响应客户需求，确保服务稳定运行。'
    },
    {
      title: '灵活定制',
      desc: '根据客户实际需求，提供个性化定制方案，满足不同场景应用。'
    }
  ],
  logos: ['Acme', 'ByteWave', 'Nova', 'Solvex', 'Lumina', 'Zeno', 'Helix', 'Mosaic', 'Nimbus', 'CoreAI', 'Orbit', 'Aperture']
}
