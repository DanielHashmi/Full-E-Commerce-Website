import Image from "next/image"
import Button2 from "../components/Button2"

const Cart = () => {
    return (
        <div className="flex justify-center">
            <div className="xl:w-[80vw] w-full px-6 gap-6 flex flex-col">
                <div className="text-gray-500 text-xs py-12 px-6">Home / <span className="font-bold">Cart</span></div>

                <div className="p-6 flex border justify-between">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>

                <div className="p-6 flex border justify-between items-center text-xs">
                    <div className="flex gap-2 items-center">
                        <Image className="size-8" src='/LCD.png' alt="LCD-Image" width={100} height={100} />
                        LCD Monitor
                    </div>
                    <div className="font-bold">$232</div>

                    <div className="flex border items-center p-2 gap-4 rounded-md">
                        01
                        <Image className="w-4 h-6" src='/updown.png' alt="updown-icon" width={100} height={100} />
                    </div>

                    <div className="font-bold">$332</div>
                </div>

                <div className="p-6 flex border justify-between items-center text-xs">
                    <div className="flex gap-2 items-center">
                        <Image className="size-8" src='/controller.png' alt="controller-image" width={100} height={100} />
                        LCD Monitor
                    </div>
                    <div className="font-bold">$232</div>

                    <div className="flex border items-center p-2 gap-4 rounded-md">
                        01
                        <Image className="w-4 h-6" src='/updown.png' alt="updown-icon" width={100} height={100} />
                    </div>

                    <div className="font-bold">$332</div>
                </div>

                <div className="flex justify-between">
                    <button className='border rounded-sm border-black px-3 sm:px-10 py-3'>Return To Shop</button>
                    <button className='border rounded-sm border-black px-3 sm:px-10 py-3'>Update Cart</button>
                </div>

                <div className="pt-12 pb-24 flex justify-between items-start flex-col gap-12 lg:gap-0 lg:flex-row">
                    <div className="flex gap-3 justify-between lg:justify-start w-1/2">
                        <div className="flex border-2 rounded-md w-[15rem] gap-3 p-3 items-center">
                            <input className="bg-transparent text-xs" type="text" placeholder="Coupon Code" />
                        </div>
                        <Button2 name="Apply Coupon" />
                    </div>

                    <div className="border border-black p-6 rounded-md w-full sm:min-w-96 md:w-1/2 lg:w-96 flex flex-col">
                        <span className="font-bold mb-3">Cart Total</span>
                        <div className="flex justify-between border-b-2">
                            <div className="my-3">Subtotal:</div>
                            <div className="my-3">1750$</div>
                        </div>

                        <div className="flex justify-between border-b-2">
                            <div className="my-3">Shipping:</div>
                            <div className="my-3">2322$</div>
                        </div>

                        <div className="flex justify-between border-b-2">
                            <div className="my-3">Total:</div>
                            <div className="my-3">23232$</div>
                        </div>

                        <Button2 name="Process to checkout" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart