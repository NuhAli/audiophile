import backgroundHero from "../../assets/home/desktop/image-hero.jpg"


interface HeroData {
    subtitle: string,
    title: string,
    description: string
    backgroundImage: string;
    buttonText: string
    buttonLink: string;
}

const heroData: HeroData = {
    subtitle: 'New product',
    title: 'xx99 mark II HEADPHONES',
    description: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    backgroundImage: backgroundHero,
    buttonText: 'See product',
    buttonLink: "/products/headphones/2"
}

export default heroData