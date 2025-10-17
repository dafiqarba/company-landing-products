import React from 'react'

import { MergedProducts } from '@/types'

type ProductCardProps = {
  idx: number
  product: MergedProducts
  onClick: (id: string) => void
}

const CARD_ACCENTS = ['bg-card-1', 'bg-card-2', 'bg-card-3']

const getColorByIndex = (index: number): string => {
  return CARD_ACCENTS[index % CARD_ACCENTS.length]
}

const ProductCard = (props: ProductCardProps) => {
  const { idx, product, onClick } = props

  return (
    <div
      className={`cursor-pointer hover:shadow-2xl aspect-[3/4] overflow-hidden shadow-lg ${getColorByIndex(
        idx
      )}`}
      onClick={(e) => onClick(product.id)}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute w-2/3 h-2/3 z-10 rounded-4xl overflow-hidden flex shrink-0 img-card
            sm:h-2/3
            lg:w-8/12 lg:h-8/12
            2xl:w-9/12 2xl:h-9/12"
        >
          <img
            alt={product.name}
            src={product.imageUrl}
            className="w-full h-full p-0 object-cover hover:w-[110%] hover:h-[110%] transition-all ease-in-out cursor-pointer"
          />
        </div>
        <div className="card z-0">
          <div className="absolute bottom-0 text-black text-center w-full">
            <p
              title={product.name}
              className="text-sm font-bold text-white bg-brand-500 inline-block px-6 py-1 rounded-2xl truncate max-w-11/12
    sm:text-lg md:text-base lg:text-lg 2xl:text-base 2xl:px-4"
            >
              {product.name || 'No Title'}
            </p>
            <p
              className="text-sm mb-2 mt-[-4px] font-bold text-brand-700
    sm:text-base sm:mt-1 sm:mb-6 md:text-sm md:mt-0 md:mb-4 lg:mt-[-8px] lg:text-base 2xl:text-sm 2xl:mb-1"
            >
              Product ID: {product.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
