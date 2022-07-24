import styled from "styled-components";

export const FormContainer = styled.form`
  width: 730px;
  height: 1126px;
  background-color: white;
  border-radius: 5px;
  padding: 54px 48px 48px 48px;
`


export const FormTitle = styled.h3`
  margin-bottom: 41px;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 1.14286px;
  text-transform: uppercase;
`

export const FormSectionTitle = styled.h3`
  font-size: 13px;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0.9px;
  text-align: left;
  color: rgba(216, 125, 74, 1);
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const FormSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 53px;
`

export const InputLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: -0.21px;
  text-align: left;
  margin-bottom: 6px;
  grid-area: title;
`

export const InputBase = styled.input`
  padding: 24px 19px;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: -0.25px;
  text-align: left;
  opacity: 0.4;
  &::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
  &:focus {
    border: 2px solid #d87D4A;
    outline: 0 none;
  }
  &:disabled {
    background-color: gray;
    opacity: 0.1;
    border: none;
    outline: none;
    transition: all 0.4ms ease-in;
  }
`

export const InputBox = styled(InputBase)`
  height: 56px;
  width: 309px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
`
export const InputBoxLarge = styled(InputBase)`
  height: 56px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  border-radius: 8px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const InputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const InputColumn = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  grid-area: checkbox;
`

export const InputGrid = styled.div`
  height: auto;
  min-width: 100%;
  display: grid;
  grid-template-areas:
    "title checkbox"
    "title checkbox";
`
