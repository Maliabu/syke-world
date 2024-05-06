import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import '../App.css'
import Room1 from '../images/home-room1.png'
import Syke from '../images/syke.png'
import Parking from '../images/parking.png'
import Lobby from '../images/lobby.png'
import Bar from '../images/bar.jpg'

function Gallery(){
    return(
        <div>
            <div className="page-2 rooms back">
            <Hidden smDown><h2 className="start margin-top">syke world hotel</h2></Hidden>
            <Hidden smUp><h2 className="start margin-top-syke">take a look!</h2></Hidden>
                <h2 className="">galleria / cal</h2>
                <Grid container spacing={0}>
                <Grid item xs={10} md={4} lg={4}>
                    <div className="back-flipped padding rooms start">
                            <img src={Syke} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">HOTEL</h2>
                            <p className="m-t-2 p-x lh">Breath taking at first site!</p>
                     </div>
                </Grid>
                <Grid item xs={10} md={4} lg={4}>
                <div className="back-flipped padding rooms start">
                            <img src={Bar} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">bar and restaurant</h2>
                        </div>
                </Grid>
                <Grid item xs={10} md={4} lg={4}>
                <div className="back-flipped padding rooms start">
                            <img src={Parking} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">parking</h2>
                            <p className="m-t-2 p-x lh">Enough for all your wheels</p>
                        </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={10} md={6} lg={4}>
                    <img src={Room1} alt="rooms" className="card-image"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                <div className="back-flipped padding rooms start">
                            <h2 className="m-b-0 p-x">rooms</h2>
                            <p className="m-t-2 p-x lh">comfort in single, double and deluxe sizes</p>
                            <h2 className="m-b-0 p-x">lobby/wifi spot</h2>
                            <p className="m-t-2 p-x lh">Psst..!!! Be it as it may, wifi is the fastest here on our ground floor</p>
                        </div>
                </Grid>
                <Grid item xs={10} md={6} lg={4}>
                    <img src={Lobby} alt="rooms" className="card-image"/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Gallery;