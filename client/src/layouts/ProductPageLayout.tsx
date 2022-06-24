import * as React from 'react';
import CategoryRail from '../components/CategoryRail/CategoryRail';
import ItemBanner from '../components/ContentBanner/ItemBanner';
import ContentSection from '../components/ContentSection/ContentSection';
import Hero from '../components/Hero/Hero';
import Footer from "../components/Footer/Footer";
import bestGear from "../assets/shared/desktop/image-best-gear.jpg";
import ProductCard from "../components/ProductCard/ProductCard";

const ProductPageLayout = () => {

    const renderContent = (): JSX.Element => {
        return (
            <>
                <ProductCard />
                <CategoryRail />
                <ItemBanner
                    height={588}
                    width={1110}
                    backgroundPicture={bestGear}
                    reverse={false}
                    highlightedTitle={true}
                    title={'Bringing you the best audio gear'}
                    description={'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'}
                />
            </>
        )
    }

    return (
        <div className="common-page">
            <Hero type={"TextHero"} />
            <ContentSection children={renderContent()} />
            <Footer />
        </div>
    )
}

export default ProductPageLayout