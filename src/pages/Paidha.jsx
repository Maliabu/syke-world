import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import '../App.css'

function Paidha(){
    return(
        <div>
            <div className="page-2 rooms paidha">
            <Hidden smDown>
            <Grid container spacing={1} className="padding-3 margin-top-nav back-flipped">
                <Grid item xs={10} md={8}>
                <h2 className="start">visit PAIDHA TOWN</h2></Grid>
                <Grid item xs={10} md={4}>
            <p className="lh">Paidha is in Zombo District, West Nile sub-region. The town is near the border with the Democratic Republic of the Congo. It is approximately 95 kilometres (59 mi), by road, south of Arua, the largest city in the sub-region.</p></Grid>
            </Grid>
            </Hidden>
            <Hidden smUp><h2 className="start margin-top-syke">visit paidha</h2></Hidden>
            <Grid container spacing={1}>
                <Grid item xs={10} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                        <img src="https://cdn08.allafrica.com/download/pic/main/main/csiid/00570199:c877443dc929468b490eb099392ea4e8:arc614x376:w1200.jpg" width="100%" height="100%" alt="rooms"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <div className="back-flipped padding rooms start">
                            <h2 className="m-b-0 p-x">PAIDHA</h2>
                            <p className="m-t-2 p-x lh">Paidha is a busy border town in northwest Uganda at its border with the DRC</p>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                        <img src="https://media.tacdn.com/media/attractions-content--1x-1/0b/39/9c/f9.jpg" width="100%" height="100%" alt="rooms"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <div className="back-flipped padding rooms start">
                            <h2 className="m-b-0 p-x">SCENERY</h2>
                            <p className="m-t-2 p-x lh">Looking to endulge with nature? Take a wild trip to the outlaws? Come and see the beautiful scenery!</p>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={10} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                        <img src="https://www.fufa.co.ug/wp-content/uploads/2018/05/Kabale-Sharp-Vs-Paidha-Black-Angels.jpg" width="100%" height="100%" alt="rooms"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <div className="back-flipped padding rooms start">
                            <h2 className="m-b-0 p-x">SPORTS</h2>
                            <p className="m-t-2 p-x lh">Paidha Black Angels Promoted Back To Big League</p>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={6}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                        <img src="https://paidhafm.com/wp-content/uploads/2022/11/Coronation-Anniversary-of-the-New-Arur-King-Rwoth-Ubimu-Phillip-Olarker-Rauni-III-Atyak-seed-school-Zombo-18th-Nov-2022-13-960x750.jpg" width="100%" height="100%" alt="rooms"/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                        <div className="back-flipped padding rooms start">
                            <h2 className="m-b-0 p-x">CULTURE</h2>
                            <p className="m-t-2 p-x lh">Visit the Aringa Cultural Museum to learn about the history and traditions of the region.</p>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <h2 className="start margin-top-nav back-flipped padding-3">FOOD & ENTERTAINMENT ........... MUSIC & CULTURE</h2>
            </div>
        </div>
    )
}

export default Paidha;