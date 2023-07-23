import React, { useState } from "react";
import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader,
    FooterWrapper,
    LogoContainer
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/custom-input/FormTextInput";
import FormButton from "../../components/custom-button/FormButton";
import arrow from "../../assets/arrow.png";
import logo from "../../assets/logo.png";
import Footer from "../../components/footer/Footer";
import Checkbox from "../../components/checkbox/Checkbox";







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <SignupParent>
            <SignupWrapper>
                <LogoContainer>
                   <Link to='/'> <img src={logo} alt="logo" /></Link>
                </LogoContainer>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>SIGN UP</h3>

                            <img src={arrow} alt="arrow" marginLeft="4rem" />
                            <h5>New here? Let’s get you started!</h5>
                        </FormHeader>
                        <FormTextInput
                            labelName="Full Name"
                            placeholder="E.g Naomi Roberts"
                            name="fullName"

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="E.g naomiroberts@gmail.com"
                            name="emailAddress"

                        />
                        <FormTextInput
                            labelName="Age"
                            placeholder="Enter your age"
                            name="age"

                        />
                        <FormTextInput
                            labelName="Gender"
                            placeholder="Enter your gender"
                            name="gender"

                        />
                        <FormTextInput
                            labelName="Medical History"
                            placeholder="Do you have any medical history?"
                            name="medicalHistory"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                        <h4>Password must contain:</h4>
                        <p> At least 8 characters
                            <br></br>At least one number
                            <br></br>At least one lowercase letter
                            <br></br>At least one uppercase letter</p>
                        <FormTextInput
                            labelName="Wallet Address"
                            placeholder="e.g 0xd914...ABED"
                            name="walletAddress"

                        />
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept our Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                        />

                        
                        <FormButton
                            text="Sign up"
                            color="#fff"
                            borderColor="#00B9E5"
                        />


                        <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#CCF1FA' }}>Sign in</Link></p>

                    </form>

                </Wrapper>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;