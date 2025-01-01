export default function HouseFavorites() {
    return (
      <div 
        className="min-h-[600px] relative bg-cover bg-center p-8"
        style={{
          backgroundImage: "url('/coffeebg.png')"
        }}
      >
        <div className="max-w-3xl mx-auto bg-white/95 rounded-3xl overflow-hidden shadow-xl">
          {/* Title Section */}
          <h2 className="text-4xl font-bold text-center py-8">
            House Favorites – Don't Miss Out
          </h2>
  
          {/* Price Banner */}
          <div className="bg-amber-700 text-white text-center py-4 text-2xl">
            <span className="px-8">Small- $3.99</span>
            <span className="px-8 border-l-2 border-white">Regular- $5.99</span>
          </div>
  
          {/* Menu Grid */}
          <div className="p-8">
            <div className="grid grid-cols-2 gap-0">
              {/* Left Column */}
              <div className="space-y-8 pr-8 border-r-2">
                <div className="pb-8 border-b-2">
                  <p className="text-2xl text-center">Chai Latte</p>
                </div>
                <div className="pb-8 border-b-2">
                  <p className="text-2xl text-center">Hot Chocolate</p>
                </div>
                <div>
                  <p className="text-2xl text-center">The Golden Milk</p>
                </div>
              </div>
  
              {/* Right Column */}
              <div className="space-y-8 pl-8">
                <div className="pb-8 border-b-2">
                  <p className="text-2xl text-center">Affogoto</p>
                </div>
                <div className="pb-8 border-b-2">
                  <p className="text-2xl text-center">London Fog</p>
                </div>
                <div>
                  <p className="text-2xl text-center">Kesar Badam Milk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  