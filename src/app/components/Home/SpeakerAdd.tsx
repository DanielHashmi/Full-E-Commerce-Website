import Image from "next/image"

const SpeakerAdd = () => {
    return (
        <div className="flex justify-center py-20 px-6">
            <div className="bg-black flex-col-reverse md:flex-row w-screen xl:w-[78vw] xl:h-[65vh] justify-between items-start md:items-center text-white flex p-10 sm:p-14">
                <div className="flex w-1/2 flex-col gap-6 items-start">
                    <div className="text-[#00ff66]">Categories</div>
                    <div className="xl:text-5xl sm:text-4xl text-3xl xl:w-full sm:w-80 w-52 font-bold">
                        Enhance Your Music Experience
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white text-black rounded-full size-12 flex flex-col text-[10px] justify-center items-center">
                            <span className="font-bold">23</span>
                            <span>Hours</span>
                        </div>
                        <div className="bg-white text-black rounded-full size-12 flex flex-col text-[10px] justify-center items-center">
                            <span className="font-bold">05</span>
                            <span>Days</span>
                        </div>
                        <div className="bg-white text-black rounded-full size-12 flex flex-col text-[10px] justify-center items-center">
                            <span className="font-bold">59</span>
                            <span>Minutes</span>
                        </div>
                        <div className="bg-white text-black rounded-full size-12 flex flex-col text-[10px] justify-center items-center">
                            <span className="font-bold">35</span>
                            <span>Seconds</span>
                        </div>
                    </div>

                    <button className="px-12 py-3 rounded-sm text-white bg-[#00ff66] text-nowrap">Buy Now!</button>

                </div>

                <div className="sm:h-96 h-72 w-full max-w-[40rem]">
                    <div className="size-full relative" >
                        <Image className="size-full" src={'/layer.png'} alt="layer-Image" fill />
                        <Image className="py-10 lg:py-0 object-contain" src={'/speaker.png'} alt="speaker-Image" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeakerAdd