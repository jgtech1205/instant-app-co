import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("D7WxUsMlMNubYJQk1");

interface FormData {
  service: string;
  companyName: string;
  websiteUrl: string;
  contactName: string;
  email: string;
  phoneNumber: string;
  appType: string[];
  platforms: string[];
  mainGoal: string;
  brandingAssets: string[];
}

export default function IntakeForm() {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    companyName: '',
    websiteUrl: '',
    contactName: '',
    email: '',
    phoneNumber: '',
    appType: [],
    platforms: [],
    mainGoal: '',
    brandingAssets: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Special handling for website URL
    if (name === 'websiteUrl') {
      let processedUrl = value;
      // If URL doesn't start with http:// or https://, add https://
      if (value && !value.match(/^https?:\/\//)) {
        processedUrl = `https://${value}`;
      }
      setFormData(prev => ({
        ...prev,
        [name]: processedUrl
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'appType' | 'platforms' | 'brandingAssets') => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [category]: checked 
        ? [...prev[category], value]
        : prev[category].filter(item => item !== value)
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      service: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const payload = {
      companyName: formData.companyName,
      websiteUrl: formData.websiteUrl,
      contactName: formData.contactName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      appType: formData.appType,
      platforms: formData.platforms,
      mainGoal: formData.mainGoal,
      brandingAssets: formData.brandingAssets,
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: `Thank you! Your application has been submitted successfully. \n\nWould you like to schedule a consultation now? Click here: https://calendly.com/jgtech1205/30min`
        });

        setFormData({
          service: '',
          companyName: '',
          websiteUrl: '',
          contactName: '',
          email: '',
          phoneNumber: '',
          appType: [],
          platforms: [],
          mainGoal: '',
          brandingAssets: [],
        });

      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus({
        type: 'error',
        message: `There was an error submitting your application. Please try one of these alternatives:\n\n` +
          `1. Email us directly at sales@instantappbuilder.com\n` +
          `2. Schedule a call: https://calendly.com/jgtech1205/30min\n` +
          `3. Try submitting again in a few minutes`
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
          <ArrowLeft className="h-6 w-6" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Your Mobile App</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fill out the form below and we'll get started on your custom mobile app right away.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 bg-slate-800/30 p-8 rounded-3xl border border-slate-700">
          {/* Select Service */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-white">Select Service</h3>
            </div>
            <div className="grid sm:grid-cols-1 gap-4">
              <label className={`flex items-center space-x-3 p-6 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200 ${formData.service === 'Convert Website to Mobile App' ? 'border-blue-500' : ''}` }>
                <input
                  type="radio"
                  name="service"
                  value="Convert Website to Mobile App"
                  checked={formData.service === 'Convert Website to Mobile App'}
                  onChange={handleServiceChange}
                  className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded-full focus:ring-blue-500 focus:ring-offset-slate-800"
                  required
                />
                <span className="text-white font-semibold">Convert Website to Mobile App</span>
              </label>
              <label className={`flex items-center space-x-3 p-6 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200 ${formData.service === 'Personalized Booking App' ? 'border-blue-500' : ''}` }>
                <input
                  type="radio"
                  name="service"
                  value="Personalized Booking App"
                  checked={formData.service === 'Personalized Booking App'}
                  onChange={handleServiceChange}
                  className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded-full focus:ring-blue-500 focus:ring-offset-slate-800"
                  required
                />
                <span className="text-white font-semibold">Personalized Booking App</span>
              </label>
            </div>
          </div>

          {/* Basic Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-white">Basic Information</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-300 mb-2">
                  Website URL
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="example.com"
                    pattern="^(https?://)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)/?$"

                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <p className="mt-1 text-sm text-gray-400">
                    Enter your website domain (e.g., example.com)
                  </p>
                </div>
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Contact Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>
          </div>

          {/* App Type */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-white">App Type</h3>
            </div>
            <div className="grid sm:grid-cols-1 gap-4">
              <label className="flex flex-col p-6 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="App Store App (iOS/Android)"
                    checked={formData.appType.includes("App Store App (iOS/Android)")}
                    onChange={(e) => handleCheckboxChange(e, 'appType')}
                    className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-offset-slate-800"
                  />
                  <span className="text-white font-semibold">App Store App (iOS/Android)</span>
                </div>
                <p className="text-gray-400 mt-2 ml-8">Native mobile app published on Apple App Store and/or Google Play Store. Best for maximum visibility and professional presence.</p>
              </label>

              <label className="flex flex-col p-6 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Progressive Web App (PWA)"
                    checked={formData.appType.includes("Progressive Web App (PWA)")}
                    onChange={(e) => handleCheckboxChange(e, 'appType')}
                    className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-offset-slate-800"
                  />
                  <span className="text-white font-semibold">Progressive Web App (PWA)</span>
                </div>
                <p className="text-gray-400 mt-2 ml-8">Instant download without app store approval. Works on all devices and installs directly from your website.</p>
              </label>

              <label className="flex flex-col p-6 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Not sure yet"
                    checked={formData.appType.includes("Not sure yet")}
                    onChange={(e) => handleCheckboxChange(e, 'appType')}
                    className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-offset-slate-800"
                  />
                  <span className="text-white font-semibold">Not sure yet</span>
                </div>
                <p className="text-gray-400 mt-2 ml-8">We can discuss the best option for your needs during our consultation.</p>
              </label>
            </div>
          </div>

          {/* Platforms */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold text-white">Platforms</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {['Android', 'iOS', 'Both'].map((platform) => (
                <label key={platform} className="flex items-center space-x-3 p-4 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200">
                  <input
                    type="checkbox"
                    value={platform}
                    checked={formData.platforms.includes(platform)}
                    onChange={(e) => handleCheckboxChange(e, 'platforms')}
                    className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-offset-slate-800"
                  />
                  <span className="text-gray-300">{platform}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Main Goal */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                5
              </div>
              <h3 className="text-2xl font-bold text-white">What's your main goal for the app?</h3>
            </div>
            <textarea
              name="mainGoal"
              value={formData.mainGoal}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
              placeholder="Tell us about your vision for the app and what you want to achieve..."
            />
          </div>

          {/* Branding Assets */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold">
                6
              </div>
              <h3 className="text-2xl font-bold text-white">Branding Assets</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'I have logo files',
                'I have brand colors',
                'I have app icon',
                'I have splash screen graphics',
                'I need help with branding'
              ].map((asset) => (
                <label key={asset} className="flex items-center space-x-3 p-4 bg-slate-800/30 border border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200">
                  <input
                    type="checkbox"
                    value={asset}
                    checked={formData.brandingAssets.includes(asset)}
                    onChange={(e) => handleCheckboxChange(e, 'brandingAssets')}
                    className="w-5 h-5 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-offset-slate-800"
                  />
                  <span className="text-gray-300">{asset}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            
            {submitStatus.type && (
              <div className={`mt-4 p-6 rounded-xl ${
                submitStatus.type === 'success' 
                  ? 'bg-green-600/20 border border-green-500/30' 
                  : 'bg-red-600/20 border border-red-500/30'
              }`}>
                <p className={`${
                  submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                } whitespace-pre-line`}>
                  {submitStatus.message}
                </p>
                {submitStatus.type === 'success' && (
                  <a
                    href="https://calendly.com/jgtech1205/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Schedule Consultation
                  </a>
                )}
              </div>
            )}
            
            {!submitStatus.type && (
              <p className="text-center text-gray-400 mt-4 text-sm">
                We'll review your application and get back to you within 24 hours
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
} 