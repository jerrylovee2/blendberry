import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
import SmallBanner from "./ui/smallbanner";
const fruitTeas = [
    {
      name: "Strawberry Banana",
      image: "/fruittea0.png",
    },
    {
      name: "Berries Treasure",
      image: "/fruittea1.png",
    },
    {
      name: "Big Blue Banana",
      image: "/fruittea2.png",
    }
  ]
  const Tropicals = [
    {
      name: "Pina Colada",
      image: "/fruittea0.png",
    },
    {
      name: "Golden Mango Slush",
      image: "/fruittea1.png",
    },
    {
      name: "Freezing Pineapple",
      image: "/fruittea2.png",
    }
  ]
  const Protiens = [
    {
      name: "Muscle Builder",
      image: "/fruittea0.png",
    },
    {
      name: "Elite A Whey",
      image: "/fruittea1.png",
    },
    {
      name: "Peanut Butter Cup",
      image: "/fruittea2.png",
    }
  ]
  
  const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
 
const Smoothie = () =>{
    return(
        <>  
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <MenuCarousel drinks={fruitTeas}/>
        <Flowerext flowerText="Tropical" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <MenuCarousel drinks={Tropicals}/>
        <Flowerext flowerText="Protien" leftPricing={{ title: "Small", price:7.99 }} rightPricing={{ title: "Regular", price:9.49 }}/>
        <MenuCarousel drinks={Protiens}/>
        <SmallBanner text={text}/>
        </>
    )
}

export default Smoothie;