import React from "react";
import PricingMenu from "./ui/pricingmenu";
import SmallBanner from "./ui/smallbanner";
import HouseFavorites from "./ui/coffeeitems";


const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
 
const CoffeeComponent=()=>{
    return(
        <>
        <PricingMenu/>
        <HouseFavorites/>
        <SmallBanner text={text}/>
        
        </>
    )
}

export default CoffeeComponent;