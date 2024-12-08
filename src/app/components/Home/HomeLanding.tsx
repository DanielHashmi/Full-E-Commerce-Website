import Image from "next/image"

const HomeLanding = () => {
    const SideButton = [
        "Woman's Fashions ",
        "Men's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
    ]

    return (
        <div className="flex justify-center">
            <div className="xl:w-[80vw] gap-6 flex justify-center lg:justify-between w-full px-6">

                <div className="hidden flex-col gap-3 xl:gap-6 lg:flex text-sm lg:text-base w-fit border-r 2xl:pr-24 pr-16 pt-6 text-nowrap">
                    {SideButton.map((btn, index) => (
                        <div className="hover:underline underline-offset-4 cursor-pointer" key={index}>{btn}</div>
                    ))}
                </div>

                <div className="bg-black w-full lg:w-fit flex flex-col gap-6 items-center text-white xl:p-20 md:px-14 md:pt-4 md:pb-2 mt-6 py-12">
                    <div className="flex items-center w-full justify-between flex-col-reverse md:flex-row">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 items-center text-gray-200">
                                <Image className="size-14" src='/apple.png' alt="apple-icon" width={100} height={100} />
                                <span>iPhone 14 Series</span>
                            </div>
                            <div className="text-4xl w-72 font-semibold">
                                Up to 10% off Voucher
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="underline-offset-8 underline">Shop Now</span>
                                <Image className="size-4" src='/right arrow.png' alt="arrow-icon" width={100} height={100} />
                            </div>
                        </div>
                        <div className="relative size-[15rem] sm:size-[25rem] md:h-[16rem] md:w-[22rem]">
                            <Image className="" fill src='/iphone.png' alt="iphone-image" />
                        </div>
                    </div>

                    <div className="flex gap-2 justify-self-center">
                        <div className="rounded-full bg-gray-500 size-3"></div>
                        <div className="rounded-full bg-gray-500 size-3"></div>
                        <div className="rounded-full bg-red-500 border-2 border-white size-3"></div>
                        <div className="rounded-full bg-gray-500 size-3"></div>
                        <div className="rounded-full bg-gray-500 size-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLanding