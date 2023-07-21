import React from "react";
import {
        CentreWrapper,
        HomeParent,
        HomeWrapper,
        Button,
        ButtonWrapper,
        NavCover,
        TextContainer,
        TextContainer2,
        UButton,
        KeyWrapper,
        WhatContainer,
        MintedContainer,
        SponsorContainer,
        SubfooterContainer,
        FooterContainer
} from "./home.styles";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import nft1 from "../../assets/nft1.png";
import nft2 from "../../assets/nft2.png";
import researcher from "../../assets/researcher.png";
import KeyFeatures from "../../components/key-features/Key";
import What from "../../components/what/What";
import Minted from "../../components/minted-nfts/Minted";
import Sponsor from "../../components/sponsors/Sponsors";
import SubFooter from "../../components/sub-footer/Subfooter";
import Footer from "../../components/footer/Footer"








const Home = () => {


        return (
                <HomeParent>
                        <HomeWrapper>
                                <NavCover>
                                        <Navbar />
                                </NavCover>
                                <CentreWrapper>
                                        <TextContainer>
                                                <h1>Experience the future
                                                        <br></br>of  healthcare with
                                                        <br></br> our revolutionary
                                                        <br></br>AI-generated product</h1>
                                                <p>Introducing NFT-powered personalized healthcare plans,
                                                        <br></br>tailored exclusively to your unique health profile.</p>
                                                <ButtonWrapper><Button><Link  to='/mint' style={{ textDecoration: 'none', color: 'white' }}>Mint NFTs</Link></Button>
                                                        <Link style={{ textDecoration: 'none', color: '#00B9E5', marginLeft: "3rem", marginTop: '0.5rem', fontSize: '1rem' }}>Learn More</Link></ButtonWrapper>
                                                <h2>Minted NFTS</h2>
                                                <img src={nft1} alt='nft1' />
                                                <img src={nft2} alt="nft2" style={{ marginLeft: '1rem' }} />

                                        </TextContainer>
                                        <TextContainer2><img src={researcher} alt='researcher' />

                                                <UButton>20k+ <p>Users</p> 11k+ <p>Minted NFTs</p></UButton></TextContainer2>

                                </CentreWrapper>
                                <KeyWrapper>
                                        <KeyFeatures />
                                </KeyWrapper>
                                <WhatContainer>
                                        <What />
                                </WhatContainer>
                                <MintedContainer>
                                        <Minted />
                                </MintedContainer>
                                <SponsorContainer>
                                        <Sponsor/>
                                </SponsorContainer>
                                <SubfooterContainer>
                                        <SubFooter/>
                                </SubfooterContainer>
                                <FooterContainer>
                                        <Footer/>
                                </FooterContainer>


                        </HomeWrapper>



                </HomeParent>




        )



}


export default Home;