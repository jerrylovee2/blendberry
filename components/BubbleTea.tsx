import React from "react";
import Flower from "./ui/flower";
import MenuCarousel from "./ui/menu-carasoul";
import Banner from "./ui/banner";
import ToppingsGrid from "./ui/topping-grid";
import ExtraToppings from "./ui/extra-toppings";
import SmallBanner from "./ui/smallbanner";
import FruitShowcase from "./FruitShowcase";
import FourCards from "./fourCards";
import Flowerext from "./ui/Flowerext";

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

  const fruits = [
    { text: "Dragon Fruit", image: "Boba/Dragon_Fruit.png" },
    { text: "Passion Fruit", image: "Boba/Passion_Fruit.png" },
    { text: "Green Apple", image: "Boba/Green_Apple.png" },
    { text: "Peach", image: "Boba/Peach.png" },
    { text: "Lychee", image: "Boba/Lychee.png" },
  ]
  const fruits1 = [
    { text: "Classic Milk Tea", image: "Boba/Classic_MilkTea.png" },
    { text: "Mocha Coffee", image: "Boba/Mocha_Coffee.png" },
    { text: "Very Watermelon Tea", image: "Boba/Very_WatermelonTea.png" },
    { text: "Honey Drew Tea", image: "Boba/Honey_DrewTea.png" },
    { text: "Matcha Tea", image: "Boba/Matcha_Tea.png" },
    { text: "Very Strawberry Tea", image: "Boba/Very_StrawberryTea.png" },
    { text: "Coconut Tea", image: "Boba/Coconut_Tea.png" },
    { text: "Rose Milk Tea", image: "Boba/Rose_MilkTea.png" },
    { text: "Thai Milk Tea", image: "Boba/Thai_MilkTea.png" },
    { text: "Brown Sugar Milk Tea", image: "Boba/BrownieSugar_MilkTea.png" },
    { text: "Very Mango", image: "Boba/Very_Mango.png" },
    { text: "Taro & Coconut", image: "Boba/Taro_Coconut.png" },
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
 
  const BubbleTeaComponent=()=>{
    return(
        <>  
            <div className="flex mt-10 justify-center items-center">
              <button
                className={`px-2 py-1 sm:px-8 sm:py-3 rounded-full transition-all bg-[#e5e7eb] text-[#1e3a8a] hover:bg-[#d1d5db]`}
              >
                Bubble Tea
              </button>
            </div>
            {/* <Flower text="Fruit Teas"/> */}
            <Flowerext flowerText="Fruit Teas" leftPricing={{ title: "Small", price:5.99 }} rightPricing={{ title: "Regular", price:7.49 }}/>
          
            <FruitShowcase fruits={fruits}/>
            {/* <MenuCarousel drinks={fruitTeas}/> */}
            <Flower text="Milk Teas"/>
            {/* <MenuCarousel drinks={milkTeas}/> */}
            <FourCards fruits={fruits1} />
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

export default BubbleTeaComponent;