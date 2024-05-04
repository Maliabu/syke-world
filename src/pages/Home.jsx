import React from "react";
import '../index.css'
import { CardContent, Grid, Card, Button, Hidden } from "@material-ui/core";
import Bar from '../images/bar.jpg'
import Room1 from '../images/home-room1.png'
import Room2 from '../images/home-room2.png'
// import Counter from '../images/counter.png'
import Syke from '../images/syke.png'
import { LocationCityRounded, PinDropRounded } from "@material-ui/icons";

function Home(props){
    return(
        <div>
        <div className="main-page">
            <Grid container spacing={0}>
            <Grid item xs={9} md={5} lg={5}></Grid>
            <Grid item xs={7} md={4} lg={4}>
                <Hidden smDown>
                <div className="padding bg-oranger rooms">
                <PinDropRounded/> <LocationCityRounded/>
                    <h4>Welcome</h4>
                    <p className="lh">Syke World Hotel welcomes you to comfort and luxury at a destination away yet feels right at home</p>
                </div>
                </Hidden>
            </Grid>
                <Grid item xs={8} md={3} lg={3}>
                    <Card className="service">
                        <CardContent className=" service">
                            <div className="transparency">
                            <img src={Bar} alt="rooms" className="card-image"/>
                                <img src={Syke} alt="rooms" className="card-image"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
                <div className=" page-2 start rooms">
                <h1 className="actively">Accomodation</h1>
                <Grid container spacing={0} className="">
                <Grid item xs={12} md={5} lg={5} className="p-x">
                <p className="lh">Our BnB - offers spacious single, double and deluxe rooms equiped with everything you need to make your stay as comfortable. <br/> <br/>A smart Tv connected to our fastest internet speeds, a workspace so that you can work as you stay, laundry services available when and if you need it, electronics and more...</p>
                <Card>
                        <CardContent className="start">
                            <img src={Syke} alt="rooms" width="100%" height="50%"/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <Card>
                        <CardContent className="start">
                            <img src={Room2} alt="rooms" width="100%" height="50%"/>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                <Grid container spacing={0} className="">
                <Grid item xs={12} md={5} lg={5}>
                        <div className="start padding">
                            <h2 className="p-x actively">What we have</h2>
                            <p className="margin-top p-x lh">We portray and pitch luxury and comfort in all magnitude. You want it? We have it! From our coziest to our best</p>
                            <div className="margin-top">
                            <Button variant="contained" color="primary" onClick={props.handletab2}>our rooms</Button></div>
                        </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <Card>
                        <CardContent className="start">
                            <img src={Room1} alt="rooms" width="100%" height="70%"/>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                </div>
            <div className="page-2 start rooms transparency">
            <h1 className="actively">Bar & Restaurant</h1>
                <Grid container spacing={0}>
                <Grid item xs={12} md={4} lg={5}>
                <div className=" padding">
                    <h2 className="m-b-0 p-x">Bar</h2>
                    <p className="m-t-2 p-x lh">A well stocked chill thrilling experience at our bar and restaurant to make the most out of your experience</p>
                    <h2 className="m-b-0 p-x ">Restaurant</h2>
                    <p className="m-t-2 p-x lh">Delicacies across Uganda and borders will make you feel right where you want to be - with us</p>
                    <Button variant="contained" color="primary" onClick={props.handletab4}>see our menu</Button>
                </div>
                </Grid>
                <Grid item xs={12} md={5} lg={7}>
                    <div className="start">
                            <img src={Bar} alt="rooms" className="reg-img"/>
                            </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Home;