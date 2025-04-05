import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <img src="/bgfront.jpeg" alt="Hero Background" className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            {/* <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Go-To Spot for Sips and Smiles!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Where every sip sparks excitement, and every bite tells a story. Bold flavors, playful vibes, and moments you&apos;ll crave. Step into a world crafted just for you!
            </p> */}
            {/* <Link href="/menu" className="bg-white text-pink-600 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors">
              Explore Our Menu
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}