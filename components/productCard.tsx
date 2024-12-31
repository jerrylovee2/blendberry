"use client";

type ProductCardProps = {
  name: string;
  image: string;
};

export default function ProductCard({ name, image }: ProductCardProps) {
  return (
    <div className="bg-[#fdf2f8] rounded-2xl p-4 text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-semibold text-[#1e3a8a] mt-2">{name}</h3>
      <div className="border-b border-dashed border-gray-300 w-48 mx-auto mt-2"></div>
    </div>
  );
}