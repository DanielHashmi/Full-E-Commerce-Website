import Image from 'next/image'
import React from 'react'
import Button from '../Button'

const ProductListTopPart = (props: { type: string, title: string, button: string, time: boolean }) => {
    return (
        <div className="flex justify-center w-full">
            <div className="flex justify-between flex-col sm:flex-row px-6 w-full gap-6 sm:gap-0 xl:w-[80vw] items-center mt-12 py-6">
                <div className="flex flex-col gap-6 items-center sm:items-start">
                    <div className="text-xl gap-2 flex items-center text-red-600">
                        <div className="w-6 h-12 rounded-md bg-red-600"></div>
                        {props.type}
                    </div>
                    <div className="flex lg:gap-20 gap-6 flex-col lg:flex-row lg:items-end items-center sm:items-start">
                        <div className="text-4xl text-center sm:text-start font-bold">{props.title}</div>
                        {props.time && <div className="flex">
                            {[
                                { name: 'Days', time: '03' },
                                { name: 'Hours', time: '23' },
                                { name: 'Minutes', time: '19' },
                                { name: 'Seconds', time: '56' }
                            ].map((obj, key) => (
                                <div key={key}>
                                    <div className="text-sm font-bold">{obj.name}</div>
                                    <div className="text-4xl font-bold">{obj.time}{obj.name !== 'Seconds' && <span className="text-red-600 mx-5">:</span>}</div>
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>

                {props.button === 'two' ? <div className="flex h-full items-end gap-2">
                    <Image className="size-12" src='/Left_Arrow.png' alt="Left_Arrow-icon" width={100} height={100} />
                    <Image className="size-12" src='/Right_Arrow.png' alt="Right_Arrow-icon" width={100} height={100} />
                </div> : props.button === 'one' ? <Button name='View All' /> : ''}
            </div>
        </div >
    )
}

export default ProductListTopPart