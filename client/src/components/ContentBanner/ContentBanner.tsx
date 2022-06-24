import * as React from 'react'
import { ContentBannerProps } from "./BannerTypes";
import { Banner, BannerButtonDark, BannerContainer, BannerDescription, BannerImageWrapper, BannerLargeImage, BannerPattern, BannerText, BannerTitleLarge } from './styles';
import pattern from "../../assets/home/desktop/pattern-circles.svg"


const ContentBanner = (props: ContentBannerProps): JSX.Element => {
    const {
        height,
        width,
        backgroundColor,
        backgroundPicture,
        title,
        description,
        link
    } = props

    return (
        <Banner style={{ backgroundColor, width, height }}>
            <BannerPattern src={pattern} />
            <BannerContainer>
                <BannerImageWrapper>
                    <BannerLargeImage
                        src={backgroundPicture}
                        alt={`${backgroundPicture}-background`}
                    />
                </BannerImageWrapper>
                <BannerText>
                    <BannerTitleLarge>{title}</BannerTitleLarge>
                    <BannerDescription>{description}</BannerDescription>
                    <BannerButtonDark to={`${link}`} >
                        See Product
                    </BannerButtonDark>
                </BannerText>
            </BannerContainer>
        </Banner>
    )
}

export default ContentBanner