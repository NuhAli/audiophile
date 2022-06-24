import * as React from 'react'
import './ContentSection.scss'
import { Content } from './styles'

interface ContentSectionProps {
    children: React.ReactNode
}

const ContentSection = (props: ContentSectionProps) => {
    return (
        <Content>
            {
                props.children
            }
        </Content>
    )
}

export default ContentSection