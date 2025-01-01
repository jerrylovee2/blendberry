'use client'

import { Card } from "@/components/ui/card";

interface Drink {
  name: string;
  image: string;
}

export default function MenuCarousel1({ drinks }: { drinks: Drink[] }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* First Row: 3 items */}
      <div className="grid grid-cols-3 gap-4">
        {drinks.slice(0, 3).map((drink, index) => (
          <Card
            key={index}
            className="p-4 rounded-3xl border-white h-full flex flex-col items-center justify-between"
          >
            <div className="aspect-square w-full relative mb-4">
              <img
                src={drink.image}
                alt={`${drink.name} drink`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{drink.name}</h3>
              <div className="flex justify-center items-center">
                <div
                  className="h-[2px] w-24 bg-dotted bg-black/40"
                  style={{
                    backgroundImage: "linear-gradient(to right, black 33%, transparent 33%)",
                    backgroundSize: "6px 1px",
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Second Row: 2 items */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {drinks.slice(3, 5).map((drink, index) => (
          <Card
            key={index}
            className="p-4 rounded-3xl border-white h-full flex flex-col items-center justify-between"
          >
            <div className="aspect-square w-[40%] sm:w-[80%] relative mb-4 h-[10vh] sm:h-[30vh]">
              <img
                src={drink.image}
                alt={`${drink.name} drink`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{drink.name}</h3>
              <div className="flex justify-center items-center">
                <div
                  className="h-[2px] w-24 bg-dotted bg-black/40"
                  style={{
                    backgroundImage: "linear-gradient(to right, black 33%, transparent 33%)",
                    backgroundSize: "6px 1px",
                  }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
