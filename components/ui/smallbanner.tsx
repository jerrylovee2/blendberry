import React from "react";

interface SmallBannerProps {
  text: string;
}

const SmallBanner: React.FC<SmallBannerProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center h-32 bg-[#E38B98] text-white text-lg font-bold">
      {text}
    </div>
  );
};

export default SmallBanner;
