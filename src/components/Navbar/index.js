import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

import {makeStyles} from '@material-ui/core/styles'
import mypic from '../../meme-img.png'
/*
import { withStyles } from "@material-ui/core"

const MemeTypography = withStyles({
    root: {
        color: "#FB5135"
    }
})
*/

const useStyles = makeStyles({
    navfont: {
        fontFamily:'TmonMonsori',
        fontSize: '20px'
    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={mypic} height="30dp" width= "80px" alt="Test"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" className={classes.navfont} activeStyle >
                        Step by Step
                    </NavLink>
                    <NavLink to="/services" className={classes.navfont} activeStyle>
                        Change to
                    </NavLink>
                    <NavLink to="/contact-us" className={classes.navfont} activeStyle>
                        Beta
                    </NavLink>
                    <NavLink to="/sign-up" className={classes.navfont} activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

            </Nav>
        </div>
    )
}

export default Navbar
