import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Clock, Target, Zap, Heart, Star, BookOpen } from 'lucide-react';
import ReactPlayer from 'react-player';
import { exercises } from '../data/recommendations';

const Exercise: React.FC = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string>('');

  const selectedExercise = id ? exercises.find(exercise => exercise.id === id) : null;

  const filteredExercises = selectedCategory === 'all' 
    ? exercises 
    : exercises.filter(exercise => exercise.pcosLevel === selectedCategory);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setShowVideoModal(true);
  };

  if (selectedExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/exercise"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Exercises</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <button
                onClick={() => openVideoModal(selectedExercise.videoUrl)}
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
              >
                <Play className="h-12 w-12 text-white ml-1" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{selectedExercise.name}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedExercise.duration} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span className="capitalize">{selectedExercise.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4" />
                    <span>{selectedExercise.targetAreas.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Exercise</h2>
                    <p className="text-gray-600 leading-relaxed">{selectedExercise.description}</p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">PCOS Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedExercise.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-blue-700">
                          <Heart className="h-4 w-4 fill-current" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Equipment Needed</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedExercise.equipment.map((item, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                    <ol className="space-y-4">
                      {selectedExercise.instructions.map((instruction, index) => (
                        <li key={index} className="flex space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{instruction}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Exercise Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-semibold">{selectedExercise.duration} minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Difficulty</span>
                        <span className="font-semibold capitalize">{selectedExercise.difficulty}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">PCOS Level</span>
                        <span className={`font-semibold capitalize ${
                          selectedExercise.pcosLevel === 'low' ? 'text-green-600' :
                          selectedExercise.pcosLevel === 'medium' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {selectedExercise.pcosLevel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Safety Tips</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Start slowly and listen to your body</li>
                      <li>• Stay hydrated throughout the workout</li>
                      <li>• Stop if you feel dizzy or unwell</li>
                      <li>• Consult your doctor before starting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">{selectedExercise.name}</h3>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video">
                <ReactPlayer
                  url={selectedVideo}
                  width="100%"
                  height="100%"
                  controls
                  playing
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">PCOS Exercise Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover effective workout routines designed to improve insulin sensitivity, reduce inflammation, and support hormonal balance.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {[
              { key: 'all', label: 'All Workouts' },
              { key: 'low', label: 'Gentle' },
              { key: 'medium', label: 'Moderate' },
              { key: 'high', label: 'Restorative' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key as any)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.key
                    ? 'bg-pink-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-pink-600'
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
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 mb-12 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">💪 Move Your Body, Balance Your Hormones</h2>
          <p className="text-lg opacity-90">
            "Exercise is medicine for PCOS. Every movement brings you closer to hormonal harmony and better health!"
          </p>
        </motion.div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <button
                  onClick={() => openVideoModal(exercise.videoUrl)}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </button>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  exercise.pcosLevel === 'low' ? 'bg-green-100 text-green-700' :
                  exercise.pcosLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {exercise.pcosLevel === 'low' ? 'Gentle' :
                   exercise.pcosLevel === 'medium' ? 'Moderate' : 'Restorative'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{exercise.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exercise.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{exercise.duration}min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span className="capitalize">{exercise.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-gray-700 text-sm">Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exercise.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                    {exercise.benefits.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{exercise.benefits.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <Link
                  to={`/exercise/${exercise.id}`}
                  className="block w-full text-center bg-blue-500 text-white py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  Start Workout
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Exercise Tips for PCOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Start Gradually",
                tip: "Begin with low-intensity exercises and gradually increase duration and intensity as your fitness improves."
              },
              {
                title: "Consistency Matters",
                tip: "Regular, moderate exercise is more beneficial than intense, sporadic workouts for PCOS management."
              },
              {
                title: "Listen to Your Body",
                tip: "Pay attention to how your body responds and adjust your routine based on energy levels and symptoms."
              }
            ].map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Exercise Video</h3>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video">
                <ReactPlayer
                  url={selectedVideo}
                  width="100%"
                  height="100%"
                  controls
                  playing
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;