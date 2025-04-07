"use client";

import Image from "next/image";

const FruitCard = ({ text, image }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full max-w-[200px] h-[200px] mb-4">
    <img
          src={image || "/placeholder.svg"}
          alt={text}
          style={{width:'200px',height:'200px'}}
        />
    </div>
    <h3 className="text-center font-medium text-lg">{text}</h3>
    <div className="flex items-center mt-1 w-full max-w-[200px]">
      <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
      <div className="h-[1px] flex-grow border-b border-dashed border-black"></div>
      <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
    </div>
  </div>
);

const FruitShowcaseFour = ({ fruits }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {fruits.map((fruit, index) => (
          <div key={index} className="flex justify-center">
            <FruitCard text={fruit.text} image={fruit.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitShowcaseFour;
