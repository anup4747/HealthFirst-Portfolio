import React from "react";
import { Mail, Phone, MessageCircle, ExternalLink, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="min-h-screen mt-24 bg-gradient-to-b from-white to-green-50">
    {/* Header Section */}
    <div className="py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Let's Start Your Journey Together
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Take the first step towards your health goals. Fill out our intake form or reach out through any of our contact channels.
      </p>
    </div>

    <div className="max-w-7xl mx-auto px-4 pb-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          {/* Contact Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Direct Contact Methods
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@healthcoach.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Location</h3>
                  <p className="text-gray-600">123 Wellness Street, Health City, HC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Google Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800">
              Start Your Health Journey
            </h2>
            
            <p className="text-gray-600 mb-6">
              Fill out our comprehensive intake form to help us understand your goals and create a personalized plan for your success.
            </p>

            <div className="space-y-4">
              <a
                href="YOUR_GOOGLE_FORM_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl space-x-2"
              >
                <span>Fill Out Intake Form</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              
              <p className="text-sm text-gray-500">
                Takes approximately 5-10 minutes to complete
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              What happens next?
            </h3>
            <ol className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">1</span>
                <span className="text-gray-600">We'll review your information</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">2</span>
                <span className="text-gray-600">Contact you within 24 hours</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">3</span>
                <span className="text-gray-600">Schedule your first consultation</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
