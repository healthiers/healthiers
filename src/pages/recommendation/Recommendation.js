import React from "react";
import { RecommendationParent,
    RecommendationWrapper, 
    RecommendationNavcover,
    SubNavbarLink, SubNavbarParent, RecommendFooterContainer
} from "./recommendation.styles";
import Navbar from  "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import RecommendationBody from "../../components/recommendationbody/RecommendationBody";
import Footer from "../../components/footer/Footer";




const Recommendation = () => {


    return (

       <RecommendationParent>
          <RecommendationWrapper>
             <RecommendationNavcover>
                 <Navbar />
             </RecommendationNavcover>
             <SubNavbarParent>
                    <SubNavbarLink><Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Recommendation</Link></SubNavbarLink>
                    <SubNavbarLink> <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>Monitor your health plans</Link></SubNavbarLink>
                    <SubNavbarLink><Link to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>My NFTs </Link></SubNavbarLink>
                    <SubNavbarLink><Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }}>Settings</Link></SubNavbarLink>
        </SubNavbarParent>
        <RecommendationBody />
          <RecommendFooterContainer>
             <Footer />
          </RecommendFooterContainer>
          </RecommendationWrapper>
       </RecommendationParent>
    );

};

export default Recommendation;