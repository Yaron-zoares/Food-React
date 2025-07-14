// translationUtils.js

import { defaultLanguage } from '../config.is/config.js';

// Translation mappings for common recipe terms
const translations = {
  en: {
    // Difficulty levels
    "Easy": "Easy",
    "Medium": "Medium", 
    "Hard": "Hard",
    
    // Time units
    "minutes": "minutes",
    "hours": "hours",
    "servings": "servings",
    
    // Common ingredients
    "salt": "salt",
    "pepper": "pepper",
    "olive oil": "olive oil",
    "garlic": "garlic",
    "onion": "onion",
    "tomato": "tomato",
    "cheese": "cheese",
    "bread": "bread",
    "pasta": "pasta",
    "rice": "rice",
    "chicken": "chicken",
    "beef": "beef",
    "fish": "fish",
    "vegetables": "vegetables",
    
    // Common cooking terms
    "preheat": "preheat",
    "bake": "bake",
    "cook": "cook",
    "fry": "fry",
    "boil": "boil",
    "simmer": "simmer",
    "mix": "mix",
    "stir": "stir",
    "serve": "serve"
  },
  he: {
    // Difficulty levels
    "Easy": "קל",
    "Medium": "בינוני",
    "Hard": "קשה",
    
    // Time units
    "minutes": "דקות",
    "hours": "שעות", 
    "servings": "מנות",
    
    // Common ingredients
    "salt": "מלח",
    "pepper": "פלפל",
    "olive oil": "שמן זית",
    "garlic": "שום",
    "onion": "בצל",
    "tomato": "עגבנייה",
    "cheese": "גבינה",
    "bread": "לחם",
    "pasta": "פסטה",
    "rice": "אורז",
    "chicken": "עוף",
    "beef": "בקר",
    "fish": "דג",
    "vegetables": "ירקות",
    
    // Common cooking terms
    "preheat": "מחממים",
    "bake": "אופים",
    "cook": "מבשלים",
    "fry": "מטגנים",
    "boil": "מרתיחים",
    "simmer": "מבשלים על אש נמוכה",
    "mix": "מערבבים",
    "stir": "מערבבים",
    "serve": "מגישים"
  }
};

// Function to translate a recipe to the specified language
export const translateRecipe = (recipe, targetLanguage = defaultLanguage) => {
  if (targetLanguage === defaultLanguage) {
    return recipe;
  }

  const translatedRecipe = { ...recipe };
  
  // Translate recipe name
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.name = recipe.translations[targetLanguage].name || recipe.name;
  }
  
  // Translate cuisine
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.cuisine = recipe.translations[targetLanguage].cuisine || recipe.cuisine;
  }
  
  // Translate dish type
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.dishType = recipe.translations[targetLanguage].dishType || recipe.dishType;
  }
  
  // Translate dietary options
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.dietaryOptions = recipe.translations[targetLanguage].dietaryOptions || recipe.dietaryOptions;
  }
  
  // Translate ingredients
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.ingredients = recipe.translations[targetLanguage].ingredients || recipe.ingredients;
  }
  
  // Translate instructions
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.instructions = recipe.translations[targetLanguage].instructions || recipe.instructions;
  }
  
  // Translate tags
  if (recipe.translations && recipe.translations[targetLanguage]) {
    translatedRecipe.tags = recipe.translations[targetLanguage].tags || recipe.tags;
  }
  
  return translatedRecipe;
};

// Function to translate a collection of recipes
export const translateRecipes = (recipes, targetLanguage = defaultLanguage) => {
  if (targetLanguage === defaultLanguage) {
    return recipes;
  }
  
  return recipes.map(recipe => translateRecipe(recipe, targetLanguage));
};

// Function to get translated text for common terms
export const getTranslatedText = (text, targetLanguage = defaultLanguage) => {
  if (targetLanguage === defaultLanguage) {
    return text;
  }
  
  return translations[targetLanguage][text] || text;
};

// Function to create a bilingual recipe object
export const createBilingualRecipe = (englishRecipe, hebrewTranslations) => {
  return {
    ...englishRecipe,
    translations: {
      en: {
        name: englishRecipe.name,
        cuisine: englishRecipe.cuisine,
        dishType: englishRecipe.dishType,
        dietaryOptions: englishRecipe.dietaryOptions,
        ingredients: englishRecipe.ingredients,
        instructions: englishRecipe.instructions,
        tags: englishRecipe.tags
      },
      he: hebrewTranslations
    }
  };
};

// Function to get current language from localStorage or default
export const getCurrentLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('preferredLanguage') || defaultLanguage;
  }
  return defaultLanguage;
};

// Function to set current language
export const setCurrentLanguage = (language) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferredLanguage', language);
  }
}; 