'use client'

import React, { useState } from 'react'

import ProductCard from './ProductCard'
import { MergedProducts } from '@/types'
import ImagePreviewModal from './ImagePreview'

type SectionProductProps = {
  error?: string
  products: MergedProducts[]
}

const SectionProduct = (props: SectionProductProps) => {
  const { products, error } = props

  const [openId, setOpenId] = useState<string | null>(null)

  const open = (id: string) => {
    setOpenId(id)
  }
  const close = () => {
    setOpenId(null)
  }

  return (
    <section id="products" className="bg-blush-50 py-12">
      <div className="max-w-7xl m-auto">
        <div className="px-1 sm:px-2">
          <h2 className="font-bold text-4xl">
            <span className="text-crimson-600">Reliable</span> Products <br />
            Only For You
          </h2>
          <p className="text-lg mt-2">
            Check out our curated catalog, click the card to go to the detail!
          </p>
        </div>

        {!products.length && error && (
          <div className="w-full mt-10 px-1 sm:px-2 text-red-600 font-bold">
            Error: {error}
          </div>
        )}

        <div
          className="mt-10 grid gap-2 px-1 
            sm:gap-6 grid-cols-2 sm:px-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            2xl:grid-cols-5"
        >
          {products.map((item, idx) => (
            <ProductCard key={item.id} idx={idx} product={item} onClick={open} />
          ))}
        </div>
      </div>
      <ImagePreviewModal openId={openId} products={products} onClose={close} />
    </section>
  )
}

export default SectionProduct
