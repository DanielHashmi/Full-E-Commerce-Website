'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
    const currenPage = usePathname().replace('/', '');
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div className="flex justify-center sticky top-0 z-50 bg-white">
            <div className="flex justify-between px-6 xl:justify-between w-full xl:w-[80vw] items-center mt-12 pb-3 border-b">
                <Link href={'/'} className="text-xl font-bold">Exclusive</Link>

                <div className="hidden md:flex gap-6">
                    <Link href={'/'} className={`hover:underline underline-offset-4 cursor-pointer ${currenPage === '' && 'underline'}`}>Home</Link>
                    <Link href={'/contact'} className={`hover:underline underline-offset-4 cursor-pointer ${currenPage === 'contact' && 'underline'}`}>Contact</Link>
                    <Link href={'/about'} className={`hover:underline underline-offset-4 cursor-pointer ${currenPage === 'about' && 'underline'}`}>About</Link>
                    <Link href={'/signup'} className={`hover:underline underline-offset-4 cursor-pointer ${(currenPage === 'signup' || currenPage === 'login') && 'underline'}`}>Sign Up</Link>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 relative">
                    <div className="flex sm:bg-[#F5F5F5] gap-3 p-3 items-center">
                        <input className="bg-transparent text-xs hidden sm:block" type="text" placeholder="What are you looking for?" />
                        <Image className="size-4" src='/search.png' alt="search-icon" width={100} height={100} />
                    </div>
                    <Image className="size-4" src='/heart.png' alt="heart-icon" width={100} height={100} />

                    <Link href={`/cart`}>
                        <Image className="size-6" src='/cart.png' alt="cart-icon" width={100} height={100} />
                    </Link>
                    
                    <Image className="size-7 md:hidden" src='/menu.svg' alt="menu-icon" width={100} height={100} />
                    <Image onClick={() => setShowDropDown(!showDropDown)} className="size-6 cursor-pointer hover:border rounded-full border-gray-200" src='/user.png' alt="user-icon" width={100} height={100} />
                    <div className={`bg-[#6a6a6a82] backdrop-blur-md text-white text-nowrap overflow-hidden gap-6 flex flex-col smooth rounded-lg absolute right-0 top-12 z-50 ${showDropDown ? 'size-64 p-6' : 'size-0 p-0'}`}>
                        <div className="flex gap-2 hover:opacity-50 cursor-pointer">
                            <Image className="size-6" src='/user-icon.png' alt="user-icon" width={100} height={100} />
                            Manage My Account
                        </div>
                        <div className="flex gap-2 hover:opacity-50 cursor-pointer">
                            <Image className="size-6" src='/mailbag.png' alt="mailbag-icon" width={100} height={100} />
                            My Order
                        </div>
                        <div className="flex gap-2 hover:opacity-50 cursor-pointer">
                            <Image className="size-6" src='/cancel.png' alt="cancel-icon" width={100} height={100} />
                            My Cancellations
                        </div>
                        <div className="flex gap-2 hover:opacity-50 cursor-pointer">
                            <Image className="size-6" src='/star-icon.png' alt="star-icon" width={100} height={100} />
                            My Reviews
                        </div>
                        <div className="flex gap-2 hover:opacity-50 cursor-pointer">
                            <Image className="size-6" src='/logout.png' alt="logout-icon" width={100} height={100} />
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar