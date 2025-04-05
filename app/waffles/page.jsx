import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import React from "react";
import Newmilkshake from "../../components/newmilkshake";
import Smoothie from "@/components/Smoothie";
import WaffleTea from "@/components/waffletea";



const Waffle=()=>{
    return(<>
    
    <Navigation/>
    <img src="/waffle.png" alt="Bubble Tea" style={{ width: '100%', height: '100vh' }} />

     <WaffleTea/>
       
       <Connect/>

    </>)
}

export default Waffle