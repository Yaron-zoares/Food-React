// middleEasternRecipes.js

export const middleEasternRecipes = [
  {
    id: "middle_eastern_1",
    name: "Classic Hummus",
    cuisine: "Middle Eastern",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: 6,
    ingredients: [
      "2 cans chickpeas (15 oz each)",
      "1/4 cup tahini",
      "3 tablespoons lemon juice",
      "2 garlic cloves",
      "1/2 teaspoon cumin",
      "1/2 teaspoon salt",
      "2-3 tablespoons olive oil",
      "2-4 tablespoons water"
    ],
    instructions: [
      "Drain and rinse chickpeas",
      "In a food processor, combine chickpeas, tahini, lemon juice, garlic, cumin, and salt",
      "Process until smooth, adding water as needed for desired consistency",
      "Transfer to serving bowl and drizzle with olive oil",
      "Garnish with paprika and parsley if desired"
    ],
    image: "hummus.jpg",
    tags: ["dip", "vegan", "healthy"]
  },
  {
    id: "middle_eastern_2",
    name: "Falafel",
    cuisine: "Middle Eastern",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    servings: 4,
    ingredients: [
      "2 cups dried chickpeas, soaked overnight",
      "1 onion, chopped",
      "4 garlic cloves",
      "1 cup fresh parsley",
      "1 cup fresh cilantro",
      "1 teaspoon cumin",
      "1 teaspoon coriander",
      "1/2 teaspoon baking soda",
      "Salt and pepper to taste",
      "Oil for frying"
    ],
    instructions: [
      "Drain soaked chickpeas and pat dry",
      "In a food processor, combine chickpeas, onion, garlic, herbs, and spices",
      "Process until mixture is coarse but holds together",
      "Form into small balls or patties",
      "Heat oil to 350°F (175°C) and fry falafel until golden brown",
      "Serve with tahini sauce and pita bread"
    ],
    image: "falafel.jpg",
    tags: ["vegan", "fried", "protein"]
  },
  {
    id: "middle_eastern_3",
    name: "Chicken Shawarma",
    cuisine: "Middle Eastern",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "20 minutes",
    cookTime: "25 minutes",
    servings: 4,
    ingredients: [
      "1 lb chicken thighs, sliced",
      "2 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "3 garlic cloves, minced",
      "1 teaspoon cumin",
      "1 teaspoon paprika",
      "1/2 teaspoon turmeric",
      "1/2 teaspoon cinnamon",
      "Salt and pepper",
      "Pita bread",
      "Tahini sauce",
      "Pickled vegetables"
    ],
    instructions: [
      "Marinate chicken with olive oil, lemon juice, garlic, and spices for 30 minutes",
      "Heat a large skillet over medium-high heat",
      "Cook chicken in batches until golden and cooked through",
      "Warm pita bread in the same skillet",
      "Serve chicken in pita with tahini sauce and pickled vegetables"
    ],
    image: "shawarma.jpg",
    tags: ["meat", "sandwich", "spicy"]
  },
  {
    id: "middle_eastern_4",
    name: "Classic Shakshuka",
    cuisine: "Middle Eastern",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "15 minutes",
    servings: 2,
    ingredients: [
      "3 eggs",
      "2 chopped tomatoes",
      "½ chopped onion",
      "2 crushed garlic cloves",
      "½ teaspoon sweet paprika",
      "¼ teaspoon salt",
      "2 tablespoons olive oil",
      "Parsley for garnish"
    ],
    instructions: [
      "Heat olive oil in a skillet",
      "Fry onion and garlic until translucent",
      "Add tomatoes, paprika, and salt, cook for about 10 minutes",
      "Create wells and add eggs – cover and cook until whites set",
      "Serve with fresh bread"
    ],
    image: "classic-shakshuka.jpg",
    tags: ["breakfast", "vegetarian", "simple"],
    translations: {
      en: {
        name: "Classic Shakshuka",
        cuisine: "Middle Eastern",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
        ingredients: [
          "3 eggs",
          "2 chopped tomatoes",
          "½ chopped onion",
          "2 crushed garlic cloves",
          "½ teaspoon sweet paprika",
          "¼ teaspoon salt",
          "2 tablespoons olive oil",
          "Parsley for garnish"
        ],
        instructions: [
          "Heat olive oil in a skillet",
          "Fry onion and garlic until translucent",
          "Add tomatoes, paprika, and salt, cook for about 10 minutes",
          "Create wells and add eggs – cover and cook until whites set",
          "Serve with fresh bread"
        ],
        tags: ["breakfast", "vegetarian", "simple"]
      },
      he: {
        name: "שקשוקה קלאסית",
        cuisine: "ישראלי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "3 ביצים",
          "2 עגבניות קצוצות",
          "½ בצל קצוץ",
          "2 שיני שום כתושות",
          "½ כפית פפריקה מתוקה",
          "¼ כפית מלח",
          "2 כפות שמן זית",
          "פטרוזיליה לקישוט"
        ],
        instructions: [
          "מחממים שמן זית במחבת",
          "מטגנים בצל ושום עד שקיפות",
          "מוסיפים עגבניות, פפריקה ומלח ומבשלים כ־10 דקות",
          "יוצרים גומות ומוסיפים ביצים – מכסים ומבשלים עד שהחלבון מתייצב",
          "מגישים עם לחם טרי"
        ],
        tags: ["בוקר", "צמחוני", "פשוט"]
      }
    }
  },
  {
    id: "middle_eastern_5",
    name: "Siniya with Tahini",
    cuisine: "Middle Eastern",
    dishType: "Meat",
    dietaryOptions: ["Kosher", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "25 minutes",
    cookTime: "30 minutes",
    servings: 4,
    ingredients: [
      "500g ground meat",
      "½ chopped onion",
      "2 crushed garlic cloves",
      "½ teaspoon cumin",
      "½ teaspoon paprika",
      "¼ teaspoon salt",
      "½ cup raw tahini",
      "½ cup water",
      "2 tablespoons lemon juice",
      "Chopped parsley"
    ],
    instructions: [
      "Fry meat with onion, garlic, and spices",
      "Mix tahini with water and lemon for smooth mixture",
      "Place meat in pan, pour tahini over it",
      "Bake 30 minutes at 180°C until lightly browned",
      "Sprinkle parsley and serve with rice or salad"
    ],
    image: "siniya-tahini.jpg",
    tags: ["main course", "Middle Eastern", "rich"],
    translations: {
      en: {
        name: "Siniya with Tahini",
        cuisine: "Middle Eastern",
        dishType: "Meat",
        dietaryOptions: ["Kosher", "Gluten-Free"],
        ingredients: [
          "500g ground meat",
          "½ chopped onion",
          "2 crushed garlic cloves",
          "½ teaspoon cumin",
          "½ teaspoon paprika",
          "¼ teaspoon salt",
          "½ cup raw tahini",
          "½ cup water",
          "2 tablespoons lemon juice",
          "Chopped parsley"
        ],
        instructions: [
          "Fry meat with onion, garlic, and spices",
          "Mix tahini with water and lemon for smooth mixture",
          "Place meat in pan, pour tahini over it",
          "Bake 30 minutes at 180°C until lightly browned",
          "Sprinkle parsley and serve with rice or salad"
        ],
        tags: ["main course", "Middle Eastern", "rich"]
      },
      he: {
        name: "סינייה עם טחינה ולימון",
        cuisine: "ערבי",
        dishType: "בשרי",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "500 גרם בשר טחון",
          "½ בצל קצוץ",
          "2 שיני שום כתושות",
          "½ כפית כמון",
          "½ כפית פפריקה",
          "¼ כפית מלח",
          "½ כוס טחינה גולמית",
          "½ כוס מים",
          "2 כפות מיץ לימון",
          "פטרוזיליה קצוצה"
        ],
        instructions: [
          "מטגנים את הבשר עם בצל, שום ותבלינים",
          "מערבבים טחינה עם מים ולימון לתערובת חלקה",
          "שמים את הבשר בתבנית, יוצקים עליו את הטחינה",
          "אופים 30 דקות ב־180°C עד להשחמה קלה",
          "מפזרים פטרוזיליה ומגישים עם אורז או סלט"
        ],
        tags: ["מנה עיקרית", "מזרח תיכון", "עשיר"]
      }
    }
  },
  {
    id: "middle_eastern_6",
    name: "Knafeh Cheese",
    cuisine: "Middle Eastern",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Hard",
    prepTime: "25 minutes",
    cookTime: "30 minutes",
    servings: 6,
    ingredients: [
      "250g kataifi (shredded phyllo)",
      "150g ricotta cheese or soft feta",
      "50g melted butter",
      "½ cup sugar syrup (water + sugar + rose water)",
      "¼ teaspoon cinnamon (optional)",
      "Chopped pistachios for garnish"
    ],
    instructions: [
      "Grease pan, place half the kataifi",
      "Sprinkle cheese, then remaining kataifi on top and drizzle butter",
      "Bake for about 30 minutes until browned",
      "Pour syrup over, garnish with pistachios and serve hot"
    ],
    image: "knafeh-cheese.jpg",
    tags: ["dessert", "Lebanese", "cheese"],
    translations: {
      en: {
        name: "Knafeh Cheese",
        cuisine: "Middle Eastern",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "250g kataifi (shredded phyllo)",
          "150g ricotta cheese or soft feta",
          "150g ricotta cheese or soft feta",
          "50g melted butter",
          "½ cup sugar syrup (water + sugar + rose water)",
          "¼ teaspoon cinnamon (optional)",
          "Chopped pistachios for garnish"
        ],
        instructions: [
          "Grease pan, place half the kataifi",
          "Sprinkle cheese, then remaining kataifi on top and drizzle butter",
          "Bake for about 30 minutes until browned",
          "Pour syrup over, garnish with pistachios and serve hot"
        ],
        tags: ["dessert", "Lebanese", "cheese"]
      },
      he: {
        name: "כנאפה גבינה",
        cuisine: "לבנוני",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "250 גרם שערות קדאיף",
          "150 גרם גבינת ריקוטה או פטה רכה",
          "50 גרם חמאה מומסת",
          "½ כוס סירופ סוכר (מים + סוכר + מי ורדים)",
          "¼ כפית קינמון (אופציונלי)",
          "פיסטוקים קצוצים לקישוט"
        ],
        instructions: [
          "משמנים תבנית, שמים חצי מכמות הקדאיף",
          "מפזרים גבינה, ואז את שאר הקדאיף מעל ומטפטפים חמאה",
          "אופים כ־30 דקות עד להשחמה",
          "יוצקים סירופ מעל, מקשטים בפיסטוקים ומגישים חם"
        ],
        tags: ["קינוח", "לבנוני", "גבינה"]
      }
    }
  }
];