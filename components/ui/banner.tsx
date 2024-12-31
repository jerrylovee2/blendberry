interface BannerSectionProps {
    text: string;
    price: string;
  }
  
  interface BannerProps {
    leftSection: BannerSectionProps;
    rightSection: BannerSectionProps;
  }
  
  export default function Banner({ leftSection, rightSection }: BannerProps) {
    return (
      <div className="flex w-full bg-rose-300">
        <div className="flex-1 flex flex-col items-center justify-center py-4 border-r border-white">
          <h2 className="text-2xl font-medium text-white">{leftSection.text}</h2>
          <p className="text-2xl font-medium text-white">${leftSection.price}</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-4">
          <h2 className="text-2xl font-medium text-white">{rightSection.text}</h2>
          <p className="text-2xl font-medium text-white">${rightSection.price}</p>
        </div>
      </div>
    );
  }
  
  