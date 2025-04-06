"use client"

import Image from "next/image"

const FruitShowcase = ({ fruits }) => {


  const mainFruits = fruits.slice(0, 4)
  const lastFruit = fruits[4]

  let FruitCard = ({ text, image }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[200px] h-[200px] mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={text}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </div>
      <h3 className="text-center font-medium text-lg">{text}</h3>
      <div className="flex items-center mt-1 w-full max-w-[200px]">
        <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
        <div className="h-[1px] flex-grow border-b border-dashed border-black"></div>
        <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        {mainFruits.map((fruit, index) => (
          <div key={index} className="flex justify-center">
            <FruitCard text={fruit.text} image={fruit.image} />
          </div>
        ))}
      </div>
      {lastFruit && (
        <div className="flex justify-center">
          <FruitCard text={lastFruit.text} image={lastFruit.image} />
        </div>
      )}
    </div>
  )
}

export default FruitShowcase;
