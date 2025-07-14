// frenchRecipes.js

export const frenchRecipes = [
  {
    id: "french_1",
    name: "Coq au Vin",
    cuisine: "French",
    dishType: "Meat",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Hard",
    prepTime: "30 minutes",
    cookTime: "1 hour 30 minutes",
    servings: 4,
    ingredients: [
      "1 whole chicken, cut into pieces",
      "1 bottle red wine",
      "200g bacon lardons",
      "20 pearl onions",
      "200g mushrooms",
      "4 garlic cloves",
      "2 tablespoons tomato paste",
      "2 bay leaves",
      "Fresh thyme",
      "Butter",
      "Flour for thickening",
      "Salt and pepper"
    ],
    instructions: [
      "Marinate chicken in red wine with garlic and herbs for 4 hours",
      "Brown bacon in a large Dutch oven, remove and set aside",
      "Brown chicken pieces in bacon fat, remove and set aside",
      "Sauté pearl onions and mushrooms until golden",
      "Return chicken and bacon to pot",
      "Add wine marinade, tomato paste, and herbs",
      "Simmer covered for 1 hour until chicken is tender",
      "Thicken sauce with flour if desired",
      "Serve with crusty bread or mashed potatoes"
    ],
    image: "coq-au-vin.jpg",
    tags: ["braised", "wine", "classic"]
  },
  {
    id: "french_1_kosher",
    name: "Kosher Coq au Vin",
    cuisine: "French",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "60 minutes",
    servings: 4,
    ingredients: [
      "6 chicken thighs (or breast according to preference)",
      "2 tablespoons olive oil",
      "1 large onion – chopped",
      "2 garlic cloves, crushed",
      "150g mushrooms – halved",
      "2 cups dry red wine",
      "½ teaspoon salt",
      "¼ teaspoon black pepper",
      "1 tablespoon tomato paste"
    ],
    instructions: [
      "Brown the chicken in olive oil on all sides and remove to a bowl",
      "Sauté the onion and garlic, add the mushrooms",
      "Return the chicken, add wine, tomato paste, and seasonings",
      "Bring to a boil, reduce heat and cook for about an hour until the sauce reduces and chicken is very tender",
      "Serve with mashed potatoes or white rice"
    ],
    image: "kosher-coq-au-vin.jpg",
    tags: ["gourmet", "rich dish"],
    translations: {
      en: {
        name: "Kosher Coq au Vin",
        cuisine: "French",
        dishType: "Meat",
        dietaryOptions: ["Kosher"],
        ingredients: [
          "6 chicken thighs (or breast according to preference)",
          "2 tablespoons olive oil",
          "1 large onion – chopped",
          "2 garlic cloves, crushed",
          "150g mushrooms – halved",
          "2 cups dry red wine",
          "½ teaspoon salt",
          "¼ teaspoon black pepper",
          "1 tablespoon tomato paste"
        ],
        instructions: [
          "Brown the chicken in olive oil on all sides and remove to a bowl",
          "Sauté the onion and garlic, add the mushrooms",
          "Return the chicken, add wine, tomato paste, and seasonings",
          "Bring to a boil, reduce heat and cook for about an hour until the sauce reduces and chicken is very tender",
          "Serve with mashed potatoes or white rice"
        ],
        tags: ["gourmet", "rich dish"]
      },
      he: {
        name: "קוק או וין – עוף ביין אדום",
        cuisine: "צרפתי",
        dishType: "בשרי",
        dietaryOptions: ["כשר"],
        ingredients: [
          "6 שוקי עוף (או חזה לפי העדפה)",
          "2 כפות שמן זית",
          "1 בצל גדול – קצוץ",
          "2 שיני שום כתושות",
          "150 גרם פטריות – חצויות",
          "2 כוסות יין אדום יבש",
          "½ כפית מלח",
          "¼ כפית פלפל שחור",
          "1 כף רסק עגבניות"
        ],
        instructions: [
          "משחימים את העוף בשמן זית מכל הצדדים ומוציאים לקערה",
          "מטגנים את הבצל והשום, מוסיפים את הפטריות",
          "מחזירים את העוף, מוסיפים יין, רסק ותבלינים",
          "מביאים לרתיחה, מנמיכים להבה ומבשלים כשעה עד שהרוטב מצטמצם והעוף רך מאוד",
          "מגישים עם פירה או אורז לבן"
        ],
        tags: ["גורמה", "תבשיל עשיר"]
      }
    }
  },
  {
    id: "french_2",
    name: "Ratatouille",
    cuisine: "French",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: 6,
    ingredients: [
      "2 eggplants, sliced",
      "3 zucchini, sliced",
      "3 yellow squash, sliced",
      "4 tomatoes, sliced",
      "2 bell peppers, sliced",
      "1 onion, diced",
      "4 garlic cloves, minced",
      "1/4 cup olive oil",
      "Fresh basil",
      "Fresh thyme",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Sauté onion and garlic in olive oil until softened",
      "Layer vegetables in a large baking dish",
      "Drizzle with olive oil and season with herbs",
      "Cover with foil and bake for 30 minutes",
      "Remove foil and bake for 15 minutes more",
      "Let rest for 10 minutes before serving"
    ],
    image: "ratatouille.jpg",
    tags: ["vegetarian", "summer", "provencal"]
  },
  {
    id: "french_3",
    name: "French Onion Soup",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian"],
    difficulty: "Medium",
    prepTime: "20 minutes",
    cookTime: "1 hour",
    servings: 4,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "1 teaspoon sugar",
      "1/4 cup flour",
      "6 cups beef broth",
      "1/2 cup white wine",
      "1 bay leaf",
      "Fresh thyme",
      "Baguette slices",
      "Gruyère cheese",
      "Salt and pepper"
    ],
    instructions: [
      "Melt butter and olive oil in a large pot",
      "Add onions and cook over low heat for 30 minutes until caramelized",
      "Add sugar and continue cooking for 10 minutes",
      "Sprinkle flour and cook for 1 minute",
      "Add wine and deglaze pan",
      "Add broth, bay leaf, and thyme",
      "Simmer for 30 minutes",
      "Top with toasted baguette and cheese",
      "Broil until cheese is melted and bubbly"
    ],
    image: "onion-soup.jpg",
    tags: ["soup", "comfort", "winter"]
  },
  {
    id: "french_4",
    name: "Classic Ratatouille",
    cuisine: "French",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "20 minutes",
    cookTime: "40 minutes",
    servings: 4,
    ingredients: [
      "1 medium eggplant – cut into cubes",
      "1 zucchini – sliced",
      "1 red bell pepper – cut into strips",
      "1 onion – chopped",
      "2 tomatoes – chopped",
      "2 tablespoons olive oil",
      "½ teaspoon salt",
      "¼ teaspoon black pepper",
      "½ teaspoon dried thyme"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F) and prepare a baking dish with parchment paper",
      "Place all vegetables in the baking dish and drizzle with olive oil",
      "Sprinkle seasonings and gently mix",
      "Bake for about 40 minutes until vegetables are tender and slightly browned",
      "Serve hot or warm as a side dish or main vegan course"
    ],
    image: "classic-ratatouille.jpg",
    tags: ["vegan", "baked", "simple"]
  },
  {
    id: "french_5",
    name: "Simple French Onion Soup",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "45 minutes",
    servings: 4,
    ingredients: [
      "3 large onions – thinly sliced",
      "2 tablespoons butter (or olive oil)",
      "1 tablespoon flour",
      "1 teaspoon sugar",
      "4 cups water or vegetable broth",
      "½ teaspoon salt",
      "½ teaspoon thyme",
      "Toasted bread slices + yellow cheese for gratin"
    ],
    instructions: [
      "Sauté onions in butter over medium heat for about 20 minutes until browned",
      "Add flour and sugar, stir and cook for another 5 minutes",
      "Pour in broth, season and cook for 20 more minutes",
      "Pour into heat-resistant bowls, place toasted bread and cheese on top",
      "Place in hot oven (200°C) for about 10 minutes for golden gratin"
    ],
    image: "simple-onion-soup.jpg",
    tags: ["soup", "warming", "winter"],
    translations: {
      en: {
        name: "Simple French Onion Soup",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "3 large onions – thinly sliced",
          "2 tablespoons butter (or olive oil)",
          "1 tablespoon flour",
          "1 teaspoon sugar",
          "4 cups water or vegetable broth",
          "½ teaspoon salt",
          "½ teaspoon thyme",
          "Toasted bread slices + yellow cheese for gratin"
        ],
        instructions: [
          "Sauté onions in butter over medium heat for about 20 minutes until browned",
          "Add flour and sugar, stir and cook for another 5 minutes",
          "Pour in broth, season and cook for 20 more minutes",
          "Pour into heat-resistant bowls, place toasted bread and cheese on top",
          "Place in hot oven (200°C) for about 10 minutes for golden gratin"
        ],
        tags: ["soup", "warming", "winter"]
      },
      he: {
        name: "מרק בצל צרפתי",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["צמחוני", "כשר"],
        ingredients: [
          "3 בצלים גדולים – פרוסים דק",
          "2 כפות חמאה (או שמן זית)",
          "1 כף קמח",
          "1 כפית סוכר",
          "4 כוסות מים או ציר ירקות",
          "½ כפית מלח",
          "½ כפית תימין",
          "פרוסות לחם קלוי + גבינה צהובה לגרטן"
        ],
        instructions: [
          "מטגנים בצלים בחמאה על להבה בינונית כ־20 דקות עד שהשחימו",
          "מוסיפים קמח וסוכר, מערבבים ומבשלים עוד 5 דקות",
          "יוצקים ציר, מתבלים ומבשלים 20 דקות נוספות",
          "מוזגים לקערות חסינות חום, מניחים לחם קלוי וגבינה למעלה",
          "מכניסים לתנור חם (200°C) לכ־10 דקות לגרטן זהוב"
        ],
        tags: ["מרק", "מחמם", "חורפי"]
      }
    }
  },
  {
    id: "french_6",
    name: "Gratin Dauphinois",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "50 minutes",
    servings: 6,
    ingredients: [
      "5 medium potatoes – thinly sliced",
      "2 cups heavy cream",
      "2 garlic cloves – crushed",
      "¼ teaspoon salt",
      "¼ teaspoon pepper",
      "¼ teaspoon nutmeg (optional)"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F)",
      "Grease a baking dish and rub it with garlic",
      "Layer potato slices, seasoning each layer",
      "Pour seasoned cream over the layers",
      "Bake for 50 minutes until layers are tender and top is golden and bubbling"
    ],
    image: "gratin-dauphinois.jpg",
    tags: ["rich side dish", "festive dish"],
    translations: {
      en: {
        name: "Gratin Dauphinois",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "5 medium potatoes – thinly sliced",
          "2 cups heavy cream",
          "2 garlic cloves – crushed",
          "¼ teaspoon salt",
          "¼ teaspoon pepper",
          "¼ teaspoon nutmeg (optional)"
        ],
        instructions: [
          "Preheat oven to 180°C (350°F)",
          "Grease a baking dish and rub it with garlic",
          "Layer potato slices, seasoning each layer",
          "Pour seasoned cream over the layers",
          "Bake for 50 minutes until layers are tender and top is golden and bubbling"
        ],
        tags: ["rich side dish", "festive dish"]
      },
      he: {
        name: "גרטן דופינואה",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["צמחוני", "כשר"],
        ingredients: [
          "5 תפוחי אדמה בינוניים – פרוסים דק",
          "2 כוסות שמנת מתוקה",
          "2 שיני שום – כתושות",
          "¼ כפית מלח",
          "¼ כפית פלפל",
          "¼ כפית אגוז מוסקט (אופציונלי)"
        ],
        instructions: [
          "מחממים תנור ל־180°C",
          "משמנים תבנית, משפשפים אותה בשום",
          "מסדרים שכבות של תפוחי אדמה, כל שכבה מתובלת",
          "יוצקים מעל את השמנת המתובלת",
          "אופים 50 דקות עד שהשכבות רכות והחלק העליון זהוב ומבעבע"
        ],
        tags: ["תוספת עשירה", "מנה חגיגית"]
      }
    }
  },
  {
    id: "french_7",
    name: "Beef Bourguignon",
    cuisine: "French",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "35 minutes",
    cookTime: "2 hours",
    servings: 4,
    ingredients: [
      "600g beef for goulash – cut into cubes",
      "2 tablespoons olive oil",
      "1 chopped onion",
      "2 carrots cut into rounds",
      "2 cups dry red wine",
      "1 tablespoon tomato paste",
      "2 garlic cloves",
      "1 teaspoon dried thyme",
      "½ teaspoon salt",
      "¼ teaspoon pepper"
    ],
    instructions: [
      "Brown the beef cubes in oil, remove to a bowl",
      "Sauté the onion, garlic, and carrots for 5 minutes",
      "Add the beef, tomato paste, seasonings, and wine",
      "Cook on low heat for 2 hours until meat is tender and sauce is thick",
      "Serve with rice or mashed potatoes"
    ],
    image: "beef-bourguignon.jpg",
    tags: ["slow cooking", "winter"],
    translations: {
      en: {
        name: "Beef Bourguignon",
        cuisine: "French",
        dishType: "Meat",
        dietaryOptions: ["Kosher"],
        ingredients: [
          "600g beef for goulash – cut into cubes",
          "2 tablespoons olive oil",
          "1 chopped onion",
          "2 carrots cut into rounds",
          "2 cups dry red wine",
          "1 tablespoon tomato paste",
          "2 garlic cloves",
          "1 teaspoon dried thyme",
          "½ teaspoon salt",
          "¼ teaspoon pepper"
        ],
        instructions: [
          "Brown the beef cubes in oil, remove to a bowl",
          "Sauté the onion, garlic, and carrots for 5 minutes",
          "Add the beef, tomato paste, seasonings, and wine",
          "Cook on low heat for 2 hours until meat is tender and sauce is thick",
          "Serve with rice or mashed potatoes"
        ],
        tags: ["slow cooking", "winter"]
      },
      he: {
        name: "בף בורגיניון",
        cuisine: "צרפתי",
        dishType: "בשרי",
        dietaryOptions: ["כשר"],
        ingredients: [
          "600 גרם בקר לגולאש – חתוך לקוביות",
          "2 כפות שמן זית",
          "1 בצל קצוץ",
          "2 גזרים חתוכים לעיגולים",
          "2 כוסות יין אדום יבש",
          "1 כף רסק עגבניות",
          "2 שיני שום",
          "1 כפית תימין יבש",
          "½ כפית מלח",
          "¼ כפית פלפל"
        ],
        instructions: [
          "משחימים את קוביות הבקר בשמן, מוציאים לקערה",
          "מטגנים את הבצל, השום והגזר 5 דקות",
          "מוסיפים את הבקר, רסק, תבלינים ויין",
          "מבשלים על להבה נמוכה כשעתיים עד שהבשר רך והרוטב סמיך",
          "מגישים עם אורז או פירה"
        ],
        tags: ["בישול איטי", "חורפי"]
      }
    }
  },
  {
    id: "french_8",
    name: "Crème Brûlée",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "40 minutes + cooling",
    servings: 4,
    ingredients: [
      "4 egg yolks",
      "2 cups heavy cream",
      "½ cup sugar",
      "1 teaspoon vanilla extract",
      "3 tablespoons brown sugar for caramelizing"
    ],
    instructions: [
      "Preheat oven to 150°C (300°F)",
      "Whisk egg yolks with white sugar and vanilla",
      "Heat cream (do not boil) and mix with the egg mixture",
      "Pour into small ramekins and bake in a water bath for about 40 minutes",
      "Cool for at least 3 hours. Before serving, sprinkle brown sugar and torch until caramelized"
    ],
    image: "creme-brulee.jpg",
    tags: ["classic", "sweet", "impressive"],
    translations: {
      en: {
        name: "Crème Brûlée",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "4 egg yolks",
          "2 cups heavy cream",
          "½ cup sugar",
          "1 teaspoon vanilla extract",
          "3 tablespoons brown sugar for caramelizing"
        ],
        instructions: [
          "Preheat oven to 150°C (300°F)",
          "Whisk egg yolks with white sugar and vanilla",
          "Heat cream (do not boil) and mix with the egg mixture",
          "Pour into small ramekins and bake in a water bath for about 40 minutes",
          "Cool for at least 3 hours. Before serving, sprinkle brown sugar and torch until caramelized"
        ],
        tags: ["classic", "sweet", "impressive"]
      },
      he: {
        name: "קרם ברולה",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["צמחוני", "כשר"],
        ingredients: [
          "4 חלמונים",
          "2 כוסות שמנת מתוקה",
          "½ כוס סוכר",
          "1 כפית תמצית וניל",
          "3 כפות סוכר חום לצריבה"
        ],
        instructions: [
          "מחממים תנור ל־150°C",
          "טורפים חלמונים עם סוכר לבן ווניל",
          "מחממים שמנת (לא לרתיחה) ומערבבים עם התערובת",
          "יוצקים לתבניות קטנות, ואופים בתוך אמבט מים כ־40 דקות",
          "מקררים 3 שעות לפחות. לפני הגשה, מפזרים סוכר חום ושורפים עם ברנר עד להשחמה קרמלית"
        ],
        tags: ["קלאסי", "מתוק", "רושם"]
      }
    }
  },
  {
    id: "french_9",
    name: "Tarte Tatin",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "20 minutes",
    cookTime: "40 minutes",
    servings: 6,
    ingredients: [
      "5 apples, peeled – cut into quarters",
      "100g butter",
      "½ cup sugar",
      "1 sheet ready-made puff pastry",
      "¼ teaspoon cinnamon (optional)"
    ],
    instructions: [
      "Melt butter and sugar in an oven-safe pan until sugar caramelizes",
      "Arrange apple quarters tightly in the pan",
      "Cook for about 10 minutes until apples are slightly tender",
      "Place pastry over the apples and press down at the edges",
      "Bake for 30 minutes at 190°C, carefully flip before serving"
    ],
    image: "tarte-tatin.jpg",
    tags: ["classic dessert", "fruit", "baked"],
    translations: {
      en: {
        name: "Tarte Tatin",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "5 apples, peeled – cut into quarters",
          "100g butter",
          "½ cup sugar",
          "1 sheet ready-made puff pastry",
          "¼ teaspoon cinnamon (optional)"
        ],
        instructions: [
          "Melt butter and sugar in an oven-safe pan until sugar caramelizes",
          "Arrange apple quarters tightly in the pan",
          "Cook for about 10 minutes until apples are slightly tender",
          "Place pastry over the apples and press down at the edges",
          "Bake for 30 minutes at 190°C, carefully flip before serving"
        ],
        tags: ["classic dessert", "fruit", "baked"]
      },
      he: {
        name: "טארט טאטן",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["צמחוני", "כשר"],
        ingredients: [
          "5 תפוחים קלופים – חתוכים לרבעים",
          "100 גרם חמאה",
          "½ כוס סוכר",
          "1 בצק עלים מוכן",
          "¼ כפית קינמון (אופציונלי)"
        ],
        instructions: [
          "מטגנים חמאה וסוכר במחבת חסינת תנור עד שהסוכר מזהיב",
          "מסדרים את תפוחי העץ בצפיפות במחבת",
          "מבשלים כ־10 דקות עד שהתפוחים רכים מעט",
          "מניחים את הבצק מעל התפוחים ומהדקים בקצוות",
          "אופים 30 דקות ב־190°C, הופכים בזהירות לקראת הגשה"
        ],
        tags: ["קינוח קלאסי", "פירות", "תנור"]
      }
    }
  },
  {
    id: "french_10",
    name: "French Chocolate Mousse",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "20 minutes",
    cookTime: "3 hours cooling",
    servings: 4,
    ingredients: [
      "200g quality dark chocolate (at least 60%)",
      "3 eggs – separated",
      "2 tablespoons sugar",
      "1 teaspoon vanilla extract",
      "Pinch of salt"
    ],
    instructions: [
      "Melt chocolate over bain-marie (water bath) and cool slightly",
      "Whisk egg yolks with vanilla and mix into chocolate",
      "Beat egg whites with pinch of salt and sugar until stiff peaks",
      "Gently fold the whipped whites into the chocolate mixture",
      "Divide into glasses and refrigerate for at least 3 hours"
    ],
    image: "chocolate-mousse.jpg",
    tags: ["gluten-free", "sweet", "entertaining"],
    translations: {
      en: {
        name: "French Chocolate Mousse",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
        ingredients: [
          "200g quality dark chocolate (at least 60%)",
          "3 eggs – separated",
          "2 tablespoons sugar",
          "1 teaspoon vanilla extract",
          "Pinch of salt"
        ],
        instructions: [
          "Melt chocolate over bain-marie (water bath) and cool slightly",
          "Whisk egg yolks with vanilla and mix into chocolate",
          "Beat egg whites with pinch of salt and sugar until stiff peaks",
          "Gently fold the whipped whites into the chocolate mixture",
          "Divide into glasses and refrigerate for at least 3 hours"
        ],
        tags: ["gluten-free", "sweet", "entertaining"]
      },
      he: {
        name: "מוס שוקולד צרפתי",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["צמחוני", "כשר", "ללא גלוטן"],
        ingredients: [
          "200 גרם שוקולד מריר איכותי (לפחות 60%)",
          "3 ביצים – מופרדות",
          "2 כפות סוכר",
          "1 כפית תמצית וניל",
          "קורט מלח"
        ],
        instructions: [
          "ממיסים את השוקולד על בן מארי (אמבט מים) ומקררים מעט",
          "טורפים חלמונים עם וניל ומערבבים לתוך השוקולד",
          "מקציפים חלבונים עם קורט מלח וסוכר עד לקצף יציב",
          "מקפלים את הקצף בעדינות לתערובת השוקולד",
          "מחלקים לכוסות ומקררים לפחות 3 שעות"
        ],
        tags: ["ללא גלוטן", "מתוק", "אירוח"]
      }
    }
  },
  {
    id: "french_11",
    name: "Classic Butter Croissants",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Hard",
    prepTime: "45 minutes + 8 hours cooling",
    cookTime: "20 minutes baking",
    servings: 12,
    ingredients: [
      "500g white flour",
      "250ml lukewarm water",
      "2 tablespoons sugar",
      "10g dry yeast",
      "1 teaspoon salt",
      "300g cold butter",
      "1 egg for glazing"
    ],
    instructions: [
      "Mix flour, sugar, salt, yeast, and water, form dough and refrigerate for 1 hour",
      "Roll butter between two baking papers into a rectangle and place inside the dough",
      "Make folds (3 times) and refrigerate between each fold for about 1 hour",
      "Roll out, cut into triangles and roll into croissant shape",
      "Let rise for 2 hours, brush with egg, and bake at 200°C for about 20 minutes until golden and fragrant"
    ],
    image: "butter-croissants.jpg",
    tags: ["laminated pastry", "butter", "classic"],
    translations: {
      en: {
        name: "Classic Butter Croissants",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "500g white flour",
          "250ml lukewarm water",
          "2 tablespoons sugar",
          "10g dry yeast",
          "1 teaspoon salt",
          "300g cold butter",
          "1 egg for glazing"
        ],
        instructions: [
          "Mix flour, sugar, salt, yeast, and water, form dough and refrigerate for 1 hour",
          "Roll butter between two baking papers into a rectangle and place inside the dough",
          "Make folds (3 times) and refrigerate between each fold for about 1 hour",
          "Roll out, cut into triangles and roll into croissant shape",
          "Let rise for 2 hours, brush with egg, and bake at 200°C for about 20 minutes until golden and fragrant"
        ],
        tags: ["laminated pastry", "butter", "classic"]
      },
      he: {
        name: "קרואסון חמאה קלאסי",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["צמחוני", "כשר"],
        ingredients: [
          "500 גרם קמח לבן",
          "250 מ״ל מים פושרים",
          "2 כפות סוכר",
          "10 גרם שמרים יבשים",
          "1 כפית מלח",
          "300 גרם חמאה קרה",
          "1 ביצה להברשה"
        ],
        instructions: [
          "מערבבים קמח, סוכר, מלח, שמרים ומים, יוצרים בצק ומקררים 1 שעה",
          "מרדדים חמאה בין שני ניירות אפייה למלבן ומכניסים לתוך הבצק",
          "עושים קיפולים (3 פעמים) ומקררים בין כל קיפול כשעה",
          "מרדדים, חותכים למשולשים ומגלגלים לצורת קרואסון",
          "מתפיחים 2 שעות, מברישים ביצה, ואופים ב־200°C כ־20 דקות עד זהוב וריחני"
        ],
        tags: ["מאפה עלים", "חמאה", "קלאסי"]
      }
    }
  },
  {
    id: "french_12",
    name: "Classic Brioche",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "30 minutes + 3 hours rising",
    cookTime: "35 minutes baking",
    servings: 8,
    ingredients: [
      "500g white flour",
      "100g sugar",
      "10g dry yeast",
      "4 eggs",
      "200g soft butter",
      "¼ teaspoon salt"
    ],
    instructions: [
      "Mix flour, sugar, yeast, and salt, add eggs and knead",
      "Add butter gradually and knead until completely melted into the dough",
      "Let rise for 1 hour, shape into buns or whole loaf, and let rise again for 1½ hours",
      "Bake at 180°C for 35 minutes until puffed and golden",
      "Cool slightly and serve with jam or honey"
    ],
    image: "classic-brioche.jpg",
    tags: ["sweet pastry", "celebration bread"],
    translations: {
      en: {
        name: "Classic Brioche",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "500g white flour",
          "100g sugar",
          "10g dry yeast",
          "4 eggs",
          "200g soft butter",
          "¼ teaspoon salt"
        ],
        instructions: [
          "Mix flour, sugar, yeast, and salt, add eggs and knead",
          "Add butter gradually and knead until completely melted into the dough",
          "Let rise for 1 hour, shape into buns or whole loaf, and let rise again for 1½ hours",
          "Bake at 180°C for 35 minutes until puffed and golden",
          "Cool slightly and serve with jam or honey"
        ],
        tags: ["sweet pastry", "celebration bread"]
      },
      he: {
        name: "בריוש חמאה מתוק",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "500 גרם קמח לבן",
          "100 גרם סוכר",
          "10 גרם שמרים יבשים",
          "4 ביצים",
          "200 גרם חמאה רכה",
          "¼ כפית מלח"
        ],
        instructions: [
          "מערבבים קמח, סוכר, שמרים ומלח, מוסיפים ביצים ולשים",
          "מוסיפים חמאה בהדרגה ולשים עד שנמסה לחלוטין בבצק",
          "מתפיחים כשעה, יוצרים צורת לחמניות או תבנית שלמה, ומתפיחים שוב שעה וחצי",
          "אופים ב־180°C למשך 35 דקות עד שהמאפה תפוח וזהוב",
          "מקררים מעט ומגישים עם ריבה או דבש"
        ],
        tags: ["מאפה מתוק", "לחם חגיגי"]
      }
    }
  },
  {
    id: "french_13",
    name: "Pain au Chocolat",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Hard",
    prepTime: "45 minutes + 6 hours cooling",
    cookTime: "20 minutes baking",
    servings: 8,
    ingredients: [
      "500g flour",
      "250ml water",
      "2 tablespoons sugar",
      "1 teaspoon salt",
      "10g yeast",
      "250g butter",
      "100g dark chocolate",
      "1 egg for glazing"
    ],
    instructions: [
      "Prepare yeast dough and refrigerate for 1 hour",
      "Roll butter into a rectangle and fold into dough — similar process to croissants",
      "After 3 folds and cooling, roll out and cut into rectangles",
      "Place chocolate strips in each rectangle and roll up",
      "Let rise, brush with egg, bake at 200°C for about 20 minutes until puffed and golden"
    ],
    image: "pain-au-chocolat.jpg",
    tags: ["breakfast pastry", "chocolate", "individual pastry"],
    translations: {
      en: {
        name: "Pain au Chocolat",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "500g flour",
          "250ml water",
          "2 tablespoons sugar",
          "1 teaspoon salt",
          "10g yeast",
          "250g butter",
          "100g dark chocolate",
          "1 egg for glazing"
        ],
        instructions: [
          "Prepare yeast dough and refrigerate for 1 hour",
          "Roll butter into a rectangle and fold into dough — similar process to croissants",
          "After 3 folds and cooling, roll out and cut into rectangles",
          "Place chocolate strips in each rectangle and roll up",
          "Let rise, brush with egg, bake at 200°C for about 20 minutes until puffed and golden"
        ],
        tags: ["breakfast pastry", "chocolate", "individual pastry"]
      },
      he: {
        name: "פיין או שוקולה",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "500 גרם קמח",
          "250 מ״ל מים",
          "2 כפות סוכר",
          "1 כפית מלח",
          "10 גרם שמרים",
          "250 גרם חמאה",
          "100 גרם שוקולד מריר",
          "1 ביצה להברשה"
        ],
        instructions: [
          "מכינים בצק שמרים ומקררים שעה",
          "מרדדים חמאה למלבן ומקפלים בבצק — תהליך דומה לקרואסון",
          "אחרי 3 קיפולים וקירור, מרדדים וקורצים מלבנים",
          "מניחים רצועות שוקולד בכל מלבן ומגלגלים",
          "מתפיחים, מברישים, אופים ב־200°C כ־20 דקות עד שהקרואסון תפוח וזהוב"
        ],
        tags: ["מאפה בוקר", "שוקולד", "מאפה אישי"]
      }
    }
  },
  {
    id: "french_14",
    name: "Profiteroles with Vanilla Cream",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "25 minutes baking + cooling",
    servings: 6,
    ingredients: [
      "1 cup water",
      "100g butter",
      "1 tablespoon sugar",
      "1 cup flour",
      "3 eggs",
      "1 cup milk",
      "3 tablespoons instant vanilla pudding",
      "¼ cup sweet cream"
    ],
    instructions: [
      "Bring water, butter, and sugar to a boil. Add flour and mix until dough pulls away from sides",
      "Cool slightly, add eggs one by one until smooth dough forms",
      "Pipe profiteroles, bake at 200°C for 25 minutes until puffed and golden",
      "Meanwhile, mix milk, pudding, and cream for vanilla whipped cream",
      "After profiteroles cool — fill with cream and serve"
    ],
    image: "profiteroles-vanilla.jpg",
    tags: ["individual dessert", "filled", "entertaining"],
    translations: {
      en: {
        name: "Profiteroles with Vanilla Cream",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "1 cup water",
          "100g butter",
          "1 tablespoon sugar",
          "1 cup flour",
          "3 eggs",
          "1 cup milk",
          "3 tablespoons instant vanilla pudding",
          "¼ cup sweet cream"
        ],
        instructions: [
          "Bring water, butter, and sugar to a boil. Add flour and mix until dough pulls away from sides",
          "Cool slightly, add eggs one by one until smooth dough forms",
          "Pipe profiteroles, bake at 200°C for 25 minutes until puffed and golden",
          "Meanwhile, mix milk, pudding, and cream for vanilla whipped cream",
          "After profiteroles cool — fill with cream and serve"
        ],
        tags: ["individual dessert", "filled", "entertaining"]
      },
      he: {
        name: "פחזניות עם קרם וניל",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "1 כוס מים",
          "100 גרם חמאה",
          "1 כף סוכר",
          "1 כוס קמח",
          "3 ביצים",
          "1 כוס חלב",
          "3 כפות אינסטנט פודינג וניל",
          "¼ כוס שמנת מתוקה"
        ],
        instructions: [
          "מרתיחים מים, חמאה וסוכר. מוסיפים קמח ומערבבים עד שהבצק מתנתק מהדפנות",
          "מצננים מעט, מוסיפים ביצים אחת־אחת עד קבלת בצק חלק",
          "מזלפים פחזניות, אופים ב־200°C ל־25 דקות עד תפיחה וזהוב",
          "בינתיים מערבבים את החלב, פודינג ושמנת לקצפת וניל",
          "לאחר שהפחזניות מתקררות – ממלאים בקרם ומגישים"
        ],
        tags: ["קינוח אישי", "ממולא", "אירוח"]
      }
    }
  },
  {
    id: "french_15",
    name: "Classic French Macarons",
    cuisine: "French",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
    difficulty: "Hard",
    prepTime: "40 minutes + cooling",
    cookTime: "15 minutes baking",
    servings: 12,
    ingredients: [
      "1 cup powdered sugar",
      "¾ cup ground almonds",
      "2 egg whites",
      "¼ cup white sugar",
      "½ teaspoon vanilla extract",
      "Food coloring (optional)"
    ],
    instructions: [
      "Sift powdered sugar and almonds together",
      "Beat egg whites to soft peaks, gradually add sugar for stable mixture",
      "Fold almond mixture in until uniform paste forms",
      "Pipe circles, dry at room temperature for 1 hour",
      "Bake at 160°C for 15 minutes, cool and fill with cream or ganache as desired"
    ],
    image: "classic-macarons.jpg",
    tags: ["cookies", "gluten-free", "festive"],
    translations: {
      en: {
        name: "Classic French Macarons",
        cuisine: "French",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
        ingredients: [
          "1 cup powdered sugar",
          "¾ cup ground almonds",
          "2 egg whites",
          "¼ cup white sugar",
          "½ teaspoon vanilla extract",
          "Food coloring (optional)"
        ],
        instructions: [
          "Sift powdered sugar and almonds together",
          "Beat egg whites to soft peaks, gradually add sugar for stable mixture",
          "Fold almond mixture in until uniform paste forms",
          "Pipe circles, dry at room temperature for 1 hour",
          "Bake at 160°C for 15 minutes, cool and fill with cream or ganache as desired"
        ],
        tags: ["cookies", "gluten-free", "festive"]
      },
      he: {
        name: "מקרון צרפתי בסיסי",
        cuisine: "צרפתי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "1 כוס אבקת סוכר",
          "¾ כוס שקדים טחונים",
          "2 חלבוני ביצה",
          "¼ כוס סוכר לבן",
          "½ כפית תמצית וניל",
          "צבע מאכל (אופציונלי)"
        ],
        instructions: [
          "מנפים אבקת סוכר ושקדים יחד",
          "מקציפים חלבונים עד קצף רך, מוסיפים סוכר בהדרגה לתערובת יציבה",
          "מקפלים את תערובת השקדים פנימה עד עיסה אחידה",
          "מזלפים עיגולים, מייבשים בטמפ' חדר שעה",
          "אופים ב־160°C ל־15 דקות, מקררים וממלאים בקרם או גנאש לפי רצון"
        ],
        tags: ["עוגיות", "ללא גלוטן", "פסטיבל"]
      }
    }
  }
];