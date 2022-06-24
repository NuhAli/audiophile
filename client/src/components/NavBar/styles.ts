import styled from 'styled-components';

export const NavigationBar = styled.nav`
    width: 1110px;
    height: 9.6rem;
    margin: 0 auto;
`
export const NavBarContainer = styled.div`
    max-width: 1110px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 32px 0;
    border-bottom: 1px solid rgba(255,255,255,0.2);
`
export const NavBarLinks = styled.ul`
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
export const NavBarCart = styled.img`
    color: white;
    cursor: pointer;
    &:hover {
        color: #d87D4A;
    }
`