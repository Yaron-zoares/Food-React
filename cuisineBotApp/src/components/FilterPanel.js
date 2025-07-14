import React, { useState } from 'react';
import { getAllCuisines } from '../data/allRecipes.js';
import './FilterPanel.css';

const FilterPanel = ({ onFilterChange }) => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [cookingTime, setCookingTime] = useState('');

  const cuisineTypes = getAllCuisines();

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 
    'Low-Carb', 'Keto', 'Paleo', 'Halal', 'Kosher'
  ];

  const cookingTimeOptions = [
    { value: '15', label: '15 minutes or less' },
    { value: '30', label: '30 minutes or less' },
    { value: '45', label: '45 minutes or less' },
    { value: '60', label: '1 hour or less' },
    { value: '60+', label: 'More than 1 hour' }
  ];

  const handleCuisineChange = (cuisine) => {
    const updated = selectedCuisines.includes(cuisine)
      ? selectedCuisines.filter(c => c !== cuisine)
      : [...selectedCuisines, cuisine];
    setSelectedCuisines(updated);
    applyFilters(updated, selectedDietary, cookingTime);
  };

  const handleDietaryChange = (dietary) => {
    const updated = selectedDietary.includes(dietary)
      ? selectedDietary.filter(d => d !== dietary)
      : [...selectedDietary, dietary];
    setSelectedDietary(updated);
    applyFilters(selectedCuisines, updated, cookingTime);
  };

  const handleCookingTimeChange = (time) => {
    setCookingTime(time);
    applyFilters(selectedCuisines, selectedDietary, time);
  };

  const applyFilters = (cuisines, dietary, time) => {
    if (onFilterChange) {
      onFilterChange({
        cuisines,
        dietary,
        cookingTime: time
      });
    }
  };

  const clearFilters = () => {
    setSelectedCuisines([]);
    setSelectedDietary([]);
    setCookingTime('');
    if (onFilterChange) {
      onFilterChange({
        cuisines: [],
        dietary: [],
        cookingTime: ''
      });
    }
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>🔍 Filter Recipes</h3>
        <button onClick={clearFilters} className="clear-filters">
          Clear All
        </button>
      </div>
      
      <div className="filter-sections">
        <div className="filter-section">
          <h4>Cuisine Type</h4>
          <div className="filter-options">
            {cuisineTypes.map(cuisine => (
              <label key={cuisine} className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => handleCuisineChange(cuisine)}
                />
                <span>{cuisine}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h4>Dietary Preferences</h4>
          <div className="filter-options">
            {dietaryOptions.map(dietary => (
              <label key={dietary} className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedDietary.includes(dietary)}
                  onChange={() => handleDietaryChange(dietary)}
                />
                <span>{dietary}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h4>Cooking Time</h4>
          <select 
            value={cookingTime} 
            onChange={(e) => handleCookingTimeChange(e.target.value)}
            className="cooking-time-select"
          >
            <option value="">Any time</option>
            {cookingTimeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 