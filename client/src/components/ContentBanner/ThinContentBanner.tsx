import * as React from 'react'
import { ContentBannerProps } from "./BannerTypes";
import { BannerBackground, ButtonLight, Section, SmallCardContainerReverse, SmallCardContent, SmallCardTitle } from './styles';


const ThinContentBanner = (props: ContentBannerProps): JSX.Element => {

    const {
        height,
        width,
        backgroundPicture,
        title,
        link
    } = props

    const backgroundPictureStyle = {
        width,
        height,
        src: backgroundPicture,
        marginBottom: 48,
    }

    return (
        <Section style={backgroundPictureStyle}>
            <BannerBackground src={backgroundPicture} alt={`${title}`} />
            <SmallCardContainerReverse>
                <SmallCardContent>
                    <SmallCardTitle>
                        {title}
                    </SmallCardTitle>
                    <ButtonLight to={`${link}`}>See product</ButtonLight>
                </SmallCardContent>
            </SmallCardContainerReverse>
        </Section>
    )
}

export default ThinContentBanner