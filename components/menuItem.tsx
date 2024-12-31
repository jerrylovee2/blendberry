"use client";

import { useState } from "react";
import MenuTab from "./menuTab";
import { ChevronDown } from "lucide-react";
import BubbleTea from "./BubbleTea";

export default function MenuItem() {
  const [activeTab, setActiveTab] = useState("bubble-teas");

  // Define background images for each tab
  const backgroundImages = {
    "bubble-teas": "bubbletea.png",
    smoothies: "smoothie.png",
    milkshakes: "milkshakes.png",
    waffles: "waffle.png",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[500px]">
        <img
          src={backgroundImages[activeTab as keyof typeof backgroundImages]} // Dynamically set the background image
          alt={activeTab.replace("-", " ").toUpperCase()}
          className="w-full h-full object-cover"
        />

        {/* Circular crop overlay */}
        <div className="absolute inset-0 flex items-center justify-center"></div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 border-8 border-white rounded-full left-1/2 transform -translate-x-1/2 -mb-6 z-10">
          <div className="w-12 h-12 bg-[#f4a7ba] rounded-full flex items-center justify-center shadow-lg">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mx-auto mt-12 sm:mt-6">
        <div className="flex justify-center space-x-2 sm:space-x-4">
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

        {/* Tab Content */}
        <div className="text-center mt-16">
           {activeTab === "bubble-teas" && <BubbleTea/>
          /*{activeTab === "smoothies" && <Smoothies />}
          {activeTab === "milkshakes" && <Milkshakes />}
          {activeTab === "waffles" && <Waffles />} */}
        </div>
      </div>
    </div>
  );
}
