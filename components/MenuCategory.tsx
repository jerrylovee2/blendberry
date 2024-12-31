import Image from "next/image";

interface MenuCategoryProps {
  title: string;
  image: string;
}

export function MenuCategory({ title, image }: MenuCategoryProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
}