import Image from "next/image"
import ProductListTopPart from "./ProductListTopPart"
import { ITEMCARD } from "@/app/types/types"

const itemCardData: ITEMCARD[] = [
    {
        image: '/phone.png',
        title: 'Phones',
    },
    {
        image: '/computer.png',
        title: 'Computers',
    },
    {
        image: '/smartwatch.png',
        title: 'SmartWatch',
    },
    {
        image: '/camera.png',
        title: 'Camera',
    },
    {
        image: '/headphones.png',
        title: 'HeadPhones',
    },
    {
        image: '/gaming.png',
        title: 'Gaming',
    },
]

const Categories = () => {
    return (
        <div className="flex justify-center w-full flex-col items-start border-t border-b pb-14 mt-20 justify-self-center xl:w-[80vw] overflow-hidden">
            <ProductListTopPart type='Categories' title='Browse By Category' button='two' time={false} />

            <div className="flex gap-8 px-6 py-6 pr-0">
                {itemCardData.map((obj, key) => (
                    <div key={key} className={`min-w-40 min-h-40 hover:bg-[#db4444] smooth border-2 rounded-sm  
                    ${obj.title === 'Camera' && 'text-white'}
                    ${obj.title === 'Camera' && 'bg-[#db4444] hover:bg-white'}
                    `}>
                        <div className="size-full hover:invert flex justify-center items-center flex-col smooth cursor-pointer">
                            <Image className="size-9" src={obj.image} alt="phone-icon" width={100} height={100} />
                            {obj.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories