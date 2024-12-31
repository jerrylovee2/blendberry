'use client'

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Drink {
  name: string;
  image: string;
}

export default function MenuCarousel({ drinks }: { drinks: Drink[] }) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {drinks.map((drink, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <Card className="p-6 rounded-3xl border-white">
                <div className="aspect-square relative mb-4">
                  <img
                    src={drink.image}
                    alt={`${drink.name} drink`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{drink.name}</h3>
                  <div className="flex justify-center items-center">
                    <div className="h-[2px] w-24 bg-dotted bg-black/40" 
                         style={{
                           backgroundImage: 'linear-gradient(to right, black 33%, transparent 33%)',
                           backgroundSize: '6px 1px'
                         }} />
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" /> */}
      </Carousel>
    </div>
  )
}

