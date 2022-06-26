import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImageHero = styled.header`
        height: 729px;
        width: 100%;
        bottom: 400px;
        background-image: url("../../assets/home/desktop/image-hero.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% ;
`

export const TextHero = styled.header`
        height: 338px;
        width: 1440px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding-bottom: 97px
`

export const TextHeroTitle = styled.h2`
        font-weight: bold;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.5px;
        color: white;
        text-transform: uppercase;
        margin-bottom: 24px;
`
export const HeroContainer = styled.div`
        padding: 20px 0;
        max-width: 1110px;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
`

export const HeroContent = styled.div`
        display: flex;
        justify-content: flex-start;
`

export const HeroTitle = styled.h1`
        margin-bottom: 24px;
        width: 400px;
        font-weight: bold;
        font-size: 56px;
        line-height: 58px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: white
`

export const HeroInnerText = styled.div`
        margin-top: 12.8rem;
        width: 398px;
        max-height: 500px;
        display: flex;
        flex-direction: column;
`

export const HeroSubtitle = styled.p`
        margin-bottom: 24px;
        color: white;
        opacity: 0.5;
        letter-spacing: 10px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        line-height: 25px;
`

export const HeroDescription = styled.p`
        margin-bottom: 24px;
        padding-right: 49px;
        opacity: 0.75;
        color: white;
        font-size: 15px;
        line-height: 25px;
`

export const HeroButton = styled(Link)`
        margin-right: 238px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 1.5rem 3rem;
        border: none;
        background-color: #d87D4A;
        color: white;
        font-size: 13px;
        font-weight: 700;
        line-height: 18px;
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
        background-color: #fbaf85;
        }
`