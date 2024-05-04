import React, {useState} from "react";
import { Box, Button, Grid, Hidden, Drawer } from "@material-ui/core";
import Booking from "./Booking";
import CheckForm from '../forms/CheckAvailability'
import Rooms from "./Rooms";
import Services from "./Services";
import Menu from "./Menu";
import TabContent from "../routers/TabContent";
import TabItem from "../routers/TabItem";
import Home from "./Home";
import About from "./About";
import Auth from "./Auth";
import Logo from '../images/logo1.png'
import HomeCheck from '../images/home-check.png'
import HomeCheck1 from '../images/home-check1.png'
import Messaging from '../images/message.png'
import MessageUs from '../forms/MessageUs'
import { CallRounded, HomeRounded, LocationCityRounded, MenuRounded } from "@material-ui/icons";

function NavBar(){
    const [activeTab, setActiveTab] = useState("tab1");
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    function scrollToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const toggleDrawer = e => {
        console.log(e)
        if(
            e.type === "keydown" &&
            (e.key === "Tab" || e.key === "Shift")
        ){
            return;
        }
        setOpen(!open);
    }
    const toggleDrawer1 = e => {
        if(
            e.type === "keydown" &&
            (e.key === "Tab" || e.key === "Shift")
        ){
            return;
        }
        setOpen1(!open1);
    }
    const toggleDrawer2 = e => {
        if(
            e.type === "keydown" &&
            (e.key === "Tab" || e.key === "Shift")
        ){
            return;
        }
        setOpen2(!open2);
    }
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("tab3");
    };
    const handleTab4 = () => {
        // update the state to tab1
        setActiveTab("tab4");
    };
    const handleTab5 = e => {
        console.log(e)
        // update the state to tab1
        setActiveTab("tab5");
    };
    const handleTab9 = () => {
        // update the state to tab1
        setActiveTab("tab9");
    };
    const handleTab10 = () => {
        // update the state to tab1
        setActiveTab("tab10");
    };
    return(
        <div>
        <Grid container spacing={0} className="rooms nav-top" alignContent="center" alignItems="center" justifyContent="center">
        <Grid container className="bg-oranger">
            <Grid item xs={6} md={4} lg={3} className="">
            <div className="center">
                    <Grid container>
                        <Grid item alignContent="center" xs={3} md={3} lg={2} className="margin-top-syke">
                        <Hidden smUp><img src={Logo} alt="logo" width="70%" height="40%" className="margin-top-syke"/></Hidden>
                        <Hidden smDown><img src={Logo} alt="logo" width="60%" height="40%" className="margin-top-syke"/></Hidden>
                        </Grid>
                        <Grid item xs={9} md={6} lg={6}><h3 className="margin-top-syke lh start">SYKE WORLD HOTEL</h3></Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={6} md={7} lg={8} className=" p-xs">
            <Hidden smUp>
            <Grid container>
            <Grid item xs={11} className="end">
            <MenuRounded onClick={toggleDrawer} className="margin-top-syke tabs p-xs"/></Grid>
            </Grid></Hidden>
            <Box sx={{display:{xs:'none', md:'block'}}}>
            <Grid container spacing={0}>
                <Grid item xs={2} lg={2}>
                <TabItem title={<h4>Booking</h4>} onClick = {handleTab5} id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={2} lg={2}>
                <TabItem title={<h4 className="tabs">Menu</h4>} onClick = {handleTab4} id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={2} lg={2}>
                <TabItem title={<h4 className="tabs">Home</h4>} onClick = {handleTab1} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={2} lg={2}>
                <TabItem title={<h4 className="tabs">Services</h4>} onClick = {handleTab3} id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={2} lg={2}>
                <TabItem title={<h4 className="tabs">Rooms</h4>} onClick = {handleTab2} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={2} lg={2}>
                <TabItem title={<h4 className="tabs">About</h4>} onClick = {handleTab9} id="tab9" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
            </Grid>
            </Box>
            </Grid>
        </Grid>
        <Hidden smUp>
        <Drawer anchor="left" open={open} onClose={toggleDrawer} className="transparency rooms">
        <Grid container className="start margin-left-nav" id="res-top-nav">
        <Grid item xs={12} className="bb margin-bottom">
        <div className="center margin-bottom">
                    <Grid container>
                        <Grid item alignContent="center" xs={4} md={6} lg={6}>
                        <Hidden smUp><HomeRounded/></Hidden></Grid>
                        <Grid item xs={8} md={6} lg={6}><p className="end lh">DASHBOARD</p></Grid>
                    </Grid>
                </div>
        </Grid>
        <Grid item xs={12}>
                <TabItem title={<h3>Booking</h3>} onClick = {handleTab5} id="tab5" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={12}>
                <TabItem title={<h3>Menu</h3>} onClick = {handleTab4} id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={12}>
                <TabItem title={<h3>Home</h3>} onClick = {handleTab1} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={12}>
                <TabItem title={<h3>Services</h3>} onClick = {handleTab3} id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={12}>
                <TabItem title={<h3>Rooms</h3>} onClick = {handleTab2} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
                <Grid item xs={12} className="bb">
                <TabItem title={<h3>About</h3>} onClick = {handleTab9} id="tab9" activeTab={activeTab} setActiveTab={setActiveTab}/>
                </Grid>
        </Grid>
        </Drawer>
        </Hidden>
        <Hidden smDown>
        <img src={HomeCheck} alt="check" width="100%" className="pointer" onClick={toggleDrawer1}/></Hidden>
        <Hidden smUp>
        <img src={HomeCheck1} alt="check" width="100%" className="pointer" onClick={toggleDrawer1}/></Hidden>
        <Hidden smDown>
        <div className="nav-bottom end">
            <img src={Messaging} alt="check" width="11%" className="pointer" onClick={toggleDrawer2}/>
            {/* <h4><Email/> TALK TO US</h4> */}
            <Grid container>
            <Grid item xs={8} md={8} lg={8}>
                <Drawer anchor="bottom" open={open2} onClose={toggleDrawer2} className=" rooms check right-drawer"><MessageUs/></Drawer></Grid>
            </Grid>
        </div>
        </Hidden>
        <Hidden smUp>
        <div className="nav-bottom-small end">
            <img src={Messaging} alt="check" width="30%" className="pointer" onClick={toggleDrawer2}/>
            {/* <h4><Email/> TALK TO US</h4> */}
            <Grid container>
            <Grid item xs={8} md={8} lg={8}>
                <Drawer anchor="bottom" open={open2} onClose={toggleDrawer2} className=" rooms check right-drawer"><MessageUs/></Drawer></Grid>
            </Grid>
        </div>
        </Hidden>
        <Grid container>
            <Grid item xs={8} md={4} lg={3}>
                <Drawer anchor="top" open={open1} onClose={toggleDrawer1} className=" rooms check"><CheckForm/></Drawer></Grid>
            </Grid>
        </Grid>
        <div>
        <TabContent id="tab1" activeTab={activeTab}><Home handletab2 = {handleTab2} handletab3 = {handleTab3} handletab4 = {handleTab4}/></TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
                <Rooms handletab5 = {handleTab5}/>
                {scrollToTop()}
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
                <Services/>
                {scrollToTop()}
            </TabContent>
            <TabContent id="tab4" activeTab={activeTab}>
                <Menu/>
                {scrollToTop()}
            </TabContent>
            <TabContent id="tab5" activeTab={activeTab} handleTab10={handleTab10} setActiveTab={setActiveTab}>
                <Booking/>
                {scrollToTop()}
            </TabContent>
            <TabContent id="tab9" activeTab={activeTab}>
                <About/>
                {scrollToTop()}
            </TabContent>
            <TabContent id="tab10" activeTab={activeTab}>
                <Auth/>
                {scrollToTop()}
            </TabContent>
        </div>
            <div className="p-x p-y rooms start">
                <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <h4 className="m-b-0 p-x actively">Syke World Hotel</h4>
                    <p className="m-t-2 p-x lh">{'\u00A9'} copyright@SykeWorldHotel<br/>All rights reserved<br/>{new Date().getFullYear()}</p>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                <div className="p-x">
                    <CallRounded/>
                    <p className="m-t-2 lh">Contact Us<br/>For more inquiries and information call:<br/><br/>0782360252</p>
                </div>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                <div className="p-x">
                    <LocationCityRounded/>
                    <p className="m-t-2 lh">Syke world is a hotel in paidha Town Council, Okoro County, Nothern Uganda - LandMark Place</p>
                    <Button variant="contained" color="primary" onClick={handleTab9}>About Syke World</Button>
                </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default NavBar;