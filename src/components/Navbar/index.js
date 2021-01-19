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
        fontFamily: 'Spoqa Han Sans Neo',
        fontSize: '15px'
    }
})

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <Nav>
                <NavLink to="/" style={{marginTop: '3px'}}>
                    <img src={mypic} height="30dp" width= "80px" alt="Test"/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" className={classes.navfont} style={{marginTop: '15px'}} activeStyle >
                        Step by Step
                    </NavLink>
                    <NavLink to="/services" className={classes.navfont} style={{marginTop: '15px'}} activeStyle>
                        Change to
                    </NavLink>
                    <NavLink to="/contact-us" className={classes.navfont } style={{marginTop: '15px'}} activeStyle>
                        Beta
                    </NavLink>
                    <NavLink to="/sign-up" className={classes.navfont} style={{marginTop: '15px'}} activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

            </Nav>
        </div>
    )
}

export default Navbar
