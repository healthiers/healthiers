import styled from "styled-components";
import { device } from "../../utils/device";

export const MintParent = styled.div`
    width: 110vw;
    height: 250vh;
    display: flex;
    flex-direction: column;
    background:#102428;

     `;

export const MintWrapper = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction:column;
    background:#102428;

    @media ${device.mobileS} {
        max-width: 300px;
      }
    

    `;
export const MintContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:row;
    background:#102428;

    @media ${device.mobileS} {
        max-width: 300px;
      }
    

    `;

export const Wrapper = styled.div`
    width: 90vw;
    height: 80vh;
    background:#102428;
    margin-left: 5rem;
    
   
   
   
    & form {
        width: 120%;
        height: 100%;
        margin-left: 1rem;
        color:#fff;
        
    }

    & h4 {
        margin-top:1rem;
        font-size:1rem;
        font-weight:450;
        line-height:1rem;
        color:#fff; 
    }
    
    & p {
        color:#fff;
        line-height:1.5rem;
    }
    `;


export const FormHeader = styled.div`
    width: 90%;
    height: 5%;
    margin-bottom:6rem;
    margin-left:1rem;
    display:flex;
    flex-direction:column;
   
   
   & img {
        width:3rem;
        margin-left:11rem;
        

        }

& h3 {
           font-size:1.2rem;
            font-weight:400;
            color:#fff;
            margin-left:5rem;
            line-height:0.1rem;
            margin-top: 2rem;
        
            
        }  
& h5 {
            font-size:1rem;
             font-weight:400;
             line-height:0.5rem;
             color:#fff;
             margin-left:1rem;
             margin-bottom:1rem;
         
             
         }           

    `;

export const Wrapper2 = styled.div`
    width: 70vw;
    height: 80vh;
    background:#102428;
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
   
   & p{
    color: #fff;
    margin-top:2rem;
    line-height: 1.5rem;
    margin-left: 2rem;
   }
   
   
  
    `;   

export const CreateContainer = styled.div`
    width: 200%;
    height: 90%;
    background:#102428;
    border-color:#fff;
    border:1px solid #fff;
    border-radius: 5px;
    margin-top:2rem;
      
`;   


export const FooterWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    background:#102428;
    align-items: center;
    margin-top:15rem;
     
     
    `;


     
   