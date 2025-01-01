import Image from 'next/image'

export default function GlobalMix() {
  const milkshakes = [
    { name: 'Arabian Night', price: 5.99 },
    { name: 'Papaya Rose', price: 5.99 },
    { name: 'Chickoo Dates', price: 5.99 },
    { name: 'Coconut Banana', price: 5.99 },
  ]

  return (
    <div className="relative mx-auto h-[50vh] max-w-6xl overflow-hidden m-10 rounded-2xl shadow-lg">
      {/* Background Image */}
      <Image
        src="/global.png"
        alt="Chocolate milkshake with whipped cream"
        className="object-cover"
        fill
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="absolute inset-y-0 right-0 flex w-full flex-col justify-center bg-pink-50/90 p-8 md:w-1/2">
        {/* Title */}
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          Global Milkshake
        </h1>

        {/* Milkshake Grid with Divider Lines */}
        <div className="relative mb-8 flex-1">
          <div className="absolute inset-0">
            {/* Vertical divider */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gray-300" />
            {/* Horizontal divider */}
            <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gray-300" />
          </div>

          <div className="relative grid h-full grid-cols-2 grid-rows-2">
            {milkshakes.map((shake) => (
              <div
                key={shake.name}
                className="flex items-center justify-center p-4 text-center text-xl font-semibold text-gray-800"
              >
                {shake.name}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Banner */}
        <div className="grid grid-cols-2 overflow-hidden rounded-lg text-white">
          <div className="bg-pink-400 p-4 text-center">
            <div className="font-medium">Small</div>
            <div className="text-xl font-bold">$5.99</div>
          </div>
          <div className="bg-pink-400 p-4 text-center">
            <div className="font-medium">Regular</div>
            <div className="text-xl font-bold">$6.99</div>
          </div>
        </div>
      </div>
    </div>
  )
}

