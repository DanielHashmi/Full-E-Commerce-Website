import { PRODUCTS } from "../../types/types"
import ProductCard from "./ProductCard"
import ProductListTopPart from "./ProductListTopPart"

const Products: PRODUCTS[] = [
    {
        name: 'The north coat',
        currPrice: '$14f0',
        prevPrice: '$18f0',
        stars: [1, 2, 3, 4, 5],
        starCount: 66,
        discount: '',
        image: '/coat.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'Gucci duffle bag',
        currPrice: '$3604',
        prevPrice: '$3760',
        stars: [1, 2, 3, 4, 5],
        starCount: 33,
        discount: '',
        image: '/bag.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'RGB liquid CPU Cooler',
        currPrice: '$3570',
        prevPrice: '$4500',
        stars: [1, 2, 3, 4, 5],
        starCount: 66,
        discount: '',
        image: '/cooler.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    },
    {
        name: 'Small BookSelf',
        currPrice: '$375',
        prevPrice: '$400',
        stars: [1, 2, 3, 4, 5],
        starCount: 77,
        discount: '',
        image: '/chair.png',
        addCartBtn: false,
        delete: false,
        heart: true,
        showStars: true,
        colors: false,
    }
]

const ProductListing2 = () => {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            <ProductListTopPart type="This Month" title="Best Selling Products" button="one" time={false} />

            <div className="flex gap-8 px-6 justify-center sm:justify-start py-6 flex-wrap xl:w-[80vw]">
                {Products.map((obj, key) => (
                    <div key={key}>
                        <ProductCard data={obj} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductListing2