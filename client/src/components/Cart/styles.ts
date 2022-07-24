import styled from "styled-components";

export const CartContainer = styled.div`
  height: auto;
  width: 350px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-left: 30px;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.29px;
  text-align: left;
  margin-bottom: 32px;
  text-transform: uppercase;
`

export const CartInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 32px;
`

export const CartContent = styled.div`
  align-self: flex-start;
  height: auto;
  width: 100%;
`

export const CartSummaryContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &:nth-child(2) {
    margin: 8px 0;
  }
  &:last-child {
    margin-top: 24px ;
  }
`

export const CartSummaryTitle = styled.p`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0;
  text-align: left;
  opacity: 0.5;
`

export const CartSummaryPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0;
  text-align: right;
`

export const CartSummaryTotal = styled(CartSummaryPrice)`
  color: #d87D4A;
`