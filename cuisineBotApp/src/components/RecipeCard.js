import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#28a745';
      case 'medium': return '#ffc107';
      case 'hard': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div className="recipe-card" onClick={handleCardClick}>
      <div className="recipe-image">
        {/* Temporarily hidden images - keeping code for future use */}
        {/* <img 
          src={recipe.image || "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400"} 
          alt={recipe.name} 
        /> */}
        <div className="recipe-placeholder">
          <span className="recipe-emoji">🍽️</span>
          <span className="recipe-name">{recipe.name}</span>
        </div>
        <button 
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteToggle}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <div className="recipe-overlay">
          <div className="recipe-cuisine">{recipe.cuisine}</div>
        </div>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.name}</h3>
        
        <div className="recipe-meta">
          <div className="recipe-time">
            <span className="meta-icon">⏱️</span>
            {recipe.prepTime} + {recipe.cookTime}
          </div>
          <div 
            className="recipe-difficulty"
            style={{ color: getDifficultyColor(recipe.difficulty) }}
          >
            <span className="meta-icon">📊</span>
            {recipe.difficulty}
          </div>
        </div>
        
        <div className="recipe-tags">
          {recipe.tags && recipe.tags.map((tag, index) => (
            <span key={index} className="recipe-tag">
              {tag}
            </span>
          ))}
        </div>
        
        {showDetails && (
          <div className="recipe-details">
            <h4>Ingredients:</h4>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            
            <h4>Instructions:</h4>
            <ol className="instructions-list">
              {recipe.instructions && recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            
            <div className="recipe-info">
              <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
              <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
              <p><strong>Servings:</strong> {recipe.servings}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
