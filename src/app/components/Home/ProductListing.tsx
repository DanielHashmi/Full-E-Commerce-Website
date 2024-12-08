import ProductListTopPart from "./ProductListTopPart"
import ProductCard from "./ProductCard"
import { PRODUCTS } from "@/app/types/types"
import Button from "../Button"

const Products: PRODUCTS[] = [
    {
        name: 'HAVIT HV-G92 Gamepad',
        currPrice: '$140',
        prevPrice: '$180',
        stars: [1, 2, 3, 4, 5],
        starCount: 66,
        discount: '-40%',
        image: '/controller.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'AK-900 Wired Keyboard',
        currPrice: '$960',
        prevPrice: '$1160',
        stars: [1, 2, 3, 4, 5],
        starCount: 22,
        discount: '-34%',
        image: '/keyboard.png',
        addCartBtn: true,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'IPS LCD Gaming Monitor',
        currPrice: '$370',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 33,
        discount: '-43%',
        image: '/LCD.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'S-Series Comfort Chair ',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 77,
        discount: '-23%',
        image: '/chair.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'S-Series Comfort Chair ',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 77,
        discount: '-53%',
        image: '/chair.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
]

const ProductListing = () => {
    return (
        <div className="flex flex-col xl:items-center overflow-hidden">
            <ProductListTopPart type="Today's" title="Flesh Sales" button="two" time />

            <div className="flex gap-8 px-6 justify-start py-6 xl:w-[80vw]">
                {Products.map((obj, key) => (
                    <div key={key}>
                        <ProductCard data={obj} />
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center">

                <Button name="View All Products" />
            </div>
        </div>
    )
}

export default ProductListing