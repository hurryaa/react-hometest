import React from 'react'

export default function NotFoundPage() {
  return (
    <div className="container stack-xl reveal">
      <div className="card p-10 text-center">
        <h1 className="h1 mb-4">页面走丢了</h1>
        <p className="p-xl mb-6">您访问的页面不存在或已被移动，建议返回首页继续浏览。</p>
        <div className="flex justify-center">
          <a href="#/" className="btn btn-primary">
            返回首页
          </a>
        </div>
      </div>
    </div>
  )
}
