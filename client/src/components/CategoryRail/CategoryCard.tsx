import * as React from 'react'
import arrowIcon from '../../assets/shared/desktop/icon-arrow-right.svg'
import { Card, CardImage, CardContainer, CardTitle, CardLink, CardText, CardIcon } from './styles';

interface CardProps {
    image: string;
    title: string;
    link: string;
}

const CategoryCard = ({ image, title, link }: CardProps): JSX.Element => {
    return (
        <Card>
            <CardImage src={image} alt={'card-item'} />
            <CardContainer>
                <CardTitle>{title}</CardTitle>
                <CardLink to={link}>
                    <CardText>Shop</CardText>
                    <CardIcon src={arrowIcon} alt={'arrow-icon'} />
                </CardLink>
            </CardContainer>
        </Card>
    )
}

export default CategoryCard