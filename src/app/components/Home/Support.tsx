import Image from "next/image"

const Support = ({ topArrow = true, padding = 'lg:p-28 py-20' }: { topArrow?: boolean, padding?: string }) => {
    return (
        <div>
            <div className={`flex justify-center flex-col md:flex-row ${padding} px-6 gap-20`}>
                <div className="flex text-center gap-6 items-center flex-col">
                    <div className="bg-black p-2 rounded-full border-8 border-[#c1c0c1]">
                        <Image className="size-9" src={'/truck.png'} alt="truck-icon" width={100} height={100} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold">FREE AND FAST DELIVERY</div>
                        <p className="text-sm">Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className="flex text-center gap-6 items-center flex-col">
                    <div className="bg-black p-2 rounded-full border-8 border-[#c1c0c1]">
                        <Image className="size-9" src={'/headphone-icon.png'} alt="headphones-icon" width={100} height={100} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold">24/7 CUSTOMER SERVICE</div>
                        <p className="text-sm">Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className="flex text-center gap-6 items-center flex-col">
                    <div className="bg-black p-2 rounded-full border-8 border-[#c1c0c1]">
                        <Image className="size-9" src={'/shield.png'} alt="shield-icon" width={100} height={100} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold">MONEY BACK GUARANTEE</div>
                        <p className="text-sm">We return money within 30 days</p>
                    </div>
                </div>
            </div>
            {topArrow && <div className="lg:px-20 px-2 pb-6">
                <a href="#">
                    <Image className="size-12 justify-self-end" src={'/up-arrow.png'} alt="up-arrow-icon" width={100} height={100} />
                </a>
            </div>}

        </div>
    )
}

export default Support