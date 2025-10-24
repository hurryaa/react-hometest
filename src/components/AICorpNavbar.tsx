import { Book, Sunset, Trees, Zap } from "lucide-react"
import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navbarData = {
  logo: {
    url: "#",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%237c3aed'/%3E%3Cstop offset='1' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='12' fill='url(%23g)'/%3E%3C/svg%3E",
    alt: "AICorp Logo",
    title: "AICorp",
  },
  menu: [
    {
      title: "产品",
      url: "#products",
      items: [
        {
          title: "大模型API网关",
          description: "企业级API管理平台，统一接入多家大模型服务",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#gateway",
        },
        {
          title: "大模型聚合平台",
          description: "整合GPT-4、Claude等主流大模型，随时切换使用",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#platform",
        },
        {
          title: "ChatGPT镜像服务",
          description: "稳定高速的ChatGPT访问服务，解决网络限制",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#mirror",
        },
        {
          title: "会员代充服务",
          description: "便捷的ChatGPT Plus/Team会员充值服务",
          icon: <Book className="size-5 shrink-0" />,
          url: "#recharge",
        },
      ],
    },
    {
      title: "服务",
      url: "#services",
      items: [
        {
          title: "技术咨询",
          description: "专业的AI技术咨询服务，帮助企业制定AI战略",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#services",
        },
        {
          title: "系统集成",
          description: "提供完整的系统集成方案，快速部署AI能力",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#services",
        },
        {
          title: "定制开发",
          description: "根据业务需求定制开发AI应用",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#services",
        },
        {
          title: "运维支持",
          description: "7×24小时技术支持，确保系统稳定运行",
          icon: <Book className="size-5 shrink-0" />,
          url: "#services",
        },
      ],
    },
    {
      title: "案例",
      url: "#cases",
    },
    {
      title: "联系我们",
      url: "#contact",
    },
  ],
  mobileExtraLinks: [
    { name: "关于我们", url: "#about" },
    { name: "技术博客", url: "#blog" },
    { name: "隐私政策", url: "#privacy" },
    { name: "服务条款", url: "#terms" },
  ],
  auth: {
    login: { text: "登录", url: "#login" },
    signup: { text: "开始使用", url: "#products" },
  },
}

export function AICorpNavbar() {
  return (
    <div className="w-full nav-blur rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Navbar1 {...navbarData} mobileThemeToggle={<ThemeToggle />} />
        </div>
        <div className="ml-4 hidden lg:block">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
