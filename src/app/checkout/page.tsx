import Image from "next/image";
import Button2 from "../components/Button2";

const inputsData: { name: string; label: string }[] = [
    { name: 'First Name', label: 'name' },
    { name: 'Company', label: 'company' },
    { name: 'Street Address', label: 'street' },
    { name: 'Apartment, floor, etc. (optional)', label: 'apartment' },
    { name: 'Town/City', label: 'city' },
    { name: 'Phone Number', label: 'phone' },
    { name: 'Email Address', label: 'email' },
]

const Checkout = () => {
    return (
        <div className="flex justify-center mb-32">
            <div className="xl:w-[80vw] w-full px-6 gap-6 flex flex-col">
                <div className="text-gray-500 text-xs py-12 px-6">Account / My Account / Product / View Cart / <span className="font-bold">CheckOut</span></div>

                <div className="text-4xl">Billing Details</div>

                <div className="flex xl:gap-44 md:flex-row flex-col justify-between lg:gap-36">
                    <div className="w-full flex flex-col gap-6 md:w-1/2">
                        {inputsData.map((obj, key) => (
                            <div key={key} className="flex-col flex text-[#b8b8b8]">
                                <label htmlFor={obj.label}>{obj.name}</label>
                                <input type="text" id={obj.label} className="bg-[#f5f5f5] p-4 w-full outline-none" />
                            </div>
                        ))}
                        <div className="flex gap-3 items-center text-xs mt-4">
                            <Image className="size-5" src='/checkbox.png' alt="checkbox-Image" width={100} height={100} />
                            Save this information for faster check-out next time
                        </div>
                    </div>

                    <div className="md:p-6 py-12 flex gap-4 flex-col items-start text-xs md:w-1/2">
                        <div className="flex gap-12 flex-col items-center w-full">
                            <div className="flex justify-between w-full items-center">
                                <div className="flex gap-4 items-center">
                                    <Image className="size-10" src='/controller.png' alt="controller-Image" width={100} height={100} />
                                    Game Controller
                                </div>
                                <div className="font-bold">$232</div>
                            </div>

                            <div className="flex justify-between w-full items-center">
                                <div className="flex gap-4 items-center">
                                    <Image className="size-10" src='/LCD.png' alt="LCD-Image" width={100} height={100} />
                                    LCD Monitor
                                </div>
                                <div className="font-bold">$232</div>
                            </div>
                        </div>

                        <div className="flex w-full justify-between border-b-2">
                            <div className="my-3">Subtotal:</div>
                            <div className="my-3">1750$</div>
                        </div>
                        <div className="flex w-full justify-between border-b-2">
                            <div className="my-3">Shipping:</div>
                            <div className="my-3">1750$</div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div className="my-3">Total:</div>
                            <div className="my-3">1750$</div>
                        </div>

                        <div className=" flex justify-between text-base w-full">
                            <div className="flex gap-6 items-center ">
                                <div className="size-5 rounded-full border-2 border-black"></div>
                                <div>Bank</div>
                            </div>
                            <div className="flex gap-4">
                                <Image className="lg:h-8 h-4 lg:w-14 w-5" src='/bkash.png' alt="bkash-Image" width={100} height={100} />
                                <Image className="lg:h-8 h-4 lg:w-14 w-5" src='/visa.png' alt="visa-Image" width={100} height={100} />
                                <Image className="lg:h-8 h-4 lg:w-14 w-5" src='/mastercard.png' alt="mastercard-Image" width={100} height={100} />
                                <Image className="lg:h-8 h-4 lg:w-14 w-5" src='/india.png' alt="india-Image" width={100} height={100} />
                            </div>
                        </div>
                        <div className=" flex justify-between text-base w-full">
                            <div className="flex gap-6 items-center ">
                                <div className="size-5 rounded-full border-2 border-black bg-white flex items-center justify-center">
                                    <div className="size-4 rounded-full border-2 bg-black"></div>

                                </div>
                                <div>Cash on delivery</div>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-between lg:justify-start w-full">
                            <div className="flex border-2 rounded-md w-36 md:w-full gap-3 p-3 items-center">
                                <input className="bg-transparent text-xs" type="text" placeholder="Coupon Code" />
                            </div>
                            <Button2 name="Apply Coupon" />
                        </div>
                        <Button2 name="Place Order" />
                    </div>


                </div>

            </div>
        </div >
    )
}

export default Checkout