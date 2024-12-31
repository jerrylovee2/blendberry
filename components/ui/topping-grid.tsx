import ToppingCard from "./toppingCard"

const TOPPINGS = [
  {
    name: 'Coffee Jelly',
    imageSrc: 'top1.png'
  },
  {
    name: 'Lychee Jelly',
    imageSrc: 'top2.png' },
  {
    name: 'Grass Jelly',
    imageSrc: 'top3.png'
  },
  {
    name: 'Rainbow Jelly',
    imageSrc: 'top4.png'
  },
  {
    name: 'Boba',
    imageSrc: 'top5.png'
  },
  {
    name: 'Pineapple & Coconut Jelly',
    imageSrc: 'top6.png'
  },
  {
    name: 'Chia Seeds',
    imageSrc: 'top7.png'
  },
  {
    name: 'Strawberry Popping Boba',
    imageSrc: 'top8.png'
  },
  {
    name: 'Mango Popping Boba',
    imageSrc: 'top9.png'
  },
  {
    name: 'Kiwi Popping Boba',
    imageSrc: 'top10.png'
  },
  {
    name: 'Brown Sugar Popping Boba',
    imageSrc: 'top11.png'
  },
  {
    name: 'Passion Fruit Popping Boba',
    imageSrc: 'top12.png'
  }
]

export default function ToppingsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 pb-4 max-w-5xl mx-auto">
      {TOPPINGS.map((topping) => (
        <ToppingCard
          key={topping.name}
          name={topping.name}
          imageSrc={topping.imageSrc}
        />
      ))}
    </div>
  )
}

