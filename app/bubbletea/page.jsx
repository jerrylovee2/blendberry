import BubbleTeaComponent from "@/components/BubbleTea";
import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import React from "react";


const bubbleTea=()=>{
    return(<>
    
    <Navigation/>
    <img src="/bubbletea.png" alt="Bubble Tea" style={{ width: '100%', height: '100vh' }} />

    <BubbleTeaComponent/>
       
       <Connect/>

    </>)
}

export default bubbleTea