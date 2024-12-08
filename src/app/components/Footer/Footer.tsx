
import Image from "next/image"
import FooterCard from "./FooterCard"

const Footer = () => {
    return (
        <div>
            <div className="bg-black flex xl:justify-center justify-start text-white py-20 px-6 md:px-28 gap-20 flex-wrap">
                <div className="flex gap-20 flex-col sm:flex-row">
                    <FooterCard bold input links={['Get 10% off your first order']} title="Exclusive" />
                    <FooterCard
                        bold={false}
                        input={false}
                        title="Support"
                        links={[
                            '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
                            'exclusive@gmail.com',
                            '+88015-88888-9999'
                        ]} />
                </div>

                <FooterCard
                    bold={false}
                    input={false}
                    title="Account"
                    links={[
                        'My Account',
                        'Login / Register',
                        'Cart',
                        'Wishlist',
                        "Shop",
                    ]} />

                <div className="flex gap-20 flex-wrap">

                    <FooterCard
                        bold={false}
                        input={false}
                        title="Quick Link"
                        links={[
                            'Privacy Policy',
                            'Terms Of Use',
                            'FAQ',
                            'Contact',
                        ]} />

                    <div className="flex flex-col gap-6">
                        <div className="text-2xl">Download App</div>
                        <p className="text-xs opacity-80">Save $3 with App New User Only</p>
                        <div className="flex gap-2 items-center">
                            <Image className="size-20" src='/qrcode.png' alt="qrcode-icon" width={100} height={100} />
                            <div className="flex flex-col gap-2">
                                <Image className="h-9 w-24" src='/google.png' alt="qrcode-icon" width={100} height={100} />
                                <Image className="h-9 w-24" src='/appstore.png' alt="qrcode-icon" width={100} height={100} />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <Image className="size-6" src='/facebook.png' alt="facebook-icon" width={100} height={100} />
                            <Image className="size-6" src='/twitter.png' alt="twitter-icon" width={100} height={100} />
                            <Image className="size-6" src='/insta.png' alt="insta-icon" width={100} height={100} />
                            <Image className="size-6" src='/linkedin.png' alt="linkedin-icon" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-gray-700 pb-6 text-center">Copyright Rimel 2022. All right reserved</div>
        </div>
    )
}

export default Footer