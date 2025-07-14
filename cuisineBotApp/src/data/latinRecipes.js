// latinRecipes.js

export const latinRecipes = [
  {
    id: "latin_1",
    name: "Fish Tacos",
    cuisine: "Latin American",
    dishType: "Fish",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Easy",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    servings: 4,
    ingredients: [
      "1 lb white fish fillets",
      "2 tablespoons olive oil",
      "1 teaspoon cumin",
      "1 teaspoon paprika",
      "1/2 teaspoon chili powder",
      "Salt and pepper",
      "8 corn tortillas",
      "1 cup shredded cabbage",
      "1/2 cup sour cream",
      "1 lime, juiced",
      "Fresh cilantro",
      "Salsa verde"
    ],
    instructions: [
      "Season fish with cumin, paprika, chili powder, salt, and pepper",
      "Heat olive oil in a skillet over medium-high heat",
      "Cook fish for 3-4 minutes per side until flaky",
      "Warm tortillas in a dry skillet",
      "Flake fish and serve in tortillas",
      "Top with cabbage, sour cream, lime juice, cilantro, and salsa"
    ],
    image: "fish-tacos.jpg",
    tags: ["tacos", "fish", "quick"]
  },
  {
    id: "latin_2",
    name: "Ceviche",
    cuisine: "Latin American",
    dishType: "Seafood",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Easy",
    prepTime: "30 minutes",
    cookTime: "0 minutes",
    servings: 4,
    ingredients: [
      "1 lb fresh white fish, cubed",
      "1/2 cup lime juice",
      "1/2 cup lemon juice",
      "1 red onion, finely diced",
      "1 jalapeño, minced",
      "1/2 cup fresh cilantro, chopped",
      "1 avocado, diced",
      "1 tomato, diced",
      "Salt and pepper",
      "Tortilla chips for serving"
    ],
    instructions: [
      "Place fish in a glass bowl",
      "Pour lime and lemon juice over fish",
      "Cover and refrigerate for 20-30 minutes",
      "Drain excess juice",
      "Add onion, jalapeño, cilantro, avocado, and tomato",
      "Season with salt and pepper",
      "Serve with tortilla chips"
    ],
    image: "ceviche.jpg",
    tags: ["seafood", "raw", "citrus"]
  },
  {
    id: "latin_3",
    name: "Chicken Mole",
    cuisine: "Latin American",
    dishType: "Meat",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Hard",
    prepTime: "30 minutes",
    cookTime: "1 hour",
    servings: 6,
    ingredients: [
      "1 whole chicken, cut into pieces",
      "3 tablespoons olive oil",
      "2 onions, diced",
      "4 garlic cloves, minced",
      "2 tablespoons chili powder",
      "1 tablespoon cocoa powder",
      "1 teaspoon cinnamon",
      "1/2 teaspoon cumin",
      "1/4 cup almonds",
      "1/4 cup raisins",
      "2 cups chicken broth",
      "Salt and pepper",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Brown chicken pieces in olive oil, remove and set aside",
      "Sauté onions and garlic until softened",
      "Add spices and cook for 1 minute",
      "Add almonds, raisins, and broth",
      "Simmer for 10 minutes, then blend until smooth",
      "Return chicken to pot and simmer for 45 minutes",
      "Serve with rice and garnish with sesame seeds"
    ],
    image: "mole.jpg",
    tags: ["sauce", "spicy", "traditional"]
  },
  {
    id: "latin_4",
    name: "Classic Mexican Guacamole",
    cuisine: "Latin American",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Gluten-Free", "Kosher"],
    difficulty: "Easy",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: 4,
    ingredients: [
      "2 ripe avocados",
      "1 small tomato, diced",
      "½ red onion, diced",
      "1 tablespoon lemon juice",
      "1 garlic clove, crushed",
      "1 teaspoon salt",
      "1 tablespoon fresh cilantro, chopped",
      "½ green chili pepper (optional)"
    ],
    instructions: [
      "Mash avocados in a bowl",
      "Add remaining ingredients and mix well",
      "Taste and adjust seasoning as needed",
      "Serve immediately with nachos or tacos"
    ],
    image: "classic-guacamole.jpg",
    tags: ["dip", "quick", "cold"],
    translations: {
      en: {
        name: "Classic Mexican Guacamole",
        cuisine: "Latin American",
        dishType: "Vegan",
        dietaryOptions: ["Vegan", "Gluten-Free", "Kosher"],
        ingredients: [
          "2 ripe avocados",
          "1 small tomato, diced",
          "½ red onion, diced",
          "1 tablespoon lemon juice",
          "1 garlic clove, crushed",
          "1 teaspoon salt",
          "1 tablespoon fresh cilantro, chopped",
          "½ green chili pepper (optional)"
        ],
        instructions: [
          "Mash avocados in a bowl",
          "Add remaining ingredients and mix well",
          "Taste and adjust seasoning as needed",
          "Serve immediately with nachos or tacos"
        ],
        tags: ["dip", "quick", "cold"]
      },
      he: {
        name: "גואקמולי מקסיקני קלאסי",
        cuisine: "אמריקה לטינית",
        dishType: "טבעוני",
        dietaryOptions: ["טבעוני", "ללא גלוטן", "כשר"],
        ingredients: [
          "2 אבוקדו בשלים",
          "1 עגבנייה קטנה קצוצה",
          "½ בצל סגול קצוץ",
          "1 כף מיץ לימון",
          "1 שן שום כתושה",
          "1 כפית מלח",
          "1 כף כוסברה טרייה קצוצה",
          "½ פלפל ירוק חריף (אופציונלי)"
        ],
        instructions: [
          "מועכים את האבוקדו בקערה",
          "מוסיפים את שאר הרכיבים ומערבבים היטב",
          "טועמים ומתקנים תיבול לפי טעם",
          "מגישים מיד עם נאצ'וס או טאקו"
        ],
        tags: ["ממרח", "מהיר", "קר"]
      }
    }
  },
  {
    id: "latin_5",
    name: "Chicken Tacos with Salsa Verde",
    cuisine: "Latin American",
    dishType: "Meat",
    dietaryOptions: ["Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "20 minutes",
    cookTime: "20 minutes",
    servings: 4,
    ingredients: [
      "250g chicken breast – cut into cubes",
      "1 tablespoon canola oil",
      "½ teaspoon cumin",
      "½ teaspoon paprika",
      "¼ teaspoon salt",
      "½ cup prepared or fresh salsa verde",
      "4 corn tortillas (gluten-free)",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Fry chicken in oil with spices for about 10 minutes until browned",
      "Heat tortillas on a dry skillet",
      "Fill each tortilla with chicken, pour salsa on top",
      "Garnish with cilantro and serve hot"
    ],
    image: "chicken-tacos-salsa-verde.jpg",
    tags: ["main course", "easy to prepare", "spicy"],
    translations: {
      en: {
        name: "Chicken Tacos with Salsa Verde",
        cuisine: "Latin American",
        dishType: "Meat",
        dietaryOptions: ["Kosher", "Gluten-Free"],
        ingredients: [
          "250g chicken breast – cut into cubes",
          "1 tablespoon canola oil",
          "½ teaspoon cumin",
          "½ teaspoon paprika",
          "¼ teaspoon salt",
          "½ cup prepared or fresh salsa verde",
          "4 corn tortillas (gluten-free)",
          "Fresh cilantro for garnish"
        ],
        instructions: [
          "Fry chicken in oil with spices for about 10 minutes until browned",
          "Heat tortillas on a dry skillet",
          "Fill each tortilla with chicken, pour salsa on top",
          "Garnish with cilantro and serve hot"
        ],
        tags: ["main course", "easy to prepare", "spicy"]
      },
      he: {
        name: "טאקוס עוף עם סלסה ורדה",
        cuisine: "אמריקה לטינית",
        dishType: "בשרי",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "250 גרם חזה עוף – חתוך לקוביות",
          "1 כף שמן קנולה",
          "½ כפית כמון",
          "½ כפית פפריקה",
          "¼ כפית מלח",
          "½ כוס סלסה ירוקה מוכנה או טרייה",
          "4 טורטיות תירס (ללא גלוטן)",
          "כוסברה טרייה לקישוט"
        ],
        instructions: [
          "מטגנים עוף בשמן עם תבלינים כ־10 דקות עד השחמה",
          "מחממים טורטיות על מחבת יבשה",
          "ממלאים כל טורטיה בעוף, יוצקים סלסה מעל",
          "מקשטים בכוסברה ומגישים חם"
        ],
        tags: ["עיקרית", "ידידותי להכנה", "פיקנטי"]
      }
    }
  },
  {
    id: "latin_6",
    name: "Churros with Chocolate Sauce",
    cuisine: "Latin American",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "25 minutes",
    cookTime: "20 minutes",
    servings: 6,
    ingredients: [
      "1 cup water",
      "2 tablespoons sugar",
      "2 tablespoons butter",
      "1 cup flour",
      "1 egg",
      "1 teaspoon cinnamon",
      "Oil for deep frying",
      "¼ cup sugar for coating",
      "¼ cup dark chocolate + 2 tablespoons sweet cream for sauce"
    ],
    instructions: [
      "Boil water, butter, and sugar. Add flour and mix to form dough",
      "Cool slightly, add egg and mix well",
      "Pipe dough sticks directly into hot oil, fry until browned",
      "Roll in sugar and cinnamon",
      "Melt chocolate and cream and serve as dipping sauce"
    ],
    image: "churros-chocolate.jpg",
    tags: ["fried dessert", "festive", "sweet"],
    translations: {
      en: {
        name: "Churros with Chocolate Sauce",
        cuisine: "Latin American",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "1 cup water",
          "2 tablespoons sugar",
          "2 tablespoons butter",
          "1 cup flour",
          "1 egg",
          "1 teaspoon cinnamon",
          "Oil for deep frying",
          "¼ cup sugar for coating",
          "¼ cup dark chocolate + 2 tablespoons sweet cream for sauce"
        ],
        instructions: [
          "Boil water, butter, and sugar. Add flour and mix to form dough",
          "Cool slightly, add egg and mix well",
          "Pipe dough sticks directly into hot oil, fry until browned",
          "Roll in sugar and cinnamon",
          "Melt chocolate and cream and serve as dipping sauce"
        ],
        tags: ["fried dessert", "festive", "sweet"]
      },
      he: {
        name: "צ'ורוס עם רוטב שוקולד",
        cuisine: "אמריקה לטינית",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "1 כוס מים",
          "2 כפות סוכר",
          "2 כפות חמאה",
          "1 כוס קמח",
          "1 ביצה",
          "1 כפית קינמון",
          "שמן לטיגון עמוק",
          "¼ כוס סוכר לקישוט",
          "¼ כוס שוקולד מריר + 2 כפות שמנת מתוקה לרוטב"
        ],
        instructions: [
          "מרתיחים מים, חמאה וסוכר. מוסיפים קמח ומערבבים לבצק",
          "מקררים מעט, מוסיפים ביצה ומערבבים היטב",
          "מזלפים מקלות בצק ישירות לשמן חם, מטגנים עד להשחמה",
          "מגלגלים בסוכר וקינמון",
          "ממיסים שוקולד ושמנת ומגישים כרוטב לצד"
        ],
        tags: ["קינוח מטוגן", "חגיגי", "מתוק"]
      }
    }
  },
  {
    id: "latin_7",
    name: "Beef Fajitas with Peppers",
    cuisine: "Latin American",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Easy",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    servings: 4,
    ingredients: [
      "300g thin beef strips",
      "1 red bell pepper – sliced",
      "1 green bell pepper – sliced",
      "1 red onion – halved and sliced",
      "2 tablespoons oil",
      "½ teaspoon cumin",
      "½ teaspoon smoked paprika",
      "¼ teaspoon salt",
      "4 corn or flour tortillas"
    ],
    instructions: [
      "Heat oil in a hot skillet",
      "Add beef strips and cook for 5-7 minutes until browned",
      "Add peppers and onion, cook for 5 minutes until softened",
      "Season with cumin, paprika, and salt",
      "Serve hot with warm tortillas"
    ],
    image: "beef-fajitas-peppers.jpg",
    tags: ["main course", "quick", "spicy"],
    translations: {
      en: {
        name: "Beef Fajitas with Peppers",
        cuisine: "Latin American",
        dishType: "Meat",
        dietaryOptions: ["Kosher"],
        ingredients: [
          "300g thin beef strips",
          "1 red bell pepper – sliced",
          "1 green bell pepper – sliced",
          "1 red onion – halved and sliced",
          "2 tablespoons oil",
          "½ teaspoon cumin",
          "½ teaspoon smoked paprika",
          "¼ teaspoon salt",
          "4 corn or flour tortillas"
        ],
        instructions: [
          "Heat oil in a hot skillet",
          "Add beef strips and cook for 5-7 minutes until browned",
          "Add peppers and onion, cook for 5 minutes until softened",
          "Season with cumin, paprika, and salt",
          "Serve hot with warm tortillas"
        ],
        tags: ["main course", "quick", "spicy"]
      },
      he: {
        name: "פאג'יטה בקר עם פלפלים",
        cuisine: "אמריקה לטינית",
        dishType: "בשרי",
        dietaryOptions: ["כשר"],
        ingredients: [
          "300 גרם רצועות בקר דקות",
          "1 פלפל אדום – פרוס",
          "1 פלפל ירוק – פרוס",
          "1 בצל סגול – חצוי ופרוס",
          "2 כפות שמן",
          "½ כפית כמון",
          "½ כפית פפריקה מעושנת",
          "¼ כפית מלח",
          "4 טורטיות תירס או קמח"
        ],
        instructions: [
          "מחממים שמן במחבת לוהטת",
          "מוסיפים רצועות בקר ומבשלים 5-7 דקות עד השחמה",
          "מוסיפים פלפלים ובצל, מבשלים 5 דקות עד ריכוך",
          "מתבלים בכמון, פפריקה ומלח",
          "מגישים חם עם טורטיות חמות"
        ],
        tags: ["עיקרית", "מהיר", "פיקנטי"]
      }
    }
  },
  {
    id: "latin_8",
    name: "Aji de Gallina",
    cuisine: "Latin American",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "25 minutes",
    cookTime: "30 minutes",
    servings: 4,
    ingredients: [
      "300g cooked and sliced chicken breast",
      "1 slice bread soaked in milk",
      "½ cup milk",
      "½ cup ground walnuts",
      "1 chopped onion",
      "2 tablespoons oil",
      "1 tablespoon yellow pepper paste (aji amarillo or substitute)",
      "½ teaspoon salt"
    ],
    instructions: [
      "Fry onion in oil, add pepper paste and mix",
      "Add soaked bread, milk, and walnuts – cook for about 10 minutes until thick consistency",
      "Add chicken strips, cook for another 10 minutes to absorb flavors",
      "Serve with white rice and hard-boiled egg slices on top"
    ],
    image: "aji-de-gallina.jpg",
    tags: ["rich dish", "Peruvian", "mildly spicy"],
    translations: {
      en: {
        name: "Aji de Gallina",
        cuisine: "Latin American",
        dishType: "Meat",
        dietaryOptions: ["Kosher"],
        ingredients: [
          "300g cooked and sliced chicken breast",
          "1 slice bread soaked in milk",
          "½ cup milk",
          "½ cup ground walnuts",
          "1 chopped onion",
          "2 tablespoons oil",
          "1 tablespoon yellow pepper paste (aji amarillo or substitute)",
          "½ teaspoon salt"
        ],
        instructions: [
          "Fry onion in oil, add pepper paste and mix",
          "Add soaked bread, milk, and walnuts – cook for about 10 minutes until thick consistency",
          "Add chicken strips, cook for another 10 minutes to absorb flavors",
          "Serve with white rice and hard-boiled egg slices on top"
        ],
        tags: ["rich dish", "Peruvian", "mildly spicy"]
      },
      he: {
        name: "אג'י דה גאיאינה",
        cuisine: "אמריקה לטינית",
        dishType: "בשרי",
        dietaryOptions: ["כשר"],
        ingredients: [
          "300 גרם חזה עוף מבושל ופרוס",
          "1 פרוסת לחם מושרית בחלב",
          "½ כוס חלב",
          "½ כוס אגוזי מלך טחונים",
          "1 בצל קצוץ",
          "2 כפות שמן",
          "1 כף מחית פלפל צהוב (אג'י אמאריו או חלופה)",
          "½ כפית מלח"
        ],
        instructions: [
          "מטגנים את הבצל בשמן, מוסיפים את מחית הפלפל ומערבבים",
          "מוסיפים את הלחם המושרה, החלב והאגוזים – מבשלים כ־10 דקות עד לקבלת מרקם סמיך",
          "מוסיפים את רצועות העוף, מבשלים עוד 10 דקות לספיגת טעמים",
          "מגישים עם אורז לבן ופרוסות ביצה קשה מעל"
        ],
        tags: ["תבשיל עשיר", "פרואני", "חריף עדין"]
      }
    }
  },
  {
    id: "latin_9",
    name: "Classic Argentine Asado",
    cuisine: "Latin American",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "10 minutes",
    cookTime: "50-60 minutes",
    servings: 4,
    ingredients: [
      "600g beef ribs or ribeye steak",
      "1 tablespoon olive oil",
      "1 teaspoon coarse salt",
      "½ teaspoon black pepper",
      "1 tablespoon chimichurri for serving"
    ],
    instructions: [
      "Coat meat with olive oil and season with salt and pepper",
      "Grill on hot grill or bake in oven for about 50 minutes, depending on meat thickness",
      "Serve in thin slices with chimichurri, baked potato, or tomato salad"
    ],
    image: "argentine-asado.jpg",
    tags: ["grilled", "Argentina", "quality meat"],
    translations: {
      en: {
        name: "Classic Argentine Asado",
        cuisine: "Latin American",
        dishType: "Meat",
        dietaryOptions: ["Kosher"],
        ingredients: [
          "600g beef ribs or ribeye steak",
          "1 tablespoon olive oil",
          "1 teaspoon coarse salt",
          "½ teaspoon black pepper",
          "1 tablespoon chimichurri for serving"
        ],
        instructions: [
          "Coat meat with olive oil and season with salt and pepper",
          "Grill on hot grill or bake in oven for about 50 minutes, depending on meat thickness",
          "Serve in thin slices with chimichurri, baked potato, or tomato salad"
        ],
        tags: ["grilled", "Argentina", "quality meat"]
      },
      he: {
        name: "אסאדו ארגנטינאי קלאסי",
        cuisine: "אמריקה לטינית",
        dishType: "בשרי",
        dietaryOptions: ["כשר"],
        ingredients: [
          "600 גרם צלעות בקר או אנטרקוט",
          "1 כף שמן זית",
          "1 כפית מלח גס",
          "½ כפית פלפל שחור",
          "1 כף צ'ימיצ'ורי להגשה"
        ],
        instructions: [
          "משמנים את הבשר בשמן זית ומתבלים במלח ופלפל",
          "צולים על גריל חם או אופים בתנור כ־50 דקות, תלוי בעובי הבשר",
          "מגישים פרוסות דקות עם צ'ימיצ'ורי, תפוח אדמה אפוי או סלט עגבניות"
        ],
        tags: ["גריל", "ארגנטינה", "בשר איכותי"]
      }
    }
  },
  {
    id: "latin_10",
    name: "Arroz con Leche",
    cuisine: "Latin American",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "10 minutes",
    cookTime: "40 minutes",
    servings: 4,
    ingredients: [
      "½ cup white rice",
      "2 cups water",
      "1 cinnamon stick",
      "1 can condensed milk",
      "½ teaspoon vanilla extract",
      "¼ teaspoon ground cinnamon (for garnish)"
    ],
    instructions: [
      "Cook rice with water and cinnamon stick until water is absorbed",
      "Add condensed milk and vanilla, stir and cook on low heat for about 20 minutes until thickened",
      "Serve hot or cold, with cinnamon on top"
    ],
    image: "arroz-con-leche.jpg",
    tags: ["home dessert", "soft texture", "gluten-free"],
    translations: {
      en: {
        name: "Arroz con Leche",
        cuisine: "Latin American",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
        ingredients: [
          "½ cup white rice",
          "2 cups water",
          "1 cinnamon stick",
          "1 can condensed milk",
          "½ teaspoon vanilla extract",
          "¼ teaspoon ground cinnamon (for garnish)"
        ],
        instructions: [
          "Cook rice with water and cinnamon stick until water is absorbed",
          "Add condensed milk and vanilla, stir and cook on low heat for about 20 minutes until thickened",
          "Serve hot or cold, with cinnamon on top"
        ],
        tags: ["home dessert", "soft texture", "gluten-free"]
      },
      he: {
        name: "ארוז קון לצ'ה",
        cuisine: "אמריקה לטינית",
        dishType: "צמחוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "½ כוס אורז לבן",
          "2 כוסות מים",
          "1 מקל קינמון",
          "1 פחית חלב מרוכז",
          "½ כפית תמצית וניל",
          "¼ כפית קינמון טחון (לקישוט)"
        ],
        instructions: [
          "מבשלים את האורז עם מים ומקל קינמון עד שהמים נספגים",
          "מוסיפים את החלב המרוכז והוניל, מערבבים ומבשלים על אש נמוכה כ־20 דקות עד שמסמיך",
          "מגישים חמים או קרים, עם קינמון מעל"
        ],
        tags: ["קינוח ביתי", "מרקם רך", "ללא גלוטן"]
      }
    }
  },
  {
    id: "latin_11",
    name: "Caramelized Bananas",
    cuisine: "Latin American",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "10 minutes",
    cookTime: "10 minutes",
    servings: 2,
    ingredients: [
      "2 bananas cut crosswise",
      "2 tablespoons brown sugar",
      "1 teaspoon coconut oil or butter",
      "½ teaspoon cinnamon"
    ],
    instructions: [
      "Melt oil and sugar in skillet until light caramel forms",
      "Place bananas and sear 2-3 minutes on each side",
      "Sprinkle cinnamon and serve hot with ice cream or alone"
    ],
    image: "caramelized-bananas.jpg",
    tags: ["quick", "fruit", "vegan"],
    translations: {
      en: {
        name: "Caramelized Bananas",
        cuisine: "Latin American",
        dishType: "Vegan",
        dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
        ingredients: [
          "2 bananas cut crosswise",
          "2 tablespoons brown sugar",
          "1 teaspoon coconut oil or butter",
          "½ teaspoon cinnamon"
        ],
        instructions: [
          "Melt oil and sugar in skillet until light caramel forms",
          "Place bananas and sear 2-3 minutes on each side",
          "Sprinkle cinnamon and serve hot with ice cream or alone"
        ],
        tags: ["quick", "fruit", "vegan"]
      },
      he: {
        name: "בננות קרמליות",
        cuisine: "אמריקה לטינית",
        dishType: "טבעוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "2 בננות חתוכות לרוחב",
          "2 כפות סוכר חום",
          "1 כפית שמן קוקוס או חמאה",
          "½ כפית קינמון"
        ],
        instructions: [
          "ממיסים שמן וסוכר במחבת עד שנוצר קרמל קל",
          "מניחים את הבננות וצרבים 2–3 דקות מכל צד",
          "מפזרים קינמון ומגישים חם עם גלידה או לבד"
        ],
        tags: ["מהיר", "פירות", "טבעוני"]
      }
    }
  },
  {
    id: "latin_12",
    name: "Cuban Coconut Pie",
    cuisine: "Latin American",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "35 minutes",
    servings: 8,
    ingredients: [
      "1 shortcrust pastry for base",
      "1 cup shredded coconut",
      "½ cup sugar",
      "2 eggs",
      "¼ cup coconut milk",
      "½ teaspoon vanilla"
    ],
    instructions: [
      "Line pan with pastry and preheat oven to 180°C",
      "Mix all remaining ingredients into smooth mixture",
      "Pour over pastry and bake for about 35 minutes until golden",
      "Cool, slice, and serve with powdered sugar on top"
    ],
    image: "cuban-coconut-pie.jpg",
    tags: ["coconut", "baked", "refreshing"],
    translations: {
      en: {
        name: "Cuban Coconut Pie",
        cuisine: "Latin American",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "1 shortcrust pastry for base",
          "1 cup shredded coconut",
          "½ cup sugar",
          "2 eggs",
          "¼ cup coconut milk",
          "½ teaspoon vanilla"
        ],
        instructions: [
          "Line pan with pastry and preheat oven to 180°C",
          "Mix all remaining ingredients into smooth mixture",
          "Pour over pastry and bake for about 35 minutes until golden",
          "Cool, slice, and serve with powdered sugar on top"
        ],
        tags: ["coconut", "baked", "refreshing"]
      },
      he: {
        name: "פאי קוקוס קובני",
        cuisine: "אמריקה לטינית",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "1 בצק פריך לתחתית",
          "1 כוס קוקוס טחון",
          "½ כוס סוכר",
          "2 ביצים",
          "¼ כוס חלב קוקוס",
          "½ כפית וניל"
        ],
        instructions: [
          "מרפדים תבנית בבצק ומחממים תנור ל־180°C",
          "מערבבים את כל שאר הרכיבים לתערובת חלקה",
          "יוצקים מעל הבצק ואופים כ־35 דקות עד שהמאפה זהוב",
          "מקררים, פורסים ומגישים עם אבקת סוכר מעל"
        ],
        tags: ["קוקוס", "אפייה", "מרענן"]
      }
    }
  }
];