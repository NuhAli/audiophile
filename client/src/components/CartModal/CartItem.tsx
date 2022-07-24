import React, {useEffect, useState} from "react";
import {SingleItem, ItemImage, ItemTextContainer, ItemTextTitle, ItemTextPrice, QuantityContainer,IconContainer, TotalContainer} from "./styles";
import {Counter, Icon} from "../ProductCard/styles";
import axios from "axios";
import formatNumber from "../../utils/formatNumber";


interface CartItemProps {
    quantity: number,
    price: number,
    cartImage: string,
    cartName: string,
    itemId: number,
    type: "modal" | "page"
}

const CartItem = ({cartName,quantity,price,cartImage,itemId,type}: CartItemProps) => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        axios.put("http://localhost:4001/", {data: {quantity: counter, itemId}}).then(r => r)
    }, [counter, itemId]);
    

    const increment = () => setCounter(prevState => prevState + 1)

    const decrement = () => setCounter(prevState => prevState > 1 ? prevState - 1 : 1)

    useEffect(() => {
        setCounter(quantity)
    }, [quantity]);


    return (
        <SingleItem>
            <ItemImage src={cartImage}/>
            <ItemTextContainer>
                <ItemTextTitle>{cartName}</ItemTextTitle>
                <ItemTextPrice>{`$ ${formatNumber(price)}`}</ItemTextPrice>
            </ItemTextContainer>
            {
                type === "page" ?
                    (
                        <TotalContainer>
                            <p>{`x${quantity}`}</p>
                        </TotalContainer>
                    ):(
                        <QuantityContainer>
                            <IconContainer onClick={decrement}>
                                <Icon>-</Icon>
                            </IconContainer>
                            <Counter>{counter}</Counter>
                            <IconContainer onClick={increment}>
                                <Icon>+</Icon>
                            </IconContainer>
                        </QuantityContainer>
                    )
            }
        </SingleItem>
    )
}

export default CartItem