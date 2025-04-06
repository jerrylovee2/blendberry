import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import React from "react";
import Smoothie from "@/components/Smoothie";



const smoothies=()=>{
    return(<>
    
    <Navigation/>
    <img src="/smoothie.png" alt="Bubble Tea" style={{ width: '100%', height: '100vh' }} />

      <Smoothie/>
       
       <Connect/>

    </>)
}

export default smoothies