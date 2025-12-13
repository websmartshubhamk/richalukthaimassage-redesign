import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spa-sand/30 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-spa-sage to-spa-teal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get in touch to book your appointment or ask any questions about our services.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Details */}
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-spa-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-800">01767 302856</p>
              <p className="text-gray-600">Call us during opening hours</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-spa-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <CardTitle>Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-800">07464 882684</p>
              <p className="text-gray-600">Text or call anytime</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-spa-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">✉️</span>
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-800 break-all">richalukthaimassage@gmail.com</p>
              <p className="text-gray-600">We'll respond within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location & Hours */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Location & Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="mr-2">📍</span> Address
                  </h3>
                  <p className="text-gray-600 ml-6">
                    Unit 4 Shannon Court<br />
                    Sandy, Bedfordshire<br />
                    SG19 1AG
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="mr-2">🕐</span> Opening Hours
                  </h3>
                  <div className="ml-6 space-y-1 text-gray-600">
                    <p><span className="font-medium">Monday - Saturday:</span> 11:00 AM - 7:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="mr-2">🚗</span> Parking
                  </h3>
                  <p className="text-gray-600 ml-6">
                    Free parking available on site for all clients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                  >
                    <option value="">Please select a service</option>
                    <option value="traditional">Traditional Thai Massage</option>
                    <option value="oil">Thai Oil Massage</option>
                    <option value="deep-tissue">Deep Tissue Massage</option>
                    <option value="hot-stone">Hot Stone Massage</option>
                    <option value="foot">Thai Foot Massage</option>
                    <option value="couples">Couple's Massage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-sage"
                    placeholder="Tell us about your needs or any questions you have..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-spa-sage hover:bg-spa-sage/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Interactive Map Coming Soon</span>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Unit 4 Shannon Court, Sandy, Bedfordshire SG19 1AG
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}