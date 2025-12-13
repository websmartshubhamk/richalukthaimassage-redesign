import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    name: "Traditional Thai Massage",
    duration: "60 mins",
    price: "£55",
    description: "Ancient healing technique combining acupressure, yoga-like stretches, and energy work to restore balance and flexibility."
  },
  {
    id: 2,
    name: "Thai Oil Massage",
    duration: "60 mins", 
    price: "£60",
    description: "Relaxing full-body massage using aromatic oils with traditional Thai techniques for deep relaxation and stress relief."
  },
  {
    id: 3,
    name: "Deep Tissue Massage",
    duration: "60 mins",
    price: "£65", 
    description: "Therapeutic massage targeting deeper muscle layers to release chronic tension and alleviate muscle pain."
  },
  {
    id: 4,
    name: "Hot Stone Massage",
    duration: "90 mins",
    price: "£80",
    description: "Luxurious treatment using heated stones to melt away tension whilst promoting deep relaxation and improved circulation."
  },
  {
    id: 5,
    name: "Thai Foot Massage",
    duration: "45 mins", 
    price: "£40",
    description: "Reflexology-based treatment focusing on pressure points in feet and lower legs to promote overall wellbeing."
  },
  {
    id: 6,
    name: "Couple's Massage",
    duration: "60 mins",
    price: "£110",
    description: "Shared relaxation experience with side-by-side massages in our specially designed couple's treatment room."
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lightGrey to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Experience authentic Thai massage therapy designed to restore your body's natural balance and promote deep healing.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {service.name}
                  </CardTitle>
                  <span className="text-2xl font-bold text-brand-blue">
                    {service.price}
                  </span>
                </div>
                <CardDescription className="text-brand-gold font-medium">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-black">
                  Book This Treatment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-lightGrey py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Experience True Relaxation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your massage today and let our experienced therapists help you achieve optimal wellness and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black">
              Book Online Now
            </Button>
            <Button size="lg" variant="outline">
              Call Us: 01767 302856
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}