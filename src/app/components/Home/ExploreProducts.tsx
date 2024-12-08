import ProductListTopPart from "./ProductListTopPart"
import ProductCard from "./ProductCard"
import { PRODUCTS } from "@/app/types/types"
import Button from "../Button"

const P1: PRODUCTS[] = [
    {
        name: 'Breed Dry Dog Food',
        currPrice: '$140',
        prevPrice: '$180',
        stars: [1, 2, 3],
        starCount: 66,
        discount: '-40%',
        image: '/dogfood.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false
    },
    {
        name: 'CANON EOS DSLR Camera',
        currPrice: '$960',
        prevPrice: '$1160',
        stars: [1, 2, 3, 4],
        starCount: 22,
        discount: '-34%',
        image: '/canan.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false
    },
    {
        name: 'ASUS FHD Gaming Laptop',
        currPrice: '$370',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 33,
        discount: '-43%',
        image: '/asus.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false
    },
    {
        name: 'Curology Product Set',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4],
        starCount: 77,
        discount: '-23%',
        image: '/curology.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false
    },
]

const P2: PRODUCTS[] = [
    {
        name: 'Kids Electric Car',
        currPrice: '$140',
        prevPrice: '$180',
        stars: [1, 2, 3, 4, 5],
        starCount: 66,
        discount: 'New',
        image: '/kidcar.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: true,
    },
    {
        name: 'Jr. Zoom Soccer Cleats',
        currPrice: '$960',
        prevPrice: '$1160',
        stars: [1, 2, 3, 4, 5],
        starCount: 22,
        discount: 'New',
        image: '/zoomsoccer.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: true,
    },
    {
        name: 'GP11 Shooter USB Gamepad',
        currPrice: '$370',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 33,
        discount: 'New',
        image: '/shootergampad.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: true,
    },
    {
        name: 'Quilted Satin Jacket',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 77,
        discount: 'New',
        image: '/satinjacket.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: true,
    },
]

const ExploreProducts = () => {
    return (
        <div className="flex flex-col xl:items-center overflow-hidden">
            <ProductListTopPart type="Our Products" title="Explore Our Products" button="two" time={false} />

            <div className="flex gap-8 px-6 justify-start py-6 xl:w-[80vw]">
                {P1.map((obj, key) => (
                    <div key={key}>
                        <ProductCard data={obj} />
                    </div>
                ))}
            </div>
            <div className="flex gap-8 px-6 justify-start py-6 xl:w-[80vw]">
                {P2.map((obj, key) => (
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

export default ExploreProducts