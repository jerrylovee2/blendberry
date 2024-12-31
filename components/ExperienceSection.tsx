import { MenuCategory } from "./MenuCategory";

const categories = [
  {
    title: "Bubble Teas",
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Smoothies",
    image: "/blueberry.png",
  },
  {
    title: "Milkshakes",
    image: "milkshake.png",
  },
  {
    title: "Bubble Waffles",
    image: "waffles.png",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Discover Our Cafe Experience
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Step into our charming cafe, where the aroma of freshly brewed coffee mingles with the delightful flavors of handcrafted boba teas, creamy milkshakes, and fluffy waffles. Our cozy atmosphere invites you to unwind, indulge, and savor the best of what our cafe has to offer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <MenuCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}