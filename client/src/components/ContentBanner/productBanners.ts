import xx99mk2 from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import xx99mk1 from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import xx59 from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import zx9 from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import zx7 from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import yx1 from '../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'

export interface ProductBanner {
    title: string;
    id: number;
    link: string;
    description: string;
    image: string;
    newItem: boolean;
}

export const headphones: ProductBanner[] = [
    {
        title: 'XX99 Mark II Headphones',
        id: 1,
        link: "/products/headphones/1",
        description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
        image: xx99mk2,
        newItem: true
    },
    {
        title: 'XX99 Mark I Headphones',
        id: 2,
        link: "/products/headphones/2",
        description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
        image: xx99mk1,
        newItem: false
    },
    {
        title: 'XX59 Headphones',
        id: 3,
        link: "/products/headphones/3",
        description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
        image: xx59,
        newItem: false
    },
]

export const speakers: ProductBanner[] = [
    {
        title: 'ZX9 \n' +
            'SPEAKER',
        id: 1,
        link: "/products/speakers/1",
        description: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
        image: zx9,
        newItem: true
    },
    {
        title: 'ZX7\n' +
            'SPEAKER',
        id: 2,
        link: "/products/speakers/2",
        description: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
        image: zx7,
        newItem: false
    },
]

export const earphones: ProductBanner[] = [
    {
        title: 'YX1 WIRELESS\n' +
            'EARPHONES',
        id: 1,
        link: "/products/earphones/1",
        description: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
        image: yx1,
        newItem: true
    },
]