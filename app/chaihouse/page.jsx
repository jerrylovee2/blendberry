import BubbleTeaComponent from "@/components/BubbleTea";
import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";
import HouseFavorites from "@/components/ui/coffeeitems";
import PricingMenu from "@/components/ui/pricingmenu";
import SmallBanner from "@/components/ui/smallbanner";
import React from "react";


const chaihouse=()=>{
    const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
 
    return(<>
    
    <Navigation/>
    <img src="/coffee.png" alt="Bubble Tea" style={{ width: '100%', height: '100vh' }} />
        <PricingMenu/>
         <HouseFavorites/>
         
         <SmallBanner text={text}/>
       
       <Connect/>

    </>)
}

export default chaihouse