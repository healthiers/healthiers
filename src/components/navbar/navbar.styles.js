import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarParent = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    background:#102428;

     `;

export const NavbarWrapper = styled.div`
     width: 100%;
     height: 90%;
     display: flex;
     position: relative;
     background:#102428;
 
      `;


export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 3rem;
    
  

    & img {
    width: 10rem;
    margin-top:3rem;
    }

    h1{
        font-size:1.5rem;
        color:#fff;
        margin-left: 1rem;
        margin-top:3.5rem;
        
    }
    
    `;

 
export const BigLinkContainer = styled.div`
    display: flex;
    margin-left: 4rem;
    

   
    
     
    `;

export const NavbarLink = styled(Link)`
 color:white;
 font-size: 1rem;
 font-family: sans-serif;
 text-decoration: none;
 color: #fff;
 margin-left:3rem;
 margin-top:5rem;
 

& focus{
    color: white;
}
& active{
    color: #fff;
}

`;


export const ButtonWrapper = styled.div`
display:flex;
margin-left:9rem;
margin-top: 3.5rem;


& img{
    margin-right:1rem;
    margin-top:0.5rem;
    width: 1.5rem;
    height:1.5rem;
}

`;

export const Button = styled.button`
display: flex;
background:#00B9E5;
width:8rem;
border: 1px solid #00B9E5; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;



`;