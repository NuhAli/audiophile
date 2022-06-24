import * as React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { headphoneProducts, speakerProducts, earphoneProducts, ProductItemType } from "./products";
import ProductDescription from '../ProductDescription/ProductDescription';
import ItemGallery from '../ItemGallery/ItemGallery';
import SuggestionRail from '../SuggestionRail/SuggestionRail';
import { Card, Container, Counter, Icon, Overline, ProductButton, ProductDescriptionStyle, ProductPrice, ProductTitle, QuantityBox, TextContainer } from './styles';

const imageStyles = {
    width: 540,
    height: 560,
    borderRadius: 8,
    marginRight: 124.5
}

const ProductCard = () => {

    const [counter, setCounter] = useState(1)

    const [productCategory, setProductCategory] = useState<ProductItemType[]>()

    const [currentProduct, setCurrenProduct] = useState<ProductItemType>()

    const { category, id } = useParams()

    console.log(category, id)

    useEffect(() => {
        switch (category) {
            case "headphones":
                setProductCategory(headphoneProducts)
                break
            case "speakers":
                setProductCategory(speakerProducts)
                break
            case "earphones":
                setProductCategory(earphoneProducts)
                break
            default:
                return
        }
    }, [category])


    useEffect(() => {
        if (productCategory && id) {
            const currentProduct = productCategory?.find(product => product.id === +id)
            setCurrenProduct(currentProduct)
        }
    }, [productCategory, id])

    const increment = () => setCounter(prevState => prevState + 1)

    const decrement = () => setCounter(prevState => prevState > 1 ? prevState - 1 : 1)

    return (
        <>
            <Card>
                <img
                    src={currentProduct?.productImage}
                    alt={`${currentProduct?.name}`}
                    style={imageStyles}
                />
                <TextContainer>
                    {currentProduct?.new && <Overline children={"New Product"} />}
                    <ProductTitle>{currentProduct?.name}</ProductTitle>
                    <ProductDescriptionStyle>{currentProduct?.description}</ProductDescriptionStyle>
                    {currentProduct && <ProductPrice>{`$ ${currentProduct.price * counter}`}</ProductPrice>}
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
            <ProductDescription features={currentProduct?.features} boxContent={currentProduct?.boxContent} />
            <ItemGallery gallery={currentProduct?.gallery} />
            <SuggestionRail suggestions={currentProduct?.suggestions} />
        </>
    )
}

export default ProductCard