import Image from 'next/image'

interface ToppingCardProps {
  name: string
  imageSrc: string
}

export default function ToppingCard({ name, imageSrc }: ToppingCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20 overflow-hidden rounded-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 80px) 100vw, 80px"
        />
      </div>
      <p className="text-center text-sm font-medium">{name}</p>
    </div>
  )
}

