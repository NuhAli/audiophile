// XX99 Mark 1 Headphones
import xx99m1 from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
import xx99m11 from "../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
import xx99m12 from "../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
import xx99m13 from "../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
// XX99 Mark 2 Headphones
import xx99m2 from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
import xx99m21 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
import xx99m22 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
import xx99m23 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
//XX59 Headphones
import xx59 from "../../assets/product-xx59-headphones/desktop/image-product.jpg"
import xx591 from "../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg"
import xx592 from "../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg"
import xx593 from "../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg"
// ZX9 Speakers
import zx99 from "../../assets/product-zx9-speaker/desktop/image-product.jpg"
import zx991 from "../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
import zx992 from "../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
import zx993 from "../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
//ZX7 SPEAKER
import zx7 from "../../assets/product-zx7-speaker/desktop/image-product.jpg"
import zx71 from "../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
import zx72 from "../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
import zx73 from "../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
//YX1 Earphones
import yx1 from "../../assets/product-yx1-earphones/desktop/image-product.jpg"
import yx11 from "../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
import yx12 from "../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
import yx13 from "../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg"

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
    suggestions: { name: string, src: string, link: string }[]
}

export const headphoneProducts: ProductItemType[] = [
    {
        new: false,
        name: "XX99 Mark I Headphones",
        id: 1,
        link: "/products/headphones/1",
        productImage: xx99m1,
        description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        price: 1750,
        features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n" +
            "\n" +
            "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        boxContent: [
            {
                item: "Headphone Unit",
                quantity: 1
            },
            {
                item: "Replacment Earcups",
                quantity: 2
            },
            {
                item: "User Manual",
                quantity: 1,
            },
            {
                item: "3.5mm 5m Audio Cable",
                quantity: 1,
            }
        ],

        gallery: [xx99m11, xx99m12, xx99m13],
        suggestions: [{ name: "xx99 mark II", src: xx99m2, link: "/products/headphones/2" }, { name: "xx59", src: xx59, link: "/products/headphones/3" }, { name: "zx9 speaker", src: zx99, link: "/products/speakers/1" }]
    },
    {
        new: true,
        name: "XX99 Mark II Headphones",
        id: 2,
        link: "/products/headphones/2",
        productImage: xx99m2,
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound",
        price: 2999,
        features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n" +
            "\n" +
            "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        boxContent: [
            {
                item: "Headphone Unit",
                quantity: 1
            },
            {
                item: "Replacment Earcups",
                quantity: 2
            },
            {
                item: "User Manual",
                quantity: 1,
            },
            {
                item: "3.5mm 5m Audio Cable",
                quantity: 1,
            },
            {
                item: "Travel Bag",
                quantity: 1,
            }
        ],
        gallery: [xx99m21, xx99m22, xx99m23],
        suggestions: [{ name: "xx99 mark I", src: xx99m1, link: "/products/headphones/1" }, { name: "xx59", src: xx59, link: "/products/headphones/3" }, { name: "zx9 speaker", src: zx99, link: "/products/speakers/2" }]
    },
    {
        new: false,
        name: "XX59 Headphones",
        id: 3,
        link: "/products/headphones/3",
        productImage: xx59,
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        price: 899,
        features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n" +
            "\n" +
            "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        boxContent: [
            {
                item: "Headphone Unit",
                quantity: 1
            },
            {
                item: "Replacment Earcups",
                quantity: 2
            },
            {
                item: "User Manual",
                quantity: 1,
            },
            {
                item: "3.5mm 5m Audio Cable",
                quantity: 1,
            }
        ],
        gallery: [xx591, xx592, xx593],
        suggestions: [{ name: "xx99 mark II", src: xx99m2, link: "/products/headphones/2" }, { name: "xx99 mark I", src: xx99m1, link: "/products/headphones/1" }, { name: "zx9 speaker", src: zx99, link: "/products/speakers/2" }]
    }
]

export const speakerProducts = [
    {
        new: true,
        name: "ZX9 SPEAKER",
        productImage: zx99,
        id: 1,
        link: "/products/speakers/1",
        description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        price: 4500,
        features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching.Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
        boxContent: [
            {
                item: "Speaker Unit",
                quantity: 2
            },
            {
                item: "Speaker Cloth Panel",
                quantity: 2
            },
            {
                item: "User Manual",
                quantity: 1,
            },
            {
                item: "3.5mm 5m Audio Cable",
                quantity: 1,
            },
            {
                item: "10m Optical Cable",
                quantity: 1,
            }
        ],
        gallery: [zx991, zx992, zx993],
        suggestions: [{ name: "zx7 speaker", src: zx7, link: "/products/speakers/2" }, { name: "xx99 mark I", src: xx99m1, link: "/products/headphones/1" }, { name: "xx59", src: xx59, link: "/products/headphones/3" }]
    },
    {
        new: false,
        name: "ZX7 SPEAKER",
        id: 2,
        link: "/products/speakers/2",
        productImage: zx7,
        description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        price: 3500,
        features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n" +
            "\n" +
            "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
        boxContent: [
            {
                item: "Speaker Unit",
                quantity: 2
            },
            {
                item: "Speaker Cloth Panel",
                quantity: 2
            },
            {
                item: "User Manual",
                quantity: 1,
            },
            {
                item: "3.5mm 5m Audio Cable",
                quantity: 1,
            },
            {
                item: "7.5m Optical Cable",
                quantity: 1,
            }
        ],
        gallery: [zx71, zx72, zx73],
        suggestions: [{ name: "zx9 speaker", src: zx99, link: "/products/speakers/1" }, { name: "xx99 mark I", src: xx99m1, link: "/products/headphones/1" }, { name: "xx59", src: xx59, link: "/products/headphones/3" }]
    },
]

export const earphoneProducts: ProductItemType[] = [
    {
        new: true,
        name: "YX1 WIRELESS EARPHONES",
        id: 1,
        link: "/products/earphones/1",
        productImage: yx1,
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        price: 599,
        features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
        boxContent: [
            {
                item: "Earphone unit",
                quantity: 2
            },
            {
                item: "Multi-size Earplugs",
                quantity: 6
            },
            {
                item: "User Manual",
                quantity: 1,
            },
            {
                item: "USB-C Charging Cable",
                quantity: 1,
            },
            {
                item: "Travel Pouch",
                quantity: 1,
            }
        ],
        gallery: [yx11, yx12, yx13],
        suggestions: [{ name: "xx99 mark 1", src: xx99m1, link: "/products/headphones/2" }, { name: "xx59", src: xx59, link: "/products/headphones/3" }, { name: "zx9 speaker", src: zx99, link: "/products/speakers/1" }]
    },
]