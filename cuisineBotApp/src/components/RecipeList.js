import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { allRecipes } from '../data/allRecipes.js';
import { getCurrentLanguage, translateRecipes } from '../translations/translationUtils.js';
import './RecipeList.css';

const RecipeList = ({ searchResults, filters }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      try {
        let filteredRecipes = searchResults && searchResults.length > 0 ? [...searchResults] : [...allRecipes];

        // Apply cuisine filter
        if (filters && filters.cuisines && filters.cuisines.length > 0) {
          filteredRecipes = filteredRecipes.filter(recipe =>
            filters.cuisines.includes(recipe.cuisine)
          );
        }
        // Apply diet filter
        if (filters && filters.diets && filters.diets.length > 0) {
          filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.dietaryOptions && filters.diets.every(diet =>
              recipe.dietaryOptions.includes(diet)
            )
          );
        }

        // Translate recipes to current language
        const currentLanguage = getCurrentLanguage();
        const translatedRecipes = translateRecipes(filteredRecipes, currentLanguage);
        setRecipes(translatedRecipes);
        setLoading(false);
      } catch (err) {
        setError('Failed to load recipes');
        setLoading(false);
      }
    }, 500);
  }, [searchResults, filters]);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setRecipes(prevRecipes => {
        const currentLanguage = getCurrentLanguage();
        return translateRecipes(prevRecipes, currentLanguage);
      });
    };
    document.addEventListener('languageChanged', handleLanguageChange);
    return () => {
      document.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  if (loading) {
    return (
      <div className="recipe-list">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="recipe-list">
        <div className="error">
          <p>😞 {error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="recipe-list">
        <div className="no-results">
          <h3>🍽️ No recipes found</h3>
          <p>Try adjusting your search criteria or filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      <div className="recipe-header">
        <h2>🍳 Discover Recipes</h2>
        <p>{recipes.length} recipe{recipes.length !== 1 ? 's' : ''} found</p>
      </div>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
