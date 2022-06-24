import React from 'react'
import { BoxContentType } from '../ProductCard/products';
import BoxContent from './BoxContent';
import { BoxContentContainer, Content, DescriptionBody, DescriptionSection, DescriptionTextBox, DescriptionTitle } from './styles';

interface ProductDescriptionProps {
    features?: string;
    boxContent?: BoxContentType[]
}

const ProductDescription = ({ features, boxContent }: ProductDescriptionProps) => {
    const renderBoxContent = () => {
        return boxContent?.map((content, index) => <BoxContent key={index} item={content.item} quantity={content.quantity} />)
    }
    return (
        <DescriptionSection>
            <DescriptionTextBox>
                <DescriptionTitle>Features</DescriptionTitle>
                <DescriptionBody>{features}</DescriptionBody>
            </DescriptionTextBox>
            <BoxContentContainer>
                <DescriptionTitle>
                    in the box
                </DescriptionTitle>
                <Content>
                    {renderBoxContent()}
                </Content>
            </BoxContentContainer>
        </DescriptionSection>
    )
}

export default ProductDescription