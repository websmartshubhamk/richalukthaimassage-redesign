"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Clock, Star, ArrowRight } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const services = [
  {
    id: 1,
    name: "Traditional Thai Massage",
    duration: "60 mins",
    price: "£55",
    rating: 4.9,
    description: "Ancient healing technique combining acupressure, yoga-like stretches, and energy work.",
    image: "/images/thai-massage.jpg",
    gradient: "from-blue-500 to-purple-600",
    popular: true
  },
  {
    id: 2,
    name: "Thai Oil Massage",
    duration: "60 mins", 
    price: "£60",
    rating: 4.8,
    description: "Relaxing full-body massage using aromatic oils with traditional Thai techniques.",
    image: "/images/oil-massage.jpg",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    name: "Deep Tissue Massage",
    duration: "60 mins",
    price: "£65",
    rating: 4.9, 
    description: "Therapeutic massage targeting deeper muscle layers to release chronic tension.",
    image: "/images/deep-tissue.jpg",
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 4,
    name: "Hot Stone Massage",
    duration: "90 mins",
    price: "£80",
    rating: 5.0,
    description: "Luxurious treatment using heated stones to melt away tension.",
    image: "/images/hot-stone.jpg",
    gradient: "from-orange-500 to-red-600",
    premium: true
  },
  {
    id: 5,
    name: "Thai Foot Massage",
    duration: "45 mins", 
    price: "£40",
    rating: 4.7,
    description: "Reflexology-based treatment focusing on pressure points in feet and lower legs.",
    image: "/images/foot-massage.jpg",
    gradient: "from-teal-500 to-blue-600"
  },
  {
    id: 6,
    name: "Couple's Massage",
    duration: "60 mins",
    price: "£110",
    rating: 4.9,
    description: "Shared relaxation experience with side-by-side massages.",
    image: "/images/couples.jpg",
    gradient: "from-pink-500 to-rose-600"
  }
]

export default function ModernServiceCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-lightGrey">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of authentic Thai massage treatments, 
            each designed to restore balance and promote healing.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={item}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                className="h-full"
              >
                <div className="relative h-full group cursor-pointer">
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                  
                  {/* Card Content */}
                  <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Badges */}
                    {service.popular && (
                      <div className="absolute top-4 right-4 bg-brand-gold text-brand-black px-3 py-1 rounded-full text-sm font-semibold z-10">
                        Popular
                      </div>
                    )}
                    {service.premium && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                        Premium
                      </div>
                    )}

                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-white/20 text-8xl"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          ✦
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-blue transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </span>
                            <span className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-500" />
                              {service.rating}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-brand-blue">
                            {service.price}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 line-clamp-2">
                        {service.description}
                      </p>

                      <Link href="/booking" className="block">
                        <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/80 hover:to-brand-blue text-white group">
                          <span>Book Now</span>
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button 
              size="lg" 
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              View All Services & Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}