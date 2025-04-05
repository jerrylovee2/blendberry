import Connect from "@/components/Connect";
import { Navigation } from "@/components/Navigation";

export default function Privacy() {
    return (
        <>
        <Navigation/>
      <div className="flex flex-col w-full">
        <div className="w-full h-screen relative mb-8">
          <img
            src="/privacy.jpeg"
            alt="Blendberry Store Front"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Page Title */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-[#E53935]">Blendberry Privacy, Allergy, and Health Policies</h1>
        </div>
  
        {/* Privacy Policy Section */}
        <div className="mb-12 px-4 md:px-16">
          <h2 className="text-2xl font-bold text-center mb-6 underline">Privacy Policy</h2>
          <p className="text-center text-lg">
            We value your privacy. We collect basic personal information like name, contact, and payment details for
            processing orders and improving our services. Your information is never shared or sold. We use secure methods
            to protect your data.
          </p>
        </div>
  
        {/* Allergy Policy Section */}
        <div className="mb-12 px-4 md:px-16">
          <h2 className="text-2xl font-bold text-center mb-6 underline">Allergy Policy</h2>
          <p className="text-center text-lg">
            We take allergies seriously. Our kitchen handles common allergens like dairy, nuts, and gluten, and we cannot
            guarantee no cross-contamination. Customers are responsible for checking ingredients for any potential
            allergies before consumption. Always inform us of allergies to help us guide your choices or simply ignore
            trying if unsure.
          </p>
        </div>
  
        {/* Health and Safety Policy Section */}
        <div className="mb-12 px-4 md:px-16">
          <h2 className="text-2xl font-bold text-center mb-6 underline">Health and Safety Policy</h2>
          <p className="text-center text-lg">
            We use real, fresh/frozen ingredients with added/no added sugars and artificial flavors. Customers are
            responsible for ensuring our products meet their dietary and health needs. If you have concerns, consult with
            our staff before ordering.
          </p>
        </div>
  
        {/* Disclaimer */}
        <div className="mb-16 px-4 md:px-16">
          <p className="text-center text-lg italic">
            Disclaimer: Blendberry is not responsible for any health issues related to allergies or sensitivities.
            Customers health is most important for us and we motivate you to avoid trying our products if you're unsure.
          </p>
        </div>
      </div>
      <Connect/>
      </>
    )
  }
  
  