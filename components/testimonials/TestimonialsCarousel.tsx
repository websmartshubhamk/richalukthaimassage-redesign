"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Client",
    content: "I've been coming to Richa Luk for over a year now, and it's honestly been life-changing. The traditional Thai massage has helped with my chronic back pain more than any other treatment I've tried.",
    rating: 5,
    image: "/images/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First Time Visitor",
    content: "What an incredible experience! The atmosphere is so calming and professional. I opted for the hot stone massage and felt completely rejuvenated afterwards. Will definitely be back!",
    rating: 5,
    image: "/images/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Monthly Client",
    content: "The staff here are absolutely wonderful. They really understand the traditional techniques and always make sure you're comfortable. The deep tissue massage is perfect for my sports recovery.",
    rating: 5,
    image: "/images/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Corporate Client",
    content: "As someone who works long hours at a desk, the Thai massage here has been a game changer. The therapists are skilled and professional, and the prices are very reasonable for the quality.",
    rating: 5,
    image: "/images/testimonial-4.jpg"
  }
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    )
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-white to-brand-gold/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients 
            about their experiences at Richa Luk Thai Massage.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Decoration */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl" />

          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Quote Mark */}
            <div className="absolute top-8 left-8 text-brand-gold/20 text-8xl font-serif">
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-blue to-brand-gold rounded-full p-1">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-brand-blue">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                      {testimonials[currentIndex].content}
                    </p>

                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="rounded-full border-gray-300 hover:border-brand-blue hover:text-brand-blue"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full border-gray-300 hover:border-brand-blue hover:text-brand-blue"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-brand-blue' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full`}
                  />
                ))}
              </div>

              {/* Auto-play indicator */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`text-sm ${
                  isAutoPlaying ? 'text-green-600' : 'text-gray-400'
                }`}
              >
                {isAutoPlaying ? '▶ Auto' : '⏸ Paused'}
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-12"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-blue">500+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-blue">4.9★</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-blue">100%</p>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}