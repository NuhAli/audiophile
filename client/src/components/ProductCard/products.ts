
export interface BoxContentType {
    item: string,
    quantity: number
}

export interface ProductItemType {
    new: boolean,
    link: string;
    name: string,
    id: number,
    productImage: string,
    description: string,
    price: number,
    features: string,
    boxContent: BoxContentType[]
    gallery: string[]
    suggestions: { name: string, src: string, link: string }[],
    cartName: string,
    cartImage: string,
}