import React from 'react'
import { ContentItem, ItemName, Quantity } from './styles'

interface BoxContentType {
    item: string;
    quantity: number;
}

const BoxContent = ({ item, quantity }: BoxContentType) => {
    return (
        <ContentItem>
            <Quantity>{`${quantity}x `}</Quantity>
            <ItemName>{item}</ItemName>
        </ContentItem>
    )
}

export default BoxContent