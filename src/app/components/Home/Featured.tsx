import Image from "next/image"
import ProductListTopPart from "./ProductListTopPart"

const Featured = () => {
    return (
        <div className="flex justify-center">

            <div className="xl:w-[80vw] w-full flex-col">
                <ProductListTopPart type="Featured" title="New Arrival" button="" time={false} />

                <div className="flex flex-col lg:flex-row text-white h-screen lg:h-[70vh] py-10 gap-8 px-6">

                    <div className="lg:w-1/2 h-full relative bg-black">
                        <Image className="object-contain object-bottom" src={'/playstation.png'} alt="playstation-Image" fill />
                        <div className="absolute bottom-2 p-4 sm:p-8 flex flex-col gap-3">
                            <div className="text-2xl">PlayStation 5</div>
                            <p className="sm:w-72 opacity-90 text-sm">
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <span className="underline-offset-4 underline">Shop Now</span>
                        </div>
                    </div>


                    <div className="lg:w-1/2 h-full relative flex flex-col sm:flex-row lg:flex-col gap-8">
                        <div className="lg:w-full sm:w-1/2 lg:h-1/2 h-full relative bg-black">
                            <Image className="object-contain object-right-bottom" src={'/woman.png'} alt="playstation-Image" fill />
                            <div className="absolute bottom-2 sm:top-2 lg:top-[4.5rem] p-4 sm:p-8 flex flex-col gap-3">
                                <div className="sm:text-2xl">Women&apos;s Collections</div>
                                <p className="md:w-72 opacity-90 text-xs sm:text-sm">
                                    Featured woman collections that give you another vibe.
                                </p>
                                <span className="text-xs sm:text-base underline-offset-4 underline">Shop Now</span>
                            </div>
                        </div>
                        <div className="lg:h-1/2 h-full sm:w-1/2 lg:w-full sm:flex-col lg:flex-row flex gap-8">
                            <div className="lg:w-1/2 sm:h-1/2 lg:h-full w-full relative bg-black">
                                <Image className="p-6 object-contain object-right-bottom" src={'/smallspeakers.png'} alt="playstation-Image" fill />
                                <div className="absolute bottom-2 p-4 sm:p-8 flex-col gap-1 flex">
                                    <div className="sm:text-2xl">Speakers</div>
                                    <p className="opacity-90 text-xs sm:text-sm">
                                        Amazon wireless speakers
                                    </p>
                                    <span className="text-xs sm:text-base underline-offset-4 underline">Shop Now</span>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:h-1/2 lg:h-full w-full relative bg-black">
                                <Image className="p-6 object-contain object-right-bottom" src={'/perfume.png'} alt="playstation-Image" fill />
                                <div className="absolute bottom-2 p-4 sm:p-8 flex-col gap-1 flex">
                                    <div className="sm:text-2xl">Perfume</div>
                                    <p className="opacity-90 text-xs sm:text-sm">
                                        GUCCI INTENSE OUD EDP
                                    </p>
                                    <span className="text-xs sm:text-base underline-offset-4 underline">Shop Now</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured