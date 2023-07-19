import React from "react";
import {
    MintedParent,
    MintedWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2
    } from "./minted.styles";
import arrow from "../../assets/arrow.png";
import weight from "../../assets/weight.png";
import wellness from "../../assets/wellness.png";
import diabetescontrol from "../../assets/diabetescontrol.png";
import overcoming from "../../assets/overcoming.png";
import sleepdisorders from "../../assets/sleepdisorders.png";
import journey from "../../assets/journey.png";






const Minted = () => {


    return (
        <MintedParent>
            <MintedWrapper>
                <Header><h2>Minted NFTS</h2>
                    <img src={arrow} alt="arrow" />
                    <h6>Please note that these NFTs are made public by the owners</h6>
                </Header>

                <SummaryContainer1><img src={weight} alt="weight" />
                    <img src={wellness} alt="wellness" />
                    <img src={diabetescontrol} alt="diabetescontrol" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={overcoming} alt="overcoming" />
                    <img src={sleepdisorders} alt="sleepdisorders" />
                    <img src={journey} alt="journey" />
                </SummaryContainer2>
               
            </MintedWrapper>



        </MintedParent>




    )





}


export default Minted;