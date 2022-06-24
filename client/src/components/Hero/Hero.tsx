import * as React from 'react'
import NavBar from "../NavBar/NavBar";
import heroData from "./heroData";
import { ImageHero, TextHero, TextHeroTitle, HeroContainer, HeroTitle, HeroContent, HeroDescription, HeroInnerText, HeroButton, HeroSubtitle } from "./styles"

import { useParams } from "react-router-dom";


interface HeroPropTypes {
    type: 'ImageHero' | 'TextHero' | 'none'
}

const Hero = (props: HeroPropTypes): JSX.Element => {

    const { type } = props

    const { category } = useParams()

    const { subtitle, title, description, buttonText, buttonLink } = heroData

    const renderHero = () => {
        if (type === 'ImageHero') {
            return (
                <ImageHero className={'hero'}>
                    <NavBar />
                    <HeroContainer>
                        <HeroContent>
                            <HeroInnerText>
                                <HeroSubtitle>{subtitle}</HeroSubtitle>
                                <HeroTitle>{title}</HeroTitle>
                                <HeroDescription>{description}</HeroDescription>
                                <HeroButton to={buttonLink}>{buttonText}</HeroButton>
                            </HeroInnerText>
                        </HeroContent>
                    </HeroContainer>
                </ImageHero>
            )
        }
        if (type === 'TextHero') {
            return (
                <TextHero>
                    <NavBar />
                    <TextHeroTitle>{category}</TextHeroTitle>
                </TextHero>
            )
        }
        return <NavBar />
    }

    return (
        renderHero()
    )
}

export default Hero