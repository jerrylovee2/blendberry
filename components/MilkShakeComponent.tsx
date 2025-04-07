import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
import MenuCarousel1 from "./ui/menu-carsouel1";
import SmallBanner from "./ui/smallbanner";
import Banner from "./ui/banner";
import GlobalMix from "./ui/global";
import FruitShowcase from "./FruitShowcase";

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

  const fruits = [
    { text: "Oreo Overloaded", image: "/Milkshakes/Oreo_Overload.png" },
    { text: "Double Chocolate", image: "/Milkshakes/Double_Chocolate.png" },
    { text: "Kit-Kat Pie", image: "/Milkshakes/Kit_Kat_Pie.png" },
    { text: "Ferrero Nutella", image: "/Milkshakes/Ferrero_Nutella.png" },
    { text: "Coffee Cyclone", image: "/Milkshakes/Coffee_Cyclone.png" },
  ]
  
  const fruits1 = [
    { text: "Blueberry Blast", image: "/Milkshakes/Blueberry_Blast.png" },
    { text: "Sweet Strawberry", image: "/Milkshakes/Sweet_Strawberry.png" },
    { text: "Salted Caramel Pretzel", image: "/Milkshakes/Salted_Caramel_Pretzel.png" },
    { text: "Choco Dates Banana", image: "/Milkshakes/Coco_Dates_Banana.png" },
    { text: "Mango Mastani", image: "/Milkshakes/Mango_Mastani.png" },
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
const MilkShakesComponent = () =>{
    return(
        <>  
         <div className="flex mt-10 justify-center items-center">
              <button
                className={`px-2 py-1 sm:px-8 sm:py-3 rounded-full transition-all bg-[#e5e7eb] text-[#1e3a8a] hover:bg-[#d1d5db]`}
              >
                Milkshakes
              </button>
            </div>
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        {/* <MenuCarousel1 drinks={fruitTeas}/> */}
        <FruitShowcase fruits={fruits}/>
        {/* <Banner 
            leftSection={{ text: "Small", price: "5.99" }}
            rightSection={{ text: "Regular", price: "6.99" }}
            /> */}
        <Flowerext flowerText="Special" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
        {/* <MenuCarousel1 drinks={Tropicals}/> */}
        <FruitShowcase fruits={fruits1}/>
        <SmallBanner text={text2}/>   
        <GlobalMix/>
        <SmallBanner text={text}/> 
        </>
    )
}

export default MilkShakesComponent;