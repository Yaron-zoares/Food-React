export function searchRecipesByIngredients(inputIngredients, allRecipes) {
    const normalizedInput = inputIngredients.map(i => i.toLowerCase().trim());
  
    return allRecipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
      return normalizedInput.every(ing =>
        recipeIngredients.some(recipeIng =>
          recipeIng.includes(ing)
        )
      );
    });
  }