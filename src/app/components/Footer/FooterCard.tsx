import Image from "next/image"
import Link from "next/link";

const FooterCard = (data: { input: boolean; title: string; links: string[]; bold: boolean }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className={`text-2xl ${data.bold && 'font-bold'}`}>{data.title}</div>

            {data.bold && <div className="font-bold">Subscribe</div>}

            {data.links.map((link, key) => (
                <Link href={`/${link.toLowerCase()}`} key={key} className="opacity-90 hover:opacity-50 cursor-pointer">{link}</Link>
            ))}

            {data.input && <div className="flex border-2 rounded-md min-w-fit w-[13rem] gap-3 p-3 items-center">
                <input className="bg-transparent text-xs" type="text" placeholder="Enter your email" />
                <Image className="size-6" src='/send.png' alt="search-icon" width={100} height={100} />
            </div>}
        </div>
    )
}

export default FooterCard