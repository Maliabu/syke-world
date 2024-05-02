import React from "react";
import { Box, Grid, FormControl, InputLabel, FormHelperText, Button, Select, MenuItem, Input } from "@material-ui/core";
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";

function SignUp(){
    return(
    <div>
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={2} className="back">
                <Grid item xs={12} md={2} lg={2}>
                <h3>SignUp</h3>
                </Grid>
                <Grid item xs={12} md={8} lg={8} className="transparency">
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
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl size="small" fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Check out"/></LocalizationProvider>
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl fullWidth>
                    <InputLabel htmlFor="component-outlined" className="p-x">Room</InputLabel>
                    <Select id="component-outlined" value={1} label="Single">
                        <MenuItem value={1}>Single</MenuItem>
                        <MenuItem value={2}>Double</MenuItem>
                        <MenuItem value={3}>Deluxe</MenuItem>
                    </Select>
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
                <Grid item xs={12} md={4} lg={4}>
                    <FormControl size="small" fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Check out"/></LocalizationProvider>
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                </Grid>
                    </Grid>
                    <div className="margin-top margin-bottom">
                <Button variant="contained" color="primary">Submit</Button></div>
                </div>
                </Grid>
            </Grid>
        </Box>
    </div>)
}

export default SignUp;