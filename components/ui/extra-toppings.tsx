export default function ExtraToppings() {
  return ( 
    <div className="flex w-full max-w-5xl mx-auto overflow-hidden rounded-lg bg-[#E38B98]">
      {/* Left section - 70% */}
      <div className="w-[70%] p-8">
        <h2 className="mb-8 text-4xl font-bold text-white">Extra Toppings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-full bg-[#FFE6E9] px-6 py-3 text-lg">
            Any Boba- $0.50
          </div>
          <div className="rounded-full bg-[#FFE6E9] px-6 py-3 text-lg">
            Any Jelly- $0.50
          </div>
          <div className="rounded-full bg-[#FFE6E9] px-6 py-3 text-lg">
            Brown Sugar- $1.00
          </div>
          <div className="rounded-full bg-[#FFE6E9] px-6 py-3 text-lg">
            Milk Foam- $1.00
          </div>
        </div>
      </div>

      {/* Right section - 30% */}
      <div className="w-[30%]">
        <img 
          src="/extra.png" 
          alt="Various boba tea toppings and jellies"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

