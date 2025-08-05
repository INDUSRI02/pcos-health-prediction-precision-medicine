import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Navigate } from 'react-router-dom';
import AssessmentForm from '../components/AssessmentForm';
import ResultsPage from '../components/ResultsPage';
import { Assessment as AssessmentType, PredictionResult } from '../types';
import { predictPCOSRisk, initializeModel } from '../utils/mlModel';
import { recipes, exercises, medications } from '../data/recommendations';
import { useAuth } from '../contexts/AuthContext';

const Assessment: React.FC = () => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<'form' | 'results'>('form');
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleAssessmentComplete = async (assessment: AssessmentType) => {
    setLoading(true);
    
    try {
      // Initialize the ML model if not already done
      await initializeModel();
      
      // Get prediction from ML model
      const prediction = await predictPCOSRisk(assessment);
      
      // Get recommendations based on risk level
      const recommendations = {
        diet: recipes.filter(recipe => recipe.pcosLevel === prediction.riskLevel),
        exercise: exercises.filter(exercise => exercise.pcosLevel === prediction.riskLevel),
        medication: medications.filter(medication => medication.pcosLevel === prediction.riskLevel)
      };
      
      const fullResult: PredictionResult = {
        ...prediction,
        recommendations
      };
      
      setResult(fullResult);
      setCurrentStep('results');
    } catch (error) {
      console.error('Error processing assessment:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center animate-pulse">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Generating Your Results</h2>
          <p className="text-gray-600">Analyzing your symptoms and creating personalized recommendations...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 py-8">
      {currentStep === 'form' ? (
        <AssessmentForm onComplete={handleAssessmentComplete} />
      ) : (
        result && <ResultsPage result={result} />
      )}
    </div>
  );
};

export default Assessment;