import { Link } from "react-router-dom";
import styled from "styled-components";


export const Rail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1110px;
    margin-top: 80px;
    margin-bottom: 160px;
    section:nth-child(2) {
        margin: 0 35px;
    }
`

export const Card = styled.section`
    position: relative;
    width: 350px;
    height: 204px;
    background-color: #F1F1F1;
    border-radius: 6px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`

export const CardImage = styled.img`
    position: absolute;
    bottom: 90px;
    width: 160px;
    height: 160px;
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CardTitle = styled.h6`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 15px
`

export const CardLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    cursor: pointer;
    &:hover {
        color: #d87D4A;
    }
`

export const CardText = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    margin-right: 13.32px;
`

export const CardIcon = styled.img`
    width: 5px;
    height: 10px;
`