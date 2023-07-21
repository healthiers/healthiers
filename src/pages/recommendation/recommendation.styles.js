import styled from "styled-components";
import { device } from "../../utils/device";
import { Link } from "react-router-dom";


export const RecommendationParent = styled.div`
width: 100vw;
height: 160vh;
display: flex;
flex-direction: column;
background: #102428;


  
 `;




export const RecommendationWrapper = styled.div`
width: 100vw;
height: 150vh;
display: flex;
flex-direction: column;
background: #102428;

@media ${ device.mobileS } {
    display: flex;
    flex - direction: row;
}
`;


export const RecommendationNavcover = styled.div`
width: 100%;
height: 20%;
display: flex;
position: relative;
flex - direction: column;
background: #102428;

`;

export const ContentContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
background: #102428;
`;

export const SubNavbarParent = styled.div`
width: 100%;
height: 20%;
display: flex;
background:#102428;

`;


export const SubNavbarLink = styled(Link)`
color: white;
font - size: 1rem;
font - family: sans - serif;
text - decoration: none;
color: #fff;
margin - left: 3rem;
margin - top: 5rem;
 

& focus{
    color: white;
}
& active{
    color: #fff;
}

`;

export const RecommendFooterContainer = styled.div`
width: 100 %;
height: 80 %;
display: flex;
background:#102428;
align - items: center;
margin - top: 57rem;
position: absolute;

`;