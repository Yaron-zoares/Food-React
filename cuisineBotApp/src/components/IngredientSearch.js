import React, { useState } from 'react';
import { allRecipes } from '../data/allRecipes.js';
import './IngredientSearch.css';

const IngredientSearch = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleIngredientChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Helper: normalize and split input to array (comma, space, or both)
  const parseIngredients = (input) => {
    return input
      .replace(/[,\s]+/g, ',') // replace spaces and commas with a single comma
      .split(',')
      .map(ing => ing.trim())
      .filter(ing => ing.length > 0);
  };

  const searchRecipes = (ingredients, searchTerm) => {
    let results = [...allRecipes];
    
    // Search by ingredients if provided
    if (ingredients && ingredients.length > 0) {
      results = results.filter(recipe => {
        // Support Hebrew: check both recipe.ingredients and recipe.translations?.hebrew?.ingredients
        const allRecipeIngredients = [
          ...(recipe.ingredients || []),
          ...((recipe.translations && recipe.translations.he && recipe.translations.he.ingredients) || [])
        ];
        return ingredients.every(ingredient =>
          allRecipeIngredients.some(recipeIngredient =>
            recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())
          )
        );
      });
    }
    
    // Search by recipe name or tags (if searchTerm is provided)
    if (searchTerm) {
      results = results.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return results;
  };

  const handleSearch = () => {
    const ingredientList = parseIngredients(ingredients);
    console.log('Searching with ingredients:', ingredientList);
    console.log('Search term:', searchTerm);
    
    const searchResults = searchRecipes(ingredientList, searchTerm.trim());
    console.log('Search results:', searchResults.length, 'recipes found');
    
    if (onSearch) {
      onSearch(searchResults);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="ingredient-search">
      <div className="search-container">
        <div className="search-section">
          <label htmlFor="ingredients">Ingredients (comma-separated):</label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={handleIngredientChange}
            onKeyPress={handleKeyPress}
            placeholder="e.g., chicken, rice, tomatoes / עוף, אורז, עגבנייה"
            className="ingredient-input"
          />
        </div>
        
        <div className="search-section">
          <label htmlFor="search">Search recipes:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search for recipes..."
            className="search-input"
          />
        </div>
        
        <button 
          onClick={handleSearch}
          className="search-button"
          disabled={!ingredients && !searchTerm}
        >
          Search Recipes
        </button>
      </div>
    </div>
  );
};

export default IngredientSearch;
