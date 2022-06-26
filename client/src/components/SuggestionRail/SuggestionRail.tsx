import React from 'react'
import { Cards, Rail, RailTitle } from './styles'
import SuggestionCard from './SuggestionCard';

export interface SuggestionCardProps {
    name: string;
    src: string;
    link: string;
}

interface RailProps {
    suggestions: SuggestionCardProps[] | undefined
}

const SuggestionRail = ({ suggestions }: RailProps) => {

    const renderContent = () => {
        return suggestions?.map((suggestion, index) => <SuggestionCard key={index} name={suggestion.name} src={suggestion.src} link={suggestion.link} />)
    }

    return (
        <Rail>
            <RailTitle>you may like</RailTitle>
            <Cards>
                {renderContent()}
            </Cards>
        </Rail>
    )
}

export default SuggestionRail