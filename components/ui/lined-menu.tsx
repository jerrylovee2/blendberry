import Image from 'next/image'

interface MenuItemProps {
  imageUrl: string
  name: string
  description?: string
  alignment: 'left' | 'right'
}

export default function MenuItem({ imageUrl, name, description, alignment }: MenuItemProps) {
  return (
    <div className="relative my-16 flex w-full items-center justify-between gap-4">
      {/* Left side content */}
      {alignment === 'left' ? (
        <div className="flex w-full items-center gap-4">
          {/* Image container */}
          <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-sky-50">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain p-2"
            />
          </div>
          
          {/* Dashed line and text */}
          <div className="flex flex-1 items-center">
            <div className="relative flex h-[2px] w-full items-center">
              <div className="h-full w-full border-b-2 border-dashed border-black"></div>
              <div className="absolute right-0 h-3 w-3 rounded-full bg-black"></div>
            </div>
            <div className="ml-4 min-w-[200px]">
              <h3 className="text-xl font-bold">{name}</h3>
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Right side content */
        <div className="flex w-full items-center gap-4">
          {/* Text and dashed line */}
          <div className="flex flex-1 items-center">
            <div className="mr-4 min-w-[200px] text-right">
              <h3 className="text-xl font-bold">{name}</h3>
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </div>
            <div className="relative flex h-[2px] w-full items-center">
              <div className="absolute left-0 h-3 w-3 rounded-full bg-black"></div>
              <div className="h-full w-full border-b-2 border-dashed border-black"></div>
            </div>
          </div>
          
          {/* Image container */}
          <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-sky-50">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain p-2"
            />
          </div>
        </div>
      )}
    </div>
  )
}

