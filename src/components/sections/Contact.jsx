import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, CheckCircle, Facebook, Instagram, MessageSquare, CreditCard, Banknote } from 'lucide-react'

const Contact = () => {
  const [activeForm, setActiveForm] = useState('inquiry')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "09668756031",
      subtitle: "Available Mon-Sun 8AM-8PM",
      color: "text-gold-primary"
    },
    {
      icon: Mail,
      title: "Email",
      value: "xzeroncatering@gmail.com",
      subtitle: "Response within 24 hours",
      color: "text-gold-primary"
    },
    {
      icon: MapPin,
      title: "Business Address",
      value: "BLK22 lot 1 Verdant Residences",
      subtitle: "BRGY. Sabang NAIC Cavite",
      color: "text-gold-primary"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Sunday: 8:00 AM - 8:00 PM",
      subtitle: "Available for consultations and event planning",
      color: "text-gold-primary"
    }
  ]

  const paymentMethods = [
    { name: "GCash", icon: CreditCard, description: "Fast digital payments" },
    { name: "PayPal", icon: CreditCard, description: "Secure online payments" },
    { name: "Bank Transfer", icon: Banknote, description: "Direct bank deposits" },
    { name: "Cash", icon: Banknote, description: "On-site payments" }
  ]

  const socialMedia = [
    { name: "Facebook", icon: Facebook, link: "#", description: "Daily updates and menu features" },
    { name: "Instagram", icon: Instagram, link: "#", description: "Behind-the-scenes content" },
    { name: "WhatsApp", icon: MessageSquare, link: "#", description: "Quick messaging and quotes" }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brown-primary mb-4">Let's Plan Your Perfect Celebration</h2>
          <p className="text-lg text-gray-600 mb-6">
            Ready to create delicious moments? We're here to help bring your vision to life.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Planning an event should be exciting, not overwhelming. Our experienced team is ready to guide you through every step 
            of the process, from initial menu planning to the final cleanup. Contact us today to schedule your consultation 
            and taste testing session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brown-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-brown-primary">{info.title}</div>
                      <div className="text-gray-700">{info.value}</div>
                      <div className="text-sm text-gray-500">{info.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-brown-primary mb-4">Connect With Us</h4>
              <div className="space-y-3">
                {socialMedia.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold-primary/10 rounded-lg flex items-center justify-center">
                      <social.icon className="w-5 h-5 text-gold-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-brown-primary">{social.name}</div>
                      <div className="text-sm text-gray-600">{social.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-xl font-bold text-brown-primary mb-4">Accepted Payment Methods</h4>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-gold-light/30">
                    <method.icon className="w-5 h-5 text-gold-primary" />
                    <div>
                      <div className="font-semibold text-sm text-brown-primary">{method.name}</div>
                      <div className="text-xs text-gray-500">{method.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-light/30">
              <h4 className="font-semibold text-brown-primary mb-4">Why Work With Xzeron?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span>Free consultation and menu planning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span>Customized packages for every budget</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span>Professional service from start to finish</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                  <span>Complete event coordination and cleanup</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 border shadow-sm">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl text-brown-primary">Send Us a Message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="flex space-x-2 mb-6">
                <Button 
                  variant={activeForm === 'inquiry' ? 'default' : 'outline'}
                  onClick={() => setActiveForm('inquiry')}
                  className="flex-1"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Event Inquiry
                </Button>
                <Button 
                  variant={activeForm === 'consultation' ? 'default' : 'outline'}
                  onClick={() => setActiveForm('consultation')}
                  className="flex-1"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      id="firstName"
                      name="firstName"
                      type="text" 
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      id="lastName"
                      name="lastName"
                      type="text" 
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                      placeholder="09668756031"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select 
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="debut">Debut</option>
                      <option value="kiddie-party">Kiddie Party</option>
                      <option value="birthday">Birthday</option>
                      <option value="house-blessing">House Blessing</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input 
                      id="eventDate"
                      name="eventDate"
                      type="date" 
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Guest Count *
                  </label>
                  <input 
                    id="guestCount"
                    name="guestCount"
                    type="number" 
                    required
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                    placeholder="50"
                    min="1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-primary focus:border-transparent transition-colors"
                    placeholder={activeForm === 'inquiry' ? "Tell us about your event and catering needs..." : "What would you like to discuss in our consultation?"}
                  ></textarea>
                </div>

                <div className="text-sm text-gray-600">
                  <p>By submitting this form, you agree to our <a href="#privacy" className="text-gold-primary hover:underline">Privacy Policy</a> and <a href="#terms" className="text-gold-primary hover:underline">Terms of Service</a>.</p>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary py-3">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 bg-gradient-to-r from-gold-light/20 to-cream border border-gold-light/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-brown-primary mb-4">Multiple Ways to Reach Us</h3>
          <p className="text-gray-600 mb-6">
            Choose the contact method that works best for you. We're here to help make your event planning stress-free.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-light/30">
              <Phone className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brown-primary mb-2">Call Us Directly</h4>
              <p className="text-gray-600 text-sm mb-3">Speak with our team immediately</p>
              <Button variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white">
                <Phone className="w-4 h-4 mr-2" />
                09668756031
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-light/30">
              <Mail className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brown-primary mb-2">Send an Email</h4>
              <p className="text-gray-600 text-sm mb-3">Get a detailed response within 24 hours</p>
              <Button variant="outline" className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white">
                <Mail className="w-4 h-4 mr-2" />
                xzeroncatering@gmail.com
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gold-light/30">
              <Calendar className="w-12 h-12 text-gold-primary mx-auto mb-4" />
              <h4 className="font-semibold text-brown-primary mb-2">Schedule Consultation</h4>
              <p className="text-gray-600 text-sm mb-3">Book a free consultation session</p>
              <Button className="bg-gradient-to-r from-gold-primary to-gold-dark hover:from-gold-dark hover:to-brown-primary">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
