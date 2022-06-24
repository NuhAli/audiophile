import * as React from 'react';
import { Link } from "react-router-dom";
import navBarLinks from "./navBarLinks";
import { v4 as uuid } from "uuid";
import logo from '../../assets/shared/desktop/logo.svg'
import cartLogo from '../../assets/shared/desktop/icon-cart.svg'
import { NavBarCart, NavBarContainer, NavBarLinks, NavigationBar } from './styles';

const NavBar = (): JSX.Element => {
    const links = navBarLinks.map(link => {
        return (
            <Link to={link.link} key={uuid()}>
                <li>
                    {link.title}
                </li>
            </Link>
        )
    })
    return (
        <NavigationBar>
            <NavBarContainer>
                <img src={logo} alt={'audiophile logo'} />
                <NavBarLinks>
                    {links}
                </NavBarLinks>
                <NavBarCart src={cartLogo} alt={'cart icon'} />
            </NavBarContainer>
        </NavigationBar>
    )
}

export default NavBar;