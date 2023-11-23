import { useState } from "react";

const Toggle =()=>{
    const [btnLabel, setBtnLabel] = useState("Toggle");
    const [displayValue, setDisplayValue] = useState("none")

    const handleClick = ()=>{
        if(btnLabel === "Toggle"){
            setBtnLabel("Hide");
            setDisplayValue("initial")
        }
        else if(btnLabel === "Hide"){
            setBtnLabel("Show");
            setDisplayValue("none");
        }
        else{
            setBtnLabel("Hide");
            setDisplayValue("initial")
        }
    }
    return(
        <center>
        <button className="btn btn-secondary m-3" onClick={handleClick}> {btnLabel}</button>
        <section style={{display:`${displayValue}`}}>
            <h3 className="text-danger">Hi There! </h3>
        </section>
        </center>
    )
}

export default Toggle;