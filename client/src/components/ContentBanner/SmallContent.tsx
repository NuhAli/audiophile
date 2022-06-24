import * as React from 'react'
import { ContentBannerProps } from "./BannerTypes";
import { Banner, ButtonLight, SmallCardContainerReverse, SmallCardContent, SmallCardImage, SmallCardTitle } from './styles';

const SmallContent = (props: ContentBannerProps): JSX.Element => {

    const {
        height,
        width,
        backgroundPicture,
        backgroundColor,
        title,
        type,
        link
    } = props

    return (
        <Banner style={{ width, height, borderRadius: 6 }}>
            {
                type === 'image-only' ?
                    (<SmallCardImage src={backgroundPicture} alt={'ear-buds'} />) :
                    (
                        <SmallCardContainerReverse style={{ backgroundColor }}>
                            <SmallCardContent >
                                <SmallCardTitle>
                                    {title}
                                </SmallCardTitle>
                                <ButtonLight to={`${link}`}>See product</ButtonLight>
                            </SmallCardContent>
                        </SmallCardContainerReverse>
                    )
            }
        </Banner>
    )
}

export default SmallContent