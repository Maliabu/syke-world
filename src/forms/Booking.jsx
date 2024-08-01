import React from "react";
import { Box, Grid, FormControl, InputLabel, FormHelperText, Button, Select, MenuItem } from "@material-ui/core";
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";

function Booking(){
    return(
    <div>
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Grid container spacing={0}>
                <Grid item xs={12} className="paidha">
                <div className="padding-3">
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
                    <div>
                <Button variant="outlined" color="primary">book a room</Button></div>
                </div>
                </Grid>
            </Grid>
        </Box>
    </div>)
}

export default Booking;