import styled from "styled-components";
import { device } from "../../utils/device";


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#102428;
   

     `;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 90vh;
     display: flex;
     flex-direction: column;
     background:#102428;

     @media ${device.laptop} {
          display: flex;
          flex-direction: row;
      }

      @media ${device.tablet} {
          display: flex;
          flex-direction: row;
      }

      @media ${device.mobileS} {
          display: flex;
          flex-direction: row;
      }
      `;



