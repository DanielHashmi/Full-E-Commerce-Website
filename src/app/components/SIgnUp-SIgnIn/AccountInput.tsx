import Image from "next/image"
import Link from "next/link"

const AccountInput = ({ currentPage }: { currentPage: string }) => {
    return (
        <div className="flex flex-col items-start w-full md:w-1/3 gap-4 p-6 md:p-0">
            <h1 className="text-4xl">{currentPage === 'signup' ? 'Create an account' : 'Log in to Exclusive'}</h1>
            <h2 className="">Enter your details below</h2>
            {currentPage === 'signup' && <input className="border-b-2 mt-2 py-1 w-full outline-none" type="text" placeholder="Name" />}
            <input className="border-b-2 mt-2 py-1 w-full outline-none" type="text" placeholder="Email or Phone Number" />
            <input className="border-b-2 mt-2 py-1 w-full outline-none" type="text" placeholder="Password" />

            <button className="w-full py-3 rounded-md text-background bg-[#db4444]">Create Account</button>

            {currentPage === 'signup' && <button className="w-full py-3 rounded-md text-black border-2 flex gap-2 justify-center">
                <Image className="size-5" src={'/google-icon.svg'} alt="google-icon" width={100} height={100} />
                Sign up with Google
            </button>
            }

            {currentPage === 'signup' && <div className="text-center w-full">
                <span>Already have account? <Link href={'/login'} className="hover:underline hover:underline-offset-4">Log in</Link></span>
            </div>}

            <div className="flex items-center mt-6 w-full justify-between ">
                {currentPage === 'login' && <button className="px-12 sm:px-6 lg:px-12 py-3 rounded-sm text-background bg-[#db4444]">Log in</button>
                }
                {currentPage === 'login' && <Link href={'forgot'} className="text-[#db4444] text-xs lg:text-base">Forgot Password?</Link>}
            </div>


        </div>
    )
}

export default AccountInput