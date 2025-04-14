import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import Smoothie from "@/components/Smoothie";
import React from "react";

const smoothies=()=>{
    return(<>
    
    <Navigation/>
    <img src="/Banner3.png" alt="Bubble Tea" style={{ width: '100%', minHeight:'50vh' }} />
      <Smoothie/>
      
       
       <Connect/>

    </>)
}

export default smoothies