import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Smartphone, Zap, DollarSign, Rocket, CheckCircle, ArrowRight, Globe, Download, Star, Users, Clock, Shield, Scissors, Sparkles, ChefHat, Dumbbell, Calendar, CreditCard, TrendingUp } from 'lucide-react';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import IntakeForm from './components/IntakeForm';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <Smartphone className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Instant App Co.</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#process" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <Link to="/apply" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Turn Your Website Into a 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Mobile App</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We help businesses like yours turn their websites into fully branded mobile apps — quickly, affordably, and without rebuilding anything from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/apply" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your App Today
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <a href="#process" className="border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                See How It Works
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>500+ Apps Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>48hr Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Type Selection */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your App Type</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You choose between a real mobile app (Android/iOS) or a web app your users can install instantly. We handle the build, branding, and delivery from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Native App Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Native Mobile App</h3>
              </div>
              <p className="text-gray-300 mb-8">Real Android & iOS apps distributed through app stores with full native performance.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  App Store & Google Play distribution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Push notifications
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Native device features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Offline functionality
                </li>
              </ul>
              <div className="text-center">
                <span className="text-3xl font-bold text-white">Starting at $199</span>
                <p className="text-gray-400">One-time fee</p>
              </div>
            </div>

            {/* PWA Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Progressive Web App</h3>
              </div>
              <p className="text-gray-300 mb-8">Instant installation web app that works like a native app without app store approval.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Instant installation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Works on all devices
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  No app store needed
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                  Fast deployment
                </li>
              </ul>
              <div className="text-center">
                <span className="text-3xl font-bold text-white">Starting at $99</span>
                <p className="text-gray-400">One-time fee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Instant App Co.?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We make mobile app development simple, fast, and affordable for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Get your mobile app ready in just 48 hours. No months-long development cycles or complex project management.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Affordable Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                Starting at just $99.00, our solutions cost a fraction of custom app development while delivering professional results.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Rebuild Required</h3>
              <p className="text-gray-300 leading-relaxed">
                Keep your existing website exactly as it is. We wrap it in a beautiful, branded mobile app experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process gets you from website to mobile app in just 3 simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Share Your Website</h3>
              <p className="text-gray-300 leading-relaxed">
                Send us your website URL and tell us about your branding preferences. That's all we need to get started.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">We Build & Brand</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team creates your fully branded mobile app with your colors, logo, and custom features within 48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Launch & Deliver</h3>
              <p className="text-gray-300 leading-relaxed">
                We handle the technical deployment and deliver your app ready for users to download and install.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Booking Apps Section */}
      <section id="booking-apps" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Personalized Booking Apps for Solo Entrepreneurs</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stop losing 15-20% of your income to third-party platforms. Get your own branded booking app and keep 100% of what you earn while owning your client relationships.
            </p>
          </div>

          {/* Service Provider Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-80">
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <Scissors className="h-8 w-8 mb-2" />
              <span className="text-sm">Barbers</span>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <Sparkles className="h-8 w-8 mb-2" />
              <span className="text-sm">Hair Stylists</span>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <ChefHat className="h-8 w-8 mb-2" />
              <span className="text-sm">Personal Chefs</span>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <Dumbbell className="h-8 w-8 mb-2" />
              <span className="text-sm">Personal Trainers</span>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <Sparkles className="h-8 w-8 mb-2" />
              <span className="text-sm">Nail Techs</span>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <Users className="h-8 w-8 mb-2" />
              <span className="text-sm">Massage Therapists</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Own Your Business, Control Your Revenue</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Accept Appointments Directly</h4>
                    <p className="text-gray-300">Clients book appointments through your branded app, not a third-party platform you don't control.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Fully Branded Experience</h4>
                    <p className="text-gray-300">Your logo, colors, app name, and app icon. Build brand recognition with every interaction.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Keep 100% of Your Income</h4>
                    <p className="text-gray-300">Integrate your own payment processor or POS system. No more 15-20% platform fees eating your profits.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Own Your Client Base</h4>
                    <p className="text-gray-300">Build direct relationships with your clients without platform intermediaries controlling access.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - App Features */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your App Includes</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Online appointment booking system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Service menu with pricing display</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Real-time availability calendar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Business information & contact details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Custom branding & app store presence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Payment integration of your choice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Push notifications for appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Simple onboarding & fast delivery</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl border border-green-500/30">
                <div className="text-center">
                  <p className="text-green-400 font-semibold mb-2">Limited Time Offer</p>
                  <div className="mb-1">
                    <span className="text-4xl font-bold text-white">$299</span>
                    <span className="text-gray-400 ml-2">one-time fee</span>
                  </div>
                  <p className="text-gray-300 text-sm">No monthly fees or commissions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/apply" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Get Started for $299
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <p className="text-gray-400 mt-4 text-sm">Includes app store submission & lifetime ownership</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Your Mobile App?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who've transformed their online presence with a professional mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://calendly.com/jgtech1205/30min" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
                <Rocket className="inline ml-2 h-5 w-5" />
              </a>
              <a href="https://calendly.com/jgtech1205/30min" className="border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <Smartphone className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Instant App Co.</span>
            </Link>
            <div className="flex items-center space-x-6 text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="https://calendly.com/jgtech1205/30min" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400">
            <p>&copy; 2025 Instant App Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/apply" element={<IntakeForm />} />
      </Routes>
    </Router>
  );
}

export default App;