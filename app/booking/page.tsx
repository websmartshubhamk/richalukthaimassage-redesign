"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    name: "Traditional Thai Massage",
    duration: "60 mins",
    price: "£55",
    description: "Ancient healing technique combining acupressure and yoga-like stretches"
  },
  {
    id: 2,
    name: "Thai Oil Massage",
    duration: "60 mins", 
    price: "£60",
    description: "Relaxing full-body massage with aromatic oils"
  },
  {
    id: 3,
    name: "Deep Tissue Massage",
    duration: "60 mins",
    price: "£65", 
    description: "Therapeutic massage for chronic tension relief"
  },
  {
    id: 4,
    name: "Hot Stone Massage",
    duration: "90 mins",
    price: "£80",
    description: "Luxurious treatment using heated stones"
  },
  {
    id: 5,
    name: "Thai Foot Massage",
    duration: "45 mins", 
    price: "£40",
    description: "Reflexology-based treatment for feet and lower legs"
  },
  {
    id: 6,
    name: "Couple's Massage",
    duration: "60 mins",
    price: "£110",
    description: "Side-by-side massages in our couple's room"
  }
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spa-sand/30 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-spa-sage to-spa-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Book Online</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Choose your preferred treatment and book your appointment online for a seamless experience.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Service Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Select Your Treatment</h2>
            <div className="space-y-4">
              {services.map((service) => (
                <Card key={service.id} className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-spa-sage">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <p className="text-spa-teal font-medium">{service.duration}</p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-2xl font-bold text-spa-sage mb-2">
                          {service.price}
                        </p>
                        <Button className="bg-spa-sage hover:bg-spa-sage/90">
                          Select
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quick Contact Options */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Quick Booking</h3>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => {
                        const whatsappMessage = "Hello! I'd like to book a massage appointment. Could you please let me know your availability?"
                        const encodedMessage = encodeURIComponent(whatsappMessage)
                        window.open(`https://wa.me/447464882684?text=${encodedMessage}`, '_blank')
                      }}
                    >
                      📱 WhatsApp Book
                    </Button>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open('tel:01767302856', '_self')}
                    >
                      📞 Call Now
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Online Booking Form</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="booking-name"
                        name="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="booking-phone"
                        name="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-date" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="booking-date"
                        name="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-time" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        id="booking-time"
                        name="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="booking-notes" className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requirements
                      </label>
                      <textarea
                        id="booking-notes"
                        name="notes"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                        placeholder="Any special requests or medical conditions we should know about..."
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full bg-spa-sage hover:bg-spa-sage/90">
                      Request Booking
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Phone:</strong> 01767 302856</p>
                    <p><strong>Mobile:</strong> 07464 882684</p>
                    <p><strong>Email:</strong> richalukthaimassage@gmail.com</p>
                    <p><strong>Hours:</strong> Mon-Sat 11AM-7PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Booking Policies */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Booking Information</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Cancellation Policy</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 24 hours notice required for cancellations</li>
                  <li>• Same day cancellations may incur a charge</li>
                  <li>• No-shows will be charged the full treatment cost</li>
                  <li>• Rescheduling is free with 12+ hours notice</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">What to Expect</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Arrive 10 minutes early for consultation</li>
                  <li>• Comfortable massage attire provided</li>
                  <li>• All treatments in private, peaceful rooms</li>
                  <li>• Payment accepted: Cash, Card, Bank Transfer</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}