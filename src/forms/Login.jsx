import React from "react";
import { Box, Grid, FormControl, InputLabel, FormHelperText, Button, Input } from "@material-ui/core";
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";

function Login(){
    return(
    <div className="pages-auth">
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={2} className="black-card rooms">
                <Grid item xs={12} md={2} lg={2}>
                <h3>Login</h3>
                </Grid>
                <Grid item xs={12} md={8} lg={8} className="back">
                <div className="tranparency p-x">
                <h2 className="margin-top margin-bottom">SignUp</h2>
                <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined" className="p-x">Room</InputLabel>
                    <Input placeholder="First Name"/>
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl size="small" fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Check in"/></LocalizationProvider>
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                </Grid>
                </Grid>
                <h5>Dont have an account? Create Account</h5>
                    <div className="margin-top margin-bottom">
                <Button variant="outlined" color="primary">Login</Button></div>
                </div>
            </Grid>
            </Grid>
        </Box>
    </div>)
}

export default Login;