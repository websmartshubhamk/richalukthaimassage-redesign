"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, MessageCircle, Phone, Calendar, MapPin } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export default function WhatsAppButton({ 
  phoneNumber = "447464882684", // UK format for 07464 882684
  message = "Hello! I'd like to book a massage appointment at Richa Luk Thai Massage.",
  className = ""
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    {
      icon: <Calendar className="h-4 w-4" />,
      title: "Book Appointment",
      message: "Hello! I'd like to book a massage appointment. Could you please let me know your availability?"
    },
    {
      icon: <Phone className="h-4 w-4" />,
      title: "Ask About Services", 
      message: "Hi! I'm interested in your massage services. Could you tell me more about your treatments and pricing?"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      title: "Location & Directions",
      message: "Hello! Could you please provide directions to your location at Shannon Court, Sandy?"
    },
    {
      icon: <MessageCircle className="h-4 w-4" />,
      title: "General Enquiry",
      message: "Hi! I have a question about your massage services."
    }
  ]

  const sendWhatsAppMessage = (customMessage?: string) => {
    const messageToSend = customMessage || message
    const encodedMessage = encodeURIComponent(messageToSend)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-16 h-16 p-0"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96">
          <Card className="shadow-xl border-green-500 bg-white">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                    <img 
                      src="/images/logo.avif" 
                      alt="Richa Luk" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Richa Luk Thai Massage</CardTitle>
                    <p className="text-green-100 text-sm">Typically replies instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-green-600 p-1 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  👋 Hello! How can we help you today? Choose a quick option below or send us a custom message.
                </p>
              </div>

              <div className="space-y-2">
                {quickMessages.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-green-50 hover:border-green-500"
                    onClick={() => sendWhatsAppMessage(item.message)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-green-500">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="border-t pt-3">
                <Button
                  onClick={() => sendWhatsAppMessage()}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Chat on WhatsApp
                </Button>
              </div>

              <div className="text-xs text-gray-500 text-center">
                <p>Available Mon-Sat: 11AM-7PM</p>
                <p>Phone: 01767 302856 • Mobile: 07464 882684</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}