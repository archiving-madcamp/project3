import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import Typography from "@material-ui/core/Typography"
import mypic from '../../meme-img.png'
/*
import { withStyles } from "@material-ui/core"

const MemeTypography = withStyles({
    root: {
        color: "#FB5135"
    }
})
*/
const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={mypic} height="30dp" width= "80px" alt="Test"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default Navbar
