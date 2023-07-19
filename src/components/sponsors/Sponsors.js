import React from "react";
import {
    SponsorParent,
    SponsorWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2
    } from "./sponsors.styles";
import arrow from "../../assets/arrow.png";
import polk from "../../assets/polk.png";
import astar from "../../assets/astar.png";
import zeit from "../../assets/zeit.png";
import unique from "../../assets/unique.png";
import polimec from "../../assets/polimec.png";
import moon from "../../assets/moon.png";
import api from "../../assets/api.png";
import oak from "../../assets/oak.png";
import bilfrost from "../../assets/bilfrost.png";






const Sponsor = () => {


    return (
        <SponsorParent>
            <SponsorWrapper>
                <Header><h2>Our Sponsors and Supporters</h2>
                    <img src={arrow} alt="arrow" />
                    <h6>Meet our well renowned and recognised partners</h6>
                </Header>

                <SummaryContainer1><img src={polk} alt="polk" />
                    <img src={astar} alt="astar" />
                    <img src={zeit} alt="zeit" />
                    <img src={unique} alt="unique" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={polimec} alt="polimec" />
                    <img src={moon} alt="moon" />
                    <img src={api} alt="api" />
                    <img src={oak} alt="oak" />
                </SummaryContainer2>
                <SummaryContainer2>
                    <img src={bilfrost} alt='bilfrost'/>
                </SummaryContainer2>
               
            </SponsorWrapper>



        </SponsorParent>




    )





}


export default Sponsor;