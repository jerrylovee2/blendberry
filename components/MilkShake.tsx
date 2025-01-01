import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
import MenuCarousel1 from "./ui/menu-carsouel1";
import SmallBanner from "./ui/smallbanner";
import Banner from "./ui/banner";
import GlobalMix from "./ui/global";
const fruitTeas = [
    {
      name: "Oreo Overloaded",
      image: "/fruittea0.png",
    },
    {
      name: "Double Choclate",
      image: "/fruittea1.png",
    },
    {
      name: "Frrero Nutella",
      image: "/fruittea2.png",
    },
    {
        name: "Kit-Kat Pie",
        image: "/fruittea2.png",
    },
    {
        name: "Coffee Cyclone",
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
    },
    {
      name: "Freezing Pineapple",
      image: "/fruittea2.png",
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
  const text2="Discover Our New Mix-In!"
const MilkShakes = () =>{
    return(
        <>  
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <MenuCarousel1 drinks={fruitTeas}/>
        <Banner 
            leftSection={{ text: "Small", price: "5.99" }}
            rightSection={{ text: "Regular", price: "6.99" }}
            />
        <Flowerext flowerText="Special" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        <MenuCarousel1 drinks={Tropicals}/>
        <SmallBanner text={text2}/>   
        <GlobalMix/>
        <SmallBanner text={text}/> 
        </>
    )
}

export default MilkShakes;