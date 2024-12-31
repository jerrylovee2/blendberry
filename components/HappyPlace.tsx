import Image from "next/image";
export default function HappyPlace() {
  return (
    <div className="w-[90%] mx-auto">
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-r from-pink-200 to-gray-900 shadow-2xl relative">
        <div className="grid items-center">
          {/* Background Image */}
          <div
            className="relative h-full min-h-[400px] md:min-h-[600px] bg-pink-200"
            style={{
              backgroundImage: 'url(/containerbg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div></div>
          </div>
        </div>

        {/* New Div with Content */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="bg-[#242223] w-[60%] m-6  p-1 md:p-4 text-white rounded-lg shadow-lg opacity-95 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Happy Place!
            </h1>

            <div className="space-y-6 text-gray-200">
              <p>
                Welcome to Blendberry, your cozy Canadian café where flavors come to life!
                At Blendberry, we believe in crafting moments of joy with every sip and bite.
              </p>

              <p>
                From refreshing bubble teas and creamy milkshakes to indulgent waffles and
                aromatic coffee, our menu is designed to delight your taste buds and
                brighten your day.
              </p>

              <p>
                What sets Blendberry apart? It's our dedication to using fresh, high-quality
                ingredients and our passion for creating a welcoming space for everyone.
                Whether you're here to catch up with friends, enjoy a peaceful moment with
                your favorite drink, or treat yourself to a delicious dessert, Blendberry is the
                place to be.
              </p>

              <p>
                Join us for a delightful journey of flavors, smiles, and unforgettable
                memories. At Blendberry, there's always something special brewing for you!
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <div className="w-12 h-12 relative">
                <Image
                  src="/blendberryhappyplace.png"
                  alt="Blendberry logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
