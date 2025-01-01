export default function IceCream() {
    const flavors = [
      "Vanilla",
      "Chocolate",
      "Strawberry",
      "Special Delight",
      "Cookies and Cream",
    ]
  
    return (
      <div className="relative h-[50vh] mt-10 mb-10 max-w-4xl mx-auto bg-cover bg-center bg-no-repeat p-6 md:p-6"
           style={{
             backgroundImage: "url('/bgicecream.png')",
           }}>
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute bg-white/30" />
        <div className="relative z-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          {/* Flavors list */}
          <div className="space-y-4">
            {flavors.map((flavor) => (
              <button
                key={flavor}
                className="w-full rounded-full bg-pink-50/90 px-8 py-3 text-left text-xl font-semibold text-gray-800 shadow-sm transition-all hover:bg-pink-100/90 hover:shadow-md md:w-64"
                style={{
                  border: "2px solid #ff9eaf"
                }}
              >
                {flavor}
              </button>
            ))}
          </div>
           <div 
        className="hidden sm:flex h-40 w-full  items-center justify-center rounded-[225px/100px] bg-[#ffb5c0]"
      >
        <h1 className="text-center font-sans text-4xl font-bold leading-tight text-white">
          Ice-Cream
          <br />
          Flavors
        </h1>
      </div>
        </div>
      </div>
    )
  }
  
  