import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar/NavBar";
import CartItem from './CartItem';
import {RemoveScroll} from 'react-remove-scroll';
import {Backdrop, CartContainer, Cart, CartTextContainer, CartTitle, CartTitleLink, CartTotal, CartButton, CartItems} from "./styles";
import modalVisible$ from "../../observables/modalVisible$";
import {CartItemProps} from "../../observables/cart$";
import axios from "axios";

const CartModal = (): JSX.Element => {
    const [cart,setCart] = useState<CartItemProps[]>([])
    const [,setModal] = useState(false)
    const [,setTotal] = useState<number>(0)
    const [price,setPrice] = useState<number>(0)

    useEffect(() => {
        modalVisible$.subscribe(value => {
            setModal(value)
        })

        axios.get("http://localhost:4001/").then(r => setCart(r.data))
    },[])

    useEffect(() => {
        let cartPrice = 0
        for (let i = 0; i < cart.length; i++) {
            cartPrice = cartPrice + (cart[i].price * cart[i].quantity)
        }
        setPrice(cartPrice)
        setTotal(cart.length);
    },[cart])

    const renderContent = () => {
        return cart.map((item, index) => {
            return <CartItem
                        key={index}
                        cartName={item?.cartName}
                        quantity={item?.quantity}
                        price={item?.price}
                        cartImage={item?.cartImage}
                        itemId={item?.itemId}
            />
        })
    }

    const removeCartContent = () => {
        axios.delete("http://localhost:4001/").then(r => setCart([]))
    }

    return (
        <RemoveScroll removeScrollBar={false}>
            <Backdrop>
                <CartContainer>
                    <NavBar />
                    <Cart>
                        <CartTextContainer>
                            <CartTitle>
                                Cart ({cart.length})
                            </CartTitle>
                            <CartTitleLink onClick={removeCartContent}>
                                Remove all
                            </CartTitleLink>
                        </CartTextContainer>
                        <CartItems>
                            {renderContent()}
                        </CartItems>
                        <CartTextContainer>
                            <CartTotal>
                                Total
                            </CartTotal>
                            <CartTitle>
                                $ {price}
                            </CartTitle>
                        </CartTextContainer>
                        <CartButton disabled={cart.length === 0}>Checkout</CartButton>
                    </Cart>
                </CartContainer>
            </Backdrop>
        </RemoveScroll>
    )
}

export default CartModal