import React, { useState } from "react";
import SignUp from "../forms/SignUp";
import Login from "../forms/Login";
import { Button } from "@material-ui/core";

function Auth(){
    const [step, setStep] = useState(1)

    const next =()=>{
        setStep(step + 1 )
    }
    const nextButton = () => {
        if (step === 1)
        {return (
            <Button color="primary" variant="outlined">Login</Button>
        )} else {
            return (
                <Button color="primary" variant="outlined">Next</Button>
            )
        }
    }
    return(
        <div>
            <Step1 currentStep={step}/>
            <Step2 currentStep={step}/>
            {nextButton}
        </div>
    )
}

function Step1(props){
    if (props.currentStep !==1){
        return null
    } else
    return (
        <div>
            <Login/>
        </div>
    )
}
function Step2(props){
    if (props.currentStep !==2){
        return null
    } else
    return (
        <div>
            <SignUp/>
        </div>
    )
}
export default Auth;