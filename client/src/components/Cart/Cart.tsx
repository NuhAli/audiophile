import * as React from "react"
import {useEffect, useState} from "react";
import axios from "axios";
import {
    CartContainer,
    CartSummaryContainer,
    CartInformationContainer,
    CartTitle,
    CartSummaryTitle,
    CartSummaryPrice, CartSummaryTotal, CartContent
} from "./styles";
import {CartButton} from "../CartModal/styles";
import {CartItemProps} from "../../observables/cart$";
import CartItem from "../CartModal/CartItem";
import formatNumber from "../../utils/formatNumber";

const Cart = () => {
    const [cart,setCart] = useState<CartItemProps[]>([])
    const [shipping] = useState<number>(50)
    const [price,setPrice] = useState("")
    const [total,setTotal] = useState("")
    const [tax,setTax] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4001/").then(r => setCart(r.data))
    }, []);

    useEffect(() => {
        let cartPrice = 0
        for (let i = 0; i < cart.length; i++) {
            cartPrice = cartPrice + (cart[i].price * cart[i].quantity)
        }
        const grandTotal = Math.round(cartPrice + shipping + (cartPrice * 0.2))
        const tax = Math.round(cartPrice * 0.2)
        setPrice(formatNumber(cartPrice))
        setTotal(formatNumber(grandTotal))
        setTax(formatNumber(tax))
    },[cart, shipping])

    const renderContent = () => {
        return cart.map((item, index) => {
            return <CartItem
                key={index}
                cartName={item?.cartName}
                quantity={item?.quantity}
                price={item?.price}
                cartImage={item?.cartImage}
                itemId={item?.itemId}
                type={"page"}
            />
        })
    }

    return (
        <CartContainer>
            <CartTitle>Summary</CartTitle>
            <CartContent>
                {renderContent()}
            </CartContent>
            <CartInformationContainer>
                <CartSummaryContainer>
                    <CartSummaryTitle>Total</CartSummaryTitle>
                    <CartSummaryPrice>{`$${price}`}</CartSummaryPrice>
                </CartSummaryContainer>
                <CartSummaryContainer>
                    <CartSummaryTitle>Shipping</CartSummaryTitle>
                    <CartSummaryPrice>{`$${shipping}`}</CartSummaryPrice>
                </CartSummaryContainer>
                <CartSummaryContainer>
                    <CartSummaryTitle>VAT (INCLUDED)</CartSummaryTitle>
                    <CartSummaryPrice>{`$${tax}`}</CartSummaryPrice>
                </CartSummaryContainer>
                <CartSummaryContainer>
                    <CartSummaryTitle>Grand Total</CartSummaryTitle>
                    <CartSummaryTotal>{`$${total}`}</CartSummaryTotal>
                </CartSummaryContainer>
            </CartInformationContainer>
            <CartButton>CONTINUE & PAY</CartButton>
        </CartContainer>
    )
}

export default Cart