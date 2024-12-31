import React from "react";
import Flower from "./ui/flower";
import MenuCarousel from "./ui/menu-carasoul";
import Banner from "./ui/banner";
import ToppingsGrid from "./ui/topping-grid";
import ExtraToppings from "./ui/extra-toppings";
import SmallBanner from "./ui/smallbanner";

const fruitTeas = [
    {
      name: "Dragon Fruit",
      image: "/fruittea0.png",
    },
    {
      name: "Passion Fruit",
      image: "/fruittea1.png",
    },
    {
      name: "Green Apple",
      image: "/fruittea2.png",
    }
  ]

  const milkTeas = [
    {
      name: "Classic Milk Tea",
      image: "/milktea0.png",
    },
    {
      name: "Mocha Coffee",
      image: "/milktea1.png",
    },
    {
      name: "Honey Drew Tea",
      image: "/milktea2.png",
    }
  ] 

  const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
 
  const BubbleTea=()=>{
    return(
        <>  
            <Flower text="Bubble Teas"/>
            <MenuCarousel drinks={fruitTeas}/>
            <Flower text="Milk Tea"/>
            <MenuCarousel drinks={milkTeas}/>
            <br></br>
            <Banner 
            leftSection={{ text: "Small", price: "5.99" }}
            rightSection={{ text: "Regular", price: "6.99" }}
            />
            <Flower text="Toppings"/>
            <ToppingsGrid/>
            <br></br>
            <ExtraToppings/>
            <br></br>
            <SmallBanner text={text}/>


        
        </>
    )
}

export default BubbleTea;