import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

export const PageFooter = styled.footer`
    width: 100%;
    height: 365px;
    z-index: 1;
    background-color: #101010;
`

export const FooterContainer = styled.div`
    position: relative;
    max-width: 1110px;
    margin: 0 auto;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    background-color:  #101010;
`

export const Rectangle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 101px;
    background-color: #d87D4A;
`

export const FooterNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FooterLinks = styled.ul`
    width: 429px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    li {
        list-style: none;
        color: white;
        font-weight: bold;
        font-size: 13px;
        line-height: 25px;
        &:hover {
            color: #d87D4A;
        }
    }
`
export const FooterLink = styled(Link)`
    list-style: none;
    color: white;
    font-weight: bold;
    font-size: 13px;
    line-height: 25px;
    &:hover {
        color: #d87D4Ae;
    }
`

export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterInformation = styled.div`
    width: 50%;
`

export const FooterDescription = styled.p`
    color: white;
    opacity: 0.5;
    margin: 24px 0 ;
    font-size: 15px;
    line-height: 25px;
`

export const FooterSubtitle = styled.span`
    color: white;
    opacity: 0.5;
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
`

export const FooterSocials = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`

export const FacebookIcon = styled(FaFacebookSquare)`
    width: 20px;
    height: 19px;
    color: white;
    cursor: pointer;
    &:hover {
        color:  #d87D4A
    }
    &:nth-child(2) {
        margin: 0 20px;
    }
`
export const InstagramIcon = styled(FaInstagram)`
    width: 20px;
    height: 19px;
    color: white;
    cursor: pointer;
    &:hover {
        color:  #d87D4A
    }
    &:nth-child(2) {
        margin: 0 20px;
    }
`
export const TwitterIcon = styled(FaTwitter)`
    width: 20px;
    height: 19px;
    color: white;
    cursor: pointer;
    &:hover {
        color:  #d87D4A
    }
    &:nth-child(2) {
        margin: 0 20px;
    }
`