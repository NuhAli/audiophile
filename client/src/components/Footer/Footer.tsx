import React from 'react';
import navBarLinks from "../NavBar/navBarLinks";
import footerData from "./footerData";
import logo from '../../assets/shared/desktop/logo.svg'
import { FacebookIcon, FooterContainer, FooterContent, FooterDescription, FooterInformation, FooterLinks, FooterNavigation, FooterSocials, FooterSubtitle, InstagramIcon, PageFooter, Rectangle, TwitterIcon } from './styles';
import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => {

    const { description, rights } = footerData

    const links = navBarLinks.map((item, index) => {
        const { link, title } = item
        return (
            <Link to={link} key={index}>
                <li>
                    {title}
                </li>
            </Link>
        )
    })

    return (
        <PageFooter>
            <FooterContainer>
                <Rectangle />
                <FooterNavigation>
                    <img src={logo} alt={'audiophile logo'} />
                    <FooterLinks>
                        {links}
                    </FooterLinks>
                </FooterNavigation>
                <FooterContent>
                    <FooterInformation>
                        <FooterDescription>{description}</FooterDescription>
                        <FooterSubtitle>{rights}</FooterSubtitle>
                    </FooterInformation>
                    <FooterSocials>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </FooterSocials>
                </FooterContent>
            </FooterContainer>
        </PageFooter>
    )
}

export default Footer;