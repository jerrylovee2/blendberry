import { Button } from "@/components/ui/button"

export default function FrontPage() {
  return (
    <div className="flex flex-col w-full  mx-auto">
      {/* Header Section */}
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold text-[#B22222]">Step In, Slow Down, Savor the Moment!</h1>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-[#FFE4E1] p-14 text-center mb-8 rounded-lg">
        <p className="text-gray-800 mb-2 px-8">
          At Blendberry, we believe in making every sip count. Our mission is simple: to offer you drinks that taste
          amazing and are good for you. From our vibrant fruit smoothies to premium bubble teas and creamy milkshakes,
          every drink is made with real, fresh ingredients
        </p>
        <p className="text-[#B22222] font-medium mb-2 px-8">No added sugars or artificial flavors.</p>
        <p className="text-gray-800 mb-4 px-8">
          At Blendberry, we make it easy to enjoy a delicious beverage that fuels your body without compromising on
          taste.
        </p>
        <p className="text-[#B22222] text-xl font-bold px-8">Blendberry – Taste the Goodness, Live the Wellness.</p>
      </div>

      {/* Bubble Tea Section */}
      <div className=" max-w-5xl mx-auto relative ">
        <div className="absolute right-0 top-0">

        </div>

        <div className=" rounded-[70px]  mt-16 flex flex-row-reverse justify-center items-center">
          <div className="w-1/2 flex flex-col  items-center">
            <img src="/bubbleteatop.png" alt="Bubble Tea Top Image" className="mb-4" style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', width: '200px' }} />
            <p className="text-sm text-center mb-4">
              A delightful range of tea-based drinks, blended with unique flavors and chewy toppings for every mood.
            </p>
            <button className="bg-[#F08080] h-11 sm:h-14 hover:bg-[#E57373] text-white rounded-full px-4 sm:px-4">
              Find yourself a perfect Bubble Tea
            </button>
          </div>
          <div className="w-1/2">
            <img src="/bubbleteafirst.png" alt="Bubble Tea Image" />
          </div>
        </div>
      </div>

      {/* Milkshake Section */}
      <div className="max-w-5xl mx-auto  relative ">
        <div className="absolute left-0 top-0">
         
        </div>

        <div className=" bg-opacity-40 rounded-[70px] p-8 mt-16 flex">
           <div className="w-1/2 flex flex-col  items-center">
            <img src="/milkshaketext.png" alt="Bubble Tea Top Image" className="mb-4" style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', width: '200px' }} />
            <p className="text-sm text-center mb-4">
            Rich, creamy milkshakes available in classic and inventive flavors to treat your taste buds.
            </p>
            <button className="bg-[#9370DB] h-11 sm:h-14 hover:bg-[#8A2BE2] text-white rounded-full px-4 sm:px-4">
              Find yourself a perfect Milkshake
            </button>
          </div>

          <div className="w-1/2">
            <img src="/milkshakefront.png" alt="Bubble Tea Image" />
          </div>
        </div>
      </div>

      <div className=" max-w-5xl mx-auto relative ">
        <div className="absolute right-0 top-0">

        </div>

        <div className=" rounded-[70px]  mt-16 flex flex-row-reverse justify-center items-center">
          <div className="w-1/2 flex flex-col  items-center">
            <img src="/smoothietext.png" alt="Bubble Tea Top Image" className="mb-4" style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', width: '200px' }} />
            <p className="text-sm text-center mb-4">
            Wholesome fruit blends, crafted in a variety of refreshing flavors to energize your day.
            </p>
            <button className="bg-[#DEB887] hover:bg-[#D2B48C] h-11 sm:h-14  text-white rounded-full px-4 sm:px-4">
              Find yourself a Perfect Smoothie
            </button>
          </div>
          <div className="w-1/2">
            <img src="/bubbleteafirst.png" alt="Bubble Tea Image" />
          </div>
        </div>
      </div>

      {/* Milkshake Section */}
      <div className="max-w-5xl mx-auto  relative">
        <div className="absolute left-0 top-0">
         
        </div>

        <div className=" bg-opacity-40 rounded-[70px] p-8 mt-16 flex">
           <div className="w-1/2 flex flex-col  items-center">
            <img src="/waffletext.png" alt="Bubble Tea Top Image" className="mb-4" style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', width: '200px' }} />
            <p className="text-sm text-center mb-4">
            Crisp, fluffy waffles served with an array of toppings — from fruity to indulgent.
            </p>
            <button className="bg-[#ACD6E0] h-11 sm:h-14 hover:bg-[#8cb2bc] text-white rounded-full px-4 sm:px-4">
              Find yourself a perfect Waffle
            </button>
          </div>

          <div className="w-1/2">
            <img src="/sss.png" alt="Bubble Tea Image" />
          </div>
        </div>
      </div>
      <div className=" max-w-5xl mx-auto relative mb-16">
        <div className="absolute right-0 top-0">

        </div>

        <div className=" rounded-[70px]  mt-16 flex flex-row-reverse justify-center items-center">
          <div className="w-1/2 flex flex-col  items-center">
            <img src="/teatext.png" alt="Bubble Tea Top Image" className="mb-4" style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', width: '200px' }} />
            <p className="text-sm text-center mb-4">
            A curated selection of aromatic coffees and soothing teas — from bold brews to calming infusions, crafted for every moment.
            </p>
            <button className="bg-[#c38d8d] hover:bg-[#dea0a0] h-11 sm:h-14  text-white rounded-full px-4 sm:px-4">
              Find yourself a Perfect Tea and Coffee
            </button>
          </div>
          <div className="w-1/2">
            <img src="/teacoffeee.png" alt="Bubble Tea Image" />
          </div>
        </div>
      </div>

    </div>
  )
}

