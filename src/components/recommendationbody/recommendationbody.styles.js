import styled from "styled-components";
import { device } from "../../utils/device";


export const RecommendationContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
color: white;
margin: 10px;
padding 20px;


@media ${device.mobileS} {
    display: flex;
    flex-direction: row;
}

`;

export const RecommendationNFT = styled.div`
margin-right: 20px;



`;


export const RecommendationText = styled.div`
ul {
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 15px;
  }

  p {
    margin-top: 15px;
  }
`;


export const FooterContainer = styled.div`
       width: 100%;
       height: 100%;
       display: flex;
       background:#102428;
       align-items: center;
       margin-top:395rem;
       position: absolute;
        
       `;
