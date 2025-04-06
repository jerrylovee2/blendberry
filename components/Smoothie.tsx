import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
import SmallBanner from "./ui/smallbanner";
import FruitShowcase from "./FruitShowcase";

const fruits = [
  { text: "Dragon Fruit", image: "/images/dragon-fruit.png" },
  { text: "Passion Fruit", image: "/images/passion-fruit.png" },
  { text: "Green Apple", image: "/images/green-apple.png" },
  { text: "Peach", image: "/images/peach.png" },
  { text: "Lychee", image: "/images/lychee.png" },
]

const fruitTeas = [
    {
      name: "Strawberry Banana",
      image: "/s1.png",
    },
    {
      name: "Berries Treasure",
      image: "/s2.png",
    },
    {
      name: "Big Blue Banana",
      image: "/s3.png",
    }
  ]
  const Tropicals = [
    {
      name: "Pina Colada",
      image: "/s4.png",
    },
    {
      name: "Golden Mango Slush",
      image: "/s5.png",
    },
    {
      name: "Freezing Pineapple",
      image: "/s6.png",
    }
  ]
  const Protiens = [
    {
      name: "Muscle Builder",
      image: "/s7.png",
    },
    {
      name: "Elite A Whey",
      image: "/s8.png",
    },
    {
      name: "Peanut Butter Cup",
      image: "/s9.png",
    }
  ]
  
  const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
 
const Smoothie = () =>{
    return(
        <>  
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <FruitShowcase fruits={fruits}/>
        <MenuCarousel drinks={fruitTeas}/>
        <Flowerext flowerText="Tropical" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <MenuCarousel drinks={Tropicals}/>
        <Flowerext flowerText="Protein" leftPricing={{ title: "Small", price:7.99 }} rightPricing={{ title: "Regular", price:9.49 }}/>
        <MenuCarousel drinks={Protiens}/>
        <SmallBanner text={text}/>
        </>
    )
}

export default Smoothie;