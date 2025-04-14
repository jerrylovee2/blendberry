import Connect from "@/components/Connect";
import MilkShakesComponent from "@/components/MilkShakeComponent";
import { Navigation } from "@/components/Navigation";
import React from "react";



const milkshakes=()=>{
    return(<>
    
    <Navigation/>
    <img src="/Banner2.png" alt="Bubble Tea"  style={{ width: '100%', minHeight:'50vh' }} />

        <MilkShakesComponent/>
       
       <Connect/>

    </>)
}

export default milkshakes