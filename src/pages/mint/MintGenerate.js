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
import { Button, Select } from "@chakra-ui/react";








const MintGenerate = () => {


    return (
        <MintParent>
            <MintWrapper>
                <NavCover>
                    <Navbar />
                </NavCover>
                <MintContainer>
                    <Wrapper>

                        <form>

                            <FormTextInput
                                labelName="Medical History"
                                placeholder="Do you have any existing medical conditions?"
                                name="medicalHistory"

                            />

                            <FormTextInput
                                labelName="Medication"
                                placeholder="Are you currently taking any medications? If yes, state the medication"
                                name="medication"

                            />
                            <FormTextInput
                                labelName="Symptoms"
                                placeholder="State any symptoms "
                                name="symptoms"

                            />
                            <FormTextInput
                                labelName="Diet Preference"
                                placeholder="Do you have any specific dietary preference or restrictions?"
                                name="dietPreference"

                            />

                            <FormTextInput
                                labelName="Allergies"
                                placeholder="Are you allergic to anything?"
                                name="allergies"

                            />
                            <FormTextInput
                                labelName="Goals"
                                placeholder="What are your primary health and wellness goals?"
                                name="goals"

                            />


                            <Select size='lg'
                                bg='#E0EDF0'
                                borderColor='#E0EDF0'
                                marginTop="1rem"
                                borderRadius={'5px'}
                                height='3rem'
                                marginLeft={'3rem'}
                                placeholder='Would you want your health NFT to be made public?'>
                                <option value='option1'>Yes,make Public</option>
                                <option value='option2'>No, don't make Public</option>

                            </Select>

                            <Select
                                size='lg'
                                bg='#E0EDF0'
                                borderColor='#E0EDF0'
                                marginTop="1rem"
                                borderRadius={'5px'}
                                height='3rem'
                                marginLeft={'4rem'}
                                placeholder='NFTs visibility options'>
                                <option value='option1'>Restricted (get alert to allow usage by another)</option>
                                <option value='option2'>Non-restricted (don’t notify me)</option>

                            </Select>



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
                                marginTop='20px'

                            >
                                Mint
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
                                1.<b style={{ color: '#80F6E8' }}>Get Started</b>: Sign up for an account and complete the
                                <br></br>simple registration process.
                                <br></br>2.<b style={{ color: '#80F6E8' }}>Mint NFTs</b>: After your registration process you can
                                <br></br>now mint your NFTs
                                <br></br>3.<b style={{ color: '#80F6E8' }}>Personalise your NFTs</b>: Fill out the form with the
                                <br></br>necessary information in the input fields to create
                                <br></br>AI-generated NFTs.
                                <br></br>4. <b style={{ color: '#80F6E8' }}>Your Masterpiece</b>: Witness the incredible
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

export default MintGenerate;
