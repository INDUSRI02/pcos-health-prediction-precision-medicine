export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Assessment {
  personalInfo: {
    age: number;
    weight: number;
    height: number;
    activityLevel: string;
  };
  menstrualHealth: {
    cycleRegularity: string;
    cycleLength: number;
    periodFlow: string;
    lastPeriod: string;
  };
  physicalSymptoms: {
    hairGrowth: string;
    hairLoss: string;
    acne: string;
    weightGain: string;
    skinChanges: string;
  };
  metabolicHealth: {
    insulinResistance: string;
    bloodSugar: string;
    cholesterol: string;
    bloodPressure: string;
  };
  mentalEmotional: {
    moodChanges: string;
    anxiety: string;
    depression: string;
    sleepQuality: string;
  };
  lifestyle: {
    diet: string;
    exercise: string;
    stress: string;
    smoking: string;
  };
}

export interface PredictionResult {
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
  symptoms: string[];
  specificRecommendations?: {
    diet: string[];
    exercise: string[];
    lifestyle: string[];
  };
  recommendations: {
    diet: Recipe[];
    exercise: Exercise[];
    medication: Medication[];
  };
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  pcosLevel: 'low' | 'medium' | 'high';
  benefits: string[];
}

export interface Exercise {
  id: string;
  name: string;
  videoUrl: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
  targetAreas: string[];
  pcosLevel: 'low' | 'medium' | 'high';
  benefits: string[];
  instructions: string[];
}

export interface Medication {
  id: string;
  name: string;
  type: 'prescription' | 'otc' | 'supplement';
  dosage: string;
  description: string;
  sideEffects: string[];
  interactions: string[];
  pcosLevel: 'low' | 'medium' | 'high';
  disclaimer: string;
}