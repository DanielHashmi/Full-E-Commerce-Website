const WishlistTopPart = (props: { titleType: 'black' | 'red' | 'black-red'; btn: boolean; btnText: string; title: string }) => {
    return (
        <div className="flex justify-center w-full">
            <div className="flex justify-between flex-col sm:flex-row px-6 w-full gap-6 sm:gap-0 xl:w-[80vw] items-center mt-12 py-6">

                <div className="flex flex-col gap-6 items-center sm:items-start">
                    {props.titleType === 'black' && <div className="text-xl gap-2 flex items-center">
                        {props.title}
                    </div>}
                    {props.titleType === 'black-red' && <div className="text-xl gap-2 flex items-center text-red-600">
                        <div className="w-6 h-12 rounded-md bg-red-600"></div>
                        {props.title}
                    </div>}
                </div>

                {(props.titleType === 'black' || props.titleType === 'black-red') && <button className='border rounded-sm border-black px-10 py-3'>{props.btnText}</button>}

            </div>
        </div >
    )
}

export default WishlistTopPart