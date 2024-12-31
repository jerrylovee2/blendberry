"use client";

import { useState } from "react";
import MenuTab from "./menuTab";
import ProductCard from "./productCard";
import { ChevronDown } from "lucide-react";
export default function MenuItem() {
  const [activeTab, setActiveTab] = useState("bubble-teas");

  const menuContent = {
    "bubble-teas": {
      items: [
        {
          name: "Dragon Fruit",
          image: "https://images.unsplash.com/photo-1631308491952-040f80133535?w=500&q=80",
        },
        {
          name: "Passion Fruit",
          image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=500&q=80",
        },
        {
          name: "Green Apple",
          image: "https://images.unsplash.com/photo-1616266125811-f36152701127?w=500&q=80",
        },
      ],
    },
    smoothies: {
      items: [
        {
          name: "Berry Blast",
          image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=500&q=80",
        },
        {
          name: "Tropical Paradise",
          image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&q=80",
        },
        {
          name: "Green Energy",
          image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=500&q=80",
        },
      ],
    },
    milkshakes: {
      items: [
        {
          name: "Chocolate Dream",
          image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
        },
        {
          name: "Vanilla Bean",
          image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&q=80",
        },
        {
          name: "Strawberry Delight",
          image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=500&q=80",
        },
      ],
    },
    waffles: {
      items: [
        {
          name: "Nutella & Banana",
          image: "https://images.unsplash.com/photo-1634215751955-5bdb12db6c0c?w=500&q=80",
        },
        {
          name: "Berry Compote",
          image: "https://images.unsplash.com/photo-1639667851375-85576e22a5a7?w=500&q=80",
        },
        {
          name: "Ice Cream Delight",
          image: "https://images.unsplash.com/photo-1639667842144-27dcfa85bd33?w=500&q=80",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[500px]">
        <img src="bubbletea.png" alt="Bubble Tea" className="w-full h-full object-cover" />
      
      {/* Main banner image with overlay */}
    
      {/* Circular crop overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 z-10">
        <div className="w-12 h-12 bg-[#f4a7ba] rounded-full flex items-center justify-center shadow-lg">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>

      {/* Navigation Tabs */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="flex justify-center space-x-4">
          <MenuTab
            label="Bubble Teas"
            isActive={activeTab === "bubble-teas"}
            onClick={() => setActiveTab("bubble-teas")}
          />
          <MenuTab
            label="Smoothies"
            isActive={activeTab === "smoothies"}
            onClick={() => setActiveTab("smoothies")}
          />
          <MenuTab
            label="Milkshakes"
            isActive={activeTab === "milkshakes"}
            onClick={() => setActiveTab("milkshakes")}
          />
          <MenuTab
            label="Bubble Waffles"
            isActive={activeTab === "waffles"}
            onClick={() => setActiveTab("waffles")}
          />
        </div>

        {/* Title with Decorative Elements */}
        <div className="text-center mt-16 mb-12">
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 bg-pink-200 rounded-full transform -rotate-45"></div>
            <h2 className="text-3xl font-bold text-[#1e3a8a] mx-4">
              {activeTab === "bubble-teas" ? "Fruit Teas" : 
               activeTab === "smoothies" ? "Fresh Smoothies" :
               activeTab === "milkshakes" ? "Premium Milkshakes" : "Bubble Waffles"}
            </h2>
            <div className="w-8 h-8 bg-pink-200 rounded-full transform rotate-45"></div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {menuContent[activeTab as keyof typeof menuContent].items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}