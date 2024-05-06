import React from "react";
import { Card, CardContent, Grid, Hidden } from "@material-ui/core";
import '../App.css'
import {Wifi, DirectionsCarRounded, SecurityRounded, RoomServiceRounded, LocalBarRounded, LocalLaundryServiceRounded, BookRounded, RestaurantMenuRounded} from "@material-ui/icons";

function Services(){
    return(
        <div>
        <div>
            <div className="page-2 rooms back">
            <Hidden smDown><h2 className="start margin-top">services</h2></Hidden>
            <Hidden smUp><h2 className="start margin-top-syke">services</h2></Hidden>
                <h2 className="">What we offer</h2>
                <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                        <RoomServiceRounded/>
                            <h2 className="m-b-0 p-x">Room Service</h2>
                            <p className="m-t-2 p-x lh">24/7 Service at the comfort of your rooms for all that you need from the Hotel</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardContent className="start">
                        <SecurityRounded/>
                            <h2 className="m-b-0 p-x">Security</h2>
                            <p className="m-t-2 p-x lh">Day and Night guaranteed trained security for you and your assets so that you feel right at home</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <DirectionsCarRounded/>
                            <h2 className="m-b-0 p-x">Packing</h2>
                            <p className="m-t-2 p-x lh">We have optimum parking space for your vehicles or travel wheels for as long as you stay with us</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <Wifi/>
                            <h2 className="m-b-0 p-x">Wifi</h2>
                            <p className="m-t-2 p-x lh">With speeds up to 65mbps, come and enjoy our wireless internet so that you dont miss out on your daily online operations, friends and family</p>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                        <LocalBarRounded/>
                            <h2 className="m-b-0 p-x">Bar</h2>
                            <p className="m-t-2 p-x lh">If it is to quench your thirst, we got you. you name it, we have it. Yeah...thats right, a well stocked counter with all the brands for you. We know you are above 18</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardContent className="start">
                        <LocalLaundryServiceRounded/>
                            <h2 className="m-b-0 p-x">Laundry & Dry Cleaning</h2>
                            <p className="m-t-2 p-x lh">We will take care of your laundry and dry cleaning incase you run into a fix or as you wish</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                        <BookRounded/>
                            <h2 className="m-b-0 p-x">Booking</h2>
                            <p className="m-t-2 p-x lh">You can book any room right here online or if preferred, visit us and we shall handle all that for you easy</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <CardContent className="start">
                        <RestaurantMenuRounded/>
                            <h2 className="m-b-0 p-x">Restaurant</h2>
                            <p className="m-t-2 p-x lh">Seen our menu? we handle your food like pros. Dont miss our breakfast and brunch menu as we see about dinner in the future</p>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
            </div>
        </div></div>
    )
}

export default Services;