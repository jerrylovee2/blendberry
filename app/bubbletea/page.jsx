import BubbleTeaComponent from "@/components/BubbleTea";
import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import React from "react";


const bubbleTea=()=>{
    return(<>
    
    <Navigation/>
    <img src="/Banner1.png" alt="Bubble Tea" style={{ width: '100%', minHeight:'50vh' }} />

    <BubbleTeaComponent/>
       
       <Connect/>

    </>)
}

export default bubbleTea