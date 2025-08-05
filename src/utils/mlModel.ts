import * as tf from '@tensorflow/tfjs';
import { Assessment } from '../types';

let model: tf.Sequential | null = null;

// Feature engineering function
const extractFeatures = (assessment: Assessment): number[] => {
  const features: number[] = [];
  
  // Personal info features
  features.push(assessment.personalInfo.age / 100); // Normalize age
  features.push(assessment.personalInfo.weight / 200); // Normalize weight
  features.push(assessment.personalInfo.height / 200); // Normalize height
  features.push(assessment.personalInfo.activityLevel === 'low' ? 0 : 
                assessment.personalInfo.activityLevel === 'moderate' ? 0.5 : 1);
  
  // Menstrual health features
  features.push(assessment.menstrualHealth.cycleRegularity === 'regular' ? 0 : 
                assessment.menstrualHealth.cycleRegularity === 'sometimes' ? 0.5 : 1);
  features.push(assessment.menstrualHealth.cycleLength / 50); // Normalize cycle length
  features.push(assessment.menstrualHealth.periodFlow === 'light' ? 0 : 
                assessment.menstrualHealth.periodFlow === 'normal' ? 0.5 : 1);
  
  // Physical symptoms features
  features.push(assessment.physicalSymptoms.hairGrowth === 'none' ? 0 : 
                assessment.physicalSymptoms.hairGrowth === 'mild' ? 0.5 : 1);
  features.push(assessment.physicalSymptoms.hairLoss === 'none' ? 0 : 
                assessment.physicalSymptoms.hairLoss === 'mild' ? 0.5 : 1);
  features.push(assessment.physicalSymptoms.acne === 'none' ? 0 : 
                assessment.physicalSymptoms.acne === 'mild' ? 0.5 : 1);
  features.push(assessment.physicalSymptoms.weightGain === 'none' ? 0 : 
                assessment.physicalSymptoms.weightGain === 'gradual' ? 0.5 : 1);
  
  // Metabolic health features
  features.push(assessment.metabolicHealth.insulinResistance === 'no' ? 0 : 
                assessment.metabolicHealth.insulinResistance === 'maybe' ? 0.5 : 1);
  features.push(assessment.metabolicHealth.bloodSugar === 'normal' ? 0 : 
                assessment.metabolicHealth.bloodSugar === 'prediabetic' ? 0.5 : 1);
  features.push(assessment.metabolicHealth.cholesterol === 'normal' ? 0 : 
                assessment.metabolicHealth.cholesterol === 'borderline' ? 0.5 : 1);
  
  // Mental/emotional features
  features.push(assessment.mentalEmotional.moodChanges === 'none' ? 0 : 
                assessment.mentalEmotional.moodChanges === 'mild' ? 0.5 : 1);
  features.push(assessment.mentalEmotional.anxiety === 'none' ? 0 : 
                assessment.mentalEmotional.anxiety === 'mild' ? 0.5 : 1);
  features.push(assessment.mentalEmotional.depression === 'none' ? 0 : 
                assessment.mentalEmotional.depression === 'mild' ? 0.5 : 1);
  
  // Lifestyle features
  features.push(assessment.lifestyle.diet === 'healthy' ? 0 : 
                assessment.lifestyle.diet === 'average' ? 0.5 : 1);
  features.push(assessment.lifestyle.exercise === 'regular' ? 0 : 
                assessment.lifestyle.exercise === 'occasional' ? 0.5 : 1);
  
  return features;
};

// Generate synthetic training data
const generateTrainingData = () => {
  const data: number[][] = [];
  const labels: number[][] = [];
  
  for (let i = 0; i < 1000; i++) {
    const features: number[] = [];
    
    // Generate random features
    for (let j = 0; j < 19; j++) {
      features.push(Math.random());
    }
    
    // Calculate risk based on weighted features
    const riskScore = features.reduce((acc, feature, idx) => {
      const weights = [0.05, 0.03, 0.02, 0.08, 0.15, 0.05, 0.07, 0.12, 0.08, 0.10, 0.06, 0.12, 0.08, 0.09, 0.07, 0.08, 0.09, 0.08, 0.05];
      return acc + feature * weights[idx];
    }, 0);
    
    // Convert to one-hot encoded labels
    if (riskScore < 0.3) {
      labels.push([1, 0, 0]); // Low risk
    } else if (riskScore < 0.7) {
      labels.push([0, 1, 0]); // Medium risk
    } else {
      labels.push([0, 0, 1]); // High risk
    }
    
    data.push(features);
  }
  
  return { data, labels };
};

// Initialize and train the model
export const initializeModel = async (): Promise<void> => {
  if (model) return;
  
  console.log('Initializing PCOS prediction model...');
  
  // Create neural network model
  model = tf.sequential({
    layers: [
      tf.layers.dense({
        inputShape: [19],
        units: 64,
        activation: 'relu',
        kernelInitializer: 'randomNormal'
      }),
      tf.layers.dropout({ rate: 0.3 }),
      tf.layers.dense({
        units: 32,
        activation: 'relu',
        kernelInitializer: 'randomNormal'
      }),
      tf.layers.dropout({ rate: 0.2 }),
      tf.layers.dense({
        units: 16,
        activation: 'relu',
        kernelInitializer: 'randomNormal'
      }),
      tf.layers.dense({
        units: 3,
        activation: 'softmax'
      })
    ]
  });
  
  // Compile model
  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });
  
  // Generate training data
  const { data, labels } = generateTrainingData();
  
  // Convert to tensors
  const xs = tf.tensor2d(data);
  const ys = tf.tensor2d(labels);
  
  // Train model
  console.log('Training model...');
  await model.fit(xs, ys, {
    epochs: 50,
    batchSize: 32,
    validationSplit: 0.2,
    verbose: 0
  });
  
  // Clean up tensors
  xs.dispose();
  ys.dispose();
  
  console.log('Model training completed!');
};

// Make prediction
export const predictPCOSRisk = async (assessment: Assessment): Promise<{
  riskLevel: 'low' | 'medium' | 'high';
  confidence: number;
  symptoms: string[];
  specificRecommendations: {
    diet: string[];
    exercise: string[];
    lifestyle: string[];
  };
}> => {
  if (!model) {
    await initializeModel();
  }
  
  const features = extractFeatures(assessment);
  const prediction = model!.predict(tf.tensor2d([features])) as tf.Tensor;
  const probabilities = await prediction.data();
  
  // Get the predicted class and confidence
  const maxProb = Math.max(...probabilities);
  const predictedClass = probabilities.indexOf(maxProb);
  
  const riskLevels = ['low', 'medium', 'high'] as const;
  const riskLevel = riskLevels[predictedClass];
  const confidence = Math.round(maxProb * 100);
  
  // Identify key symptoms
  const symptoms: string[] = [];
  const specificRecommendations = {
    diet: [] as string[],
    exercise: [] as string[],
    lifestyle: [] as string[]
  };

  // Analyze specific symptoms for targeted recommendations
  if (assessment.menstrualHealth.cycleRegularity !== 'regular') symptoms.push('Irregular menstrual cycles');
  if (assessment.physicalSymptoms.hairGrowth !== 'none') symptoms.push('Excess hair growth');
  if (assessment.physicalSymptoms.acne !== 'none') symptoms.push('Acne or skin issues');
  if (assessment.physicalSymptoms.weightGain !== 'none') symptoms.push('Weight gain');
  if (assessment.metabolicHealth.insulinResistance === 'yes') symptoms.push('Insulin resistance');
  if (assessment.mentalEmotional.anxiety !== 'none') symptoms.push('Anxiety symptoms');
  if (assessment.mentalEmotional.depression !== 'none') symptoms.push('Depression symptoms');
  if (assessment.mentalEmotional.sleepQuality === 'poor') symptoms.push('Poor sleep quality');

  // Generate specific recommendations based on symptoms
  if (assessment.metabolicHealth.insulinResistance === 'yes' || assessment.metabolicHealth.bloodSugar !== 'normal') {
    specificRecommendations.diet.push('Focus on low glycemic index foods');
    specificRecommendations.diet.push('Increase fiber intake to 25-30g daily');
    specificRecommendations.diet.push('Consider intermittent fasting (consult doctor first)');
    specificRecommendations.exercise.push('Include HIIT training 2-3 times per week');
    specificRecommendations.exercise.push('Add resistance training to build muscle');
  }

  if (assessment.physicalSymptoms.hairGrowth !== 'none' || assessment.physicalSymptoms.acne !== 'none') {
    specificRecommendations.diet.push('Reduce dairy intake which may increase androgens');
    specificRecommendations.diet.push('Include anti-inflammatory foods like turmeric and ginger');
    specificRecommendations.lifestyle.push('Consider spearmint tea (2 cups daily) for androgen reduction');
  }

  if (assessment.mentalEmotional.stress === 'high' || assessment.mentalEmotional.anxiety !== 'none') {
    specificRecommendations.exercise.push('Practice yoga or meditation daily');
    specificRecommendations.exercise.push('Include gentle, stress-reducing activities');
    specificRecommendations.lifestyle.push('Prioritize 7-9 hours of quality sleep');
    specificRecommendations.lifestyle.push('Consider adaptogenic herbs like ashwagandha');
  }

  if (assessment.physicalSymptoms.weightGain !== 'none') {
    specificRecommendations.diet.push('Focus on protein at each meal (20-30g)');
    specificRecommendations.diet.push('Eat smaller, frequent meals to stabilize blood sugar');
    specificRecommendations.exercise.push('Combine cardio with strength training');
  }

  if (assessment.menstrualHealth.cycleRegularity !== 'regular') {
    specificRecommendations.diet.push('Include omega-3 rich foods like fatty fish');
    specificRecommendations.diet.push('Ensure adequate vitamin D intake');
    specificRecommendations.lifestyle.push('Track cycles and symptoms for patterns');
  }
  
  prediction.dispose();
  
  return {
    riskLevel,
    confidence,
    symptoms,
    specificRecommendations
  };
};