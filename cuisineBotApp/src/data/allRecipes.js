// allRecipes.js

import { italianRecipes } from './italianRecipes.js';
import { middleEasternRecipes } from './middleEasternRecipes.js';
import { spanishRecipes } from './spanishRecipes.js';
import { frenchRecipes } from './frenchRecipes.js';
import { latinRecipes } from './latinRecipes.js';
import { turkishRecipes } from './turkishRecipes.js';
import { translateRecipes, getCurrentLanguage } from '../translations/translationUtils.js';

// Combine all recipes into one array
export const allRecipes = [
  ...italianRecipes,
  ...middleEasternRecipes,
  ...spanishRecipes,
  ...frenchRecipes,
  ...latinRecipes,
  ...turkishRecipes
].map(recipe => {
  // Normalize cuisine names for consistency
  const normalizedRecipe = { ...recipe };
  
  // Middle Eastern variations
  if (['ישראלי', 'ערבי', 'לבנוני'].includes(recipe.cuisine)) {
    normalizedRecipe.cuisine = 'Middle Eastern';
  }
  
  // Latin American variations
  if (recipe.cuisine === 'אמריקה לטינית') {
    normalizedRecipe.cuisine = 'Latin American';
  }
  
  // Italian variations
  if (recipe.cuisine === 'איטלקי') {
    normalizedRecipe.cuisine = 'Italian';
  }
  
  // French variations
  if (recipe.cuisine === 'צרפתי') {
    normalizedRecipe.cuisine = 'French';
  }
  
  // Spanish variations
  if (recipe.cuisine === 'ספרדי') {
    normalizedRecipe.cuisine = 'Spanish';
  }
  
  // Turkish variations
  if (recipe.cuisine === 'טורקי') {
    normalizedRecipe.cuisine = 'Turkish';
  }
  
  return normalizedRecipe;
});

// Function to get recipes in the current language
export const getRecipesInCurrentLanguage = () => {
  const currentLanguage = getCurrentLanguage();
  return translateRecipes(allRecipes, currentLanguage);
};

// Helper functions for filtering recipes
export const getRecipesByCuisine = (cuisine) => {
  return allRecipes.filter(recipe => recipe.cuisine === cuisine);
};

export const getRecipesByDishType = (dishType) => {
  return allRecipes.filter(recipe => recipe.dishType === dishType);
};

export const getRecipesByDietaryOption = (dietaryOption) => {
  return allRecipes.filter(recipe => 
    recipe.dietaryOptions && recipe.dietaryOptions.includes(dietaryOption)
  );
};

export const getRecipesByDifficulty = (difficulty) => {
  return allRecipes.filter(recipe => recipe.difficulty === difficulty);
};

export const searchRecipes = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return allRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(term) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(term)) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
  );
};

// Get unique values for filters
export const getAllCuisines = () => {
  return [...new Set(allRecipes.map(recipe => recipe.cuisine))];
};

export const getAllDishTypes = () => {
  return [...new Set(allRecipes.map(recipe => recipe.dishType))];
};

export const getAllDietaryOptions = () => {
  const allOptions = allRecipes.flatMap(recipe => recipe.dietaryOptions || []);
  return [...new Set(allOptions)];
};

export const getAllDifficulties = () => {
  return [...new Set(allRecipes.map(recipe => recipe.difficulty))];
};

export const getAllTags = () => {
  const allTags = allRecipes.flatMap(recipe => recipe.tags || []);
  return [...new Set(allTags)];
}; 