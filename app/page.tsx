import HeroSection from '@/components/home/HeroSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Services Preview */}
      <section className="py-20 bg-brand-lightGrey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the healing power of authentic Thai massage techniques designed to restore balance and promote wellness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🙏</span>
                </div>
                <CardTitle>Traditional Thai Massage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Ancient healing technique combining acupressure and yoga-like stretches</p>
                <p className="text-2xl font-bold text-brand-blue">£55</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💆</span>
                </div>
                <CardTitle>Thai Oil Massage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Relaxing full-body massage using aromatic oils with traditional techniques</p>
                <p className="text-2xl font-bold text-brand-blue">£60</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🔥</span>
                </div>
                <CardTitle>Hot Stone Massage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Luxurious treatment using heated stones for deep relaxation</p>
                <p className="text-2xl font-bold text-brand-blue">£80</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience True Relaxation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your massage today and let our experienced therapist help you achieve optimal wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Link href="/booking">Book Online Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              Call Us: 01767 302856
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}