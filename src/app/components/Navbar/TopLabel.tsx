
const TopLabel = () => {
    return (
        <div className="bg-black text-[#cccccc] sm:h-14 text-center sm:text-nowrap text-[10px] sm:text-xs lg:text-sm xl:text-base flex items-center justify-center">
            <div className="grid grid-cols-3 w-full px-6 py-2 md:px-20 lg:px-40">
                <div className="col-span-2 md:justify-self-end">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="font-bold">ShopNow</span>
                </div>
                <select className="bg-transparent w-fit justify-self-end">
                    <option>English</option>
                </select>
            </div>
        </div>
    )
}

export default TopLabel