import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Activity, ChevronRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Advanced neural network analyzes 30+ symptoms with 90%+ accuracy'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored recommendations based on your unique risk profile'
    },
    {
      icon: Activity,
      title: 'Comprehensive Support',
      description: 'Diet, exercise, and treatment plans designed for PCOS management'
    },
    {
      icon: Shield,
      title: 'Medical-Grade Quality',
      description: 'Professional standards with proper medical disclaimers and safety'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'PCOS Patient',
      content: 'This assessment helped me understand my symptoms better and provided actionable steps.',
      rating: 5
    },
    {
      name: 'Dr. Jennifer K.',
      role: 'Endocrinologist',
      content: 'A comprehensive tool that complements professional medical care beautifully.',
      rating: 5
    },
    {
      name: 'Maria L.',
      role: 'Health Advocate',
      content: 'The personalized recommendations were exactly what I needed to get started.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Take Control of Your{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  PCOS Journey
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get personalized insights, evidence-based recommendations, and professional-grade 
                assessment tools designed specifically for PCOS management and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/assessment"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Assessment</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
                >
                  Create Account
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our PCOS Assessment?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology meets medical expertise to provide you with the most comprehensive 
              PCOS assessment available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg w-fit mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get personalized PCOS insights and recommendations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Complete Assessment',
                description: 'Answer 30+ detailed questions across 6 key health areas'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Our neural network analyzes your responses with medical-grade accuracy'
              },
              {
                step: '03',
                title: 'Get Recommendations',
                description: 'Receive personalized diet, exercise, and treatment plans'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what patients and healthcare providers are saying about our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Start your journey with our comprehensive PCOS assessment and get personalized recommendations today.
            </p>
            <Link
              to="/assessment"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Begin Assessment Now</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-rose-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-rose-800 mb-2">Important Medical Disclaimer</h3>
                <p className="text-rose-700 text-sm">
                  This platform provides educational information and assessment tools for PCOS awareness. 
                  It is not intended to replace professional medical advice, diagnosis, or treatment. 
                  Always seek the advice of your physician or qualified healthcare provider with any questions 
                  regarding a medical condition. Never disregard professional medical advice or delay seeking 
                  it because of information obtained from this platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;