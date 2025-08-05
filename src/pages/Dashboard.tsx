import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Activity, BookOpen, Calendar, TrendingUp, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Heart,
      title: 'PCOS Assessment',
      description: 'Take our comprehensive assessment to understand your PCOS risk factors',
      link: '/assessment',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Activity,
      title: 'Personalized Exercise',
      description: 'Access tailored workout routines designed for PCOS management',
      link: '/exercise',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BookOpen,
      title: 'Nutrition Guide',
      description: 'Discover PCOS-friendly recipes and meal planning strategies',
      link: '/diet',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Calendar,
      title: 'Treatment Options',
      description: 'Learn about medications and supplements for PCOS management',
      link: '/medication',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const stats = [
    { label: 'Assessment Completed', value: '1', icon: Shield },
    { label: 'Risk Level', value: 'Low', icon: TrendingUp },
    { label: 'Recommendations', value: '12', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Take control of your PCOS journey with personalized insights and recommendations.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group p-6 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your PCOS Journey</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="bg-pink-500 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Start Your Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Take our comprehensive PCOS assessment to get personalized recommendations.
                </p>
              </div>
              <Link
                to="/assessment"
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-200"
              >
                Start Now
              </Link>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-gray-400 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-700">Explore Nutrition</h3>
                <p className="text-gray-500 text-sm">
                  Discover PCOS-friendly recipes and meal planning strategies.
                </p>
              </div>
              <Link
                to="/diet"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Explore
              </Link>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-gray-400 p-2 rounded-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-700">View Exercise Plans</h3>
                <p className="text-gray-500 text-sm">
                  Access workout routines designed specifically for PCOS management.
                </p>
              </div>
              <Link
                to="/exercise"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                View Plans
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6"
        >
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
              <p className="text-yellow-700 text-sm">
                This platform provides educational information only and should not replace professional medical advice. 
                Always consult with qualified healthcare providers for diagnosis, treatment, and management of PCOS. 
                Individual results may vary, and any health decisions should be made in consultation with your doctor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;