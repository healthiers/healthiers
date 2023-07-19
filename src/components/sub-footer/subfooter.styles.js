import styled from "styled-components";

export const SubParent = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    background:#102428;
    

    
`;

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#102428;
   

    
    
`;

export const SubscribeContainer = styled.div`
    width: 50vw;
    height: 50%;
   margin-left:3rem;
    
    
    
    & h3 {
      margin-top: 1rem;
      color: #ffffff;
      margin-left: 9rem;
      font-size:2rem;
      font-weight:700;
      
      line-height:0.1rem;
      
      
  }

  
  & h4 {
    line-height:1rem;
    color: #ffffff;
    margin-left: 5rem;
    font-weight:200;
    
}
    & p {
      line-height:1rem;
      color: #ffffff;
      margin-left: 7rem;
      margin-bottom:2rem;
      
  }
    `;







export const ButtonContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: 1rem;

`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:  50%;
  height: 15%;
  margin-left: 3rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 90%;
 background: #102428;

  & .search-input {
    border: 0;
    outline: none;
    background: #102428;
    color: #fff;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;

export const Button = styled.button`
background: #00B9E5;
width:5rem;
border: 1px solid  #00B9E5; 
border-radius:5px;
color:#ffffff;
height: 1.8rem;
align-items: center;
margin-top:0.5rem;
margin-bottom:0.25rem;
margin-right:1rem;
font-size: 1rem;
display:flex;



`;

export const ImgContainer = styled.div`
    width: 50vw;
    height: 50%;
  
    
    
  
    `;
