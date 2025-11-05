'use client'
import "./styles.css"
import Carousel from 'acme-carousel'
import { useState } from 'react'
import React from 'react'
 
export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)

  const items = [
  { src: 'https://picsum.photos/id/1015/800/600', alt: 'Landscape 1' },
  { src: 'https://picsum.photos/id/1016/800/600', alt: 'Landscape 2' },
  { src: 'https://picsum.photos/id/1018/800/600', alt: 'Landscape 3' },
]

 
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View pictures</button>
      {/* Works, since Carousel is used within a Client Component */}
      {isOpen && <Carousel items={items} />}
    </div>
  )
}