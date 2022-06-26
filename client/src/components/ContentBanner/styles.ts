import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Banner = styled.section`
    margin-bottom: 48px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    width: ${props => props.style?.width}
    height: ${props => props.style?.height}
    background-color: ${props => props.style?.backgroundColor}
    border-radius: ${props => props.style?.borderRadius}
`

export const BannerPattern = styled.img`
    width: auto;
    height: auto;
    position: absolute;
    right: 315px;
    top: -60px;
    z-index: 2;
`

export const BannerBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px;
    z-index: 1;
`

export const BannerContainer = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: relative;
`
export const BannerImageWrapper = styled.div`
    width: 100%;
    height: inherit;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
export const BannerLargeImage = styled.img`
    height: 493px;
    width: 410px;
    margin-top: 180px;
    margin-right: 138px;
`

export const BannerText = styled.div`
    justify-items: flex-end;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 349px;
    height: inherit;
    z-index: 3;
`

export const BannerTitleLarge = styled.h1`
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
`

export const BannerDescription = styled.p`
    margin: 24px 0 48px 0;
    color: white;
    font-size: 15px;
    line-height: 25px;
`

export const BannerButtonDark = styled(Link)`
    text-transform: uppercase;
    color: white;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    padding: 1.5rem 3rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: #4c4c4c;
    }
`

// Item Banner
export const TextArea = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center
    `

export const Container = styled.div`
        width: 445px;
        height: 295px;
        display: flex;
        flex-direction: column;
    `

export const TitleOverLine = styled.p`
    color: #fbaf85;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 10px;
    margin-bottom: 16px;
`

export const Title = styled.h2`
        font-weight: bold;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin-bottom: 32px
    `

export const Highlighted = styled.span`
        font-weight: bold;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #fbaf85;
    `

export const CardText = styled.p`
        font-size: 15px;
        line-height: 25px;
        color: rgba(0,0,0,0.5)
    `

export const ButtonLink = styled(Link)`
    margin-top: 40px;
    max-width: 160px;
    border: none;
    padding: 1.5rem 3rem;
    background-color: #d87D4A;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        background-color: #fbaf85;
        color: white;
        }
`

export const Section = styled.section`
        position: relative;
        width: 1110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px,
        flex-direction: ${props => props.style?.flexDirection}
        background-image: ${props => props.style?.backgroundImage}
        height: ${props => props.style?.height}
        margin-bottom: ${props => props.style?.marginBottom}
    `

// Small Cards

export const SmallCardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 6px;
`
export const SmallCardContainerReverse = styled.section`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row-reverse;
    background-color: rgba(242, 242, 242,0);
`
export const SmallCardContent = styled.div`
    width: 100%;
    margin-left: 95px;
`

export const SmallCardTitle = styled.h6`
    text-transform: uppercase;
    color: black;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
`

export const ButtonLight = styled(Link)`
    margin-top: 24px;
    max-width: 180px;
    border: 1px solid black;
    padding: 1.5rem 3rem;
    background-color: transparent;
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
    background-color: black;
    color: white;
    }
`

