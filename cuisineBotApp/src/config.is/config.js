// config.js

export const supportedLanguages = ["en", "he"];

export const cuisines = {
  en: [
    "Italian",
    "Middle Eastern", 
    "Spanish",
    "French",
    "Latin American"
  ],
  he: [
    "איטלקי",
    "מזרח תיכון",
    "ספרדי", 
    "צרפתי",
    "אמריקה לטינית"
  ]
};

export const dishTypes = {
  en: [
    "Meat",
    "Fish",
    "Seafood",
    "Vegetarian",
    "Vegan"
  ],
  he: [
    "בשרי",
    "דגים",
    "פירות ים",
    "צמחוני",
    "טבעוני"
  ]
};

export const dietaryOptions = {
  en: [
    "Kosher",
    "Keto", 
    "Gluten-Free"
  ],
  he: [
    "כשר",
    "קטוגני",
    "ללא גלוטן"
  ]
};

export const defaultLanguage = "en";

export const getCuisines = (language = defaultLanguage) => {
  return cuisines[language] || cuisines[defaultLanguage];
};

export const getDishTypes = (language = defaultLanguage) => {
  return dishTypes[language] || dishTypes[defaultLanguage];
};

export const getDietaryOptions = (language = defaultLanguage) => {
  return dietaryOptions[language] || dietaryOptions[defaultLanguage];
}; 