import React from "react";
import {
    MintParent,
    MintWrapper,
    Wrapper,
    FormHeader,
    FooterWrapper,
    CreateContainer,
    Wrapper2,
    MintContainer
} from "./mint.styles";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { NavCover } from "../home/home.styles";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"







const Mint = () => {


    return (
        <MintParent>
            <MintWrapper>
                <NavCover>
                <Navbar/>
                </NavCover>
                <MintContainer>
                <Wrapper>

                    <form>

                        <FormTextInput
                            labelName="Age"
                            placeholder="Enter how old you are"
                            name="age"

                        />

                        <FormTextInput
                            labelName="Gender"
                            placeholder="Provide your gender in this input field"
                            name="gender"

                        />
                        <FormTextInput
                            labelName="Height"
                            placeholder="How tall are you?"
                            name="height"

                        />
                        <FormTextInput
                            labelName="Lifestyle"
                            placeholder="How would you describe your physical activity level?"
                            name="lifeStyle"

                        />

                        <FormTextInput
                            labelName="Weight"
                            placeholder="How much do you weigh?"
                            name="weight"

                        />
                        <FormTextInput
                            labelName="Sleep Pattern"
                            placeholder="How would you describe your sleep patterns and quality?"
                            name="sleepPattern"

                        />

                        <FormTextInput
                            labelName="Stress Level"
                            placeholder="On a scale of 1 to 10, how would you rate your stress level"
                            name="stressLevel"

                        />


                        <Button
                            size='sm'
                            height='48px'
                            width='470px'
                            border='10px'
                            borderRadius='5px'
                            color='#fff'
                            borderColor='#00B9E5'
                            background='#00B9E5'
                            fontWeight='500'
                            marginTop='30px'
                            
                        ><Link to='/mint-generate' style={{ textDecoration: 'none', color: '#fff' }}>
                            Continue
                            </Link>
                        </Button>


                    </form>

                </Wrapper>
                <Wrapper2>
                    <CreateContainer>
                        <FormHeader>
                            <h3> Create your NFTs  in just 4 steps</h3>
                            <img src={arrow} alt="arrow" />
                            <h5>Create your NFTs seamlessly following the steps below</h5>
                        </FormHeader>
                        <p>
                        1.<b style={{color:'#80F6E8'}}>Get Started</b>: Sign up for an account and complete the
                        <br></br>simple registration process.
                        <br></br>2.<b style={{color:'#80F6E8'}}>Mint NFTs</b>: After your registration process you can
                        <br></br>now mint your NFTs
                        <br></br>3.<b style={{color:'#80F6E8'}}>Personalise your NFTs</b>: Fill out the form with the
                        <br></br>necessary information in the input fields to create
                        <br></br>AI-generated NFTs.
                        <br></br>4. <b style={{color:'#80F6E8'}}>Your Masterpiece</b>: Witness the incredible
                       <br></br> results that AI has generated specifically for you.</p>
                    </CreateContainer>
                </Wrapper2>
                </MintContainer>
                <FooterWrapper>
                    <Footer />
                </FooterWrapper>
            </MintWrapper>
        </MintParent>

    );
};

export default Mint;