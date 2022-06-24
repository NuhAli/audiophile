import { Link } from "react-router-dom";
import styled from "styled-components";

export const Rail = styled.div`
    width: 1110px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 120px;
`

export const RailTitle = styled.h3`
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.15px;
    text-transform: uppercase;
    margin-bottom: 64px;
`

export const Cards = styled.div`
    width: 1110px;
    height: 500px;
    display: flex;
    justify-content: space-between;
`

export const Card = styled.div`
    width: 350px;
    height: 471px;
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.img`
    height: 318px;
    width: 350px;
    border-radius: 8px;
`

export const CardTitle = styled.h5`
    margin: 40px 0 32px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 1.7px;
    text-align: center;
    text-transform: uppercase;
`

export const CardButton = styled(Link)`
    width: 160px;
    align-self: center;
    padding: 1.5rem 3rem;
    border: none;
    text-transform: uppercase;
    background-color: #d87D4A;
    color: white;
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        background-color: #fbaf85;
    }
`