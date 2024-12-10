import { PRODUCTS } from '@/app/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ data }: { data: PRODUCTS }) => {
    return (
        <Link href={'/productdetail'}  className="font-bold flex flex-col gap-3">
            <div className="size-64 relative bg-[#f5f5f5]" >
                <Image className="p-10 object-contain" src={data.image} alt="Controller-Image" fill />

                {data.addCartBtn && <div className='flex gap-2 bg-black absolute w-full text-white text-xs p-3 bottom-0 justify-center opacity-80 hover:opacity-100 cursor-pointer'>
                    <Image className="size-4" src='/cart-icon.png' alt="cart-icon" width={100} height={100} />
                    Add to Cart
                </div>}

                {data.discount && <div className={`absolute top-2 left-2 ${data.discount === 'New' ? 'bg-[#00ff66]' : 'bg-[#db4444]'} text-[#ffffffe2] text-xs  py-1 px-4 rounded-md`}>{data.discount}</div>}

                <div className="absolute right-2 flex flex-col gap-2 top-2">
                    {data.heart && <Image className="size-9 rounded-full bg-background p-2" src='/heart.png' alt="heart-icon" width={100} height={100} />}
                    {!data.delete && <Image className="size-9 rounded-full bg-background p-2" src='/eye.png' alt="eye-icon" width={100} height={100} />}
                    {data.delete && <Image className="size-9 rounded-full bg-background p-2" src='/delete.png' alt="delete-icon" width={100} height={100} />}
                </div>
            </div>

            <div>{data.name}</div>
            <div><span className="text-[#db4444]">{data.currPrice}</span> <span className="opacity-50 line-through">{data.prevPrice}</span></div>
            <div className="flex gap-1 items-center">
                {data.stars.map((key) => (
                    <Image key={key} className="size-4" src='/star.png' alt="star-icon" width={100} height={100} />
                ))}
                {data.showStars && (Array.from({ length: 5 - data.stars.length })).map((_, key) => (
                    <Image key={key} className="size-4 grayscale" src='/star.png' alt="star-icon" width={100} height={100} />
                ))}
                {data.showStars && <span className="opacity-50">({data.starCount})</span>}
            </div>
            {data.discount === 'New' && data.colors && <div className='flex gap-2'>
                <div className="rounded-full bg-yellow-200 border-2 border-black size-5"></div>
                <div className="rounded-full bg-red-500 size-5"></div>
            </div>}
        </Link>
    )
}

export default ProductCard