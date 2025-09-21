import React, { useEffect, useRef, useState, Suspense } from 'react'
import CardSkeleton from './components/CardSkeleton'

export default function LazyWrapper({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(ref.current)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight: '200px', textAlign: 'center' }}>
      {visible ? (
        <Suspense fallback={<CardSkeleton>Loading section...</CardSkeleton>}>
          {children}
        </Suspense>
      ) : (
        <CardSkeleton>Loading section...</CardSkeleton>
      )}
    </div>
  )
}
