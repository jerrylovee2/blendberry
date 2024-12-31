'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: string
  image: string
  background: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Passion Fruit Boba",
    price: "$4.99",
    image: "/cup0.png",
    background: "bg-[#F9C078]"
  },
  {
    id: 2,
    name: "Magnum Nutella",
    price: "$5.99",
    image: "/nutella.png",
    background: "bg-[#bae6ff]"
  },
  {
    id: 3,
    name: "Berry Blast",
    price: "$4.99",
    image: "/cup2.png",
    background: "bg-[#F78FAF]"
  },
  {
    id: 4,
    name: "Strawberry Smoothie",
    price: "$4.99",
    image: "/cup3.png",
    background: "bg-[#CAA7CD]"
  }
]

export default function CustomerFavorites() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
       <section className="py-20 px-4">
       <div className="container mx-auto">
         <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
           Customer Favorites
         </h2>
         <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
           Discover the creations our customers can't stop raving about! From signature blends to irresistible treats, these favorites are the heart of what makes us special. Try them and find your new obsession!
         </p>
      <div className="relative mb-20"> {/* Added margin bottom for buttons */}
        <div className="flex gap-6 transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative flex-shrink-0 w-1/4 aspect-[3/4] transition-all duration-300 ease-in-out
                ${hoveredIndex === index ? 'rounded-[50%/40%]' : 'rounded-3xl'}
                ${product.background}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover mb-4"
                />
                <div className="absolute bottom-0 flex flex-col items-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                    {/* Show price only when hovered */}
                    <p className={`text-lg transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Now positioned at the bottom */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="p-4 rounded-full bg-[#fff5f5] hover:bg-[#ffe4e4] transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-full bg-[#ffd6d6] hover:bg-[#ffbdbd] transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      </div>
      </section>
    </div>
    
  )
}

