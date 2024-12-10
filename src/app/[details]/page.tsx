import Image from "next/image"
import Button2 from "../components/Button2"
import { PRODUCTS } from "../types/types"
import ProductListTopPart from "../components/Home/ProductListTopPart"
import ProductCard from "../components/Home/ProductCard"


const Products: PRODUCTS[] = [

    {
        name: 'AK-900 Wired Keyboard',
        currPrice: '$960',
        prevPrice: '$1160',
        stars: [1, 2, 3, 4, 5],
        starCount: 22,
        discount: '-34%',
        image: '/keyboard.png',
        addCartBtn: true,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'IPS LCD Gaming Monitor',
        currPrice: '$370',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 33,
        discount: '-43%',
        image: '/LCD.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'S-Series Comfort Chair ',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 77,
        discount: '-23%',
        image: '/chair.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'S-Series Comfort Chair ',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 77,
        discount: '-53%',
        image: '/chair.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
]

const Details = () => {
    return (
        <div className="flex justify-center mb-32 overflow-hidden">
            <div className="xl:w-[80vw] w-full px-6 gap-6 flex flex-col">
                <div className="flex justify-between ">
                    <div className="text-gray-500 text-xs py-12 px-6">Account / Gaming / <span className="font-bold">Havic HV G-92 Gamepad</span></div>
                </div>


                <div className="w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
                    <div className="w-full flex flex-col-reverse md:flex-row gap-6 md:gap-0">

                        <div className="lg:flex-col flex-row gap-6 md:pr-6 flex md:hidden lg:flex justify-between">
                            <Image className="object-cover md:w-32 md:h-24 w-1/5" src='/p1.png' alt="controller-image" width={200} height={200} />
                            <Image className="object-cover md:w-32 md:h-24 w-1/5" src='/p2.png' alt="controller-image" width={200} height={200} />
                            <Image className="object-cover md:w-32 md:h-24 w-1/5" src='/p3.png' alt="controller-image" width={200} height={200} />
                            <Image className="object-cover md:w-32 md:h-24 w-1/5" src='/p4.png' alt="controller-image" width={200} height={200} />
                        </div>

                        <div className="font-bold w-full min-h-96 min-w-60 flex flex-col gap-3">
                            <div className="size-full relative bg-[#f5f5f5]" >
                                <Image className="object-contain" src='/ps5controller.png' alt="controller-Image" fill />
                            </div>
                        </div>
                    </div>

                    <div className="md:pl-6 flex gap-4 flex-col items-start text-xs">
                        <div className="text-base font-bold">Havic HV G-92 Gamepad</div>
                        <div className="flex gap-1 items-center">
                            {Array.from({ length: 5 }).map((_, key) => (
                                <Image key={key} className="size-3" src='/star.png' alt="star-icon" width={100} height={100} />
                            ))}

                            <span className="opacity-50 ">(145 Reviews) | <span className="text-[10px] text-green-500"> In Stock</span></span>
                        </div>
                        <div className="text-xl">$192.00</div>

                        <p className="max-w-md border-b border-black pb-6">
                            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                        </p>

                        <div>
                            <div className="flex gap-2 items-center">
                                Colours:
                                <div className='flex gap-2'>
                                    <div className="rounded-full bg-[#a0bce0] ring-black border-white border-2 ring-1 size-3"></div>
                                    <div className="rounded-full bg-red-500 size-3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            Sizes:
                            <div className='flex gap-2 w-40 h-6'>
                                <div className="border rounded-md border-[#787878] hover:bg-red-600 hover:text-white cursor-pointer smooth flex items-center justify-center size-full">XS</div>
                                <div className="border rounded-md border-[#787878] hover:bg-red-600 hover:text-white cursor-pointer smooth flex items-center justify-center size-full">S</div>
                                <div className="border rounded-md border-[#787878] hover:bg-red-600 hover:text-white cursor-pointer smooth flex items-center justify-center size-full">M</div>
                                <div className="border rounded-md border-[#787878] hover:bg-red-600 hover:text-white cursor-pointer smooth flex items-center justify-center size-full">L</div>
                                <div className="border rounded-md border-[#787878] hover:bg-red-600 hover:text-white cursor-pointer smooth flex items-center justify-center size-full">XL</div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex w-40 h-10">
                                <div className="hover:bg-red-600 hover:text-white smooth cursor-pointer rounded-md text-3xl border w-1/4 flex items-center justify-center">-</div>
                                <div className="border font-bold w-2/4 flex items-center justify-center">2</div>
                                <div className="bg-red-600 text-white smooth cursor-pointer rounded-md text-2xl border w-1/4 flex items-center justify-center">+</div>
                            </div>
                            <Button2 name="Buy Now" />
                            <Image className="size-10 border rounded-md border-[#787878] p-2" src='/heart.png' alt="heart-icon" width={100} height={100} />
                        </div>

                        <div className="w-full">
                            <div className="border border-[#787878] rounded-t-md p-3 py-5 flex gap-3">
                                <Image className="size-8 invert" src='/truck.png' alt="truck-icon" width={100} height={100} />
                                <div>
                                    <div>Free Delivery</div>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="border border-t-0 border-[#787878] rounded-b-md p-3 py-5 flex gap-3">
                                <Image className="size-8" src='/return.png' alt="return-icon" width={100} height={100} />
                                <div>
                                    <div>Return Delivery</div>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="gap-6 hidden md:flex lg:hidden justify-between">
                    <Image className="object-cover w-1/5" src='/p1.png' alt="controller-image" width={200} height={200} />
                    <Image className="object-cover w-1/5" src='/p2.png' alt="controller-image" width={200} height={200} />
                    <Image className="object-cover w-1/5" src='/p3.png' alt="controller-image" width={200} height={200} />
                    <Image className="object-cover w-1/5" src='/p4.png' alt="controller-image" width={200} height={200} />
                </div>


                <ProductListTopPart type="Related Item" title="" button="" time={false} />

                <div className="flex gap-8 px-6 justify-start py-6 xl:w-[80vw]">
                    {Products.map((obj, key) => (
                        <div key={key}>
                            <ProductCard data={obj} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Details