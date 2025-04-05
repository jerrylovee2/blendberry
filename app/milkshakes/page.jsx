import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import React from "react";
import Newmilkshake from "../../components/newmilkshake";



const milkshakes=()=>{
    return(<>
    
    <Navigation/>
    <img src="/milkshakes.png" alt="Bubble Tea" style={{ width: '100%', height: '100vh' }} />

        <Newmilkshake/>
       
       <Connect/>

    </>)
}

export default milkshakes