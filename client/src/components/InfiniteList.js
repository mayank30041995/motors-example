import React, { useEffect, useRef, useState } from 'react'

function InfiniteList() {
  const [items, setItems] = useState(Array.from({ length: 10 }))
  const loaderRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        new Promise((resolve) =>
          setTimeout(() => {
            resolve(
              setItems((prev) => [...prev, ...Array.from({ length: 10 })])
            )
          }, 300)
        )
      }
    })
    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {items.map((_, i) => (
        <p key={i}>Item {i + 1}</p>
      ))}
      <div ref={loaderRef}>Loading more...</div>
    </div>
  )
}

export default InfiniteList
