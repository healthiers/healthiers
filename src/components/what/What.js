import React from "react";
import {
    WhatParent,
    WhatWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
   SummaryContainer3
} from "./what.styles";
import arrow from "../../assets/arrow.png";
import diabetes from "../../assets/diabetes.png";
import hypertension from "../../assets/hypertension.png";
import cardiovascular from "../../assets/cardiovascular.png";
import mental from "../../assets/mental.png";
import obesity from "../../assets/obesity.png";
import chronic from "../../assets/chronic.png";
import allergies from "../../assets/allergies.png";
import sleep from "../../assets/sleep.png";
import chronicpain from "../../assets/chronicpain.png";







const What = () => {


    return (
        <WhatParent>
            <WhatWrapper>
                <Header><h2>What can we help you with today?</h2>
                    <img src={arrow} alt="arrow" />
                    <h6>Let’s help you optimize your well-being</h6>
                </Header>

                <SummaryContainer1><img src={diabetes} alt="diabetes" />
                    <img src={hypertension} alt="hypertension" />
                    <img src={cardiovascular} alt="cardiovascular" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={mental} alt="mental" />
                    <img src={obesity} alt="obesity" />
                    <img src={chronic} alt="chronic" />
                </SummaryContainer2>
                <SummaryContainer3>
                <img src={allergies} alt="allergies" />
                <img src={sleep} alt="sleep" />
                <img src={chronicpain} alt="chronicpain" />

                </SummaryContainer3>
                            </WhatWrapper>



        </WhatParent>




    )





}


export default What;