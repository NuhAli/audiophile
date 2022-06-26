import * as React from 'react'
import { useState } from "react";
import ProductDescription from '../ProductDescription/ProductDescription';
import ItemGallery from '../ItemGallery/ItemGallery';
import SuggestionRail from '../SuggestionRail/SuggestionRail';
import { Card, Container, Counter, Icon, Overline, ProductButton, ProductDescriptionStyle, ProductPrice, ProductTitle, QuantityBox, TextContainer } from './styles';
import { ProductItemType } from './products';

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

    return (
        <>
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
                            <Icon onClick={decrement}>-</Icon>
                            <Counter>{counter}</Counter>
                            <Icon onClick={increment}>+</Icon>
                        </QuantityBox>
                        <ProductButton>ADD TO CART</ProductButton>
                    </Container>
                </TextContainer>
            </Card>
            <ProductDescription features={product?.features} boxContent={product?.boxContent} />
            <ItemGallery gallery={product?.gallery} />
            <SuggestionRail suggestions={product?.suggestions} />
        </>
    )
}

export default ProductCard