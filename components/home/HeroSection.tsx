import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-lightGrey via-white to-brand-blue/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-6">
                Authentic
                <span className="text-brand-blue block">Thai Massage</span>
                Therapy
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Experience traditional healing techniques that restore your body's natural balance, 
                reduce stress, and promote deep relaxation in the heart of Bedfordshire.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="border-brand-blue/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-brand-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Open Today</p>
                  <p className="text-xs text-gray-600">11AM - 7PM</p>
                </CardContent>
              </Card>
              
              <Card className="border-brand-blue/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-8 w-8 text-brand-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Sandy Location</p>
                  <p className="text-xs text-gray-600">Free Parking</p>
                </CardContent>
              </Card>
              
              <Card className="border-brand-blue/20 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-brand-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-800">Experienced</p>
                  <p className="text-xs text-gray-600">Certified Therapist</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/booking" className="flex items-center">
                  Book Your Treatment
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:01767302856">Call Now: 01767 302856</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Highly rated</span> by our clients
              </p>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-lightGrey to-brand-blue/10 rounded-3xl h-[600px] flex items-center justify-center shadow-2xl p-8">
                <div className="text-center">
                  <img 
                    src="/images/logo.avif" 
                    alt="Richa Luk Thai Massage" 
                    className="max-h-96 w-auto mx-auto drop-shadow-2xl"
                  />
                  <p className="text-lg text-gray-600 mt-8">Professional Thai Massage Therapy</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-brand-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="text-green-600 text-xl">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Professional</p>
                      <p className="text-sm text-gray-600">Certified Therapist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -top-6 -right-6 bg-white shadow-xl border-brand-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600 text-xl">🏆</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Authentic</p>
                      <p className="text-sm text-gray-600">Traditional Techniques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
          <p className="text-brand-blue text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}