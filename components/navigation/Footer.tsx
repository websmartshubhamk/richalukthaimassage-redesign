import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <img 
                src="/images/logo.avif" 
                alt="Richa Luk Thai Massage" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Authentic Thai massage therapy combining traditional healing techniques 
              with modern wellness practices. Experience the healing power of touch 
              in a peaceful, professional environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-gold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Traditional Thai Massage</li>
              <li className="text-gray-300 text-sm">Thai Oil Massage</li>
              <li className="text-gray-300 text-sm">Deep Tissue Massage</li>
              <li className="text-gray-300 text-sm">Hot Stone Massage</li>
              <li className="text-gray-300 text-sm">Thai Foot Massage</li>
              <li className="text-gray-300 text-sm">Couple's Massage</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-brand-gold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-brand-gold flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Unit 4 Shannon Court</p>
                  <p>Sandy, Bedfordshire</p>
                  <p>SG19 1AG</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold" />
                <div className="text-gray-300 text-sm">
                  <p>01767 302856</p>
                  <p>07464 882684</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-gold" />
                <a 
                  href="mailto:richalukthaimassage@gmail.com" 
                  className="text-gray-300 hover:text-brand-gold transition-colors text-sm break-all"
                >
                  richalukthaimassage@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 text-brand-gold" />
                <div className="text-gray-300 text-sm">
                  <p>Monday - Saturday</p>
                  <p>11:00 AM - 7:00 PM</p>
                  <p className="text-brand-gold">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Richa Luk Thai Massage Therapy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}