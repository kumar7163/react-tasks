import { useEffect, useState } from "react";

function Timer(){

    const [second, setSecond] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        let interval;
        if(isActive){
        interval= setInterval(()=>{
            setSecond((second)=>second+1);
        }, 1000);
    }else{
        clearInterval(interval);
    }

    return ()=> clearInterval(interval);

    }, [isActive]);

    function handleStart(){
        setIsActive(true);
    }
    function handlePause(){
        setIsActive(false);
    }

    function handleReset(){
        setIsActive(false);
        setSecond(0);
    }

    return (
        <>
        <h3 className="m-4">Timer: {second} sec </h3>
        <button className="btn btn-success me-2" onClick={handleStart}>Start</button>
        <button className="btn btn-secondary me-2" onClick={handlePause}>Pause</button>
        <button className="btn btn-danger" onClick={handleReset}>Reset</button>

        </>
    )



}

export default Timer;