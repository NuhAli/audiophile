import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.4);
    z-index: 5;
`

export const CartContainer = styled.div`
    max-width: 1110px;
    height: 100%;
    position: relative;
`

export const Cart = styled.div`
    position: absolute;
    top: 128px;
    right: 0;
    width: 377px;
    min-height: 488px;
    max-height: auto;
    background-color: white;
    border-radius: 9px;
    padding: 31px;
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
`

export const CartTextContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    &:nth-child(1) {
        padding-bottom: 25px
    }
`

export const CartTitle = styled.h6`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
`

export const CartTitleLink = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-decoration-line: underline;
    color: rgba(0,0,0,0.5);
    cursor: pointer;
    &:hover {
        color: #d87D4A
    }
`

export const CartTotal = styled.p`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: rgba(0,0,0,0.5);
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        color: #d87D4A
    }
`

export const CartButton = styled.button`
      margin-top: 25px;
      padding: 1.5rem 3rem;
      width: 100%;
      border: none;
      border-radius: 5px;
      background-color: #d87D4A;
      color: white;
      font-weight: bold;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 1px;
      text-align: center;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.4s ease;
      cursor: pointer;
  &:hover {
        background-color: #fbaf85;
      }
      
      &:disabled {
        background-color: #FBAF85;
        cursor: default;
      }
`

export const CartItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const SingleItem = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: flex-start;
    border-radius: 5px;
    margin-bottom: 25px
`

export const ItemImage = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 16px;
    border-radius: 8px;
`

export const ItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
`

export const ItemTextTitle= styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: black;
    text-transform: uppercase;
`

export const ItemTextPrice= styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: rgba(0,0,0,0.5);
`

export const QuantityContainer = styled.div`
    height: 32px;
    width: 96px;
    left: 1148px;
    top: 234px;
    background-color: rgba(241, 241, 241, 1);
    border-radius: 0px;
    margin: auto 0;
    outline: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`

export const TotalContainer = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    
    p {
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0;
      text-align: right;
      opacity: 0.5;
    }
`

export const IconContainer = styled.div`
  height: 32px;
  width: 10px;
  color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #d87D4A;
  }
`
