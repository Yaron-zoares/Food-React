import React, { useState } from 'react';
import '../styles/FilterPanel.css';
import { getAllCuisines } from '../data/allRecipes.js';

const cuisines = getAllCuisines();
const diets = ['Vegetarian', 'Vegan', 'Keto', 'Gluten-Free'];

function FilterPanel({ onFilter }) {
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([]);

  const toggleCuisine = (item) => {
    setSelectedCuisine((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const toggleDiet = (item) => {
    setSelectedDiet((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const clearFilters = () => {
    setSelectedCuisine([]);
    setSelectedDiet([]);
    if (onFilter) {
      onFilter({ cuisines: [], diets: [] });
    }
  };

  const handleFilterClick = () => {
    if (onFilter) {
      onFilter({ cuisines: selectedCuisine, diets: selectedDiet });
    }
  };

  return (
    <div className="filter-panel">
      <h2 className="panel-title">🍳 סינון מתכונים לפי טעמים</h2>

      <div className="filter-group">
        <h4>מטבח</h4>
        <div className="tag-container">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              className={`filter-tag ${selectedCuisine.includes(cuisine) ? 'selected' : ''}`}
              onClick={() => toggleCuisine(cuisine)}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>סוג תזונה</h4>
        <div className="tag-container">
          {diets.map((diet) => (
            <button
              key={diet}
              className={`filter-tag diet ${selectedDiet.includes(diet) ? 'selected' : ''}`}
              onClick={() => toggleDiet(diet)}
            >
              {diet}
            </button>
          ))}
        </div>
      </div>

      <div className="actions">
        <button className="clear-button" onClick={clearFilters}>🧹 נקה הכול</button>
        <button className="filter-button" onClick={handleFilterClick}>🔍 סנן מתכונים</button>
      </div>
    </div>
  );
}

export default FilterPanel; 