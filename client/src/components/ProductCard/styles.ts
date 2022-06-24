import styled from "styled-components"

export const Card = styled.section`
    width: 1110px;
    height: 560px;
    margin-bottom: 160px;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
`

export const TextContainer = styled.div`
    width: 445px;
    height: 560px;
    display: flex;
    align-items: flex-start;
    justify-content: center ;
    flex-direction: column;
`

export const Overline = styled.p`
    color: #fbaf85;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-bottom: 16px
`

export const ProductTitle = styled.h2`
    font-weight: bold;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.43px;
    margin-bottom: 32px;
    text-transform: uppercase;
`

export const ProductDescriptionStyle = styled.p`
    font-size: 15px;
    line-height: 25px;
    color: rgba(0,0,0,0.5);
`

export const ProductPrice = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.29px;
    color: rgba(0,0,0,1);
    margin: 32px 0 47px 0 ;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-direction: "flex-start";
`
export const Icon = styled.span`
    color: rgba(0,0,0,0.25);
    font-weight: bold;
    font-size: 13px;
    line-height: 17.76px;
    vertical-align: top;
    cursor: pointer
`

export const Counter = styled.span`
    color: rgba(0,0,0,1);
    font-weight: bold;
    font-size: 13px;
    line-height: 17.76px;
    vertical-align: top
    cursor: pointer
`

export const QuantityBox = styled.div`
    width: 120px;
    height: 48px;
    background-color: #f1f1f1;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`

export const ProductButton = styled.button`
    width: 160px;
    margin-left: 16px;
    padding: 1.5rem 3rem;
    border: none;
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