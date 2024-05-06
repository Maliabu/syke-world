import React from "react";
import { Avatar, Card, CardContent, Grid, Hidden } from "@material-ui/core";
import '../App.css'
import {PinDropRounded, CodeRounded, LocationCityRounded, Facebook} from "@material-ui/icons";

function About(){
    return(
        <div>
        <div>
            <div className="page-2 rooms back">
            <Hidden smDown><h2 className="start margin-top">about syke world</h2></Hidden>
            <Hidden smUp><h2 className="start margin-top-syke">about syke world</h2></Hidden>
                <h2 className="">Who we are</h2>
                <Grid container spacing={1}>
                <Grid item xs={12} md={6} lg={6}>
                    <Card>
                        <CardContent className="start">
                            <LocationCityRounded/>
                            <p className="m-t-2 lh p-x">Syke world is a hotel in paidha Town Council, Okoro County, Nothern Uganda - LandMark Place</p>
                            <p className="m-t-2 lh p-x">Syke World aspires to offer world class hospitality services tailored to meet individual client needs. </p>
                        </CardContent>
                    </Card>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6} lg={6}>
                        <Card>
                        <CardContent className="start">
                        <PinDropRounded/>
                            <h2 className="m-b-0 p-x">Location</h2>
                            <p className="m-t-2 p-x lh">Paidha</p>
                        </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                        <Card>
                        <CardContent className="start">
                        <CodeRounded/>
                            <h2 className="m-b-0 p-x">Plus Code</h2>
                            <p className="m-t-2 p-x lh">CX7J+Q9 Paidha</p>
                        </CardContent>
                        </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Card>
                        <CardContent className="start">
                        <iframe title="syke world" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.276150094636!2d30.978383574600567!3d2.414503957229986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x176fa1fc50041e1d%3A0xddad62820562905c!2sSYKE%20WORLD%20HOTEL!5e0!3m2!1sen!2sug!4v1713347101315!5m2!1sen!2sug" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
                <div>
                    <h2>Client Reviews</h2>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4} lg={4}>
                        <Card>
                            <CardContent>
                            <div className="center">
                                <Avatar className="margin-top center" style={{backgroundColor:"#f5bb5f"}}>C</Avatar>
                                <h4>
                                <a href="https://g.co/kgs/4MGndqe" content="review" className="rooms">"World class hospitality"</a></h4>
                            </div>
                            </CardContent>
                        </Card>
                        </Grid>
                        <Grid item xs={12} md={8} lg={8}>
                            <Card>
                                <CardContent>
                                    <p>Follow us and more reviews on social media</p>
                                    <a href="https://www.facebook.com/p/Syke-World-100057352633954/" content="social media review" className="active"><Facebook/></a>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div></div>
    )
}

export default About;