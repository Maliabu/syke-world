import React from "react";
import '../index.css'
import { Grid, Button, Hidden } from "@material-ui/core";
import Bar from '../images/bar.jpg'
import Room1 from '../images/home-room1.png'
import Room2 from '../images/home-room2.png'
// import Counter from '../images/counter.png'
import Syke from '../images/syke.png'
import TriangleBottom from '../images/card.png'
import Booking from '../forms/Booking'
import Bar2 from '../images/bg-3.jpg'

function Home(props){
    return(
        <div><Hidden smDown>
        <div className="main-page">
            <Grid container spacing={0}>
            <Grid item xs={12} md={8} lg={8}><Booking/>
            {/* <Hidden smUp>
                <div className="padding bg-oranger rooms">
                    <h4 className="border">welcome</h4>
                    <p className="lh padding">Syke World Hotel welcomes you to comfort and luxury at a destination away yet feels right at home</p>
                    <Button variant="outlined" color="primary" onClick={props.handletab3}> explore </Button>
                </div>
                <img src={TriangleBottom} alt="rooms" width="80%" height="20%"/>
            </Hidden> */}
            </Grid>
            <Grid item xs={1} md={1} lg={1}></Grid>        
            <Grid item xs={7} md={3} lg={3}>
                <Hidden smDown>
                <div className="paidha rooms">
                <img src={Syke} alt="rooms" width="100%" height="100%"/>
                    <h4>welcome</h4>
                    <p className="lh padding">Syke World Hotel welcomes you to comfort and luxury at a destination away yet feels right at home</p>
                    <div>
                        <Button variant="outlined" color="primary" onClick={props.handletab2}>discover</Button></div>
                    </div>
                    <img src={TriangleBottom} alt="rooms" width="80%" height="10%"/>
                </Hidden>
            </Grid>
            </Grid>
        </div></Hidden>
                <div className="rooms paidha">
                <Hidden smUp>
                <div className="main-page-res">
                    <div className="paidha padding">
                    <h4>welcome</h4>
                    <h2 className="lh padding start">Syke World Hotel welcomes you to comfort and luxury at a destination away yet feels right at home</h2>
                    <div>
                        <Button variant="outlined" color="primary" onClick={props.handletab2}>discover</Button></div>
                    </div>
                    <img src={TriangleBottom} alt="rooms" width="80%" height="10%"/>
                </div>
                </Hidden>
                <Grid container spacing={0}>
                <Grid item xs={12} md={5} lg={5}>
                <Hidden smUp>
                <img src={Syke} alt="hotel" width="100%" height="40%"/>
                </Hidden>
                <div className="start padding">
                <div className="">
                <Button variant="outlined" color="primary"> single </Button>
                <Button variant="outlined" color="primary"> double </Button>
                <Button variant="outlined" color="primary"> deluxe </Button>
                </div>
                    <h1 className="actively">Accomodation</h1>
                    <p className="lh">Our BnB - offers spacious single, double and deluxe rooms equiped with everything you need to make your stay as comfortable. <br/> <br/>A smart Tv connected to our fastest internet speeds, a workspace so that you can work as you stay, laundry services available when and if you need it, electronics and more...</p>
                    {/* <img src={Syke} alt="rooms" width="100%" height="50%"/> */}
                </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7} className="p-y">
                    <img src={Room2} alt="rooms" width="100%" height="70%"/>
                    <Grid container>
                        <Grid item xs={12} md={5} lg={5} className="p-y">
                        <Button variant="outlined" color="primary" onClick={props.handletab3}> Take a look at our services </Button>
                        </Grid>
                        <Grid item xs={12} md={7} lg={7} className="p-y">
                            <p className="lh p-x">We offer lots of services, whatever makes you most comfortable and makes your stay most memorable</p>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
                <Grid container spacing={0} className="oranger">
                <Grid item xs={12} md={5} lg={5} className="p-x">
                        <div className="start">
                            <h2 className="actively border">What we have</h2>
                            <p className="lh">We portray and pitch luxury and comfort in all magnitude. You want it? We have it! From our coziest to our best</p>
                            <div>
                            <Button variant="outlined" color="primary" onClick={props.handletab2}>our rooms</Button></div>
                        </div>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <img src={Room1} alt="rooms" width="100%" height="80%"/>
                </Grid>
                </Grid>
                </div>
            <div className="paidha start">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4} className="culture">
                    <Grid container spacing>
                        <Grid item xs={12}>
                        <h3 className="padding-3 transparency margin-less">
                        <h1 className="">CULTURE</h1>Alur are a Nilotic ethnic group who live in northwestern Uganda</h3>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className="padding">
                        <h2 className="bolder actively">Paidha Town</h2>
                        <p className="lh">Find out why you should visit paidha Town. There's culture, music, food and so much more</p>
                        <Button variant="outlined" color="primary" onClick={props.handletab16}>WHY PAIDHA?</Button>
                        <h4><span className="rounded">CULTURE</span><span className="rounded">ENTERTAINMENT</span><br/>
                        <span className="rounded">SPORTS</span><span className="rounded">LOCAL CUISINE</span>
                        <span className="rounded">MUSIC</span><span className="rounded">BEAUTIFUL SCENERY</span>
                        </h4></div>
                    </Grid>
                    <Grid item xs={12} md={4} className="sports">
                    <Grid container spacing>
                        <Grid item xs={12}>
                        <h3 className="padding-3 transparency margin-less">
                        <h1 className="">SPORTS</h1>Paidha Black Angels FC is a football team from Paidha, Zombo District.</h3>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="paidha p-y rooms start">
                <Grid container spacing={0} className="p-y">
                <Grid item xs={12} md={7} lg={4} className="p-y">
                    <div className="start">
                            <img src={Bar} alt="rooms" className="reg-img"/>
                            </div>
                </Grid>
                <Grid item xs={12} md={5} lg={8} className="p-x">
                    <Grid spacing container>
                <Grid item xs={12} md={6} lg={6} className="p-y">
                <div>
            <h1 className="actively">Bar & Restaurant</h1>
                    <h2>Bar</h2>
                    <p className="lh">A well stocked chill thrilling experience at our bar and restaurant to make the most out of your experience</p>
                    
                </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6} className="p-y">
                    <div className="start"><h2>Restaurant</h2>
                    <p className="lh">Delicacies across Uganda and borders will make you feel right where you want to be - with us</p>
                    <Button variant="outlined" color="primary" onClick={props.handletab4}>see our menu</Button>
                            </div>
                </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Home;