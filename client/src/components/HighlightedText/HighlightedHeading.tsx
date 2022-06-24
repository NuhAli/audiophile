import * as React from 'react'

type ChildrenProps = {
    children: React.ReactNode
}

const HighlightedHeading = ({ children }: ChildrenProps): JSX.Element => {
    return (
        <h2 className={'item-banner__heading'}>
            {children}
        </h2>
    )
}

export default HighlightedHeading