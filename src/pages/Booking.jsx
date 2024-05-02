import React from "react";
import { Grid, Avatar} from "@material-ui/core";
import '../App.css'
import { AccountCircleRounded } from "@material-ui/icons";
import Visa from '../images/Visa Payment Card Logo PNG vector in SVG, PDF, AI, CDR format.jpeg'
import MasterCard from '../images/_ (1).jpeg'
import Airtel from '../images/Airtel.jpeg'
import Mtn from '../images/_.jpeg'
import BookingForm from "../forms/Booking";

function Booking(){
    return(
        <div>
        <div>
            <div className="page-2 rooms black-card">
                <h2 className="start margin-top">Account Details</h2>
                <div className="center">
                    <Grid container>
                        <Grid item xs={6}><h5 className="end lh">Guest Account</h5></Grid>
                        <Grid item alignContent="center" xs={6}><Avatar><AccountCircleRounded/></Avatar></Grid>
                    </Grid>
                </div>
                <h2 className="start margin-top">Book a Room</h2>
                <BookingForm/>
                <h2 className="start margin-top">We Accept</h2>
                <div className="center">
                    <Grid container>
                        <Grid item alignContent="center" xs={3} md={2} lg={1}><img src={Mtn} alt="mtn" width={100} height={70}/></Grid>
                        <Grid item alignContent="center" xs={3} md={2} lg={1}><img src={Visa} alt="Visa" width={100} height={70}/></Grid>
                        <Grid item alignContent="center" xs={3} md={2} lg={1}><img src={MasterCard} alt="master card" width={100} height={70}/></Grid>
                        <Grid item alignContent="center" xs={3} md={2} lg={1}><img src={Airtel} alt="airtel" width={80} height={70}/></Grid>
                    </Grid>
                </div>
            </div>
        </div></div>
    )
}

export default Booking;