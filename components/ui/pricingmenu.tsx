export default function PricingMenu() {
    return (
      <div className="max-w-5xl mx-auto p-6 space-y-12">
        {/* Coffee Lovers Section */}
        <section>
          <div className="flex justify-between items-center border-b-2 border-orange-400 pb-2 mb-4">
            <h2 className="text-3xl font-bold text-orange-400">Coffee Lovers</h2>
            <div className="flex gap-8">
              <span className="text-orange-400 font-semibold">Small</span>
              <span className="text-orange-400 font-semibold">Regular</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              "Mocha",
              "White Mocha",
              "Latte",
              "Honey Latte",
              "Turmeric Latte",
              "Matcha Latte",
              "Cappucino",
              "Americano",
              "Flat White",
              "Double Espresso"
            ].map((item) => (
              <div key={item} className="flex items-baseline">
                <span className="flex-shrink-0 text-lg">{item}</span>
                <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-2"></div>
                <div className="flex gap-8">
                  <span className="w-16 text-right text-lg">$2.99</span>
                  <span className="w-16 text-right text-lg">$3.99</span>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Chai Lovers Section */}
        <section>
          <div className="flex justify-between items-center border-b-2 border-orange-400 pb-2 mb-4">
            <h2 className="text-3xl font-bold text-orange-400">Chai Lovers</h2>
            <div className="flex gap-8">
              <span className="text-orange-400 font-semibold">Small</span>
              <span className="text-orange-400 font-semibold">Regular</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              ["Pudhina Chai", "(Mint)"],
              ["Gulaab Chai", "(Rose)"],
              ["Masala Chai", "(Spiced)"],
              ["Kesar Chai", "(Saffron)"],
              ["Gur Vali Chai", "(Jaggery)"],
              ["Tulsi Chai", "(Indian Basil)"]
            ].map(([name, desc]) => (
              <div key={name} className="flex items-baseline">
                <span className="flex-shrink-0 text-lg">{name} <span className="text-gray-600">{desc}</span></span>
                <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-2"></div>
                <div className="flex gap-8">
                  <span className="w-16 text-right text-lg">$2.99</span>
                  <span className="w-16 text-right text-lg">$3.99</span>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Lassi Lovers Section */}
        <section>
          <div className="flex justify-between items-center border-b-2 border-orange-400 pb-2 mb-4">
            <h2 className="text-3xl font-bold text-orange-400">Lassi Lovers</h2>
            <div className="flex gap-8">
              <span className="text-orange-400 font-semibold">Small</span>
              <span className="text-orange-400 font-semibold">Regular</span>
            </div>
          </div>
          <div className="space-y-4">
            {[
              "Kesar Lassi",
              "Mango Lassi",
              "Coconut Lassi",
              "Khao Peda Lassi",
              "Strawberry Lassi"
            ].map((item) => (
              <div key={item} className="flex items-baseline">
                <span className="flex-shrink-0 text-lg">{item}</span>
                <div className="flex-grow border-b-2 border-dotted border-gray-300 mx-2"></div>
                <div className="flex gap-8">
                  <span className="w-16 text-right text-lg">$4.99</span>
                  <span className="w-16 text-right text-lg">$5.99</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }