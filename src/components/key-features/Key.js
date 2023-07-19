import React from "react";
import {
    KeyParent,
    KeyWrapper,
    SummaryCard,
    SummaryContainer,
    Header
} from "./key.styles";
import key from "../../assets/key.png";
import arrow from "../../assets/arrow.png";







const KeyFeatures = () => {


    return (
        <KeyParent>
            <KeyWrapper>
                <Header><h2>Key features of Healthiers</h2>
                    <img src={arrow} alt="arrow" />
                    <h6>Why you should choose Healthiers</h6>
                </Header>
                <SummaryContainer>
                    <SummaryCard background="#102428" borderColor="#102428">
                        <img src={key} alt="key" width={40} />
                        <h1 style={{marginLeft:'5rem'}}>Personalized </h1>
                        <h4>Recommendations</h4>
                        <p>Leverage the power of AI
                            <br></br>algorithms to receive custom-
                            <br></br>tailored healthcare plans,
                            <br></br>specifically designed to
                            <br></br>address your individual needs
                            <br></br>and goals. Say goodbye to
                            <br></br>generic advice and embrace a
                            <br></br>personalized approach to
                            <br></br>optimize your well-being.</p>

                    </SummaryCard>
                    <SummaryCard background="#102428" borderColor="#102428">
                        <img src={key} alt="key" width={40} />
                        <h1>Comprehensive Health</h1>
                        <h4 style={{marginLeft:'5rem'}}> Analysis</h4>
                        <p>Gain deeper insights into your 
                            <br></br>health with our state-of-the-
                            <br></br>art data analysis. Our 
                            <br></br>advanced algorithms analyze 
                            <br></br>your health data, such as vital 
                            <br></br>signs, activity levels, and 
                            <br></br>medical history, to create a 
                            <br></br>holistic understanding of your
                            <br></br> well-being.</p>
                    </SummaryCard>
                    <SummaryCard background="#102428" borderColor="#102428">
                        <img src={key} alt="key" width={40} />
                        <h1 style={{marginLeft:'5rem'}}>Secure NFTs</h1>
                        <p>Embrace the future of digital 
                            <br></br>ownership through Non-
                            <br></br>Fungible Tokens (NFTs). Your 
                            <br></br>personalized healthcare plan 
                            <br></br>is encapsulated within an NFT, 
                            <br></br>ensuring the utmost security 
                            <br></br>and privacy of your sensitive 
                            <br></br>health information.</p>
                    </SummaryCard>
                    <SummaryCard background="#102428" borderColor="#102428">
                        <img src={key} alt="key" width={40} />
                        <h1 style={{marginLeft:'2rem'}}>Real-time Monitoring</h1>
                        <p>Stay informed and in control
                            <br></br> of your health journey with 
                            <br></br>real-time monitoring. Receive 
                            <br></br>instant updates and 
                            <br></br>recommendations based on 
                            <br></br>the latest data, empowering 
                            <br></br>you to make informed 
                            <br></br>decisions about your well-
                            <br></br>being.</p>
                    </SummaryCard>

                </SummaryContainer>

            </KeyWrapper>



        </KeyParent>




    )





}


export default KeyFeatures;