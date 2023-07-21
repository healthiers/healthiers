import React from "react";
import {
    NavbarParent,
    NavbarWrapper,
    LogoContainer,
    BigLinkContainer,
    NavbarLink,
    Button,
    ButtonWrapper
} from "./navbar.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";




const Navbar = () => {

    return (
        <NavbarParent>
            <NavbarWrapper>
                <LogoContainer><img src={logo} alt="logo" />
                </LogoContainer>
                <BigLinkContainer>
                    <NavbarLink><Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Home</Link></NavbarLink>
                    <NavbarLink> <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>About us</Link></NavbarLink>
                    <NavbarLink><Link to='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>Sign up </Link></NavbarLink>
                    <NavbarLink><Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }}>Sign in</Link></NavbarLink>
                    <NavbarLink><Link to='/my-nfts' style={{ textDecoration: 'none', color: 'white' }}>My NFTs</Link></NavbarLink>
                    <NavbarLink><Link to='/market-place' style={{ textDecoration: 'none', color: 'white' }}>Marketplace</Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper><img src={user} alt="user" width={18} height={18} />
                    <Button>Connect Wallet</Button></ButtonWrapper>

            </NavbarWrapper>
        </NavbarParent >
    )



}

export default Navbar;