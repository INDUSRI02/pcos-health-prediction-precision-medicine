import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, User, Calendar, Activity, Brain, Utensils } from 'lucide-react';
import { Assessment } from '../types';

interface AssessmentFormProps {
  onComplete: (assessment: Assessment) => void;
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ onComplete }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [assessment, setAssessment] = useState<Assessment>({
    personalInfo: { age: 25, weight: 65, height: 165, activityLevel: 'moderate' },
    menstrualHealth: { cycleRegularity: 'regular', cycleLength: 28, periodFlow: 'normal', lastPeriod: 'thisMonth' },
    physicalSymptoms: { hairGrowth: 'none', hairLoss: 'none', acne: 'none', weightGain: 'none', skinChanges: 'none' },
    metabolicHealth: { insulinResistance: 'no', bloodSugar: 'normal', cholesterol: 'normal', bloodPressure: 'normal' },
    mentalEmotional: { moodChanges: 'none', anxiety: 'none', depression: 'none', sleepQuality: 'good' },
    lifestyle: { diet: 'healthy', exercise: 'regular', stress: 'low', smoking: 'never' }
  });

  const sections = [
    { icon: User, title: 'Personal Information', key: 'personalInfo' },
    { icon: Calendar, title: 'Menstrual Health', key: 'menstrualHealth' },
    { icon: Heart, title: 'Physical Symptoms', key: 'physicalSymptoms' },
    { icon: Activity, title: 'Metabolic Health', key: 'metabolicHealth' },
    { icon: Brain, title: 'Mental & Emotional', key: 'mentalEmotional' },
    { icon: Utensils, title: 'Lifestyle Factors', key: 'lifestyle' }
  ];

  const updateAssessment = (section: string, field: string, value: any) => {
    setAssessment(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof Assessment],
        [field]: value
      }
    }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      onComplete(assessment);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const renderPersonalInfo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <p className="text-blue-800 text-sm">
          Basic demographic information helps us provide more accurate assessments tailored to your profile.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
          <input
            type="number"
            value={assessment.personalInfo.age}
            onChange={(e) => updateAssessment('personalInfo', 'age', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            value={assessment.personalInfo.weight}
            onChange={(e) => updateAssessment('personalInfo', 'weight', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>
          <input
            type="number"
            value={assessment.personalInfo.height}
            onChange={(e) => updateAssessment('personalInfo', 'height', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Activity Level</label>
          <select
            value={assessment.personalInfo.activityLevel}
            onChange={(e) => updateAssessment('personalInfo', 'activityLevel', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="low">Sedentary (little to no exercise)</option>
            <option value="moderate">Moderately active (1-3 days/week)</option>
            <option value="high">Very active (4+ days/week)</option>
          </select>
        </div>
      </div>
    </motion.div>
  );

  const renderMenstrualHealth = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <p className="text-purple-800 text-sm">
          Menstrual irregularities are one of the primary indicators of PCOS. This information is crucial for accurate assessment.
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">How regular are your menstrual cycles?</label>
          <div className="space-y-2">
            {['regular', 'sometimes', 'irregular'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="cycleRegularity"
                  value={option}
                  checked={assessment.menstrualHealth.cycleRegularity === option}
                  onChange={(e) => updateAssessment('menstrualHealth', 'cycleRegularity', e.target.value)}
                  className="text-pink-600 focus:ring-pink-500"
                />
                <span className="text-gray-700 capitalize">{option === 'sometimes' ? 'Sometimes irregular' : option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Typical cycle length (days)</label>
          <input
            type="number"
            value={assessment.menstrualHealth.cycleLength}
            onChange={(e) => updateAssessment('menstrualHealth', 'cycleLength', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            min="21"
            max="60"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Period flow</label>
          <div className="space-y-2">
            {['light', 'normal', 'heavy'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="periodFlow"
                  value={option}
                  checked={assessment.menstrualHealth.periodFlow === option}
                  onChange={(e) => updateAssessment('menstrualHealth', 'periodFlow', e.target.value)}
                  className="text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPhysicalSymptoms = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <p className="text-green-800 text-sm">
          Physical symptoms often reflect hormonal imbalances associated with PCOS, particularly elevated androgen levels.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Excess hair growth (face, chest, back)</label>
          <div className="space-y-2">
            {['none', 'mild', 'moderate', 'severe'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="hairGrowth"
                  value={option}
                  checked={assessment.physicalSymptoms.hairGrowth === option}
                  onChange={(e) => updateAssessment('physicalSymptoms', 'hairGrowth', e.target.value)}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Hair loss or thinning (scalp)</label>
          <div className="space-y-2">
            {['none', 'mild', 'moderate', 'severe'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="hairLoss"
                  value={option}
                  checked={assessment.physicalSymptoms.hairLoss === option}
                  onChange={(e) => updateAssessment('physicalSymptoms', 'hairLoss', e.target.value)}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Acne or skin problems</label>
          <div className="space-y-2">
            {['none', 'mild', 'moderate', 'severe'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="acne"
                  value={option}
                  checked={assessment.physicalSymptoms.acne === option}
                  onChange={(e) => updateAssessment('physicalSymptoms', 'acne', e.target.value)}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Weight gain or difficulty losing weight</label>
          <div className="space-y-2">
            {['none', 'gradual', 'rapid', 'extreme'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="weightGain"
                  value={option}
                  checked={assessment.physicalSymptoms.weightGain === option}
                  onChange={(e) => updateAssessment('physicalSymptoms', 'weightGain', e.target.value)}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMetabolicHealth = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <p className="text-orange-800 text-sm">
          Metabolic factors are crucial in PCOS, as insulin resistance affects up to 70% of women with the condition.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Do you have insulin resistance?</label>
          <div className="space-y-2">
            {['no', 'maybe', 'yes'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="insulinResistance"
                  value={option}
                  checked={assessment.metabolicHealth.insulinResistance === option}
                  onChange={(e) => updateAssessment('metabolicHealth', 'insulinResistance', e.target.value)}
                  className="text-orange-600 focus:ring-orange-500"
                />
                <span className="text-gray-700 capitalize">{option === 'maybe' ? 'Not sure/Suspected' : option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Blood sugar levels</label>
          <div className="space-y-2">
            {['normal', 'prediabetic', 'diabetic'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="bloodSugar"
                  value={option}
                  checked={assessment.metabolicHealth.bloodSugar === option}
                  onChange={(e) => updateAssessment('metabolicHealth', 'bloodSugar', e.target.value)}
                  className="text-orange-600 focus:ring-orange-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cholesterol levels</label>
          <div className="space-y-2">
            {['normal', 'borderline', 'high'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="cholesterol"
                  value={option}
                  checked={assessment.metabolicHealth.cholesterol === option}
                  onChange={(e) => updateAssessment('metabolicHealth', 'cholesterol', e.target.value)}
                  className="text-orange-600 focus:ring-orange-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMentalEmotional = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
        <p className="text-indigo-800 text-sm">
          Mental health is closely linked to hormonal balance. Women with PCOS have higher rates of anxiety and depression.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Mood changes or swings</label>
          <div className="space-y-2">
            {['none', 'mild', 'moderate', 'severe'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="moodChanges"
                  value={option}
                  checked={assessment.mentalEmotional.moodChanges === option}
                  onChange={(e) => updateAssessment('mentalEmotional', 'moodChanges', e.target.value)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Anxiety levels</label>
          <div className="space-y-2">
            {['none', 'mild', 'moderate', 'severe'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="anxiety"
                  value={option}
                  checked={assessment.mentalEmotional.anxiety === option}
                  onChange={(e) => updateAssessment('mentalEmotional', 'anxiety', e.target.value)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Depression symptoms</label>
          <div className="space-y-2">
            {['none', 'mild', 'moderate', 'severe'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="depression"
                  value={option}
                  checked={assessment.mentalEmotional.depression === option}
                  onChange={(e) => updateAssessment('mentalEmotional', 'depression', e.target.value)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Sleep quality</label>
          <div className="space-y-2">
            {['good', 'fair', 'poor'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="sleepQuality"
                  value={option}
                  checked={assessment.mentalEmotional.sleepQuality === option}
                  onChange={(e) => updateAssessment('mentalEmotional', 'sleepQuality', e.target.value)}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderLifestyle = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
        <p className="text-teal-800 text-sm">
          Lifestyle factors significantly impact PCOS symptoms and can be powerful tools for management.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Diet quality</label>
          <div className="space-y-2">
            {['healthy', 'average', 'poor'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="diet"
                  value={option}
                  checked={assessment.lifestyle.diet === option}
                  onChange={(e) => updateAssessment('lifestyle', 'diet', e.target.value)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Exercise frequency</label>
          <div className="space-y-2">
            {['regular', 'occasional', 'rarely'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="exercise"
                  value={option}
                  checked={assessment.lifestyle.exercise === option}
                  onChange={(e) => updateAssessment('lifestyle', 'exercise', e.target.value)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Stress levels</label>
          <div className="space-y-2">
            {['low', 'moderate', 'high'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="stress"
                  value={option}
                  checked={assessment.lifestyle.stress === option}
                  onChange={(e) => updateAssessment('lifestyle', 'stress', e.target.value)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700 capitalize">{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Smoking status</label>
          <div className="space-y-2">
            {['never', 'former', 'current'].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="smoking"
                  value={option}
                  checked={assessment.lifestyle.smoking === option}
                  onChange={(e) => updateAssessment('lifestyle', 'smoking', e.target.value)}
                  className="text-teal-600 focus:ring-teal-500"
                />
                <span className="text-gray-700 capitalize">{option === 'former' ? 'Former smoker' : option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderPersonalInfo();
      case 1: return renderMenstrualHealth();
      case 2: return renderPhysicalSymptoms();
      case 3: return renderMetabolicHealth();
      case 4: return renderMentalEmotional();
      case 5: return renderLifestyle();
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className={`flex items-center ${index < sections.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentSection
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  } transition-all duration-300`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                {index < sections.length - 1 && (
                  <div
                    className={`flex-1 h-2 mx-4 rounded-full ${
                      index < currentSection ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 'bg-gray-200'
                    } transition-all duration-300`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{sections[currentSection].title}</h2>
          <p className="text-gray-600">Step {currentSection + 1} of {sections.length}</p>
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <AnimatePresence mode="wait">
          {renderCurrentSection()}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevSection}
          disabled={currentSection === 0}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
            currentSection === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextSection}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
        >
          <span>{currentSection === sections.length - 1 ? 'Complete Assessment' : 'Next'}</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AssessmentForm;