"use client"

import ModernHero from '@/components/home/ModernHero'
import ModernServiceCards from '@/components/services/ModernServiceCards'
import AnimatedFeatures from '@/components/features/AnimatedFeatures'
import TestimonialsCarousel from '@/components/testimonials/TestimonialsCarousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <ModernHero />
      <ModernServiceCards />
      <AnimatedFeatures />
      <TestimonialsCarousel />
      
      {/* Modern CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-brand-blue via-brand-blue/90 to-brand-gold/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-gold/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Take the first step towards complete wellness. Our experienced therapists are ready to 
              create a personalised treatment plan just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/booking">
                  <Button 
                    size="lg" 
                    className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black shadow-2xl hover:shadow-brand-gold/25 px-8 py-6 text-lg"
                  >
                    <span className="mr-2">Book Your Session</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm px-8 py-6 text-lg"
                  onClick={() => window.open('tel:01767302856', '_self')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 01767 302856
                </Button>
              </motion.div>
            </div>

            {/* Opening Hours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-white/90">
                <div className="text-right">Monday - Friday:</div>
                <div className="text-left font-semibold">11:00 AM - 7:00 PM</div>
                <div className="text-right">Saturday:</div>
                <div className="text-left font-semibold">11:00 AM - 6:00 PM</div>
                <div className="text-right">Sunday:</div>
                <div className="text-left font-semibold">Closed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Conveniently located in the heart of Biggleswade
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-brand-blue/5 to-brand-gold/5 rounded-3xl p-8 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Richa Luk Thai Massage</h3>
                <address className="not-italic text-gray-600 space-y-2">
                  <p>38 Hitchin Street</p>
                  <p>Biggleswade</p>
                  <p>Bedfordshire, SG18 8AX</p>
                </address>
                <div className="mt-6 space-y-2">
                  <p className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-2 text-brand-blue" />
                    01767 302856
                  </p>
                  <p className="flex items-center text-gray-700">
                    <MessageCircle className="h-5 w-5 mr-2 text-brand-blue" />
                    WhatsApp Available
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-2xl h-64 md:h-full flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}