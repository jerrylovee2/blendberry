import React from "react";
interface FlowerProps {
    text: string;
}

export default function Flower({ text }: FlowerProps) {
    return (
        <div className="flex items-center justify-center">
            {/* <img
                src="/flowerleft.png"
                alt="Left Flower"
                className="w-10 h-10 md:w-40 md:h-40"
            /> */}
            <span className="text-xl md:text-2xl font-semibold text-gray-700">{text}</span>
            {/* <img
                src="/flowerright.png"
                alt="Right Flower"
                className="w-10 h-10 md:w-40 md:h-40"
            /> */}
        </div>
    );
}
