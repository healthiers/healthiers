import styled from "styled-components";


export const KeyParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#102428;

     `;

export const KeyWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#102428;
 
    
      `;

export const SummaryContainer = styled.section`
      width: 95%;
      height: 50%;
      display: flex;
      gap: 0.3rem;
      justify-content: space-around;
      align-items: center;
      margin-top:2rem;
      margin-left:2rem;
    `;
    
export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    margin-left:12rem;
   

    & h2 {
        color: #fff;
        font-size:2.5rem;
        
     }

    & h6 {
        color: #fff;
        font-size:1rem;
        line-height:0.2rem;
        margin-bottom:10rem;
        

     }   
    `;



export const SummaryCard = styled.div`
      width: 20%;
      height: 120%;
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      background: #102428;
      border: 1px solid #fff;
      border-radius: 12px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
    
      & p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        color: #fff;
        margin-left:1rem;
      }
    
      & h1 {
        font-weight: 500;
        font-size: 1.2rem;
        color: #fff;
        margin-left:3rem;
        line-height:0.2rem;
      }

      & h3 {
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
        margin-left:5rem;
        line-height:0.2rem;
      }

      & h4{
        font-weight: 500;
        font-size: 1.2rem;
        color: #fff;
        margin-left:2.8rem;
        line-height:0.2rem;
      }

      & h2{
        font-weight: 500;
        font-size: 1.2rem;
        color: #fff;
        margin-left:4.5rem;
        }

     
     

      & img{
        margin-left: 7rem;
        margin-bottom:1rem;
        

      }
    `;