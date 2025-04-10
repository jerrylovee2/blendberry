
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
    <div className="relative h-[30vh] sm:h-[45vh] lg:h-screen">
    <img src="/coffee1.png" alt="Bubble Tea" className=" w-full h-100vh sm:h-full" />
    </div>
        <PricingMenu/>
         <HouseFavorites/>
         
         <SmallBanner text={text}/>
       
       <Connect/>

    </>)
}

export default chaihouse