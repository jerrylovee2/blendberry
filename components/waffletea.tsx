import React from "react";
import Menu from "./ui/shaggedmenu";
import Banner from "./ui/banner";
import IceCream from "./ui/iceCream";
import SmallBanner from "./ui/smallbanner";


  
const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
 
const WaffleTea = () =>{
    return(
        <>      
        <Menu/>
        <Banner 
            leftSection={{ text: "Plain Bubble Waffle", price: "3.99" }}
            rightSection={{ text: "Other Flavours", price: "5.99" }}
            />
        <IceCream/>
        <SmallBanner text={text}/>
       
        </>
    )
}

export default WaffleTea;