import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import {GiCupcake} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle, toggleModal, notClickedSignup }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }



  return (
    <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Cupcakes for Change <GiCupcake color='#000' /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars color='#000' />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Flavors of the Month</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Next Sale</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/" onClick={toggleModal}>Order</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar