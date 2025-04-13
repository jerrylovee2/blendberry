import React from "react";
import Flowerext from "./ui/Flowerext";
import MenuCarousel from "./ui/menu-carasoul";
import SmallBanner from "./ui/smallbanner";
import FruitShowcase from "./FruitShowcase";
import FruitShowcaseFour from "./jsxComponentFive";

const fruits = [
  { text: "Strawberry Banana", image: "/Smoothies/Strawberry_banana.png" },
  { text: "Berries Treasure", image: "/Smoothies/Berries_Treasure.png" },
  { text: "Big Blue Banana", image: "/Smoothies/Big_Blue_Banana.png" },
  { text: "Raspberry Sunshine", image: "/Smoothies/Raspberry_Sunshine.png" },
  { text: "Blueberry Boost", image: "/Smoothies/Blueberry_Boost.png" },
]

const fruits1 = [
  { text: "Pina Colada", image: "/Smoothies/Pina_Colada.png" },
  { text: "Golden Mango Slush", image: "/Smoothies/Golden_Mango_Slush.png" },
  { text: "Freezing Pineapple", image: "/Smoothies/Freezing_Pineapple.png" },
  { text: "Mango Tango", image: "/Smoothies/Mango_Tango.png" },
  { text: "Peach Mango", image: "/Smoothies/Peach_Mango.png" },
  { text: "Raspberry Colada", image: "/Smoothies/Raspberry_Colada.png" },
]

const fruits2 = [
  { text: "Muscle Builder", image: "/Smoothies/Muscle_Builder.png" },
  { text: "Elite A Whey", image: "/Smoothies/Elite_A_Whey.png" },
  { text: "Choco Raspberry", image: "/Smoothies/Choco_Raspberry.png" },
  { text: "Peanut Butter Cup", image: "/Smoothies/Peanut_Butter_Cup.png" },
  { text: "Deja Brew Choco", image: "/Smoothies/Deja_Brew_Choco.png" },
  { text: "Funky Monkey", image: "/Smoothies/Funky_Monkey.png" },
  { text: "Boost Up", image: "/Smoothies/Boost_Up.png" },
  { text: "Berry Berry", image: "/Smoothies/Berry_Berry.png" },
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
         <div className="flex mt-10 justify-center items-center">
              <button
                className={`px-2 py-1 sm:px-8 sm:py-3 rounded-full transition-all bg-[#e5e7eb] text-[#1e3a8a] hover:bg-[#d1d5db]`}
              >
                Smoothies
              </button>
            </div>
        <Flowerext flowerText="Classic" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:6.49 }}/>
        <FruitShowcase fruits={fruits}/>
        {/* <MenuCarousel drinks={fruitTeas}/> */}
        <Flowerext flowerText="Tropical" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:6.49 }}/>
        {/* <MenuCarousel drinks={Tropicals}/> */}
        <FruitShowcaseFour fruits={fruits1}/>
        <Flowerext flowerText="Protein" leftPricing={{ title: "Small", price:7.99 }} rightPricing={{ title: "Regular", price:6.49 }}/>
        {/* <MenuCarousel drinks={Protiens}/> */}
        <FruitShowcaseFour fruits={fruits2}/>
        <SmallBanner text={text}/>
        </>
    )
}

export default Smoothie;