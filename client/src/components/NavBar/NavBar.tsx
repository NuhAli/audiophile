import * as React from 'react';
import { Link } from "react-router-dom";
import navBarLinks from "./navBarLinks";
import { v4 as uuid } from "uuid";
import logo from '../../assets/shared/desktop/logo.svg'
import cartLogo from '../../assets/shared/desktop/icon-cart.svg'
import { NavBarCart, NavBarContainer, NavBarLinks, NavigationBar } from './styles';
import {useEffect, useState} from "react";
import modalVisible$ from "../../observables/modalVisible$";

const NavBar = (): JSX.Element => {

    const [showModal,setShowModal] = useState<boolean>()

    useEffect(() => {
        modalVisible$.subscribe(value => {
            setShowModal(value)
        })
    },[])


    const handleClick = () => {
        modalVisible$.next(!showModal)
    }
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
                <NavBarCart src={cartLogo} alt={'cart icon'} onClick={handleClick} />
            </NavBarContainer>
        </NavigationBar>
    )
}

export default NavBar;