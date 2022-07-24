import * as React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CheckboxComponent from "../CheckboxComponent/CheckboxComponent";
import {useState} from "react";
import { FormContainer, FormSection, FormSectionTitle, FormTitle, InputBox,
    InputBoxLarge, InputColumn, InputContainer, InputGrid, InputLabel, InputRow } from "./styles";

type FormValues = {
    name: string;
    emailAddress: string;
    phoneNumber: string;
    address: string;
    postcode: string;
    city: string;
    country: string;
    eNumber: number;
    ePin: number;
}

const CheckoutForm = () => {
    const [paymentCash,setPaymentCash] = useState(false)
    const {register, formState: { errors }, handleSubmit} = useForm<FormValues>()

    const handlePayment = () => {
        setPaymentCash(prevState => !prevState)
    }

    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormTitle>Checkout</FormTitle>
            <FormSection>
                <FormSectionTitle>Billing Details</FormSectionTitle>
                <InputRow>
                    <InputContainer>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <InputBox {...register("name")} type="text" id={"name"}/>
                        {errors.name && "Full name is required"}
                    </InputContainer>
                    <InputContainer>
                        <InputLabel htmlFor="emailAddress">Email Address</InputLabel>
                        <InputBox {...register("emailAddress")} type="email"  id="emailAddress"/>
                        {errors.emailAddress && "Please enter a valid email"}
                    </InputContainer>
                </InputRow>
                <InputContainer>
                    <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                    <InputBox {...register("phoneNumber")} type="tel"  id="phoneNumber"/>
                    {errors.phoneNumber && "Please enter your phone number"}
                </InputContainer>
            </FormSection>
            <FormSection>
                <FormSectionTitle>Shipping info</FormSectionTitle>
                <InputRow>
                    <InputContainer>
                        <InputLabel htmlFor="address">Address</InputLabel>
                        <InputBoxLarge {...register("address")} type="text"  id={"address"}/>
                        {errors.address && "Please enter your address"}
                    </InputContainer>
                </InputRow>
                <InputRow>
                    <InputContainer>
                        <InputLabel htmlFor="postcode">Post Code</InputLabel>
                        <InputBox {...register("postcode")} type="text"  id="postcode"/>
                        {errors.postcode && "Please enter you postcode"}
                    </InputContainer>
                    <InputContainer>
                        <InputLabel htmlFor="text">City</InputLabel>
                        <InputBox {...register("city")} type="text" id="city"/>
                        {errors.city && "Please enter your city"}
                    </InputContainer>
                </InputRow>
                <InputRow>
                    <InputContainer>
                        <InputLabel htmlFor="country">Country</InputLabel>
                        <InputBox {...register("country")} type="text" id={"country"}/>
                        {errors.country && "Please enter your country"}
                    </InputContainer>
                </InputRow>
            </FormSection>
            <FormSection>
                <FormSectionTitle>Payment Details</FormSectionTitle>
                <InputRow>
                    <InputGrid>
                        <InputLabel>Payment Method</InputLabel>
                        <InputColumn>
                            <CheckboxComponent title={"e-Money"} selected={!paymentCash} onClick={handlePayment}/>
                            <CheckboxComponent title={"Cash on Delivery"} selected={paymentCash} onClick={handlePayment} />
                        </InputColumn>
                    </InputGrid>
                </InputRow>
                <InputRow>
                    <InputContainer>
                        <InputLabel htmlFor="eNumber" >e-Money Number</InputLabel>
                        <InputBox {...register("eNumber")} type="number"  id="eNumber" disabled={paymentCash}/>
                        {errors.eNumber && "Please enter a valid e-money number"}
                    </InputContainer>
                    <InputContainer>
                        <InputLabel htmlFor="ePin">e-Money PIN</InputLabel>
                        <InputBox {...register("ePin")} type="number" id="ePin" disabled={paymentCash}/>
                        {errors.ePin && "Please enter a valid e-pin"}
                    </InputContainer>
                </InputRow>
            </FormSection>
        </FormContainer>
    )
}

export default CheckoutForm