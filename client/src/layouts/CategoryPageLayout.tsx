import React from 'react'
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ContentSection from "../components/ContentSection/ContentSection";
import ItemBanner from "../components/ContentBanner/ItemBanner";
import { headphones, earphones, speakers, ProductBanner } from "../components/ContentBanner/productBanners";
import { useParams } from "react-router-dom";
import { isEven } from "../utils/isEven";
import { v4 as uuid } from "uuid";
import CategoryRail from "../components/CategoryRail/CategoryRail";
import bestGear from "../assets/shared/desktop/image-best-gear.jpg";

const CategoryPageLayout = () => {
    const page = useParams()
    const currentCategory = page.category

    const renderContent = () => {
        let currentCategoryData: ProductBanner[] = []

        switch (currentCategory) {
            case 'headphones':
                currentCategoryData = headphones
                break
            case 'speakers':
                currentCategoryData = speakers
                break
            case 'earphones':
                currentCategoryData = earphones
                break
            default:
                break
        }

        const content = currentCategoryData.map((item, index) => {
            return (
                <ItemBanner
                    height={560}
                    width={1110}
                    backgroundPicture={item.image}
                    reverse={isEven(index)}
                    highlightedTitle={false}
                    title={item.title}
                    description={item.description}
                    key={uuid()}
                    newProduct={item.newItem}
                    link={item.link}
                />
            )
        })

        return (
            <>
                {content}
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
            <Hero type={'TextHero'} />
            <ContentSection children={renderContent()} />
            <Footer />
        </div>
    )
}

export default CategoryPageLayout

