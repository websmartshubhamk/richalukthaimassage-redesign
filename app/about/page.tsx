import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spa-sand/30 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-spa-sage to-spa-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Richa Luk</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Authentic Thai massage therapy rooted in ancient healing traditions and delivered with modern care.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Welcome to Richa Luk Thai Massage Therapy, where authentic Thai healing meets modern wellness practices. 
                Founded with a passion for traditional Thai massage techniques, we bring you the ancient art of healing 
                that has been practised for over 2,500 years.
              </p>
              <p>
                Our approach combines traditional Thai massage methods with contemporary understanding of anatomy and 
                physiology, ensuring you receive the most effective treatment tailored to your individual needs.
              </p>
              <p>
                Every treatment is performed with genuine care and attention, using techniques passed down through 
                generations of Thai healers. We believe in the power of touch to heal both body and mind.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <span className="text-gray-500">Therapist Photo</span>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-spa-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">🙏</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Tradition</h3>
                <p className="text-gray-600">
                  We honour the ancient traditions of Thai massage whilst adapting to modern wellness needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-spa-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">💆</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalised Care</h3>
                <p className="text-gray-600">
                  Every treatment is tailored to your individual needs and wellness goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-spa-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Holistic Healing</h3>
                <p className="text-gray-600">
                  We address the connection between mind, body, and spirit for complete wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mt-20 bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Qualifications & Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-spa-sage mr-2">•</span>
                  Certified Thai Massage Therapist
                </li>
                <li className="flex items-start">
                  <span className="text-spa-sage mr-2">•</span>
                  Advanced Deep Tissue Massage
                </li>
                <li className="flex items-start">
                  <span className="text-spa-sage mr-2">•</span>
                  Hot Stone Therapy Certification
                </li>
                <li className="flex items-start">
                  <span className="text-spa-sage mr-2">•</span>
                  Reflexology Practitioner
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Continuing Education</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in continuous learning and regularly attend workshops and training sessions 
                to stay current with the latest techniques and best practices in massage therapy and wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover how traditional Thai massage can transform your wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-spa-sage hover:bg-spa-sage/90">
              Book Your Treatment
            </Button>
            <Button size="lg" variant="outline">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}