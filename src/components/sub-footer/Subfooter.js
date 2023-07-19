import React from "react";
import {
    ButtonContainer,
    CenterWrapper,
    SubParent,
    SearchBarContainer,
    SearchBarForm,
    Button,
    SubscribeContainer,
    ImgContainer
} from "./subfooter.styles";
import arrow from "../../assets/arrow.png";
import mediumfooter from "../../assets/mediumfooter.png";
import smallfooter from "../../assets/smallfooter.png";
import bigfooter from "../../assets/bigfooter.png";


const SubFooter = () => {
    return (

        <SubParent>
            <CenterWrapper>
                <SubscribeContainer>
                    <h3>Stay up to date</h3>
                    <img src={arrow} alt="arrow"style={{marginLeft:'12rem'}} />

                    <h4>Stay informed about the latest advancements </h4>
                    <p> in personalized healthcare plans.</p>

                    <ButtonContainer>
                        <SearchBarContainer>
                            <SearchBarForm>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Email Address"
                                />
                                <Button>Subscribe</Button>

                            </SearchBarForm>
                        </SearchBarContainer>


                    </ButtonContainer>
                </SubscribeContainer>
                <ImgContainer>
                    <img src={smallfooter} alt="smallfooter" style={{ marginLeft: '-8rem', position:'absolute', zIndex:'3', marginTop:'8rem'}} />
                    <img src={mediumfooter} alt="mediumfooter" style={{transform:'translate(25%, 10%)', position:'absolute', marginTop:'2rem'}} />
                    <img src={bigfooter} alt="bigfooter"  style={{ zIndex:'1', marginLeft:'10rem'}} />
                </ImgContainer>
            </CenterWrapper>
        </SubParent>
    )



}

export default SubFooter;