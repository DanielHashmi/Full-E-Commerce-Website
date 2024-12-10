import Image from "next/image"
import Support from "../components/Home/Support"

const About = () => {
    return (
        <div className="flex justify-center overflow-hidden flex-col gap-20">
            <div className="xl:ml-[9vw] w-full  lg:pl-6 px-6 lg:p-0 lg:gap-6 flex flex-col min-h-[37rem] lg:h-screen">
                <div className="flex">
                    <div className="text-[#b3b3b3] text-2s py-6 lg:py-12 lg:px-6">Account / <span className="">About</span></div>
                </div>


                <div className="flex lg:justify-between h-full flex-col-reverse lg:flex-row gap-12">
                    <div className="text-sm flex self-center w-full flex-col gap-6 pb-6">
                        <h1 className="text-4xl xl:text-6xl font-bold">Our Story</h1>

                        <p className="lg:max-w-md">
                            Launced in 2015, Exclusive is South Asias premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </p>

                        <p className="lg:max-w-md">
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>

                    <div className="bg-[#eb7ea8] relative h-96 w-full lg:h-full">
                        <Image className="object-contain object-left-bottom" src={'/Shoppinggirls1.png'} alt="things-Image" fill />
                    </div>

                </div>
            </div>

            <div className="flex self-center xl:justify-between gap-6 p-6 xl:w-[80vw] justify-center text-center sm:justify-start flex-wrap xl:flex-nowrap">
                <div className="border hover:bg-[#db4444] hover:text-white smooth cursor-pointer p-20 rounded-lg flex flex-col items-center w-fit">
                    <Image className="size-12" src={'/Services.png'} alt="Services-icon" width={100} height={100} />
                    <h1 className="text-2xl font-bold">10.5k</h1>
                    <p className="text-xs">Sallers active our site</p>
                </div>
                <div className="border hover:bg-[#db4444] hover:text-white smooth cursor-pointer p-20 rounded-lg flex flex-col items-center w-fit">
                    <Image className="size-12 invert" src={'/dolor.png'} alt="dolor-icon" width={100} height={100} />
                    <h1 className="text-2xl font-bold">10.5k</h1>
                    <p className="text-xs">Sallers active our site</p>
                </div>
                <div className="border hover:bg-[#db4444] hover:text-white smooth cursor-pointer p-20 rounded-lg flex flex-col items-center w-fit">
                    <Image className="size-12" src={'/shop.png'} alt="shop-icon" width={100} height={100} />
                    <h1 className="text-2xl font-bold">10.5k</h1>
                    <p className="text-xs">Sallers active our site</p>
                </div>
                <div className="border hover:bg-[#db4444] hover:text-white smooth cursor-pointer p-20 rounded-lg flex flex-col items-center w-fit">
                    <Image className="size-12" src={'/money.png'} alt="money-icon" width={100} height={100} />
                    <h1 className="text-2xl font-bold">10.5k</h1>
                    <p className="text-xs">Sallers active our site</p>
                </div>
            </div>

            <div className="flex self-center xl:justify-between gap-6 p-6 xl:w-[80vw] w-full justify-center  sm:justify-start flex-wrap xl:flex-nowrap">
                <div className="font-bold w-full sm:w-1/3 min-w-60 flex flex-col gap-3">
                    <div className="w-full 2xl:h-[30rem] min-h-96 sm:min-h-60 relative bg-[#f5f5f5]" >
                        <Image className="object-contain object-bottom" src='/man.png' alt="man-Image" fill />
                    </div>
                    <div>

                        <div className="text-2xl">Tom Cruise</div>
                        <div className="text-xs opacity-50">Founder & Chairman</div>
                    </div>

                    <div className="flex gap-4">
                        <Image className="size-5 invert" src={'/twitter.png'} alt="twitter-icon" width={100} height={100} />
                        <Image className="size-5 invert" src={'/insta.png'} alt="insta-icon" width={100} height={100} />
                        <Image className="size-5 invert" src={'/linkedin.png'} alt="linkedin-icon" width={100} height={100} />
                    </div>
                </div>
                <div className="font-bold w-full sm:w-1/3 min-w-60 flex flex-col gap-3">
                    <div className="w-full 2xl:h-[30rem] min-h-96 sm:min-h-60 relative bg-[#f5f5f5]" >
                        <Image className="object-contain object-bottom" src='/girl.png' alt="girl-Image" fill />
                    </div>
                    <div>

                        <div className="text-2xl">Emma Watson</div>
                        <div className="text-xs opacity-50">Founder & Chairman</div>
                    </div>

                    <div className="flex gap-4">
                        <Image className="size-5 invert" src={'/twitter.png'} alt="twitter-icon" width={100} height={100} />
                        <Image className="size-5 invert" src={'/insta.png'} alt="insta-icon" width={100} height={100} />
                        <Image className="size-5 invert" src={'/linkedin.png'} alt="linkedin-icon" width={100} height={100} />
                    </div>
                </div>
                <div className="font-bold w-full sm:w-1/3 min-w-60 flex flex-col gap-3">
                    <div className="w-full 2xl:h-[30rem] min-h-96 sm:min-h-60 relative bg-[#f5f5f5]" >
                        <Image className="object-contain object-bottom" src='/man.png' alt="man-Image" fill />
                    </div>
                    <div>

                        <div className="text-2xl">Will Smith</div>
                        <div className="text-xs opacity-50">Founder & Chairman</div>
                    </div>

                    <div className="flex gap-4">
                        <Image className="size-5 invert" src={'/twitter.png'} alt="twitter-icon" width={100} height={100} />
                        <Image className="size-5 invert" src={'/insta.png'} alt="insta-icon" width={100} height={100} />
                        <Image className="size-5 invert" src={'/linkedin.png'} alt="linkedin-icon" width={100} height={100} />
                    </div>
                </div>
            </div>

            <div className="gap-2 mx-auto items-center hidden sm:flex">
                <div className="rounded-full bg-[#b3b3b3] size-2"></div>
                <div className="rounded-full bg-[#b3b3b3] size-2"></div>
                <div className="rounded-full bg-red-500 border-2 border-white size-3"></div>
                <div className="rounded-full bg-[#b3b3b3] size-2"></div>
                <div className="rounded-full bg-[#b3b3b3] size-2"></div>
            </div>

            <Support topArrow={false} padding="p-20 pt-10" />
        </div>
    )
}

export default About