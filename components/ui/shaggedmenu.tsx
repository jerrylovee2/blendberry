import MenuItem from "./lined-menu"


export default function Menu() {
  const menuItems = [
    {
      imageUrl: "/p1.png",
      name: "Plain Bubble Waffle",
      alignment: 'left' as const,
    },
    {
      imageUrl: "/p2.png",
      name: "Chocolate Dream",
      description: "(Chocolate, Cream, Sprinklers)",
      alignment: 'right' as const,
    },
    {
      imageUrl: "/p3.png",
      name: "Magnum Nutella",
      description: "(Magnum Ice Cream, Nutella Scoop)",
      alignment: 'left' as const,
    },
    {
      imageUrl: "/p4.png",
      name: "OHHH Oreo",
      description: "(Ice Cream, Oreo Cookies)",
      alignment: 'right' as const,
    },
    {
        imageUrl: "/p5.png",
        name: "Crunch Nuts",
        description:"(Walnuts, Almonds, and Cream)",
        alignment: 'left' as const,
      },
      {
        imageUrl: "/p6.png",
        name: "Rainbow Delight",
        description: "(Chocolate Sticks, M&Ms and Cream)",
        alignment: 'right' as const,
      },
      {
        imageUrl: "/p7.png",
        name: "Verry Berry",
        description: "(Strawberry, Raspberry, Blueberry,and Cream)",
        alignment: 'left' as const,
      },
      {
        imageUrl: "/p8.png",
        name: "Pistachios Punch",
        description: "(Pistachios and Cream)",
        alignment: 'right' as const,
      },
      {
        imageUrl: "/p9.png",
        name: "Strawberry Delight",
        description: "(Strawberry and Cream)",
        alignment: 'left' as const,
      },
      {
        imageUrl: "/p10.png",
        name: "Banana-Tella",
        description: "(Banana and Cream)",
        alignment: 'right' as const,
      }
      
  ]

  return (
    <div className="mx-auto max-w-4xl p-6">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          imageUrl={item.imageUrl}
          name={item.name}
          description={item.description}
          alignment={item.alignment}
        />
      ))}
    </div>
  )
}

