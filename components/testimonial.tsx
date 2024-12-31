"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "This place is amazing—fresh, creative, and well-executed. The staff is friendly and welcoming. It truly sets the standard for creativity.",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "Priya S.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Absolutely love this place! The drinks are so refreshing and unique, and the waffles are to die for. It's my go-to spot for a quick pick-me-up or a cozy hangout!",
    bgColor: "bg-pink-100",
  },
  {
    id: 3,
    name: "Amit R.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Every sip feels like a little burst of happiness! The bubble teas are the best I've ever had, and the atmosphere is so welcoming. Highly recommend it to anyone looking for something special!",
    bgColor: "bg-rose-50",
  },
];

export default function TestimonialCards() {
  const [cards, setCards] = useState(testimonials); // Dynamic card order
  const [offset, setOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding) {
        setOffset(-360); // Move left by 360px
        setIsSliding(true);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isSliding]);

  const handleTransitionEnd = () => {
    const [firstCard, ...rest] = cards;
    setCards([...rest, firstCard]); // Move the first card to the end
    setOffset(0); // Reset offset after transition
    setIsSliding(false); // Reset sliding state
  };

  return (
    <div className="min-h-screen w-[90%] m-auto flex items-center justify-center bg-purple-100 p-4 relative rounded-full">
      <Image
        src="/section4.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        style={{borderRadius:'40px'}}
        className="absolute top-0 left-0 z-0"
      />
      <div className="max-w-6xl w-full overflow-hidden relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          Trusted and Loved by Many..
        </h2>

        <div
          className="flex gap-6 transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(${offset}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {cards.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`relative w-[320px] shrink-0 ${testimonial.bgColor} border-none`}
              style={{
                transition: "opacity 0.7s ease-out",
                opacity: index === cards.length - 1 && isSliding ? 0 : 1, // Apply fade effect only to the last card
              }}
            >
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}'s profile`}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-center italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gray-600 font-medium">
                    — {testimonial.name}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
