import React from 'react'
import { Card, CardButton, CardImage, CardTitle } from './styles'
import { SuggestionCardProps } from './SuggestionRail'

const SuggestionCard = ({ name, src, link }: SuggestionCardProps) => {
    return (
        <Card>
            <CardImage src={src} alt={name} />
            <CardTitle>{name}</CardTitle>
            <CardButton to={link}>see product</CardButton>
        </Card>
    )
}

export default SuggestionCard