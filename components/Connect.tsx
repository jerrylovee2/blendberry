import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Connect() {
  return (
    <div className="min-h-screen flex pt-[15vh] flex-col">
      <main className="flex-1">
        <div className="grid lg:grid-cols-2">
          {/* Left Column - Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/connect.png"
              alt="Blendberry Cafe Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
           <div className="bg-[#F6DED4] flex items-center justify-center p-4">
      <div className="">
        {/* Title with underline */}
        <div className="relative mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Connect With Us
          </h1>
         
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <Phone className="w-full h-full" />
              </div>
              <span className="text-lg">+1 - (780) 578-8122</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <Mail className="w-full h-full" />
              </div>
              <span className="text-lg">info@blendberry.ca</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8">
                <MapPin className="w-full h-full" />
              </div>
              <span className="text-lg">#3, 56016, HWY, 28A, <br></br>GIBBONS, AB TOA 1NO</span>
            </div>

            {/* Get Directions Button */}
            <Button 
              className="bg-[#E88B8B] hover:bg-[#e67272] text-white text-lg rounded-full px-8 py-6"
            >
              Get Directions
            </Button>
          </div>

          {/* Right Column - Social & Hours */}
          <div className="space-y-12">
            {/* Social Media */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Find Us On:</h2>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-80">
                  <div className="w-12 h-12 border-2 border-black rounded-lg p-2">
                    <Instagram className="w-full h-full" />
                  </div>
                </Link>
                <Link href="#" className="hover:opacity-80">
                  <div className="w-12 h-12 border-2 border-black rounded-lg p-2">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-full h-full"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Cafe Hours */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Cafe Hours:</h2>
              <p className="text-xl">Mon-Sun | 6:00am-11:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  const links = [
    { name: "Home", href: "/" },
    // { name: "About Us", href: "/about" },
    // { name: "Menu", href: "/menu" },
    {name:"Contact",href:"tel:+17805788122" },
    { name: "Instagram", href: "#" },
    { name: "WhatsApp", href: "#" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="bg-black text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-6 text-sm text-gray-400">
          © 2024 Blendberry Ltd. All Rights Reserved
        </div>
      </nav>
    </footer>
  )
}

