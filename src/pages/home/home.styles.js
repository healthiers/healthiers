import styled from "styled-components";
import { device } from "../../utils/device";


export const HomeParent = styled.div`
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    background:#102428;
   

     `;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 150vh;
     display: flex;
     flex-direction: column;
     background:#102428;

     

      @media ${device.mobileS} {
          display: flex;
          flex-direction: row;
      }
      `;
export const NavCover = styled.div`
 width: 100%;
 height: 20%;
 display: flex;
 position: relative;
 flex-direction: column;
 background:#102428;
  
    
       `;
export const CentreWrapper = styled.div`
      width: 100vw;
      height: 150vh;
      display: flex;
      flex-direction: column;
      background:#102428;
  
    
       `;

export const TextContainer= styled.div`
       width: 50vw;
       position: absolute;
       top: 100%;
       left: 20%;
       margin-left:10rem;
       transform: translate(-50%, -50%);
       color:#fff;
       align-content:center;
       justify-content: center;
       
       & h1{
       font-weight:550;
       line-height:4rem;
       font-size:3rem;
       font-family: Sans-Serif;
       color:  #fff;
       
       }
       
       & h2{
           font-weight:400;
           line-height:2.5rem;
           font-size:2rem;
           font-family: Sans-Serif;
           color:  #fff;
           line-height:1rem;
           
           }
       
       
       
       
       `;     

export const ButtonWrapper = styled.div`
       display:flex;
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

export const TextContainer2= styled.div`
       width: 50vw;
       position: absolute;
       top: 90%;
       left: 80%;
       transform: translate(-50%, -50%);
       color:#fff;
       align-content:center;
       justify-content: center;
       
       
       
       & img {
           height:45rem;
           width:auto;
           margin-top:8rem;
           
       }
       
       
       
       `;    
export const UButton = styled.div`
       display: flex;
       background:#102428;
       width:33rem;
       border: 1px solid #fff; 
       border-radius:5px;
       color:#00B9E5;
       height: 5rem;
       align-items: center;
       justify-content: center;
       margin-top: 3rem;
       font-size:1.5rem;

       & p{
        margin-right: 2rem;
        color: #fff;
        font-size:1rem;
       }
       
       
       `;
export const KeyWrapper = styled.div`
       width: 100%;
       height: 50%;
       display: flex;
       background:#102428;
       align-items: center;
       padding-top: 10rem; 
       margin-top:72rem; 
       position: absolute;    
       `;       
export const WhatContainer = styled.div`
       width: 100%;
       height: 200%;
       display: flex;
       background:#102428;
       align-items: center;
       padding-top: 10rem; 
       margin-top:120rem; 
       position: absolute;    
       `;      

export const MintedContainer = styled.div`
       width: 100%;
       height: 130%;
       display: flex;
       background:#102428;
       align-items: center;
       padding-top: 10rem; 
       margin-top:235rem; 
       position: absolute;

       `;     
export const SponsorContainer = styled.div`
       width: 100%;
       height: 50%;
       display: flex;
       background:#102428;
       align-items: center;
       padding-top: 10rem; 
       margin-top:315rem; 
       position: absolute;

       `;    

export const SubfooterContainer = styled.div`
       width: 100%;
       height: 50%;
       display: flex;
       background:#102428;
       align-items: center;
       padding-top: 10rem; 
       margin-top:353rem; 
       position: absolute;

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