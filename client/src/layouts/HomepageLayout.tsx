import * as React from 'react'
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import '../App.scss'
import ContentSection from "../components/ContentSection/ContentSection";
import CategoryRail from "../components/CategoryRail/CategoryRail";
import ContentBanner from "../components/ContentBanner/ContentBanner";
import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import ThinContentBanner from "../components/ContentBanner/ThinContentBanner";
import zx7 from "../assets/home/desktop/image-speaker-zx7.jpg";
import SmallContent from "../components/ContentBanner/SmallContent";
import yx1 from "../assets/home/desktop/image-earphones-yx1.jpg";
import ItemBanner from "../components/ContentBanner/ItemBanner";
import bestGear from "../assets/shared/desktop/image-best-gear.jpg";

const HomepageLayout = (): JSX.Element => {
    return (
        <div className="common-page">
            <Hero type={'ImageHero'} />
            <ContentSection>
                <CategoryRail />
                <ContentBanner
                    height={560}
                    width={1110}
                    backgroundColor={'#D87D4A'}
                    title={'ZX9 Speakers'}
                    description={'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'}
                    backgroundPicture={zx9}
                    link={"/products/speakers/1"}
                />
                <ThinContentBanner
                    height={320}
                    width={1110}
                    backgroundColor={'#D87D4A'}
                    title={'ZX7 Speakers'}
                    backgroundPicture={zx7}
                    link={"/products/speakers/2"}
                />
                <div className="small-cards">
                    <SmallContent
                        height={320}
                        width={540}
                        type={'image-only'}
                        backgroundPicture={yx1}
                        link={"/products/earphones/1"}
                    />
                    <SmallContent
                        height={320}
                        width={540}
                        type={'text-only'}
                        backgroundColor={'#F2F2F2'}
                        title={'YX1 EARPHONES'}
                        link={"/products/earphones/1"}
                    />
                </div>
                <ItemBanner
                    height={588}
                    width={1110}
                    backgroundPicture={bestGear}
                    reverse={false}
                    highlightedTitle={true}
                    title={'Bringing you the best audio gear'}
                    description={'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'}
                />
            </ContentSection>
            <Footer />
        </div>
    )
}

export default HomepageLayout