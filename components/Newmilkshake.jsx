import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
import MenuCarousel1 from "./ui/menu-carsouel1";
import SmallBanner from "./ui/smallbanner";
import Banner from "./ui/banner";
import GlobalMix from "./ui/global";
import FruitShowcase from "./FruitShowCase";


const fruits = [
  { text: "Dragon Fruit", image: "/images/dragon-fruit.png" },
  { text: "Passion Fruit", image: "/images/passion-fruit.png" },
  { text: "Green Apple", image: "/images/green-apple.png" },
  { text: "Peach", image: "/images/peach.png" },
  { text: "Lychee", image: "/images/lychee.png" },
]
const fruitTeas = [
    {
      name: "Oreo Overloaded",
      image: "/m1.png",
    },
    {
      name: "Double Choclate",
      image: "/m2.png",
    },
    {
      name: "Frrero Nutella",
      image: "/m3.png",
    },
    {
        name: "Kit-Kat Pie",
        image: "/m4.png",
    },
    {
        name: "Coffee Cyclone",
        image: "/m5.png",
    }
  ]
  const Tropicals = [
    {
      name: "Blueberry Blast",
      image: "/m6.png",
    },
    {
      name: "Sweet Strawberry",
      image: "/m7.png",
    },
    {
      name: "Coco Dates Banana",
      image: "/m8.png",
    },
    {
      name: "Salted Caramel Pretzel",
      image: "/m9.png",
    },
    {
      name: "Mango Mastani",
      image: "/m10.png",
    }
  ]

  
  const text= "Disclaimer - Our food may contain allergens like milk, nuts, and caffeine. We can't guarantee allergen-free items. Please inform us of any allergies."
  const text2="Discover Our New Mix-In!"
  
const Newmilkshake = () =>{
    return(
        <>  
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        {/* <FruitShowcase fruits={fruits}/> */}
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

export default Newmilkshake;