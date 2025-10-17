'use client'

import { useEffect } from 'react'

import { MergedProducts } from '@/types'

type ImagePreviewProps = {
  openId: string | null
  products: MergedProducts[]
  onClose: () => void
}

const ImagePreview = (props: ImagePreviewProps) => {
  const { openId, products, onClose } = props

  const item = products.find((i) => i.id === openId)

  useEffect(() => {
    if (openId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [openId])

  if (!openId || !item) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* panel */}
      <div className="relative mx-auto mt-16 w-[min(92vw,760px)] rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-b-gray-300">
          <h3 className="font-semibold text-lg truncate">{item.name}</h3>
          <button
            onClick={onClose}
            className="border-none px-1 py-1 text-sm cursor-pointer hover:opacity-85 rounded-full bg-red-500"
          >
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current text-white"
            >
              <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="relative w-full bg-slate-100 overflow-hidden rounded-lg">
            {item.imageUrl ? (
              <img
                sizes="90vw"
                alt={item.name}
                src={item.imageUrl}
                className="object-contain"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-slate-500">
                No image
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreview
