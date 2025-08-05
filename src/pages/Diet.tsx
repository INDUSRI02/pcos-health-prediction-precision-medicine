import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Star, Bookmark } from 'lucide-react';
import { recipes } from '../data/recommendations';

const Diet: React.FC = () => {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<string[]>([]);

  const selectedRecipe = id ? recipes.find(recipe => recipe.id === id) : null;

  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.pcosLevel === selectedCategory);

  const toggleBookmark = (recipeId: string) => {
    setBookmarkedRecipes(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/diet"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Recipes</span>
          </Link>

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
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedRecipe.prepTime + selectedRecipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat className="h-4 w-4" />
                    <span className="capitalize">{selectedRecipe.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>2-3 servings</span>
                  </div>
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
                      {selectedRecipe.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-green-700">
                          <Heart className="h-4 w-4 fill-current" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-700">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
                    <ol className="space-y-4">
                      {selectedRecipe.instructions.map((instruction, index) => (
                        <li key={index} className="flex space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{instruction}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-green-50 rounded-xl p-6 mb-6">
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

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Cooking Tips</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Prep ingredients ahead for faster cooking</li>
                      <li>• Use organic ingredients when possible</li>
                      <li>• Store leftovers in the fridge for up to 3 days</li>
                      <li>• Double the recipe for meal prep</li>
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">PCOS-Friendly Recipes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover delicious, nutritious recipes specifically designed to support PCOS management and hormonal balance.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {[
              { key: 'all', label: 'All Recipes' },
              { key: 'low', label: 'Prevention' },
              { key: 'medium', label: 'Management' },
              { key: 'high', label: 'Therapeutic' }
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
          <h2 className="text-2xl font-bold mb-4">💚 Nourish Your Body, Heal Your Hormones</h2>
          <p className="text-lg opacity-90">
            "Every healthy meal is a step towards hormonal balance and better health. You have the power to heal through nutrition!"
          </p>
        </motion.div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleBookmark(recipe.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 ${
                    bookmarkedRecipes.includes(recipe.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-white'
                  }`}
                >
                  <Bookmark className="h-4 w-4" />
                </button>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                  recipe.pcosLevel === 'low' ? 'bg-green-100 text-green-700' :
                  recipe.pcosLevel === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {recipe.pcosLevel === 'low' ? 'Prevention' :
                   recipe.pcosLevel === 'medium' ? 'Management' : 'Therapeutic'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prepTime + recipe.cookTime}min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>4.8</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">{recipe.nutrition.calories} cal</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-gray-700 text-sm">PCOS Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {recipe.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                    {recipe.benefits.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{recipe.benefits.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <Link
                  to={`/diet/${recipe.id}`}
                  className="block w-full text-center bg-green-500 text-white py-3 px-4 rounded-xl hover:bg-green-600 transition-colors duration-200 font-medium"
                >
                  View Recipe
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">PCOS Nutrition Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Balance Blood Sugar",
                tip: "Combine protein with complex carbs to prevent insulin spikes and maintain steady energy levels."
              },
              {
                title: "Anti-Inflammatory Foods",
                tip: "Include turmeric, ginger, leafy greens, and omega-3 rich foods to reduce inflammation."
              },
              {
                title: "Portion Control",
                tip: "Eat smaller, frequent meals to help regulate hormones and maintain stable blood sugar."
              }
            ].map((item, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Diet;