import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Pill, AlertTriangle, Info, Heart, Shield, Clock } from 'lucide-react';
import { medications } from '../data/recommendations';

const Medication: React.FC = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'prescription' | 'otc' | 'supplement'>('all');

  const selectedMedication = id ? medications.find(med => med.id === id) : null;

  const filteredMedications = selectedCategory === 'all' 
    ? medications 
    : medications.filter(med => med.type === selectedCategory);

  if (selectedMedication) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/medication"
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Treatments</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Pill className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{selectedMedication.name}</h1>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    selectedMedication.type === 'prescription' 
                      ? 'bg-red-100 text-red-800' 
                      : selectedMedication.type === 'otc'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {selectedMedication.type === 'prescription' ? 'Prescription Required' : 
                     selectedMedication.type === 'otc' ? 'Over-the-Counter' : 'Dietary Supplement'}
                  </span>
                </div>
              </div>
              <p className="text-lg opacity-90">{selectedMedication.description}</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Dosage Information</h2>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-gray-800">Recommended Dosage</span>
                      </div>
                      <p className="text-gray-700">{selectedMedication.dosage}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Possible Side Effects</h2>
                    <div className="space-y-3">
                      {selectedMedication.sideEffects.map((effect, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                          <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                          <span className="text-gray-700">{effect}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Drug Interactions</h2>
                    <div className="space-y-3">
                      {selectedMedication.interactions.map((interaction, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                          <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                          <span className="text-gray-700">{interaction}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                        <p className="text-yellow-700 text-sm">{selectedMedication.disclaimer}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Treatment Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type</span>
                        <span className="font-semibold capitalize">{selectedMedication.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">PCOS Level</span>
                        <span className={`font-semibold capitalize ${
                          selectedMedication.pcosLevel === 'low' ? 'text-green-600' :
                          selectedMedication.pcosLevel === 'medium' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {selectedMedication.pcosLevel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Guidelines</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Always consult your healthcare provider</li>
                      <li>• Follow prescribed dosage exactly</li>
                      <li>• Report any unusual side effects</li>
                      <li>• Don't stop medication suddenly</li>
                      <li>• Keep regular medical appointments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">PCOS Treatment Options</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore evidence-based medications and supplements that can help manage PCOS symptoms and improve quality of life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {[
              { key: 'all', label: 'All Treatments' },
              { key: 'prescription', label: 'Prescription' },
              { key: 'otc', label: 'Over-the-Counter' },
              { key: 'supplement', label: 'Supplements' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key as any)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 mb-12 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">💊 Knowledge is Power in Your Healing Journey</h2>
          <p className="text-lg opacity-90">
            "Understanding your treatment options empowers you to make informed decisions about your health and well-being."
          </p>
        </motion.div>

        {/* Medication Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedications.map((medication, index) => (
            <motion.div
              key={medication.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`p-6 ${
                medication.type === 'prescription' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                medication.type === 'otc' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                'bg-gradient-to-r from-green-400 to-green-500'
              } text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <Pill className="h-8 w-8" />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    medication.pcosLevel === 'low' ? 'bg-white/20' :
                    medication.pcosLevel === 'medium' ? 'bg-white/20' :
                    'bg-white/20'
                  }`}>
                    {medication.pcosLevel === 'low' ? 'Mild Symptoms' :
                     medication.pcosLevel === 'medium' ? 'Moderate Symptoms' : 'Severe Symptoms'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{medication.name}</h3>
                <span className="text-sm opacity-90 capitalize">
                  {medication.type === 'prescription' ? 'Prescription Required' : 
                   medication.type === 'otc' ? 'Over-the-Counter' : 'Dietary Supplement'}
                </span>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{medication.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 text-sm mb-2">Dosage:</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{medication.dosage}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 text-sm mb-2">Common Side Effects:</h4>
                  <div className="space-y-1">
                    {medication.sideEffects.slice(0, 2).map((effect, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                        <span>{effect}</span>
                      </div>
                    ))}
                    {medication.sideEffects.length > 2 && (
                      <span className="text-xs text-gray-500">+{medication.sideEffects.length - 2} more</span>
                    )}
                  </div>
                </div>
                
                <Link
                  to={`/medication/${medication.id}`}
                  className={`block w-full text-center py-3 px-4 rounded-xl transition-colors duration-200 font-medium ${
                    medication.type === 'prescription' ? 'bg-red-500 hover:bg-red-600 text-white' :
                    medication.type === 'otc' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                    'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Important Treatment Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Consult Healthcare Provider",
                tip: "Always discuss treatment options with your doctor before starting any new medication or supplement."
              },
              {
                icon: Heart,
                title: "Monitor Your Response",
                tip: "Keep track of how treatments affect your symptoms and report any concerns to your healthcare team."
              },
              {
                icon: Info,
                title: "Understand Interactions",
                tip: "Be aware of potential drug interactions and always inform your doctor about all medications you're taking."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-purple-50 rounded-xl p-6">
                  <Icon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.tip}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Medical Disclaimer</h3>
              <p className="text-yellow-700 leading-relaxed">
                This information is for educational purposes only and should not replace professional medical advice. 
                PCOS treatment requires individualized care from qualified healthcare providers. Always consult with 
                your doctor before starting, stopping, or changing any medications. Treatment effectiveness varies 
                between individuals, and what works for one person may not work for another.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Medication;