import * as React from "react"
import styled from "styled-components";

interface CheckBar {
    title: string;
    selected: boolean;
    onClick: () => void
}

export const Box = styled.div`
  height: 56px;
  width: 309px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:first-child {
    margin-bottom: 16px;
  }
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: -0.25px;
  text-align: left;
`

export const CheckboxContainer = styled.div`
  width: 52px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #CFCFCF;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`

export const CheckboxIcon = styled.div`
  width: 10px;
  height: 10px;
  background-color: #d87D4A;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CheckboxComponent = ({title,selected,onClick}:CheckBar) => {
    return (
        <Box onClick={onClick}>
            <CheckboxContainer>
                <Checkbox>
                    {selected && <CheckboxIcon />}
                </Checkbox>
            </CheckboxContainer>
            <Title>{title}</Title>
        </Box>
    )
}

export default CheckboxComponent