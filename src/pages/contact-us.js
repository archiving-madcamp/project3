import React from 'react'
import Card from './Card'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
  });

function Contactus() {
    const classes = useStyles();
    return (
        //grid container를 사용하면 전체를 차지하지 않게 된다
        //gutter 만들때 사용
        <Grid container="container" className={classes.gridContainer} spacing={4}>
            <Grid item="item" xs={12} sm={6} md={4}>
                <Card/>
            </Grid>
            <Grid item="item" xs={2} sm={6} md={4}>
                <Card/>
            </Grid>
            <Grid item="item" xs={2} sm={6} md={4}>
                <Card/>
            </Grid>
            <Grid item="item" xs={2} sm={6} md={4}>
                <Card/>
            </Grid>
        </Grid>
    )
}

export default Contactus
