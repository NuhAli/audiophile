import styled from "styled-components";

export const DescriptionSection = styled.div`
    width: 1110px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start
`

export const DescriptionTitle = styled.h3`
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.15px;
    margin-bottom: 32px;
    text-transform: uppercase;
`

export const DescriptionTextBox = styled.div`
    width: 635px;
`

export const DescriptionBody = styled.p`
    font-size: 15px;
    line-height: 25px;
    color: rgba(0,0,0,0.5);
`

export const BoxContentContainer = styled.h3`
    width: 350px;
    height: auto;
    padding-left: 125px;
`

export const Content = styled.ul`
    width: 350px;
    height: 200px;
    padding: 0 !important
`

export const ContentItem = styled.li`
    width: auto;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 8px;
`
export const Quantity = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #D87D4A;
    padding-right: 24px;
`

export const ItemName = styled.p`
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: black;
    opacity: 0.5;
`