import * as React from "react"
import Footer from "../components/Footer/Footer";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import Hero from "../components/Hero/Hero";
import ContentSection from "../components/ContentSection/ContentSection";
import {useNavigate} from "react-router-dom";
import { GoBackLink } from "../components/ProductCard/styles";
import styled from "styled-components";
import Cart from "../components/Cart/Cart";

export const FormSection = styled.section`
  height: auto;
  width: 100%;
  padding: 120px 0 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
`

export const FormWrapper = styled.div`
  height: auto;
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #F2F2F2;
`

export const FormMainContent = styled.div`
  height: auto;
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const CheckoutLayout = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate(-1)
    }
    return (
        <div className="common-page">
            <Hero type={"none"} />
            <FormSection>
                <FormWrapper>
                    <GoBackLink onClick={handleNavigation}>Go Back</GoBackLink>
                    <FormMainContent>
                        <CheckoutForm />
                        <Cart />
                    </FormMainContent>
                </FormWrapper>
            </FormSection>
            <Footer/>
        </div>
    )
}

export default CheckoutLayout