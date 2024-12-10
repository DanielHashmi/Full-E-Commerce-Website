import Image from "next/image"
import Button from "../components/Button"

const Contact = () => {
    return (
        <div className="flex justify-center mb-32">
            <div className="xl:w-[80vw] w-full px-6 gap-6 flex flex-col">
                <div className="flex justify-between ">
                    <div className="text-gray-500 text-xs py-12 px-6">Home / <span className="font-bold">Contact</span></div>
                </div>

                <div className="flex justify-between gap-6 flex-col md:flex-row">

                    <div className="sm:p-14 p-6 flex gap-6 flex-col min-w-80 shadow-[0_0_9px_3px_#00000008]">
                        <div className="flex gap-6 flex-col border-b pb-6 border-black">
                            <div className="flex gap-2 items-center">
                                <Image className="size-8" src='/call.png' alt="call-Image" width={100} height={100} />
                                Call To Us
                            </div>
                            <p className="text-xs">We are available 24/7, 7 days a week.</p>
                            <p className="text-xs">Phone: +8801611112222</p>
                        </div>
                        <div className="flex gap-6 flex-col">
                            <div className="flex gap-2 items-center">
                                <Image className="size-8" src='/call.png' alt="call-Image" width={100} height={100} />
                                Write To US
                            </div>
                            <p className="text-xs">Fill out our form and we will contact you within 24 hours..</p>
                            <p className="text-xs">Emails: customer@exclusive.com</p>
                            <p className="text-xs">Emails: support@exclusive.com</p>
                        </div>
                    </div>

                    <div className="sm:p-14 p-6 flex gap-6 flex-col w-full shadow-[0_0_9px_3px_#00000008]">

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex sm:gap-12 gap-6 flex-col sm:flex-row text-xs justify-between w-full">
                                <div className="w-full flex flex-col xl:flex-row gap-6">

                                    <div className="flex-col flex w-full gap-2">
                                        <input type="text" className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Your Name'} />
                                    </div>

                                    <div className="flex-col flex w-full gap-2">
                                        <input type="text" className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Your Email'} />
                                    </div>

                                    <div className="flex-col flex w-full gap-2">
                                        <input type="text" className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Your Phone'} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-12 xl:gap-20 text-xs justify-between w-full">
                                <div className="w-full flex flex-col gap-6">
                                    <div className="flex-col flex w-full gap-2">
                                        <textarea rows={20} className="bg-[#f5f5f5] p-3 outline-none" placeholder={'Your Message'} />
                                    </div>
                                </div>
                            </div>


                            <div className="flex self-end items-center gap-6">
                                <Button mt={false} name="Send Message" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact