import ProductCard from "../components/Home/ProductCard"
import WishlistTopPart from "../components/Wishlist/WishlistTopPart"
import { PRODUCTS } from "../types/types"

const Products: PRODUCTS[] = [
    {
        name: 'Kids Electric Car',
        currPrice: '$140',
        prevPrice: '$180',
        stars: [],
        starCount: 66,
        discount: '-45%',
        image: '/kidcar.png',
        addCartBtn: true,
        delete: true,
        heart: false,
        showStars: false,
        colors: false,
    },
    {
        name: 'Jr. Zoom Soccer Cleats',
        currPrice: '$960',
        prevPrice: '$1160',
        stars: [],
        starCount: 22,
        discount: '',
        image: '/zoomsoccer.png',
        addCartBtn: true,
        delete: true,
        heart: false,
        showStars: false,
        colors: false,
    },
    {
        name: 'GP11 Shooter USB Gamepad',
        currPrice: '$370',
        prevPrice: '$400',
        stars: [],
        starCount: 33,
        discount: '',
        image: '/shootergampad.png',
        addCartBtn: true,
        delete: true,
        heart: false,
        showStars: false,
        colors: false,
    },
    {
        name: 'Quilted Satin Jacket',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [],
        starCount: 77,
        discount: '',
        image: '/satinjacket.png',
        addCartBtn: true,
        delete: true,
        heart: false,
        showStars: false,
        colors: false,
    },
]


const Products2: PRODUCTS[] = [

    {
        name: 'AK-900 Wired Keyboard',
        currPrice: '$960',
        prevPrice: '$1160',
        stars: [1, 2, 3],
        starCount: 22,
        discount: '-55%',
        image: '/keyboard.png',
        addCartBtn: false,
        delete: false,
        heart: false,
        showStars: true,
        colors: false,
    },
    {
        name: 'IPS LCD Gaming Monitor',
        currPrice: '$370',
        prevPrice: '$400',
        stars: [1, 2, 3],
        starCount: 33,
        discount: '',
        image: '/LCD.png',
        addCartBtn: false,
        delete: false,
        heart: false,
        showStars: true,
        colors: false,
    },
    {
        name: 'HAVIT HV-G92 Gamepad',
        currPrice: '$140',
        prevPrice: '$180',
        stars: [1, 2, 3],
        starCount: 66,
        discount: 'New',
        image: '/controller.png',
        addCartBtn: false,
        delete: false,
        heart: false,
        showStars: true,
        colors: false,
    },
    {
        name: 'S-Series Comfort Chair ',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3],
        starCount: 77,
        discount: '',
        image: '/chair.png',
        addCartBtn: false,
        delete: false,
        heart: false,
        showStars: true,
        colors: false,
    },
]

const Wishlist = () => {
    return (
        <div className="flex flex-col xl:items-center overflow-hidden">
            <WishlistTopPart title='Wishlist (4)' titleType="black" btnText="Move All To Bag" btn />

            <div className="flex gap-8 px-6 justify-start py-6 xl:w-[80vw]">
                {Products.map((obj, key) => (
                    <div key={key}>
                        <ProductCard data={obj} />
                    </div>
                ))}
            </div>

            <WishlistTopPart title='Just For You' titleType="black-red" btnText="See All" btn />

            <div className="flex gap-8 px-6 justify-start py-6 xl:w-[80vw] pb-24">
                {Products2.map((obj, key) => (
                    <div key={key}>
                        <ProductCard data={obj} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wishlist