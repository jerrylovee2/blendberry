"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Michael Dahl",
    image: "/demo.png",
    rating: 5,
    text: "Clean store, friendly staff.. but for the love of God, change the receipt paper at the pumps. I come here 3 times a week for the last 5 months and I have to walk inside to get my receipt every single time.",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "Amanda",
    image: "/priyas.png",
    rating: 5,
    text: "Awesome great little stop on the way. The store is allways very clean and I enjoy the option of drinks like milk teas or smoothies over just bottled and canned options. Staff has allways been super friendly everytime i've stoped in as well.",
    bgColor: "bg-pink-100",
  },
  {
    id: 3,
    name: "Jack Daniel",
    image: "/amit.png",
    rating: 5,
    text: "Super friendly owners and staff and delicious smoothies, milkshakes and bubble tea seriously worth the visit !!",
    bgColor: "bg-rose-50",
  },
  {
    id: 4,
    name: "Athir Mehmood",
    image: "/amit.png",
    rating: 5,
    text: "Best service.  Very courteous people.  They have best smoothy.  Must try.",
    bgColor: "bg-rose-50",
  },
  {
    id: 5,
    name: "Harshit Nigam",
    image: "",
    rating: 5,
    text: "Very corporative staff and have delicious beverages & real like taste smoothies.",
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
                opacity: index === cards.length - 1 && isSliding ? 0 : 0.8, // Apply fade effect only to the last card
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
