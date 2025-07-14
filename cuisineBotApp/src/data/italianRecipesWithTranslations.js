// italianRecipesWithTranslations.js
// Example of how to add Hebrew translations to recipes

import { createBilingualRecipe } from '../translations/translationUtils.js';

// Example: Classic Bruschetta with Hebrew translations
export const bruschettaWithTranslations = createBilingualRecipe(
  {
    id: "italian_4",
    name: "Classic Bruschetta",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "6 minutes",
    servings: 6,
    ingredients: [
      "6 slices gluten-free bread",
      "3 tomatoes, diced",
      "2 garlic cloves",
      "½ cup fresh basil, chopped",
      "2 tablespoons olive oil",
      "¼ teaspoon salt",
      "⅛ teaspoon black pepper"
    ],
    instructions: [
      "Preheat oven to 200°C (400°F)",
      "Toast the bread for 5-6 minutes until golden",
      "Mix tomatoes with basil, olive oil, salt, and pepper",
      "Rub the toasted bread with garlic",
      "Top each bread slice with the tomato mixture and serve"
    ],
    image: "bruschetta.jpg",
    tags: ["appetizer", "quick", "fresh"]
  },
  {
    name: "ברוסקטה קלאסית",
    cuisine: "איטלקי",
    dishType: "צמחוני",
    dietaryOptions: ["צמחוני", "ללא גלוטן"],
    ingredients: [
      "6 פרוסות לחם ללא גלוטן",
      "3 עגבניות קצוצות",
      "2 שיני שום",
      "½ כוס בזיליקום טרי קצוץ",
      "2 כפות שמן זית",
      "¼ כפית מלח",
      "⅛ כפית פלפל שחור"
    ],
    instructions: [
      "מחממים תנור ל־200°C",
      "קולים את הלחם במשך 5–6 דקות",
      "מערבבים את העגבניות עם הבזיליקום, שמן זית, מלח ופלפל",
      "משפשפים את הלחם בשום",
      "מניחים תערובת על כל פרוסת לחם ומגישים"
    ],
    tags: ["מנה ראשונה", "מהיר", "טרי"]
  }
);

// Example: Pasta Pomodoro with Hebrew translations
export const pastaPomodoroWithTranslations = createBilingualRecipe(
  {
    id: "italian_5",
    name: "Pasta Pomodoro",
    cuisine: "Italian",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher"],
    difficulty: "Easy",
    prepTime: "25 minutes",
    cookTime: "10 minutes",
    servings: 4,
    ingredients: [
      "250g pasta",
      "2 large tomatoes, crushed",
      "2 tablespoons olive oil",
      "2 garlic cloves, crushed",
      "¼ teaspoon salt",
      "¼ teaspoon sugar",
      "Fresh basil for garnish"
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Sauté garlic in olive oil, add tomatoes, salt, and sugar, cook for 10 minutes",
      "Mix with pasta and garnish with basil"
    ],
    image: "pasta-pomodoro.jpg",
    tags: ["main course", "simple"]
  },
  {
    name: "פסטה פומודורו",
    cuisine: "איטלקי",
    dishType: "טבעוני",
    dietaryOptions: ["טבעוני", "כשר"],
    ingredients: [
      "250 גרם פסטה",
      "2 עגבניות גדולות מרוסקות",
      "2 כפות שמן זית",
      "2 שיני שום כתושות",
      "¼ כפית מלח",
      "¼ כפית סוכר",
      "בזיליקום לקישוט"
    ],
    instructions: [
      "מבשלים את הפסטה לפי הוראות",
      "מטגנים שום בשמן זית, מוסיפים עגבניות, מלח וסוכר ומבשלים 10 דקות",
      "מערבבים עם הפסטה ומקשטים בבזיליקום"
    ],
    tags: ["מנה עיקרית", "קלה"]
  }
);

// Example: Mushroom Risotto with Hebrew translations
export const mushroomRisottoWithTranslations = createBilingualRecipe(
  {
    id: "italian_6",
    name: "Mushroom Risotto",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "45 minutes",
    cookTime: "25 minutes",
    servings: 4,
    ingredients: [
      "1 cup Arborio rice",
      "200g button mushrooms, chopped",
      "1 small onion, diced",
      "2 tablespoons butter",
      "¼ cup grated Parmesan cheese",
      "3 cups vegetable broth",
      "¼ teaspoon salt"
    ],
    instructions: [
      "Sauté onion and butter, add mushrooms and cook for 5 minutes",
      "Add rice and stir for 1 minute",
      "Add broth gradually while stirring until rice is tender",
      "Add Parmesan and stir until creamy consistency"
    ],
    image: "mushroom-risotto.jpg",
    tags: ["gourmet", "creamy"]
  },
  {
    name: "ריזוטו פטריות",
    cuisine: "איטלקי",
    dishType: "צמחוני",
    dietaryOptions: ["צמחוני", "כשר"],
    ingredients: [
      "1 כוס אורז ארבוריו",
      "200 גרם פטריות שמפיניון קצוצות",
      "1 בצל קטן קצוץ",
      "2 כפות חמאה",
      "¼ כוס גבינת פרמזן מגוררת",
      "3 כוסות ציר ירקות",
      "¼ כפית מלח"
    ],
    instructions: [
      "מטגנים בצל וחמאה, מוסיפים פטריות ומטגנים 5 דקות",
      "מוסיפים את האורז ומערבבים כדקה",
      "מוסיפים ציר בהדרגה תוך ערבוב עד שהאורז רך",
      "מוסיפים פרמזן ומערבבים עד קבלת מרקם קרמי"
    ],
    tags: ["גורמה", "קרמי"]
  }
);

// Export all bilingual recipes
export const italianRecipesBilingual = [
  bruschettaWithTranslations,
  pastaPomodoroWithTranslations,
  mushroomRisottoWithTranslations
]; 