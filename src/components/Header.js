import React from 'react';
import styled from 'styled-components';

const Header = ()=>{
    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                Menu
            </NavMenu>
        </Nav>
    )
};



const Nav=styled.nav`
position: fixed;
top:0;
background-color:#090b13;
height:70px;
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding:0% 36px;
letter-spacing: 16px;
z-index:3;
`;

const Logo = styled.a`
width: 80px;
max-height:70px;
font-size: 0;
img{
    display: inline-block;
    width: 100%;
}

`;

const NavMenu = styled.div`
display: flex;
align-items:center;
flex-flow: row nowrap;
height:100%;
justify-content: flex-end;
margin:0;
padding:0;
position: relative;
margin: 0 auto 0 25px;


@media (max-width:768px){
    display: none;
}

`;




export default Header;