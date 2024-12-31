import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
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

const Smoothie = () =>{
    return(
        <>  
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <MenuCarousel drinks={fruitTeas}/>
        </>
    )
}

export default Smoothie;