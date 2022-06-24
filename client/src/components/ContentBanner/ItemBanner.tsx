import * as React from 'react'
import { ContentBannerProps } from "./BannerTypes";
import { ButtonLink, CardText, Container, Highlighted, Section, TextArea, Title, TitleOverLine } from './styles';



const ItemBanner = (props: ContentBannerProps): JSX.Element => {

    const {
        height,
        title,
        description,
        reverse,
        highlightedTitle,
        backgroundPicture,
        newProduct,
        link
    } = props

    return (
        <Section style={{ flexDirection: reverse ? "row-reverse" : 'row', marginBottom: highlightedTitle ? 0 : 160, height }}>
            {
                highlightedTitle ?
                    (
                        <TextArea style={{ justifyContent: reverse ? "flex-end" : "flex-start" }}>
                            <Container>
                                <Title>
                                    Bringing you the <Highlighted>best</Highlighted> audio gear
                                </Title>
                                <CardText>
                                    {description}
                                </CardText>
                            </Container>
                        </TextArea>
                    ) :
                    (
                        <Container>
                            {newProduct && <TitleOverLine >NEW PRODUCT</TitleOverLine>}
                            <Title>{title}</Title>
                            <CardText>{description}</CardText>
                            <ButtonLink to={`${link}`}>
                                SEE PRODUCT
                            </ButtonLink>
                        </Container>
                    )
            }
            <img
                src={backgroundPicture}
                alt="best-gear"
                height={height}
                width={540}
                style={{ borderRadius: 5 }}
            />
        </Section>
    )
}

export default ItemBanner