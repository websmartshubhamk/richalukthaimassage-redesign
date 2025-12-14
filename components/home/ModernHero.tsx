"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, Star, ChevronDown } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

export default function ModernHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/80 to-brand-gold/20" />
        <div className="absolute inset-0 bg-[url('/images/spa-pattern.svg')] opacity-5" />
        
        {/* Animated Circles */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              <span className="ml-3 text-white text-sm">Open Today 11AM - 7PM</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Experience
              <span className="block text-brand-gold mt-2">
                True Healing
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Authentic Thai massage therapy that restores balance, relieves stress, 
              and rejuvenates your body and mind.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-brand-gold">500+</h3>
                <p className="text-white/80 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-brand-gold">10+</h3>
                <p className="text-white/80 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-brand-gold">4.9★</h3>
                <p className="text-white/80 text-sm">Client Rating</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/booking">
                <Button 
                  size="lg" 
                  className="bg-brand-gold hover:bg-brand-gold/90 text-brand-black shadow-2xl hover:shadow-brand-gold/25 transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Session
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-blue backdrop-blur-sm"
                onClick={() => window.open('tel:01767302856', '_self')}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <img 
                  src="/images/logo.avif" 
                  alt="Richa Luk Thai Massage" 
                  className="w-full max-w-md mx-auto"
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-2xl p-4"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Verified</p>
                      <p className="text-sm text-gray-600">Professional</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 -left-10 bg-brand-gold text-brand-black rounded-2xl shadow-2xl p-6"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <h4 className="font-bold text-lg">Special Offer</h4>
                  <p className="text-sm">First Visit 20% Off</p>
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}