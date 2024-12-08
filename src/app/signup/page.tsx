'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"
import AccountInput from "../components/SIgnUp-SIgnIn/AccountInput";

const SignUp = () => {
    const currenPage = usePathname().replace('/', ''); // this is only for /signup or /login paths

    return (
        <div className="md:w-[95vw] h-screen flex items-center lg:gap-20 gap-10 flex-col md:flex-row">
            <div className="bg-[#cbe4e9] h-1/2 lg:h-5/6 relative w-full md:w-2/3">
                <Image className="object-contain object-left-bottom" src={'/signupimage.png'} alt="things-Image" fill />
            </div>

            <AccountInput currentPage="signup" />
        </div>
    )
}

export default SignUp