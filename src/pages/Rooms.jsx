import React, {useState} from "react";
import { Grid, Button, Hidden } from "@material-ui/core";
import Room1 from '../images/room1.png'
import Room2 from '../images/room2.png'
import Room1Wardrobe from '../images/room1-wardrobe.png'
import Room2Wardrobe from '../images/room2-wardrobe.png'
import Room3 from '../images/room3.png'
import Room3Bath from '../images/room3-bath.png'
import Room3Loos from '../images/room3-loos.png'
import '../App.css'
import TabItem from "../routers/TabItem";
import TabContent from "../routers/TabContent";
import {Wifi, DirectionsCarRounded, SecurityRounded, RoomServiceRounded, LocalBarRounded, LocalLaundryServiceRounded, RestaurantMenuRounded} from "@material-ui/icons";

function Rooms(props){
    const [activeTab, setActiveTab] = useState("tab6");
    const handleTab6 = () => {
        // update the state to tab1
        setActiveTab("tab6");
    };
    const handleTab7 = () => {
        // update the state to tab2
        setActiveTab("tab7");
    };
    const handleTab8 = () => {
        // update the state to tab2
        setActiveTab("tab8");
    };
    return(
        <div>
            <div className="page-2 rooms back">
            <Hidden smDown><h2 className="start margin-top">book with us</h2></Hidden>
            <Hidden smUp><h2 className="start margin-top-syke">book with us</h2></Hidden>
                <h2 className="p-y">Our Rooms</h2>
                <div>
                <Grid container spacing={0} className="bg-oranger">
                    <Grid item xs={4}>
                    <TabItem title={<h2>Single</h2>} onClick = {handleTab6} id="tab6" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </Grid>
                    <Grid item xs={4}>
                    <TabItem title={<h2 className="tabs">Double</h2>} onClick = {handleTab7} id="tab7" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </Grid>
                    <Grid item xs={4}>
                    <TabItem title={<h2 className="tabs">Deluxe</h2>} onClick = {handleTab8} id="tab8" activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </Grid>
                </Grid>
                </div>
                <TabContent id="tab6" activeTab={activeTab}>
                <div className="back-flipped">
                <Grid container spacing={0}>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} lg={8}>
                    <div className="start">
                            <img src={Room2} alt="rooms" className="reg-img"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                <div className="start">
                            <img src={Room1Wardrobe} alt="rooms" width="100%" height="80%"/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3} className="p-y">
                            <h2>Single</h2>
                            <p className="padding start lh">Dont be fooled, our single room is not pressed for space. Come and enjoy luxury in our simple yet comfortable and yet affordable room</p>
                            <div className="padding-3">
                            <Grid container spacing={1}>
                                <Grid item xs={2}><Wifi/></Grid>
                                <Grid item xs={2}><RestaurantMenuRounded/></Grid>
                                <Grid item xs={2}><SecurityRounded/></Grid>
                                <Grid item xs={2}><LocalBarRounded/></Grid>
                            </Grid>
                            </div>
                            <h2 className="p-x">UGX 80,000 / Night</h2>
                            <Button variant="outlined" color="primary" onClick={props.handletab5}>Book Single</Button>
                        
                </Grid>
            </Grid>
            </div></TabContent>
                <TabContent id="tab7" activeTab={activeTab}>
                <div className="back-flipped">
                <Grid container spacing={0}>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} lg={8}>
                    <div className="start">
                            <img src={Room3} alt="rooms" className="reg-img"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                <div className="start">
                            <img src={Room2Wardrobe} alt="rooms" width="100%" height="80%"/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3} className="p-y">
                            <h2>Double</h2>
                            <p className="padding lh start">With the double room, we bring you luxury and comfort in a much wider space so that you feel free and as comfortable as you wish to get. We have a generously spacious wardrobe and bath</p>
                            <div className="padding-3">
                            <Grid container spacing={1}>
                                <Grid item xs={2}><Wifi/></Grid>
                                <Grid item xs={2}><RestaurantMenuRounded/></Grid>
                                <Grid item xs={2}><SecurityRounded/></Grid>
                                <Grid item xs={2}><LocalBarRounded/></Grid>
                                <Grid item xs={2}><LocalLaundryServiceRounded/></Grid>
                                <Grid item xs={2}><DirectionsCarRounded/></Grid>
                            </Grid>
                            </div>
                            <h2 className="p-x">UGX 120,000 / Night</h2>
                            <Button variant="outlined" color="primary" onClick={props.handletab5}>Book Double</Button>
                        
                </Grid>
            </Grid>
            </div></TabContent>
                <TabContent id="tab8" activeTab={activeTab}>
                <div className="back-flipped">
                <Grid container spacing={0}>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} lg={8}>
                    <div className="start">
                            <img src={Room1} alt="rooms" className="reg-img"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                <div className="start">
                            <img src={Room3Bath} alt="rooms" className="card-image"/>
                            </div>
                <div className="start margin-top">
                            <img src={Room3Loos} alt="rooms" className="card-image"/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={3} className="p-y">
                            <h2>Deluxe</h2>
                            <p className="padding lh start">Yes it so much more than just luxury and comfort, its Deluxe, its just perfect for you to be everywhere and yet in one place. Enough room, cozy with a spacious bath and so much more.</p>
                            <div className="padding-3">
                            <Grid container spacing={1}>
                                <Grid item xs={2}><Wifi/></Grid>
                                <Grid item xs={2}><RestaurantMenuRounded/></Grid>
                                <Grid item xs={2}><SecurityRounded/></Grid>
                                <Grid item xs={2}><LocalBarRounded/></Grid>
                                <Grid item xs={2}><LocalLaundryServiceRounded/></Grid>
                                <Grid item xs={2}><DirectionsCarRounded/></Grid>
                                <Grid item xs={2}><RoomServiceRounded/></Grid>
                            </Grid>
                            </div>
                            <h2 className="p-x">UGX 160,000 / Night</h2>
                            <Button variant="outlined" color="primary" onClick={props.handletab5}>Book Deluxe</Button>
                        
                </Grid>
            </Grid>
            </div></TabContent>
            </div>
        </div>
    )
}

export default Rooms;