import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Menu, X, CheckCircle, Users, Clock, School } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
                  ParentPay
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Support</a>
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Support</a>
              <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Totally Cashless Income Collection
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-8 max-w-3xl mx-auto">
              Collect payments for meals, clubs, trips, uniform and more.
            </p>
            <div className="flex justify-center mb-12">
              <div className="bg-gray-800 rounded-lg p-6 max-w-md">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">ParentPay</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-b-lg">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-blue-100 p-3 rounded text-center">
                      <CheckCircle className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs">Payments</span>
                    </div>
                    <div className="bg-blue-100 p-3 rounded text-center">
                      <Users className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs">Parents</span>
                    </div>
                    <div className="bg-blue-100 p-3 rounded text-center">
                      <School className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs">Schools</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 h-3 rounded"></div>
                    <div className="bg-gray-100 h-3 rounded w-3/4"></div>
                    <div className="bg-gray-100 h-3 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">11k schools</h3>
              <p className="text-gray-600">trust ParentPay to manage their online payments</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">4 million</h3>
              <p className="text-gray-600">parents use ParentPay to make secure payments</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">47 seconds</h3>
              <p className="text-gray-600">is the average wait time for calls to our support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Cashless Catering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Meal pre-orders and cashless catering across multiple sites are handled seamlessly with Meal Selection – designed specifically for the education sector.
                </CardDescription>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  More Information
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-blue-900">Parent Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Enhance communication between schools and parents with our comprehensive engagement platform designed for modern education needs.
                </CardDescription>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  More Information
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-blue-900">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Get round-the-clock support from our dedicated team of experts who understand the unique needs of educational institutions.
                </CardDescription>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  More Information
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Special offer: Switch to premium parental engagement today and pay later.
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the power of Schoolcomms and communicate with parents without paying a thing until your current contract ends. Terms and conditions apply.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3">
            Find out more
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Newsletter Sign-up</h3>
            <p className="text-blue-100 mb-8">Keep in touch with ParentPay</p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Sign me up
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Our Story</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Support Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ParentPay Group</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Group Brands</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">How We Work</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Partnerships</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© ParentPay Group 2024. All Rights Reserved.</p>
            <p className="text-gray-400 mt-2">VAT Number: 803 8147 42</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

