import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Info, Utensils, Dumbbell, Pill, Calendar, Heart } from 'lucide-react';
import { PredictionResult } from '../types';
import { recipes, exercises, medications, weeklyDietPlans } from '../data/recommendations';
import ReactPlayer from 'react-player';

interface ResultsPageProps {
  result: PredictionResult;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ result }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'diet' | 'exercise' | 'medication' | 'weekly'>('overview');
  const [dietType, setDietType] = useState<'vegetarian' | 'nonVegetarian'>('vegetarian');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const navigate = useNavigate();

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return <CheckCircle className="h-6 w-6" />;
      case 'medium': return <Info className="h-6 w-6" />;
      case 'high': return <AlertTriangle className="h-6 w-6" />;
      default: return <Info className="h-6 w-6" />;
    }
  };

  const getRiskMessage = (level: string) => {
    switch (level) {
      case 'low':
        return 'Your assessment suggests a low risk for PCOS. Continue with preventive care and healthy lifestyle habits.';
      case 'medium':
        return 'Your assessment indicates moderate risk factors for PCOS. Consider consulting with a healthcare provider for further evaluation.';
      case 'high':
        return 'Your assessment shows multiple risk factors for PCOS. We strongly recommend consulting with a healthcare provider for proper diagnosis and treatment.';
      default:
        return '';
    }
  };

  const filteredRecipes = recipes.filter(recipe => recipe.pcosLevel === result.riskLevel);
  const filteredExercises = exercises.filter(exercise => exercise.pcosLevel === result.riskLevel);
  const filteredMedications = medications.filter(medication => medication.pcosLevel === result.riskLevel);
  const weeklyPlan = weeklyDietPlans[dietType][result.riskLevel];

  const openVideoModal = (exercise: any) => {
    setSelectedExercise(exercise);
    setShowVideoModal(true);
  };

  const viewRecipe = (recipe: any) => {
    setSelectedRecipe(recipe);
  };

  const backToRecipes = () => {
    setSelectedRecipe(null);
  };

  const viewExercise = (exercise: any) => {
    setSelectedExercise(exercise);
  };

  const backToExercises = () => {
    setSelectedExercise(null);
  };

  // Recipe Detail View
  if (selectedRecipe) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={backToRecipes}
          className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-6 transition-colors duration-200"
        >
          <span>← Back to Assessment Results</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative h-64 md:h-80">
            <img 
              src={selectedRecipe.image} 
              alt={selectedRecipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{selectedRecipe.name}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span>{selectedRecipe.prepTime + selectedRecipe.cookTime} min</span>
                <span className="capitalize">{selectedRecipe.difficulty}</span>
                <span>2-3 servings</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{selectedRecipe.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">PCOS Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedRecipe.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2 text-pink-700">
                        <Heart className="h-4 w-4 fill-current" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full" />
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {selectedRecipe.instructions.map((instruction: string, index: number) => (
                      <li key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-pink-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Nutrition Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calories</span>
                      <span className="font-semibold">{selectedRecipe.nutrition.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Protein</span>
                      <span className="font-semibold">{selectedRecipe.nutrition.protein}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Carbs</span>
                      <span className="font-semibold">{selectedRecipe.nutrition.carbs}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fat</span>
                      <span className="font-semibold">{selectedRecipe.nutrition.fat}g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fiber</span>
                      <span className="font-semibold">{selectedRecipe.nutrition.fiber}g</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Exercise Detail View
  if (selectedExercise) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={backToExercises}
          className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-6 transition-colors duration-200"
        >
          <span>← Back to Assessment Results</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
            <button
              onClick={() => openVideoModal(selectedExercise)}
              className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
            >
              <svg className="h-12 w-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{selectedExercise.name}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span>{selectedExercise.duration} min</span>
                <span className="capitalize">{selectedExercise.difficulty}</span>
                <span>{selectedExercise.targetAreas.join(', ')}</span>
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
                    {selectedExercise.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2 text-pink-700">
                        <Heart className="h-4 w-4 fill-current" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Equipment Needed</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedExercise.equipment.map((item: string, index: number) => (
                      <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {selectedExercise.instructions.map((instruction: string, index: number) => (
                      <li key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-pink-50 rounded-xl p-6 mb-6">
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
              </div>
            </div>
          </div>
        </motion.div>

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
                  url={selectedExercise.videoUrl}
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
    <div className="max-w-6xl mx-auto p-6">
      {/* Results Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-8"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your PCOS Assessment Results</h1>
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full ${getRiskColor(result.riskLevel)}`}>
            {getRiskIcon(result.riskLevel)}
            <span className="text-lg font-semibold capitalize">{result.riskLevel} Risk Level</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Assessment Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Confidence Level:</span>
                <span className="font-semibold">{result.confidence}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Risk Category:</span>
                <span className={`font-semibold capitalize ${getRiskColor(result.riskLevel).split(' ')[0]}`}>
                  {result.riskLevel}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Symptoms Identified</h3>
            <ul className="space-y-2">
              {result.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <p className="text-blue-800">{getRiskMessage(result.riskLevel)}</p>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-800 text-sm">
            <strong>Medical Disclaimer:</strong> This assessment is for educational purposes only and does not constitute medical advice. 
            Please consult with a qualified healthcare provider for proper diagnosis and treatment.
          </p>
        </div>
      </motion.div>

      {/* Recommendations Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 ${
                activeTab === 'overview'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200`}
            >
              <Heart className="h-5 w-5" />
              <span className="font-medium">Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('diet')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 ${
                activeTab === 'diet'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200`}
            >
              <Utensils className="h-5 w-5" />
              <span className="font-medium">Nutrition</span>
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 ${
                activeTab === 'weekly'
                  ? 'bg-green-50 text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200`}
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Weekly Plan</span>
            </button>
            <button
              onClick={() => setActiveTab('exercise')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 ${
                activeTab === 'exercise'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200`}
            >
              <Dumbbell className="h-5 w-5" />
              <span className="font-medium">Exercise</span>
            </button>
            <button
              onClick={() => setActiveTab('medication')}
              className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 ${
                activeTab === 'medication'
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              } transition-colors duration-200`}
            >
              <Pill className="h-5 w-5" />
              <span className="font-medium">Treatment</span>
            </button>
          </div>
        </div>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Personalized Recommendations</h3>
              
              {result.specificRecommendations && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-4">Dietary Focus</h4>
                    <ul className="space-y-2">
                      {result.specificRecommendations.diet.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-green-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Exercise Priority</h4>
                    <ul className="space-y-2">
                      {result.specificRecommendations.exercise.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-blue-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-purple-800 mb-4">Lifestyle Changes</h4>
                    <ul className="space-y-2">
                      {result.specificRecommendations.lifestyle.map((rec, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-purple-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">💪 Your PCOS Journey Starts Now!</h4>
                <p className="text-gray-700 mb-4">
                  Remember, managing PCOS is a journey, not a destination. Every small step you take towards better health matters. 
                  You have the power to improve your symptoms and quality of life through consistent, informed choices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">🌟 Success Tips</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Start with small, sustainable changes</li>
                      <li>• Track your symptoms and progress</li>
                      <li>• Celebrate every victory, no matter how small</li>
                      <li>• Be patient with yourself</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">🎯 Next Steps</h5>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Consult with your healthcare provider</li>
                      <li>• Start with the weekly meal plan</li>
                      <li>• Begin gentle exercise routine</li>
                      <li>• Join PCOS support communities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'diet' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recommended Nutrition Plan</h3>
              
              <div className="mb-6 bg-green-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-3">🥗 Nutrition Guidelines for {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)} Risk</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                  {result.riskLevel === 'low' && (
                    <>
                      <div>• Focus on whole, unprocessed foods</div>
                      <div>• Include plenty of colorful vegetables</div>
                      <div>• Choose lean proteins and healthy fats</div>
                      <div>• Maintain regular meal timing</div>
                    </>
                  )}
                  {result.riskLevel === 'medium' && (
                    <>
                      <div>• Emphasize anti-inflammatory foods</div>
                      <div>• Monitor carbohydrate portions</div>
                      <div>• Include omega-3 rich foods</div>
                      <div>• Consider meal timing strategies</div>
                    </>
                  )}
                  {result.riskLevel === 'high' && (
                    <>
                      <div>• Follow therapeutic nutrition approach</div>
                      <div>• Minimize processed and inflammatory foods</div>
                      <div>• Focus on nutrient density</div>
                      <div>• Consider working with a nutritionist</div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {result.recommendations.diet.map((recipe) => (
                  <div key={recipe.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{recipe.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{recipe.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                        <span>Calories: {recipe.nutrition.calories}</span>
                        <span>Protein: {recipe.nutrition.protein}g</span>
                        <span>Prep: {recipe.prepTime}min</span>
                        <span>Cook: {recipe.cookTime}min</span>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-gray-700">PCOS Benefits:</h5>
                        <ul className="text-sm text-gray-600">
                          {recipe.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button
                        onClick={() => viewRecipe(recipe)}
                        className="mt-4 block w-full text-center bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition-colors duration-200 font-medium"
                      >
                        View Recipe
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'weekly' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Meal Plan</h3>
              
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-100 rounded-xl p-2">
                  <button
                    onClick={() => setDietType('vegetarian')}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                      dietType === 'vegetarian'
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-pink-600'
                    }`}
                  >
                    Vegetarian
                  </button>
                  <button
                    onClick={() => setDietType('nonVegetarian')}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                      dietType === 'nonVegetarian'
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-pink-600'
                    }`}
                  >
                    Non-Vegetarian
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.entries(weeklyPlan).map(([day, meals]) => (
                  <div key={day} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-md">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 capitalize">{day}</h4>
                    <div className="space-y-3">
                      <div className="bg-white/70 rounded-lg p-3">
                        <h5 className="font-semibold text-pink-700 mb-1">🌅 Breakfast</h5>
                        <p className="text-sm text-gray-700">{meals.breakfast}</p>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <h5 className="font-semibold text-purple-700 mb-1">☀️ Lunch</h5>
                        <p className="text-sm text-gray-700">{meals.lunch}</p>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <h5 className="font-semibold text-purple-700 mb-1">🌙 Dinner</h5>
                        <p className="text-sm text-gray-700">{meals.dinner}</p>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <h5 className="font-semibold text-pink-700 mb-1">🍎 Snacks</h5>
                        <div className="text-sm text-gray-700">
                          {meals.snacks.map((snack, index) => (
                            <div key={index}>• {snack}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">📝 Weekly Planning Tips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
                  <div>
                    <h5 className="font-medium mb-2">Meal Prep Success:</h5>
                    <ul className="space-y-1">
                      <li>• Prepare grains and proteins in batches</li>
                      <li>• Wash and chop vegetables ahead</li>
                      <li>• Make smoothie packs for freezer</li>
                      <li>• Prepare healthy snacks in portions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Flexibility Guidelines:</h5>
                    <ul className="space-y-1">
                      <li>• Swap similar foods within categories</li>
                      <li>• Adjust portions based on hunger</li>
                      <li>• Listen to your body's needs</li>
                      <li>• Stay hydrated throughout the day</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'exercise' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recommended Exercise Program</h3>
              
              <div className="mb-6 bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">💪 Exercise Guidelines for {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)} Risk</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                  {result.riskLevel === 'low' && (
                    <>
                      <div>• Aim for 150 minutes moderate activity weekly</div>
                      <div>• Include 2-3 strength training sessions</div>
                      <div>• Add flexibility and balance work</div>
                      <div>• Listen to your body and rest when needed</div>
                    </>
                  )}
                  {result.riskLevel === 'medium' && (
                    <>
                      <div>• Focus on insulin-sensitizing exercises</div>
                      <div>• Include both cardio and resistance training</div>
                      <div>• Add stress-reducing activities like yoga</div>
                      <div>• Monitor intensity and recovery</div>
                    </>
                  )}
                  {result.riskLevel === 'high' && (
                    <>
                      <div>• Start gently with restorative practices</div>
                      <div>• Focus on stress reduction and healing</div>
                      <div>• Gradually build activity tolerance</div>
                      <div>• Prioritize sleep and recovery</div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.recommendations.exercise.map((exercise) => (
                  <div key={exercise.id} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{exercise.name}</h4>
                    <p className="text-gray-600 mb-4">{exercise.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Duration:</span> {exercise.duration} minutes
                      </div>
                      <div>
                        <span className="font-medium">Difficulty:</span> {exercise.difficulty}
                      </div>
                      <div>
                        <span className="font-medium">Equipment:</span> {exercise.equipment.join(', ')}
                      </div>
                      <div>
                        <span className="font-medium">Target:</span> {exercise.targetAreas.join(', ')}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h5 className="font-medium text-gray-700">PCOS Benefits:</h5>
                      <ul className="text-sm text-gray-600">
                        {exercise.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => viewExercise(exercise)}
                      className="block w-full text-center bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition-colors duration-200 font-medium"
                    >
                      Start Workout
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'medication' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Treatment Options</h3>
              
              <div className="mb-6 bg-purple-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">💊 Treatment Approach for {result.riskLevel.charAt(0).toUpperCase() + result.riskLevel.slice(1)} Risk</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-700">
                  {result.riskLevel === 'low' && (
                    <>
                      <div>• Focus on preventive supplements</div>
                      <div>• Support overall hormonal health</div>
                      <div>• Consider natural options first</div>
                      <div>• Regular monitoring and check-ups</div>
                    </>
                  )}
                  {result.riskLevel === 'medium' && (
                    <>
                      <div>• Targeted symptom management</div>
                      <div>• Consider insulin sensitizers</div>
                      <div>• Address specific hormonal imbalances</div>
                      <div>• Regular healthcare provider consultation</div>
                    </>
                  )}
                  {result.riskLevel === 'high' && (
                    <>
                      <div>• Comprehensive medical management</div>
                      <div>• Multiple therapeutic approaches</div>
                      <div>• Close medical supervision required</div>
                      <div>• Regular monitoring and adjustments</div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                {result.recommendations.medication.map((medication) => (
                  <div key={medication.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{medication.name}</h4>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          medication.type === 'prescription' 
                            ? 'bg-red-100 text-red-800' 
                            : medication.type === 'otc'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {medication.type === 'prescription' ? 'Prescription' : 
                           medication.type === 'otc' ? 'Over-the-Counter' : 'Supplement'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Dosage</div>
                        <div className="font-medium">{medication.dosage}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{medication.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Possible Side Effects:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {medication.sideEffects.map((effect, index) => (
                            <li key={index} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                              <span>{effect}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Drug Interactions:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {medication.interactions.map((interaction, index) => (
                            <li key={index} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                              <span>{interaction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-yellow-50 rounded-md border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> {medication.disclaimer}
                      </p>
                    </div>
                    
                    <Link
                      to="#"
                      className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-xl hover:bg-pink-600 transition-colors duration-200 font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/assessment"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 text-center font-medium"
        >
          Take Assessment Again
        </Link>
        <Link
          to="/dashboard"
          className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-center font-medium"
        >
          Return to Dashboard
        </Link>
      </motion.div>
    </div>
  );
};

export default ResultsPage;