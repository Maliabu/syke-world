import React from "react";
import { Box, Grid, FormControl, InputLabel, FormHelperText, Button, Input } from "@material-ui/core";
import { EmailRounded } from "@material-ui/icons";

function MessageUs(){
    return(
    <div>
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={0} className="rooms">
                <Grid item xs={12}>
                <div className="center">
                <h2 className="center"><EmailRounded/></h2>
                <Grid container spacing={1}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined" className="p-x">Email</InputLabel>
                    <Input placeholder="Email"/>
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined" className="p-x">Your message</InputLabel>
                    <Input placeholder="your message here..."/>
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                </Grid>
                    </Grid>
                    <div className="">
                <Button variant="contained" color="primary">Submit</Button></div>
                </div>
                </Grid>
            </Grid>
        </Box>
    </div>)
}

export default MessageUs;