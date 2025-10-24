import { useState, useEffect } from 'react'

const getPathFromHash = () => {
  if (typeof window === 'undefined') return '/'
  const hash = window.location.hash.slice(1)
  return hash || '/'
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(getPathFromHash)

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.location.hash = '/'
    }
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPathFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (path) => {
    if (typeof window === 'undefined') return
    window.location.hash = path
  }

  return { currentPath, navigate }
}
