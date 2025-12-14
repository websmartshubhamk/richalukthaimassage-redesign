"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, Heart, Clock, Users, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully qualified therapists with professional certifications",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of excellence in traditional Thai massage therapy",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Treating mind, body, and spirit for complete wellness",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Open 6 days a week with convenient appointment times",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Users,
    title: "Couple's Treatments",
    description: "Special rooms for shared relaxation experiences",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Premium Service",
    description: "Exceptional care in a tranquil, professional environment",
    gradient: "from-yellow-500 to-orange-500"
  }
]

export default function AnimatedFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-gold/5" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why Choose Richa Luk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of traditional Thai healing techniques 
            and modern wellness practices in a serene environment.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 mb-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]} 0%, ${feature.gradient.split(' ')[3]} 100%)`
                  }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-3xl p-12 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.h3
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                10+
              </motion.h3>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <motion.h3
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                500+
              </motion.h3>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <motion.h3
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                6
              </motion.h3>
              <p className="text-white/80">Treatment Types</p>
            </div>
            <div>
              <motion.h3
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                4.9★
              </motion.h3>
              <p className="text-white/80">Client Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}