import { Button } from "@/components/ui/button";

export default function FreshAdditions() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image Wrapper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/fresh.png')", borderRadius: '40px', width: '90%', margin: 'auto' }}
      >
        {/* Dark overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-black/30"
          style={{ borderRadius: '40px' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-wide md:text-6xl">
          Our fresh addition to the menu
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-100 md:text-xl">
          Introducing our newest delights: aromatic handcrafted coffee, refreshing lassi, and soothing chai. Perfectly brewed and crafted to satisfy your cravings—come and sip the goodness today!
        </p>
        <Button 
          variant="secondary"
          size="lg"
          className="text-lg font-medium"
        >
          Take a look
        </Button>
      </div>
    </div>
  );
}
