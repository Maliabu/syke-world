import React from "react";
import '../index.css'
import { CardContent, Grid, Card, Button } from "@material-ui/core";
import Bar from '../images/bar.jpg'
import Room1 from '../images/room1.png'
import Room2 from '../images/room2.png'
import Counter from '../images/counter.png'

function Home(props){
    return(
        <div>
        <div className="main-page">
            <Grid container spacing={0}>
                <Grid item xs={9} md={5} lg={4}>
                    <Card className="service">
                        <CardContent className=" service">
                            <div className="transparency">
                            <img src={Bar} alt="rooms" className="card-image"/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
            <div className="page-2 start bg-oranger rooms">
                <div className="transparency page-2">
                <h1 className="margin-bottom border">Accomodation</h1>
                <Grid container spacing={2} className="margin-bottom">
                <Grid item xs={12} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <img src={Room2} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">Single</h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Card>
                        <CardContent className="start">
                            <img src={Room1} alt="rooms" width="100%" height="70%"/>
                            <h2 className="m-b-0 p-x">Deluxe</h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                        <div className="start transparency padding">
                            <h2 className="p-x actively">What we have</h2>
                            <h5 className="margin-top p-x lh">We portray and pitch luxury and comfort in all magnitude. You want it? We have it! From our coziest to our best</h5>
                            <div className="margin-top">
                            <Button variant="contained" color="primary" onClick={props.handletab2}>our rooms</Button></div>
                        </div>
                </Grid>
                </Grid>
                </div>
            <div className="page-2 margin-top start rooms transparency">
            <h1 className="border">Bar & Restaurant</h1>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <div className="start">
                            <img src={Bar} alt="rooms" className="reg-img"/>
                            </div>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                <div className="transparency padding">
                    <h2 className="m-b-0 p-x">Bar</h2>
                    <h5 className="m-t-2 p-x lh">A well stocked chill thrilling experience at our bar and restaurant to make the most out of your experience</h5>
                    <h2 className="m-b-0 p-x">Restaurant</h2>
                    <h5 className="m-t-2 p-x lh">Delicacies across Uganda and borders will make you feel right where you want to be - with us</h5>
                    <Button variant="contained" color="primary" onClick={props.handletab4}>see our menu</Button>
                </div>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <div className="start">
                            <img src={Counter} alt="rooms" className="reg-img"/>
                            </div>
                </Grid>
            </Grid>
            </div>
            </div>
        </div>
    )
}

export default Home;