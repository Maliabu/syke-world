import React from "react";
import { Card, CardContent, Grid, Hidden } from "@material-ui/core";
import '../App.css'
import Pilao from '../images/Pilao.png'
import Gnuts from '../images/Gnuts.png'
import Pastry from '../images/Pastry.png'
import Katogo from '../images/katogo.jpeg'
import Coffee from '../images/coffee.png'
import Tea from '../images/tea.png'

function Menu(){
    return(
        <div>
            <div className="page-2 rooms back">
            <Hidden smDown><h2 className="start margin-top">take a look!</h2></Hidden>
            <Hidden smUp><h2 className="start margin-top-syke">take a look!</h2></Hidden>
                <h2 className="">Our Breakfast Treat</h2>
                <Grid container spacing={2}>
                <Grid item xs={8} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <img src={Pilao} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">Pilao</h2>
                            <p className="m-t-2 p-x lh">There's nothing quite like a fullfilling meal to start or brunch your day</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={6} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <img src={Gnuts} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">Peanuts</h2>
                            <p className="m-t-2 p-x lh">Locally farmed and roasted for your atmost home away from home experience</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={3} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <img src={Katogo} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">Katogo</h2>
                            <p className="m-t-2 p-x lh">A deliciously confirmed meal that combines lots of flavor to start your day</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={6} lg={3}>
                    <Card>
                        <CardContent className="start">
                            <img src={Pastry} alt="rooms" className="card-image"/>
                            <h2 className="m-b-0 p-x">Pastry</h2>
                            <p className="m-t-2 p-x lh">Fresh from the oven comes cakes, doughnuts and so much more to accompany your chai</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8} md={6} lg={4}>
                    <img src={Coffee} alt="rooms" className="card-image"/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardContent className="start">
                            <h2 className="m-b-0 p-x">Coffee</h2>
                            <p className="m-t-2 p-x lh">brewed from the roasted and ground seeds of the tropical evergreen coffee plants of African origin</p>
                            <h2 className="m-b-0 p-x">Chai/Tea</h2>
                            <p className="m-t-2 p-x lh">Come enjoy some of the best tea right here at the heart of Paidha Town</p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8} md={6} lg={4}>
                    <img src={Tea} alt="rooms" className="card-image"/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Menu;