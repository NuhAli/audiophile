import * as React from 'react'
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import ProductDescription from '../ProductDescription/ProductDescription';
import ItemGallery from '../ItemGallery/ItemGallery';
import SuggestionRail from '../SuggestionRail/SuggestionRail';
import { CardWrapper, Card, Container, Counter, Icon, Overline, ProductButton, ProductDescriptionStyle, ProductPrice, ProductTitle, QuantityBox, TextContainer, GoBackLink } from './styles';
import { ProductItemType } from './products';
import  {CartItemProps} from "../../observables/cart$";
import axios from "axios";
import { IconContainer } from '../CartModal/styles';

const imageStyles = {
    width: 540,
    height: 560,
    borderRadius: 8,
    marginRight: 124.5
}

interface ProductCardProps {
    product: ProductItemType
}

const ProductCard = ({ product }: ProductCardProps) => {

    const [counter, setCounter] = useState(1)

    const increment = () => setCounter(prevState => prevState + 1)

    const decrement = () => setCounter(prevState => prevState > 1 ? prevState - 1 : 1)

    const navigate = useNavigate()

    const navigateBack = () => {
        navigate(-1)
    }

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        axios.get("http://localhost:4001/")
            .then(r => {
                return r.data as CartItemProps[]
            })
            .then((result) => {
                const cartItem = {
                    itemId: product.id,
                    cartName: product.cartName,
                    cartImage: product.cartImage,
                    quantity: counter,
                    price: product.price,
                }

                const isPresentInCart = result.some((item) => item.itemId === cartItem.itemId)

                if(isPresentInCart) {
                    axios.put("http://localhost:4001/", {data: {quantity: cartItem.quantity , itemId: product.id}}).then(r => r)
                } else {
                    axios.post("http://localhost:4001/", cartItem).then(r => r)
                }
                setCounter(1)
            })
    }

    return (
        <CardWrapper>
            <GoBackLink onClick={navigateBack}>Go Back</GoBackLink>
            <Card>
                <img
                    src={product?.productImage}
                    alt={`${product?.name}`}
                    style={imageStyles}
                />
                <TextContainer>
                    {product?.new ? <Overline children={"New Product"} /> : null}
                    <ProductTitle>{product?.name}</ProductTitle>
                    <ProductDescriptionStyle>{product?.description}</ProductDescriptionStyle>
                    {product && <ProductPrice>{`$ ${product.price * counter}`}</ProductPrice>}
                    <Container>
                        <QuantityBox>
                            <IconContainer onClick={decrement}>
                                <Icon>-</Icon>
                            </IconContainer>
                            <Counter>{counter}</Counter>
                            <IconContainer onClick={increment}>
                                <Icon>+</Icon>
                            </IconContainer>
                        </QuantityBox>
                        <ProductButton onClick={addToCart}>ADD TO CART</ProductButton>
                    </Container>
                </TextContainer>
            </Card>
            <ProductDescription features={product?.features} boxContent={product?.boxContent} />
            <ItemGallery gallery={product?.gallery} />
            <SuggestionRail suggestions={product?.suggestions} />
        </CardWrapper>
    )
}

export default ProductCard