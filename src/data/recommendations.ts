import { Recipe, Exercise, Medication } from '../types';

export const recipes: Recipe[] = [
  // LOW RISK RECIPES (Prevention)
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    description: 'A colorful Mediterranean-inspired bowl with quinoa, fresh vegetables, and olive oil.',
    nutrition: { calories: 420, protein: 18, carbs: 45, fat: 22, fiber: 12 },
    ingredients: [
      '1 cup cooked quinoa',
      '1/2 cup cherry tomatoes',
      '1/2 cucumber, diced',
      '1/4 red onion, sliced',
      '2 tbsp olive oil',
      '1 tbsp lemon juice',
      'Fresh herbs (parsley, mint)'
    ],
    instructions: [
      'Cook quinoa according to package instructions',
      'Dice vegetables and prepare herbs',
      'Combine quinoa with vegetables in a bowl',
      'Whisk olive oil and lemon juice for dressing',
      'Drizzle dressing over bowl and garnish with herbs'
    ],
    prepTime: 15,
    cookTime: 20,
    difficulty: 'easy',
    pcosLevel: 'low',
    benefits: ['Reduces inflammation', 'Stabilizes blood sugar', 'Rich in fiber']
  },
  {
    id: '2',
    name: 'Green Goddess Smoothie',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    description: 'A nutrient-packed green smoothie with spinach, avocado, and protein powder.',
    nutrition: { calories: 280, protein: 20, carbs: 25, fat: 15, fiber: 10 },
    ingredients: [
      '2 cups fresh spinach',
      '1/2 avocado',
      '1 banana',
      '1 scoop vanilla protein powder',
      '1 cup unsweetened almond milk',
      '1 tbsp chia seeds'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend on high for 60 seconds until smooth',
      'Add ice if desired consistency',
      'Pour into glass and serve immediately'
    ],
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    pcosLevel: 'low',
    benefits: ['High in antioxidants', 'Supports hormone balance', 'Quick energy boost']
  },
  {
    id: '3',
    name: 'Herb-Crusted Salmon',
    image: 'https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg',
    description: 'Omega-3 rich salmon with a flavorful herb crust and roasted vegetables.',
    nutrition: { calories: 380, protein: 35, carbs: 15, fat: 20, fiber: 8 },
    ingredients: [
      '6 oz salmon fillet',
      '2 tbsp mixed herbs (dill, parsley)',
      '1 tbsp olive oil',
      '2 cups mixed vegetables',
      'Lemon wedges',
      'Salt and pepper'
    ],
    instructions: [
      'Preheat oven to 425°F',
      'Mix herbs with olive oil',
      'Coat salmon with herb mixture',
      'Roast salmon and vegetables for 15-18 minutes',
      'Serve with lemon wedges'
    ],
    prepTime: 10,
    cookTime: 18,
    difficulty: 'medium',
    pcosLevel: 'low',
    benefits: ['High in omega-3s', 'Supports heart health', 'Anti-inflammatory']
  },
  {
    id: '4',
    name: 'Chickpea Power Salad',
    image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg',
    description: 'Protein-rich chickpea salad with fresh vegetables and tahini dressing.',
    nutrition: { calories: 350, protein: 16, carbs: 40, fat: 18, fiber: 14 },
    ingredients: [
      '1 can chickpeas, drained',
      '2 cups mixed greens',
      '1/2 bell pepper, diced',
      '1/4 cup red cabbage',
      '2 tbsp tahini',
      '1 tbsp lemon juice',
      'Pumpkin seeds for garnish'
    ],
    instructions: [
      'Rinse and drain chickpeas',
      'Chop all vegetables',
      'Whisk tahini with lemon juice and water',
      'Combine chickpeas and vegetables',
      'Drizzle with dressing and garnish'
    ],
    prepTime: 15,
    cookTime: 0,
    difficulty: 'easy',
    pcosLevel: 'low',
    benefits: ['Plant-based protein', 'Fiber-rich', 'Hormone supporting']
  },

  // MEDIUM RISK RECIPES (Management)
  {
    id: '5',
    name: 'Anti-Inflammatory Turmeric Bowl',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    description: 'A therapeutic bowl with turmeric, ginger, and anti-inflammatory spices.',
    nutrition: { calories: 420, protein: 18, carbs: 45, fat: 22, fiber: 12 },
    ingredients: [
      '1 cup cooked quinoa',
      '1/2 cup roasted chickpeas',
      '1 cup spinach',
      '1/2 avocado',
      '1 tsp turmeric',
      '1/2 tsp ginger',
      '2 tbsp olive oil'
    ],
    instructions: [
      'Cook quinoa with turmeric',
      'Roast chickpeas with spices at 400°F for 20 minutes',
      'Massage spinach with lemon juice',
      'Combine all ingredients in bowl',
      'Drizzle with olive oil and serve'
    ],
    prepTime: 15,
    cookTime: 25,
    difficulty: 'easy',
    pcosLevel: 'medium',
    benefits: ['Reduces inflammation', 'Stabilizes blood sugar', 'Rich in fiber']
  },
  {
    id: '6',
    name: 'Hormone-Balancing Lentil Curry',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    description: 'Protein-rich lentil curry with metabolism-boosting spices.',
    nutrition: { calories: 390, protein: 22, carbs: 50, fat: 12, fiber: 18 },
    ingredients: [
      '1 cup red lentils',
      '1 can coconut milk',
      '2 tsp curry powder',
      '1 tsp cumin',
      '1 onion, diced',
      '2 cloves garlic',
      'Fresh cilantro'
    ],
    instructions: [
      'Sauté onion and garlic until fragrant',
      'Add spices and cook for 1 minute',
      'Add lentils and coconut milk',
      'Simmer for 20-25 minutes until tender',
      'Garnish with fresh cilantro'
    ],
    prepTime: 10,
    cookTime: 30,
    difficulty: 'medium',
    pcosLevel: 'medium',
    benefits: ['High protein', 'Metabolism boosting', 'Blood sugar friendly']
  },
  {
    id: '7',
    name: 'Insulin-Friendly Cauliflower Rice',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    description: 'Low-carb cauliflower rice with vegetables and lean protein.',
    nutrition: { calories: 320, protein: 28, carbs: 20, fat: 16, fiber: 8 },
    ingredients: [
      '1 head cauliflower, riced',
      '6 oz chicken breast',
      '1 bell pepper',
      '1/2 onion',
      '2 tbsp coconut oil',
      'Garlic and herbs'
    ],
    instructions: [
      'Rice cauliflower in food processor',
      'Cook chicken breast and slice',
      'Sauté vegetables in coconut oil',
      'Add cauliflower rice and cook 5 minutes',
      'Top with sliced chicken'
    ],
    prepTime: 15,
    cookTime: 20,
    difficulty: 'medium',
    pcosLevel: 'medium',
    benefits: ['Low carb', 'High protein', 'Insulin friendly']
  },
  {
    id: '8',
    name: 'Omega-3 Chia Pudding',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    description: 'Hormone-supporting chia pudding with berries and nuts.',
    nutrition: { calories: 280, protein: 12, carbs: 25, fat: 18, fiber: 15 },
    ingredients: [
      '3 tbsp chia seeds',
      '1 cup unsweetened almond milk',
      '1 tbsp maple syrup',
      '1/2 cup mixed berries',
      '2 tbsp chopped walnuts',
      'Vanilla extract'
    ],
    instructions: [
      'Mix chia seeds with almond milk',
      'Add maple syrup and vanilla',
      'Refrigerate for 4 hours or overnight',
      'Top with berries and nuts',
      'Serve chilled'
    ],
    prepTime: 10,
    cookTime: 0,
    difficulty: 'easy',
    pcosLevel: 'medium',
    benefits: ['Omega-3 rich', 'Hormone supporting', 'Sustained energy']
  },

  // HIGH RISK RECIPES (Therapeutic)
  {
    id: '9',
    name: 'Therapeutic Green Smoothie',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    description: 'Intensive healing smoothie with superfoods and adaptogens.',
    nutrition: { calories: 320, protein: 15, carbs: 35, fat: 18, fiber: 14 },
    ingredients: [
      '2 cups spinach',
      '1/2 cucumber',
      '1/2 green apple',
      '1 tbsp chia seeds',
      '1 tbsp almond butter',
      '1 tsp spirulina',
      'Unsweetened almond milk'
    ],
    instructions: [
      'Add all ingredients to blender',
      'Blend on high for 60 seconds',
      'Add ice if desired',
      'Pour into glass and enjoy immediately'
    ],
    prepTime: 5,
    cookTime: 0,
    difficulty: 'easy',
    pcosLevel: 'high',
    benefits: ['Detoxifying', 'High in antioxidants', 'Supports insulin sensitivity']
  },
  {
    id: '10',
    name: 'Healing Bone Broth Soup',
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg',
    description: 'Nutrient-dense bone broth with healing vegetables and herbs.',
    nutrition: { calories: 250, protein: 20, carbs: 15, fat: 12, fiber: 6 },
    ingredients: [
      '2 cups bone broth',
      '1/2 cup cooked chicken',
      '1 cup mixed vegetables',
      '1 tsp turmeric',
      'Fresh ginger',
      'Sea salt and herbs'
    ],
    instructions: [
      'Heat bone broth in pot',
      'Add vegetables and simmer 10 minutes',
      'Add cooked chicken and spices',
      'Simmer 5 more minutes',
      'Season and serve hot'
    ],
    prepTime: 10,
    cookTime: 20,
    difficulty: 'easy',
    pcosLevel: 'high',
    benefits: ['Gut healing', 'Anti-inflammatory', 'Nutrient dense']
  },
  {
    id: '11',
    name: 'Keto PCOS Power Bowl',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    description: 'Very low-carb bowl designed for insulin resistance management.',
    nutrition: { calories: 450, protein: 25, carbs: 12, fat: 35, fiber: 8 },
    ingredients: [
      '2 cups leafy greens',
      '1/2 avocado',
      '4 oz grilled salmon',
      '2 tbsp olive oil',
      '1 tbsp MCT oil',
      'Nuts and seeds',
      'Lemon juice'
    ],
    instructions: [
      'Grill salmon with herbs',
      'Prepare salad base with greens',
      'Add avocado and nuts',
      'Flake salmon on top',
      'Drizzle with oils and lemon'
    ],
    prepTime: 15,
    cookTime: 12,
    difficulty: 'medium',
    pcosLevel: 'high',
    benefits: ['Very low carb', 'High healthy fats', 'Insulin resistance friendly']
  },
  {
    id: '12',
    name: 'Adaptogenic Golden Milk',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    description: 'Therapeutic drink with adaptogens and anti-inflammatory spices.',
    nutrition: { calories: 180, protein: 8, carbs: 15, fat: 12, fiber: 4 },
    ingredients: [
      '1 cup coconut milk',
      '1 tsp turmeric',
      '1/2 tsp cinnamon',
      '1/4 tsp ginger',
      '1 tsp ashwagandha',
      '1 tsp honey',
      'Black pepper pinch'
    ],
    instructions: [
      'Heat coconut milk gently',
      'Whisk in all spices',
      'Simmer for 5 minutes',
      'Strain if desired',
      'Serve warm before bed'
    ],
    prepTime: 5,
    cookTime: 8,
    difficulty: 'easy',
    pcosLevel: 'high',
    benefits: ['Stress reducing', 'Hormone balancing', 'Sleep supporting']
  }
];

export const exercises: Exercise[] = [
  // LOW RISK EXERCISES (Prevention)
  {
    id: '1',
    name: 'Gentle Morning Yoga',
    videoUrl: 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
    description: 'A calming 20-minute yoga sequence perfect for hormone balance and stress reduction.',
    duration: 20,
    difficulty: 'beginner',
    equipment: ['Yoga mat'],
    targetAreas: ['Full body', 'Flexibility', 'Stress relief'],
    pcosLevel: 'low',
    benefits: ['Reduces cortisol', 'Improves flexibility', 'Enhances mood'],
    instructions: [
      'Start in child\'s pose for 1 minute',
      'Move through cat-cow stretches (5 rounds)',
      'Flow through gentle sun salutations (3 rounds)',
      'Hold warrior poses for 30 seconds each',
      'End with 5 minutes of savasana'
    ]
  },
  {
    id: '2',
    name: 'Brisk Walking Routine',
    videoUrl: 'https://www.youtube.com/watch?v=gC_L9qAHVJ8',
    description: 'Moderate cardio walking routine to boost metabolism and improve insulin sensitivity.',
    duration: 30,
    difficulty: 'beginner',
    equipment: ['Comfortable shoes'],
    targetAreas: ['Cardiovascular', 'Lower body'],
    pcosLevel: 'low',
    benefits: ['Improves circulation', 'Boosts mood', 'Easy on joints'],
    instructions: [
      'Warm up with slow walking for 5 minutes',
      'Increase pace to brisk walk',
      'Maintain steady rhythm for 20 minutes',
      'Include arm swings for upper body',
      'Cool down with gentle stretching'
    ]
  },
  {
    id: '3',
    name: 'Pilates Core Strengthening',
    videoUrl: 'https://www.youtube.com/watch?v=XeXz8fIZDCE',
    description: 'Gentle Pilates routine focused on core strength and posture improvement.',
    duration: 25,
    difficulty: 'beginner',
    equipment: ['Mat', 'Small pillow'],
    targetAreas: ['Core', 'Posture', 'Stability'],
    pcosLevel: 'low',
    benefits: ['Strengthens core', 'Improves posture', 'Low impact'],
    instructions: [
      'Begin with breathing exercises',
      'Perform pelvic tilts and bridges',
      'Add modified planks and side planks',
      'Include leg circles and stretches',
      'End with relaxation poses'
    ]
  },
  {
    id: '4',
    name: 'Swimming for Beginners',
    videoUrl: 'https://www.youtube.com/watch?v=F7gHoLVzJz4',
    description: 'Low-impact swimming routine perfect for joint-friendly cardio.',
    duration: 30,
    difficulty: 'beginner',
    equipment: ['Pool access', 'Swimwear'],
    targetAreas: ['Full body', 'Cardiovascular'],
    pcosLevel: 'low',
    benefits: ['Full body workout', 'Joint friendly', 'Stress relief'],
    instructions: [
      'Warm up with easy swimming for 5 minutes',
      'Alternate between different strokes',
      'Include water walking exercises',
      'Practice breathing techniques',
      'Cool down with gentle floating'
    ]
  },

  // MEDIUM RISK EXERCISES (Management)
  {
    id: '5',
    name: 'HIIT Cardio Workout',
    videoUrl: 'https://www.youtube.com/watch?v=UBMk30rjy0o',
    description: 'High-intensity interval training to improve insulin sensitivity and burn calories.',
    duration: 25,
    difficulty: 'intermediate',
    equipment: ['None'],
    targetAreas: ['Cardiovascular', 'Full body', 'Metabolism'],
    pcosLevel: 'medium',
    benefits: ['Improves insulin sensitivity', 'Burns calories efficiently', 'Boosts metabolism'],
    instructions: [
      'Warm up with light movement for 5 minutes',
      'Perform 30 seconds high intensity, 30 seconds rest',
      'Include jumping jacks, burpees, mountain climbers',
      'Complete 8 rounds of intervals',
      'Cool down with gentle stretching'
    ]
  },
  {
    id: '6',
    name: 'Strength Training Circuit',
    videoUrl: 'https://www.youtube.com/watch?v=ml6cT4AZdqI',
    description: 'Resistance training circuit to build lean muscle and improve metabolism.',
    duration: 35,
    difficulty: 'intermediate',
    equipment: ['Dumbbells', 'Resistance bands'],
    targetAreas: ['Full body', 'Muscle building'],
    pcosLevel: 'medium',
    benefits: ['Builds lean muscle', 'Increases metabolism', 'Improves bone density'],
    instructions: [
      'Warm up with dynamic movements',
      'Perform squats, lunges, and deadlifts',
      'Add upper body exercises with weights',
      'Include core strengthening moves',
      'Cool down with static stretching'
    ]
  },
  {
    id: '7',
    name: 'Metabolic Boost Workout',
    videoUrl: 'https://www.youtube.com/watch?v=2MZWl5_sSdE',
    description: 'High-energy workout designed to kickstart metabolism and hormone balance.',
    duration: 30,
    difficulty: 'intermediate',
    equipment: ['Kettlebell', 'Mat'],
    targetAreas: ['Full body', 'Metabolism'],
    pcosLevel: 'medium',
    benefits: ['Boosts metabolism', 'Improves insulin function', 'Increases energy'],
    instructions: [
      'Start with dynamic warm-up',
      'Perform kettlebell swings and squats',
      'Add plyometric movements',
      'Include core and stability work',
      'End with recovery stretches'
    ]
  },
  {
    id: '8',
    name: 'Yoga Flow for Hormones',
    videoUrl: 'https://www.youtube.com/watch?v=hJbRpHZr_d0',
    description: 'Specific yoga sequence designed to support hormonal balance.',
    duration: 40,
    difficulty: 'intermediate',
    equipment: ['Yoga mat', 'Blocks'],
    targetAreas: ['Hormonal balance', 'Stress relief'],
    pcosLevel: 'medium',
    benefits: ['Balances hormones', 'Reduces stress', 'Improves flexibility'],
    instructions: [
      'Begin with pranayama breathing',
      'Flow through hormone-balancing poses',
      'Include twists and hip openers',
      'Practice inversions if comfortable',
      'End with extended meditation'
    ]
  },

  // HIGH RISK EXERCISES (Therapeutic)
  {
    id: '9',
    name: 'Restorative Yoga Therapy',
    videoUrl: 'https://www.youtube.com/watch?v=BiWnaZ2nph0',
    description: 'Gentle, therapeutic yoga focused on stress reduction and hormone regulation.',
    duration: 45,
    difficulty: 'beginner',
    equipment: ['Yoga mat', 'Bolsters', 'Blankets'],
    targetAreas: ['Stress relief', 'Hormone balance', 'Recovery'],
    pcosLevel: 'high',
    benefits: ['Reduces stress hormones', 'Promotes healing', 'Improves sleep'],
    instructions: [
      'Begin with deep breathing exercises',
      'Hold restorative poses for 5-10 minutes each',
      'Focus on supported backbends and twists',
      'Include legs-up-the-wall pose',
      'End with 15 minutes of yoga nidra'
    ]
  },
  {
    id: '10',
    name: 'Gentle Water Therapy',
    videoUrl: 'https://www.youtube.com/watch?v=F7gHoLVzJz4',
    description: 'Therapeutic water exercises for those with severe symptoms or joint issues.',
    duration: 30,
    difficulty: 'beginner',
    equipment: ['Pool access'],
    targetAreas: ['Joint mobility', 'Gentle cardio'],
    pcosLevel: 'high',
    benefits: ['Joint friendly', 'Reduces inflammation', 'Gentle movement'],
    instructions: [
      'Start with gentle water walking',
      'Perform arm and leg movements in water',
      'Practice deep breathing exercises',
      'Include gentle stretching in water',
      'End with relaxation floating'
    ]
  },
  {
    id: '11',
    name: 'Meditation and Breathwork',
    videoUrl: 'https://www.youtube.com/watch?v=ZToicYcHIOU',
    description: 'Stress-reduction focused session with meditation and breathing techniques.',
    duration: 20,
    difficulty: 'beginner',
    equipment: ['Comfortable seat', 'Quiet space'],
    targetAreas: ['Stress reduction', 'Mental health'],
    pcosLevel: 'high',
    benefits: ['Reduces cortisol', 'Improves mental health', 'Hormone regulation'],
    instructions: [
      'Find comfortable seated position',
      'Practice 4-7-8 breathing technique',
      'Follow guided meditation',
      'Include body scan relaxation',
      'End with positive affirmations'
    ]
  },
  {
    id: '12',
    name: 'Chair-Based Gentle Movement',
    videoUrl: 'https://www.youtube.com/watch?v=3pLkz4bE6gU',
    description: 'Accessible exercises that can be done from a chair for those with mobility limitations.',
    duration: 25,
    difficulty: 'beginner',
    equipment: ['Sturdy chair'],
    targetAreas: ['Upper body', 'Circulation'],
    pcosLevel: 'high',
    benefits: ['Accessible movement', 'Improves circulation', 'Gentle strengthening'],
    instructions: [
      'Sit tall with feet flat on floor',
      'Perform arm circles and shoulder rolls',
      'Add seated marching and leg extensions',
      'Include gentle twists and stretches',
      'End with relaxation breathing'
    ]
  }
];

export const medications: Medication[] = [
  // LOW RISK MEDICATIONS (Prevention)
  {
    id: '1',
    name: 'Inositol Supplement',
    type: 'supplement',
    dosage: '2-4g daily, divided into two doses with meals',
    description: 'Natural supplement that helps improve insulin sensitivity and menstrual regularity.',
    sideEffects: ['Mild nausea (rare)', 'Diarrhea (uncommon)', 'Dizziness (rare)'],
    interactions: ['May enhance effects of diabetes medications'],
    pcosLevel: 'low',
    disclaimer: 'Consult healthcare provider before starting any supplement regimen.'
  },
  {
    id: '2',
    name: 'Omega-3 Fish Oil',
    type: 'supplement',
    dosage: '1-2g daily with meals',
    description: 'Essential fatty acids that support hormone production and reduce inflammation.',
    sideEffects: ['Fishy aftertaste', 'Mild stomach upset', 'Blood thinning effects'],
    interactions: ['Blood thinning medications', 'High doses with anticoagulants'],
    pcosLevel: 'low',
    disclaimer: 'Choose high-quality, mercury-free supplements. Consult doctor if on blood thinners.'
  },
  {
    id: '3',
    name: 'Vitamin D3',
    type: 'supplement',
    dosage: '1000-4000 IU daily, preferably with fat',
    description: 'Essential vitamin that supports hormone regulation and insulin sensitivity.',
    sideEffects: ['Rare at recommended doses', 'Kidney stones (high doses)', 'Hypercalcemia (excessive doses)'],
    interactions: ['Thiazide diuretics', 'Calcium supplements'],
    pcosLevel: 'low',
    disclaimer: 'Blood testing recommended to determine optimal dosage.'
  },
  {
    id: '4',
    name: 'Magnesium Glycinate',
    type: 'supplement',
    dosage: '200-400mg daily, preferably evening',
    description: 'Essential mineral that supports insulin function and reduces inflammation.',
    sideEffects: ['Diarrhea (high doses)', 'Stomach upset', 'Drowsiness'],
    interactions: ['Antibiotics', 'Bisphosphonates', 'Muscle relaxants'],
    pcosLevel: 'low',
    disclaimer: 'Start with lower dose and increase gradually. Take 2 hours apart from medications.'
  },

  // MEDIUM RISK MEDICATIONS (Management)
  {
    id: '5',
    name: 'Metformin',
    type: 'prescription',
    dosage: '500-1000mg twice daily with meals',
    description: 'First-line medication that improves insulin sensitivity and may help with weight management.',
    sideEffects: ['Nausea', 'Diarrhea', 'Stomach upset', 'Metallic taste', 'Vitamin B12 deficiency (long-term)'],
    interactions: ['Alcohol', 'Contrast dyes', 'Other diabetes medications', 'Cimetidine'],
    pcosLevel: 'medium',
    disclaimer: 'Prescription required. Regular monitoring of kidney function and B12 levels needed.'
  },
  {
    id: '6',
    name: 'N-Acetylcysteine (NAC)',
    type: 'supplement',
    dosage: '600mg twice daily on empty stomach',
    description: 'Antioxidant supplement that may improve ovulation and insulin sensitivity.',
    sideEffects: ['Nausea', 'Vomiting', 'Diarrhea', 'Drowsiness'],
    interactions: ['Nitroglycerin', 'Blood thinning medications'],
    pcosLevel: 'medium',
    disclaimer: 'May interact with certain medications. Consult healthcare provider.'
  },
  {
    id: '7',
    name: 'Berberine',
    type: 'supplement',
    dosage: '500mg three times daily with meals',
    description: 'Plant compound that helps improve insulin sensitivity and metabolic function.',
    sideEffects: ['Stomach upset', 'Diarrhea', 'Constipation', 'Cramping'],
    interactions: ['Diabetes medications', 'Blood pressure medications', 'Cyclosporine'],
    pcosLevel: 'medium',
    disclaimer: 'Can significantly lower blood sugar. Monitor closely if diabetic.'
  },
  {
    id: '8',
    name: 'Chromium Picolinate',
    type: 'supplement',
    dosage: '200-400mcg daily with meals',
    description: 'Trace mineral that enhances insulin action and glucose metabolism.',
    sideEffects: ['Stomach irritation', 'Headache', 'Sleep disturbances'],
    interactions: ['Diabetes medications', 'Levothyroxine'],
    pcosLevel: 'medium',
    disclaimer: 'May enhance insulin effects. Monitor blood sugar if diabetic.'
  },

  // HIGH RISK MEDICATIONS (Therapeutic)
  {
    id: '9',
    name: 'Spironolactone',
    type: 'prescription',
    dosage: '50-200mg daily as prescribed',
    description: 'Anti-androgen medication that helps with excess hair growth, acne, and male-pattern baldness.',
    sideEffects: ['Irregular periods', 'Breast tenderness', 'Dizziness', 'Increased urination', 'Hyperkalemia'],
    interactions: ['ACE inhibitors', 'Potassium supplements', 'NSAIDs', 'Lithium'],
    pcosLevel: 'high',
    disclaimer: 'Prescription required. Regular blood tests needed to monitor potassium and kidney function.'
  },
  {
    id: '10',
    name: 'Letrozole',
    type: 'prescription',
    dosage: '2.5-7.5mg daily for 5 days (cycle days 3-7)',
    description: 'Ovulation induction medication for women trying to conceive with PCOS.',
    sideEffects: ['Hot flashes', 'Headache', 'Fatigue', 'Dizziness', 'Mood changes'],
    interactions: ['Estrogen-containing medications', 'Tamoxifen'],
    pcosLevel: 'high',
    disclaimer: 'Prescription required. Used under fertility specialist supervision with monitoring.'
  },
  {
    id: '11',
    name: 'Clomiphene Citrate',
    type: 'prescription',
    dosage: '50-150mg daily for 5 days (cycle days 5-9)',
    description: 'Fertility medication that stimulates ovulation in women with PCOS.',
    sideEffects: ['Hot flashes', 'Mood swings', 'Breast tenderness', 'Visual disturbances', 'Multiple pregnancies risk'],
    interactions: ['Limited drug interactions', 'Avoid with liver disease'],
    pcosLevel: 'high',
    disclaimer: 'Prescription required. Requires monitoring with ultrasounds and blood tests.'
  },
  {
    id: '12',
    name: 'Pioglitazone',
    type: 'prescription',
    dosage: '15-45mg daily with or without food',
    description: 'Insulin sensitizer that may help with metabolic aspects of PCOS.',
    sideEffects: ['Weight gain', 'Fluid retention', 'Upper respiratory infection', 'Headache'],
    interactions: ['Insulin', 'Other diabetes medications', 'Gemfibrozil'],
    pcosLevel: 'high',
    disclaimer: 'Prescription required. Regular liver function monitoring needed.'
  }
];

// Weekly Diet Plans
export const weeklyDietPlans = {
  vegetarian: {
    low: {
      monday: {
        breakfast: 'Green Goddess Smoothie with chia seeds',
        lunch: 'Mediterranean Quinoa Bowl with extra vegetables',
        dinner: 'Chickpea Power Salad with tahini dressing',
        snacks: ['Apple with almond butter', 'Herbal tea with nuts']
      },
      tuesday: {
        breakfast: 'Overnight oats with berries and walnuts',
        lunch: 'Lentil soup with whole grain bread',
        dinner: 'Quinoa stuffed bell peppers',
        snacks: ['Greek yogurt with seeds', 'Vegetable sticks with hummus']
      },
      wednesday: {
        breakfast: 'Avocado toast on whole grain bread',
        lunch: 'Buddha bowl with quinoa and roasted vegetables',
        dinner: 'Black bean and sweet potato curry',
        snacks: ['Mixed nuts and seeds', 'Green tea']
      },
      thursday: {
        breakfast: 'Chia pudding with fresh fruits',
        lunch: 'Spinach and chickpea salad',
        dinner: 'Vegetable stir-fry with brown rice',
        snacks: ['Smoothie bowl', 'Herbal tea']
      },
      friday: {
        breakfast: 'Green smoothie with protein powder',
        lunch: 'Quinoa tabbouleh with vegetables',
        dinner: 'Lentil dal with cauliflower rice',
        snacks: ['Trail mix', 'Coconut water']
      },
      saturday: {
        breakfast: 'Vegetable omelet with herbs',
        lunch: 'Mediterranean wrap with hummus',
        dinner: 'Stuffed zucchini with quinoa',
        snacks: ['Fruit salad', 'Nuts']
      },
      sunday: {
        breakfast: 'Quinoa breakfast bowl with fruits',
        lunch: 'Roasted vegetable and grain bowl',
        dinner: 'Chickpea curry with vegetables',
        snacks: ['Smoothie', 'Seeds and nuts']
      }
    },
    medium: {
      monday: {
        breakfast: 'Anti-Inflammatory Turmeric Smoothie',
        lunch: 'Hormone-Balancing Lentil Curry with cauliflower rice',
        dinner: 'Quinoa bowl with roasted vegetables and tahini',
        snacks: ['Omega-3 Chia Pudding', 'Green tea']
      },
      tuesday: {
        breakfast: 'Low-carb vegetable scramble with avocado',
        lunch: 'Chickpea and vegetable curry',
        dinner: 'Cauliflower rice stir-fry with tofu',
        snacks: ['Nuts and seeds mix', 'Herbal tea']
      },
      wednesday: {
        breakfast: 'Protein-rich chia pudding',
        lunch: 'Lentil and vegetable soup',
        dinner: 'Zucchini noodles with pesto and chickpeas',
        snacks: ['Avocado with lime', 'Anti-inflammatory tea']
      },
      thursday: {
        breakfast: 'Green smoothie with protein powder',
        lunch: 'Quinoa salad with roasted vegetables',
        dinner: 'Black bean and vegetable curry',
        snacks: ['Raw vegetables with hummus', 'Golden milk']
      },
      friday: {
        breakfast: 'Turmeric scrambled tofu',
        lunch: 'Mediterranean quinoa bowl',
        dinner: 'Lentil dal with steamed vegetables',
        snacks: ['Mixed nuts', 'Ginger tea']
      },
      saturday: {
        breakfast: 'Chia seed pudding with berries',
        lunch: 'Vegetable and legume soup',
        dinner: 'Stuffed bell peppers with quinoa',
        snacks: ['Smoothie bowl', 'Herbal tea']
      },
      sunday: {
        breakfast: 'Anti-inflammatory smoothie bowl',
        lunch: 'Chickpea salad with vegetables',
        dinner: 'Vegetable curry with cauliflower rice',
        snacks: ['Trail mix', 'Turmeric latte']
      }
    },
    high: {
      monday: {
        breakfast: 'Therapeutic Green Smoothie with adaptogens',
        lunch: 'Healing vegetable broth with quinoa',
        dinner: 'Keto vegetarian bowl with avocado and nuts',
        snacks: ['Adaptogenic Golden Milk', 'Raw vegetables']
      },
      tuesday: {
        breakfast: 'Low-carb chia pudding with MCT oil',
        lunch: 'Anti-inflammatory lentil soup',
        dinner: 'Cauliflower rice with hemp seeds and vegetables',
        snacks: ['Bone broth (vegetable version)', 'Herbal tea']
      },
      wednesday: {
        breakfast: 'Keto smoothie with coconut oil',
        lunch: 'Healing miso soup with vegetables',
        dinner: 'Zucchini noodles with avocado pesto',
        snacks: ['MCT oil in tea', 'Raw nuts']
      },
      thursday: {
        breakfast: 'Therapeutic turmeric latte',
        lunch: 'Anti-inflammatory vegetable curry',
        dinner: 'Keto Buddha bowl with seeds',
        snacks: ['Golden milk', 'Cucumber with sea salt']
      },
      friday: {
        breakfast: 'Healing green juice with ginger',
        lunch: 'Quinoa soup with healing herbs',
        dinner: 'Low-carb vegetable stir-fry',
        snacks: ['Adaptogenic tea', 'Avocado with lime']
      },
      saturday: {
        breakfast: 'Anti-inflammatory smoothie',
        lunch: 'Healing bone broth (vegetable)',
        dinner: 'Keto vegetable curry',
        snacks: ['Herbal tea blend', 'Raw vegetables']
      },
      sunday: {
        breakfast: 'Therapeutic chia pudding',
        lunch: 'Anti-inflammatory soup',
        dinner: 'Healing vegetable bowl',
        snacks: ['Golden milk', 'Meditation tea']
      }
    }
  },
  nonVegetarian: {
    low: {
      monday: {
        breakfast: 'Herb-Crusted Salmon with vegetables',
        lunch: 'Grilled chicken salad with quinoa',
        dinner: 'Baked fish with roasted vegetables',
        snacks: ['Greek yogurt with berries', 'Green tea']
      },
      tuesday: {
        breakfast: 'Vegetable omelet with herbs',
        lunch: 'Turkey and avocado wrap',
        dinner: 'Grilled salmon with sweet potato',
        snacks: ['Nuts and seeds', 'Herbal tea']
      },
      wednesday: {
        breakfast: 'Protein smoothie with berries',
        lunch: 'Chicken and quinoa bowl',
        dinner: 'Baked cod with vegetables',
        snacks: ['Hard-boiled eggs', 'Green tea']
      },
      thursday: {
        breakfast: 'Scrambled eggs with spinach',
        lunch: 'Tuna salad with mixed greens',
        dinner: 'Grilled chicken with quinoa',
        snacks: ['Greek yogurt', 'Nuts']
      },
      friday: {
        breakfast: 'Salmon and avocado toast',
        lunch: 'Chicken soup with vegetables',
        dinner: 'Baked fish with brown rice',
        snacks: ['Protein smoothie', 'Herbal tea']
      },
      saturday: {
        breakfast: 'Protein-rich omelet',
        lunch: 'Grilled chicken salad',
        dinner: 'Salmon with roasted vegetables',
        snacks: ['Greek yogurt with nuts', 'Green tea']
      },
      sunday: {
        breakfast: 'Eggs with vegetables',
        lunch: 'Fish and quinoa bowl',
        dinner: 'Chicken stir-fry with vegetables',
        snacks: ['Protein shake', 'Herbal tea']
      }
    },
    medium: {
      monday: {
        breakfast: 'Hormone-Balancing Salmon with turmeric',
        lunch: 'Insulin-Friendly Chicken with cauliflower rice',
        dinner: 'Anti-inflammatory fish curry',
        snacks: ['Omega-3 rich nuts', 'Green tea']
      },
      tuesday: {
        breakfast: 'Protein-rich scrambled eggs with vegetables',
        lunch: 'Grilled chicken with quinoa and vegetables',
        dinner: 'Baked salmon with anti-inflammatory spices',
        snacks: ['Greek yogurt with chia seeds', 'Turmeric tea']
      },
      wednesday: {
        breakfast: 'Anti-inflammatory fish with vegetables',
        lunch: 'Chicken and vegetable soup',
        dinner: 'Grilled fish with cauliflower rice',
        snacks: ['Hard-boiled eggs', 'Ginger tea']
      },
      thursday: {
        breakfast: 'Omega-3 rich salmon bowl',
        lunch: 'Turkey and vegetable curry',
        dinner: 'Baked chicken with roasted vegetables',
        snacks: ['Protein smoothie', 'Anti-inflammatory tea']
      },
      friday: {
        breakfast: 'Hormone-supporting egg dish',
        lunch: 'Fish and quinoa salad',
        dinner: 'Chicken stir-fry with ginger',
        snacks: ['Greek yogurt with berries', 'Herbal tea']
      },
      saturday: {
        breakfast: 'Anti-inflammatory salmon',
        lunch: 'Chicken and vegetable bowl',
        dinner: 'Grilled fish with herbs',
        snacks: ['Nuts and seeds', 'Golden milk']
      },
      sunday: {
        breakfast: 'Protein-rich omelet with turmeric',
        lunch: 'Fish curry with vegetables',
        dinner: 'Chicken with anti-inflammatory spices',
        snacks: ['Protein shake', 'Ginger tea']
      }
    },
    high: {
      monday: {
        breakfast: 'Therapeutic Salmon with healing herbs',
        lunch: 'Healing Bone Broth with chicken',
        dinner: 'Keto fish bowl with MCT oil',
        snacks: ['Bone broth', 'Adaptogenic tea']
      },
      tuesday: {
        breakfast: 'Anti-inflammatory eggs with turmeric',
        lunch: 'Healing chicken soup with ginger',
        dinner: 'Therapeutic fish curry',
        snacks: ['Collagen-rich broth', 'Golden milk']
      },
      wednesday: {
        breakfast: 'Keto salmon with avocado',
        lunch: 'Bone broth with vegetables and chicken',
        dinner: 'Healing fish stew',
        snacks: ['Bone broth', 'Herbal tea blend']
      },
      thursday: {
        breakfast: 'Therapeutic omelet with herbs',
        lunch: 'Anti-inflammatory chicken curry',
        dinner: 'Keto fish with healing spices',
        snacks: ['Collagen supplement', 'Adaptogenic tea']
      },
      friday: {
        breakfast: 'Healing salmon bowl',
        lunch: 'Therapeutic bone broth soup',
        dinner: 'Anti-inflammatory chicken',
        snacks: ['Bone broth', 'Turmeric latte']
      },
      saturday: {
        breakfast: 'Keto eggs with MCT oil',
        lunch: 'Healing fish soup',
        dinner: 'Therapeutic chicken curry',
        snacks: ['Collagen-rich broth', 'Golden milk']
      },
      sunday: {
        breakfast: 'Anti-inflammatory fish',
        lunch: 'Healing bone broth with chicken',
        dinner: 'Therapeutic salmon with adaptogens',
        snacks: ['Bone broth', 'Meditation tea']
      }
    }
  }
};