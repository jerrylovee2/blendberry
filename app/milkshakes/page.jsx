import Connect from "@/components/Connect";
import MilkShakesComponent from "@/components/MilkShakeComponent";
import { Navigation } from "@/components/Navigation";
import React from "react";



const milkshakes=()=>{
    return(<>
    
    <Navigation/>
    <img src="/milkshakes.png" alt="Bubble Tea" style={{ width: '100%', height: '100vh' }} />

        <MilkShakesComponent/>
       
       <Connect/>

    </>)
}

export default milkshakes