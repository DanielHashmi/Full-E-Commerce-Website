export interface PRODUCTS {
    name: string;
    currPrice: string;
    prevPrice: string;
    stars: number[];
    starCount: number;
    discount: string,
    image: string;
    addCartBtn: boolean;
    delete: boolean;
    heart: boolean;
    showStars: boolean;
    colors: boolean;
}

export interface ITEMCARD {
    image: string;
    title: string;
}