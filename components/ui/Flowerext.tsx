import React from "react"
import Flower from "./flower"

interface Pricing {
  title: string;
  price: number;
}

interface ClassicPricingProps {
  leftPricing: Pricing;
  rightPricing: Pricing;
  flowerText: string;
}

export default function ClassicPricing({ leftPricing, rightPricing, flowerText }: ClassicPricingProps) {
  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-4xl mx-auto">
      {/* Left price pill */}
      <div className="bg-[#E38B98] text-white rounded-tr-full rounded-br-full px-8 py-3 flex flex-col items-center">
        <span className="text-2xl font-semibold">{leftPricing.title}</span>
        <span className="text-xl">${leftPricing.price}</span>
      </div>

      {/* Center flower text */}
      <Flower text={flowerText} />

      {/* Right price pill */}
      <div className="bg-[#E38B98] text-white rounded-tl-full rounded-bl-full  px-8 py-3 flex flex-col items-center">
        <span className="text-2xl font-semibold">{rightPricing.title}</span>
        <span className="text-xl">${rightPricing.price}</span>
      </div>
    </div>
  )
}
