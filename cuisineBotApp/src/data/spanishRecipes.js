// spanishRecipes.js

export const spanishRecipes = [
  {
    id: "spanish_1",
    name: "Seafood Paella",
    cuisine: "Spanish",
    dishType: "Seafood",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Hard",
    prepTime: "30 minutes",
    cookTime: "45 minutes",
    servings: 6,
    ingredients: [
      "2 cups Bomba rice",
      "4 cups fish stock",
      "1/2 cup olive oil",
      "1 onion, diced",
      "4 garlic cloves, minced",
      "1 red bell pepper, sliced",
      "1 tomato, grated",
      "1/2 teaspoon saffron threads",
      "1 lb mixed seafood (shrimp, mussels, clams)",
      "1/2 cup frozen peas",
      "Lemon wedges",
      "Fresh parsley"
    ],
    instructions: [
      "Heat olive oil in a large paella pan over medium heat",
      "Sauté onion, garlic, and bell pepper until softened",
      "Add grated tomato and cook for 2 minutes",
      "Add rice and saffron, stir to coat",
      "Pour in hot fish stock and bring to a boil",
      "Reduce heat and simmer for 15 minutes",
      "Add seafood and peas, cook for 5-10 minutes more",
      "Let rest for 5 minutes before serving with lemon and parsley"
    ],
    image: "paella.jpg",
    tags: ["seafood", "rice", "traditional"]
  },
  {
    id: "spanish_2",
    name: "Patatas Bravas",
    cuisine: "Spanish",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Vegan"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 4,
    ingredients: [
      "4 large potatoes, cubed",
      "1/4 cup olive oil",
      "4 garlic cloves, minced",
      "2 tablespoons paprika",
      "1 teaspoon cayenne pepper",
      "1/2 cup mayonnaise",
      "1 tablespoon lemon juice",
      "Salt and pepper",
      "Fresh parsley"
    ],
    instructions: [
      "Boil potato cubes in salted water for 5 minutes, drain",
      "Heat olive oil in a large skillet over medium-high heat",
      "Fry potatoes until golden and crispy",
      "In a small bowl, mix mayonnaise, garlic, paprika, and lemon juice",
      "Serve potatoes with spicy sauce and garnish with parsley"
    ],
    image: "patatas-bravas.jpg",
    tags: ["tapas", "vegetarian", "spicy"]
  },
  {
    id: "spanish_3",
    name: "Gazpacho",
    cuisine: "Spanish",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "20 minutes",
    cookTime: "0 minutes",
    servings: 4,
    ingredients: [
      "6 ripe tomatoes",
      "1 cucumber, peeled",
      "1 red bell pepper",
      "1 small red onion",
      "2 garlic cloves",
      "3 tablespoons olive oil",
      "2 tablespoons red wine vinegar",
      "1 cup water",
      "Salt and pepper",
      "Croutons for garnish"
    ],
    instructions: [
      "Roughly chop all vegetables",
      "In a blender, combine vegetables, garlic, olive oil, vinegar, and water",
      "Blend until smooth",
      "Season with salt and pepper",
      "Chill for at least 2 hours before serving",
      "Serve with croutons and diced vegetables on top"
    ],
    image: "gazpacho.jpg",
    tags: ["cold", "soup", "summer"]
  },
  {
    id: "spanish_4",
    name: "Cold Summer Gazpacho",
    cuisine: "Spanish",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "0 minutes",
    servings: 4,
    ingredients: [
      "3 medium tomatoes",
      "1 cucumber",
      "1 red bell pepper",
      "½ onion",
      "1 garlic clove",
      "2 tablespoons olive oil",
      "1 tablespoon vinegar",
      "½ teaspoon salt",
      "¾ cup cold water"
    ],
    instructions: [
      "Cut vegetables and place in blender",
      "Add oil, vinegar, salt, and water – blend until smooth",
      "Chill for at least 1 hour and serve cold"
    ],
    image: "cold-summer-gazpacho.jpg",
    tags: ["appetizer", "summer", "cold soup"],
    translations: {
      en: {
        name: "Cold Summer Gazpacho",
        cuisine: "Spanish",
        dishType: "Vegan",
        dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
        ingredients: [
          "3 medium tomatoes",
          "1 cucumber",
          "1 red bell pepper",
          "½ onion",
          "1 garlic clove",
          "2 tablespoons olive oil",
          "1 tablespoon vinegar",
          "½ teaspoon salt",
          "¾ cup cold water"
        ],
        instructions: [
          "Cut vegetables and place in blender",
          "Add oil, vinegar, salt, and water – blend until smooth",
          "Chill for at least 1 hour and serve cold"
        ],
        tags: ["appetizer", "summer", "cold soup"]
      },
      he: {
        name: "גספצ'ו קייצי קר",
        cuisine: "ספרדי",
        dishType: "טבעוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "3 עגבניות בינוניות",
          "1 מלפפון",
          "1 פלפל אדום",
          "½ בצל",
          "1 שן שום",
          "2 כפות שמן זית",
          "1 כף חומץ",
          "½ כפית מלח",
          "¾ כוס מים קרים"
        ],
        instructions: [
          "חותכים את הירקות ומכניסים לבלנדר",
          "מוסיפים שמן, חומץ, מלח ומים — טוחנים עד למרקם חלק",
          "מצננים לפחות שעה ומגישים קר"
        ],
        tags: ["מנה ראשונה", "קיץ", "מרק קר"]
      }
    }
  },
  {
    id: "spanish_5",
    name: "Spanish Tortilla with Potatoes",
    cuisine: "Spanish",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 4,
    ingredients: [
      "2 peeled potatoes – thinly sliced",
      "1 chopped onion",
      "4 eggs",
      "4 tablespoons olive oil",
      "½ teaspoon salt",
      "¼ teaspoon pepper"
    ],
    instructions: [
      "Fry potatoes and onion in oil until softened and golden",
      "Beat eggs with spices, add vegetables",
      "Pour into pan, cook 10 minutes each side or until egg sets",
      "Serve hot or at room temperature"
    ],
    image: "spanish-tortilla-potatoes.jpg",
    tags: ["main course", "dinner", "skillet"],
    translations: {
      en: {
        name: "Spanish Tortilla with Potatoes",
        cuisine: "Spanish",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "2 peeled potatoes – thinly sliced",
          "1 chopped onion",
          "4 eggs",
          "4 tablespoons olive oil",
          "½ teaspoon salt",
          "¼ teaspoon pepper"
        ],
        instructions: [
          "Fry potatoes and onion in oil until softened and golden",
          "Beat eggs with spices, add vegetables",
          "Pour into pan, cook 10 minutes each side or until egg sets",
          "Serve hot or at room temperature"
        ],
        tags: ["main course", "dinner", "skillet"]
      },
      he: {
        name: "טורטייה ספרדית עם תפוחי אדמה",
        cuisine: "ספרדי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "2 תפוחי אדמה קלופים – פרוסים דק",
          "1 בצל קצוץ",
          "4 ביצים",
          "4 כפות שמן זית",
          "½ כפית מלח",
          "¼ כפית פלפל"
        ],
        instructions: [
          "מטגנים תפוחי אדמה ובצל בשמן עד שמתרככים וזהובים",
          "טורפים ביצים עם תבלינים, מוסיפים את הירקות",
          "יוצקים למחבת, מבשלים 10 דקות מכל צד או עד שהביצה מתייצבת",
          "מגישים חם או בטמפ' חדר"
        ],
        tags: ["עיקרית", "ארוחת ערב", "מחבת"]
      }
    }
  },
  {
    id: "spanish_6",
    name: "Vegetarian Paella",
    cuisine: "Spanish",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "20 minutes",
    cookTime: "40 minutes",
    servings: 4,
    ingredients: [
      "1 cup round rice",
      "1 chopped onion",
      "1 sliced red bell pepper",
      "1 chopped tomato",
      "1 garlic clove",
      "½ cup green peas",
      "2.5 cups water or vegetable broth",
      "½ teaspoon sweet paprika",
      "¼ teaspoon turmeric",
      "3 tablespoons olive oil",
      "½ teaspoon salt"
    ],
    instructions: [
      "Fry onion and garlic, add vegetables and spices",
      "Add rice and stir for 2 minutes",
      "Add water, cover and cook until rice is tender",
      "Let rest for 5 minutes, serve with lemon on the side"
    ],
    image: "vegetarian-paella.jpg",
    tags: ["main course", "gluten-free", "vegetarian"],
    translations: {
      en: {
        name: "Vegetarian Paella",
        cuisine: "Spanish",
        dishType: "Vegan",
        dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
        ingredients: [
          "1 cup round rice",
          "1 chopped onion",
          "1 sliced red bell pepper",
          "1 chopped tomato",
          "1 garlic clove",
          "½ cup green peas",
          "2.5 cups water or vegetable broth",
          "½ teaspoon sweet paprika",
          "¼ teaspoon turmeric",
          "3 tablespoons olive oil",
          "½ teaspoon salt"
        ],
        instructions: [
          "Fry onion and garlic, add vegetables and spices",
          "Add rice and stir for 2 minutes",
          "Add water, cover and cook until rice is tender",
          "Let rest for 5 minutes, serve with lemon on the side"
        ],
        tags: ["main course", "gluten-free", "vegetarian"]
      },
      he: {
        name: "פאייה צמחונית",
        cuisine: "ספרדי",
        dishType: "טבעוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "1 כוס אורז עגול",
          "1 בצל קצוץ",
          "1 פלפל אדום חתוך",
          "1 עגבנייה קצוצה",
          "1 שן שום",
          "½ כוס אפונה ירוקה",
          "2.5 כוסות מים או ציר ירקות",
          "½ כפית פפריקה מתוקה",
          "¼ כפית כורכום",
          "3 כפות שמן זית",
          "½ כפית מלח"
        ],
        instructions: [
          "מטגנים בצל ושום, מוסיפים ירקות ותבלינים",
          "מוסיפים אורז ומערבבים 2 דקות",
          "מוסיפים מים, מכסים ומבשלים עד שהאורז רך",
          "מניחים לכ־5 דקות, מגישים עם לימון בצד"
        ],
        tags: ["עיקרית", "ללא גלוטן", "צמחוני"]
      }
    }
  },
  {
    id: "spanish_7",
    name: "Spanish Churros with Sugar",
    cuisine: "Spanish",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 6,
    ingredients: [
      "1 cup water",
      "2 tablespoons sugar",
      "2 tablespoons butter",
      "1 cup flour",
      "1 egg",
      "Oil for frying",
      "¼ cup sugar for coating",
      "½ teaspoon cinnamon (optional)"
    ],
    instructions: [
      "Boil water, butter, and sugar, add flour and mix",
      "Cool, add egg and mix until dough is smooth",
      "Pipe sticks into hot oil and fry until golden",
      "Roll in sugar and cinnamon, serve with chocolate sauce"
    ],
    image: "spanish-churros-sugar.jpg",
    tags: ["dessert", "fried", "festive"],
    translations: {
      en: {
        name: "Spanish Churros with Sugar",
        cuisine: "Spanish",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "1 cup water",
          "2 tablespoons sugar",
          "2 tablespoons butter",
          "1 cup flour",
          "1 egg",
          "Oil for frying",
          "¼ cup sugar for coating",
          "½ teaspoon cinnamon (optional)"
        ],
        instructions: [
          "Boil water, butter, and sugar, add flour and mix",
          "Cool, add egg and mix until dough is smooth",
          "Pipe sticks into hot oil and fry until golden",
          "Roll in sugar and cinnamon, serve with chocolate sauce"
        ],
        tags: ["dessert", "fried", "festive"]
      },
      he: {
        name: "צ'ורוס ספרדיים עם סוכר",
        cuisine: "ספרדי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "1 כוס מים",
          "2 כפות סוכר",
          "2 כפות חמאה",
          "1 כוס קמח",
          "1 ביצה",
          "שמן לטיגון",
          "¼ כוס סוכר לקישוט",
          "½ כפית קינמון (אופציונלי)"
        ],
        instructions: [
          "מרתיחים מים, חמאה וסוכר, מוסיפים קמח ומערבבים",
          "מקררים, מוסיפים ביצה ומערבבים עד שהבצק חלק",
          "מזלפים מקלות לתוך שמן חם ומטגנים עד הזהבה",
          "מגלגלים בסוכר וקינמון, מגישים עם רוטב שוקולד"
        ],
        tags: ["קינוח", "מטוגן", "חגיגי"]
      }
    }
  },
  {
    id: "spanish_8",
    name: "Patatas Bravas",
    cuisine: "Spanish",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "15 minutes",
    cookTime: "25 minutes",
    servings: 4,
    ingredients: [
      "2 potatoes – cut into cubes",
      "1 tablespoon olive oil",
      "½ teaspoon salt",
      "½ tablespoon tomato paste",
      "½ teaspoon hot paprika",
      "¼ teaspoon cumin",
      "2 tablespoons water"
    ],
    instructions: [
      "Preheat oven to 200°C and bake oiled potatoes until golden",
      "Mix tomato paste with spices and water to create sauce",
      "Pour hot sauce over prepared potatoes and serve"
    ],
    image: "patatas-bravas-vegan.jpg",
    tags: ["tapas", "spicy", "vegan"],
    translations: {
      en: {
        name: "Patatas Bravas",
        cuisine: "Spanish",
        dishType: "Vegan",
        dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
        ingredients: [
          "2 potatoes – cut into cubes",
          "1 tablespoon olive oil",
          "½ teaspoon salt",
          "½ tablespoon tomato paste",
          "½ teaspoon hot paprika",
          "¼ teaspoon cumin",
          "2 tablespoons water"
        ],
        instructions: [
          "Preheat oven to 200°C and bake oiled potatoes until golden",
          "Mix tomato paste with spices and water to create sauce",
          "Pour hot sauce over prepared potatoes and serve"
        ],
        tags: ["tapas", "spicy", "vegan"]
      },
      he: {
        name: "טאטס בראוואס",
        cuisine: "ספרדי",
        dishType: "טבעוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "2 תפוחי אדמה – חתוכים לקוביות",
          "1 כף שמן זית",
          "½ כפית מלח",
          "½ כף רסק עגבניות",
          "½ כפית פפריקה חריפה",
          "¼ כפית כמון",
          "2 כפות מים"
        ],
        instructions: [
          "מחממים תנור ל־200°C ואופים תפוחי אדמה משומנים עד זהבה",
          "מערבבים רסק עם תבלינים ומים ליצירת רוטב",
          "מוזגים את הרוטב החם מעל תפוחי האדמה המוכנים ומגישים"
        ],
        tags: ["טפאס", "חריף", "טבעוני"]
      }
    }
  },
  {
    id: "spanish_9",
    name: "Crema Catalana",
    cuisine: "Spanish",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "40 minutes + cooling",
    servings: 4,
    ingredients: [
      "3 egg yolks",
      "1.5 cups milk",
      "3 tablespoons sugar",
      "½ teaspoon grated lemon zest",
      "½ teaspoon vanilla extract",
      "2 tablespoons cornstarch",
      "2 tablespoons brown sugar for caramelizing"
    ],
    instructions: [
      "Beat egg yolks with sugar, vanilla, lemon zest, and cornstarch",
      "Heat milk to almost boiling and mix into the mixture",
      "Pour into ramekins and bake at 160°C in water bath for about 40 minutes",
      "Cool for at least 3 hours, sprinkle brown sugar and caramelize with torch"
    ],
    image: "crema-catalana.jpg",
    tags: ["dessert", "impressive", "vegetarian"],
    translations: {
      en: {
        name: "Crema Catalana",
        cuisine: "Spanish",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher"],
        ingredients: [
          "3 egg yolks",
          "1.5 cups milk",
          "3 tablespoons sugar",
          "½ teaspoon grated lemon zest",
          "½ teaspoon vanilla extract",
          "2 tablespoons cornstarch",
          "2 tablespoons brown sugar for caramelizing"
        ],
        instructions: [
          "Beat egg yolks with sugar, vanilla, lemon zest, and cornstarch",
          "Heat milk to almost boiling and mix into the mixture",
          "Pour into ramekins and bake at 160°C in water bath for about 40 minutes",
          "Cool for at least 3 hours, sprinkle brown sugar and caramelize with torch"
        ],
        tags: ["dessert", "impressive", "vegetarian"]
      },
      he: {
        name: "קרם קטלאן",
        cuisine: "ספרדי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "3 חלמונים",
          "1.5 כוסות חלב",
          "3 כפות סוכר",
          "½ כפית קליפת לימון מגוררת",
          "½ כפית תמצית וניל",
          "2 כפות קורנפלור",
          "2 כפות סוכר חום לצריבה"
        ],
        instructions: [
          "טורפים חלמונים עם סוכר, וניל, קליפת לימון וקורנפלור",
          "מחממים חלב עד כמעט רתיחה ומערבבים לתוך התערובת",
          "יוצקים לתבניות ואופים ב־160°C באמבט מים כ־40 דקות",
          "מצננים לפחות 3 שעות, מפזרים סוכר חום וצרבים עם ברנר"
        ],
        tags: ["קינוח", "רושם", "צמחוני"]
      }
    }
  },
  {
    id: "spanish_10",
    name: "Spanish Empanadas – Meat or Veggie",
    cuisine: "Spanish",
    dishType: "Meat/Vegan",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "25 minutes",
    servings: 6,
    ingredients: [
      "1 package puff pastry or ready-made empanada dough",
      "200g ground meat or chopped vegetable mixture (mushrooms, onion, pepper)",
      "1 small onion – chopped",
      "1 garlic clove – crushed",
      "½ teaspoon paprika",
      "¼ teaspoon cumin",
      "¼ teaspoon salt",
      "1 egg for glazing"
    ],
    instructions: [
      "Fry onion, garlic, and meat or vegetables with spices until filling is ready",
      "Cut circles from dough, fill with spoonful of filling and close into half-moon shape",
      "Brush with egg and bake at 180°C for about 25 minutes until golden"
    ],
    image: "spanish-empanadas.jpg",
    tags: ["pastry", "main course", "tapas"],
    translations: {
      en: {
        name: "Spanish Empanadas – Meat or Veggie",
        cuisine: "Spanish",
        dishType: "Meat/Vegan",
        dietaryOptions: ["Kosher"],
        ingredients: [
          "1 package puff pastry or ready-made empanada dough",
          "200g ground meat or chopped vegetable mixture (mushrooms, onion, pepper)",
          "1 small onion – chopped",
          "1 garlic clove – crushed",
          "½ teaspoon paprika",
          "¼ teaspoon cumin",
          "¼ teaspoon salt",
          "1 egg for glazing"
        ],
        instructions: [
          "Fry onion, garlic, and meat or vegetables with spices until filling is ready",
          "Cut circles from dough, fill with spoonful of filling and close into half-moon shape",
          "Brush with egg and bake at 180°C for about 25 minutes until golden"
        ],
        tags: ["pastry", "main course", "tapas"]
      },
      he: {
        name: "אמפנדס ספרדיים – בשר או ירקות",
        cuisine: "ספרדי",
        dishType: "בשרי / טבעוני",
        dietaryOptions: ["כשר"],
        ingredients: [
          "1 חבילת בצק עלים או בצק אמפנדס מוכן",
          "200 גרם בשר טחון או תערובת ירקות קצוצים (פטריות, בצל, פלפל)",
          "1 בצל קטן – קצוץ",
          "1 שן שום – כתושה",
          "½ כפית פפריקה",
          "¼ כפית כמון",
          "¼ כפית מלח",
          "1 ביצה להברשה"
        ],
        instructions: [
          "מטגנים את הבצל, השום והבשר או הירקות עם התבלינים עד שהמילוי מוכן",
          "חותכים עיגולים מהבצק, ממלאים בכף מהמילוי וסוגרים לצורת חצי ירח",
          "מברישים ביצה ואופים ב־180°C כ־25 דקות עד הזהבה"
        ],
        tags: ["מאפה", "עיקרית", "טפאס"]
      }
    }
  },
  {
    id: "spanish_11",
    name: "Spanish Turron – Almond and Honey Nougat",
    cuisine: "Spanish",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "3 hours cooling",
    servings: 8,
    ingredients: [
      "1 cup roasted almonds",
      "½ cup honey",
      "¼ cup sugar",
      "1 beaten egg white",
      "¼ teaspoon vanilla extract"
    ],
    instructions: [
      "Heat honey and sugar until sugar dissolves",
      "Add beaten egg white and mix gently",
      "Add almonds and vanilla, pour into lined pan",
      "Cool for at least 3 hours until set, slice and serve"
    ],
    image: "spanish-turron-nougat.jpg",
    tags: ["dessert", "gluten-free", "traditional"],
    translations: {
      en: {
        name: "Spanish Turron – Almond and Honey Nougat",
        cuisine: "Spanish",
        dishType: "Vegetarian",
        dietaryOptions: ["Vegetarian", "Kosher", "Gluten-Free"],
        ingredients: [
          "1 cup roasted almonds",
          "½ cup honey",
          "¼ cup sugar",
          "1 beaten egg white",
          "¼ teaspoon vanilla extract"
        ],
        instructions: [
          "Heat honey and sugar until sugar dissolves",
          "Add beaten egg white and mix gently",
          "Add almonds and vanilla, pour into lined pan",
          "Cool for at least 3 hours until set, slice and serve"
        ],
        tags: ["dessert", "gluten-free", "traditional"]
      },
      he: {
        name: "טורון ספרדי – נוגט שקדים ודבש",
        cuisine: "ספרדי",
        dishType: "צמחוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "1 כוס שקדים קלויים",
          "½ כוס דבש",
          "¼ כוס סוכר",
          "1 חלבון ביצה מוקצף",
          "¼ כפית תמצית וניל"
        ],
        instructions: [
          "מחממים דבש וסוכר עד שהסוכר נמס",
          "מוסיפים את חלבון הביצה המוקצף ומערבבים בעדינות",
          "מוסיפים שקדים ווניל, יוצקים לתבנית מרופדת",
          "מקררים לפחות 3 שעות עד להתייצבות, פורסים ומגישים"
        ],
        tags: ["קינוח", "ללא גלוטן", "מסורתי"]
      }
    }
  },
  {
    id: "spanish_12",
    name: "Tapas Olives with Garlic and Lemon",
    cuisine: "Spanish",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    servings: 4,
    ingredients: [
      "1 cup pitted green olives",
      "1 garlic clove – crushed",
      "1 tablespoon olive oil",
      "1 teaspoon lemon juice",
      "½ teaspoon dried oregano",
      "Pinch of black pepper"
    ],
    instructions: [
      "Mix all ingredients in a bowl",
      "Marinate for 10 minutes to absorb flavors",
      "Serve as snack or alongside drinks"
    ],
    image: "tapas-olives-garlic-lemon.jpg",
    tags: ["tapas", "quick", "vegan"],
    translations: {
      en: {
        name: "Tapas Olives with Garlic and Lemon",
        cuisine: "Spanish",
        dishType: "Vegan",
        dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
        ingredients: [
          "1 cup pitted green olives",
          "1 garlic clove – crushed",
          "1 tablespoon olive oil",
          "1 teaspoon lemon juice",
          "½ teaspoon dried oregano",
          "Pinch of black pepper"
        ],
        instructions: [
          "Mix all ingredients in a bowl",
          "Marinate for 10 minutes to absorb flavors",
          "Serve as snack or alongside drinks"
        ],
        tags: ["tapas", "quick", "vegan"]
      },
      he: {
        name: "טפאס זיתים בשום ולימון",
        cuisine: "ספרדי",
        dishType: "טבעוני",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "1 כוס זיתים ירוקים מגולענים",
          "1 שן שום – כתושה",
          "1 כף שמן זית",
          "1 כפית מיץ לימון",
          "½ כפית אורגנו יבש",
          "קורט פלפל שחור"
        ],
        instructions: [
          "מערבבים את כל הרכיבים בקערה",
          "משרים 10 דקות לספיגת טעמים",
          "מגישים כחטיף או לצד משקה"
        ],
        tags: ["טפאס", "מהיר", "טבעוני"]
      }
    }
  },
  {
    id: "spanish_13",
    name: "Paella Chicken and Fish – Kosher Version",
    cuisine: "Spanish",
    dishType: "Meat",
    dietaryOptions: ["Kosher", "Gluten-Free"],
    difficulty: "Medium",
    prepTime: "25 minutes",
    cookTime: "40 minutes",
    servings: 4,
    ingredients: [
      "1 cup round rice",
      "200g chicken breast – cut into cubes",
      "150g white fish fillet (such as cod)",
      "1 chopped onion",
      "1 red bell pepper – cut into strips",
      "1 chopped tomato",
      "2.5 cups water or chicken broth",
      "½ teaspoon sweet paprika",
      "¼ teaspoon turmeric",
      "½ teaspoon salt",
      "3 tablespoons olive oil"
    ],
    instructions: [
      "Fry onion, pepper, and tomato with oil and spices",
      "Add chicken and fish, cook for 5 minutes",
      "Add rice and water, cover and cook until rice is tender",
      "Let rest for 5 minutes before serving, garnish with lemon"
    ],
    image: "paella-chicken-fish-kosher.jpg",
    tags: ["main course", "kosher", "mediterranean"],
    translations: {
      en: {
        name: "Paella Chicken and Fish – Kosher Version",
        cuisine: "Spanish",
        dishType: "Meat",
        dietaryOptions: ["Kosher", "Gluten-Free"],
        ingredients: [
          "1 cup round rice",
          "200g chicken breast – cut into cubes",
          "150g white fish fillet (such as cod)",
          "1 chopped onion",
          "1 red bell pepper – cut into strips",
          "1 chopped tomato",
          "2.5 cups water or chicken broth",
          "½ teaspoon sweet paprika",
          "¼ teaspoon turmeric",
          "½ teaspoon salt",
          "3 tablespoons olive oil"
        ],
        instructions: [
          "Fry onion, pepper, and tomato with oil and spices",
          "Add chicken and fish, cook for 5 minutes",
          "Add rice and water, cover and cook until rice is tender",
          "Let rest for 5 minutes before serving, garnish with lemon"
        ],
        tags: ["main course", "kosher", "mediterranean"]
      },
      he: {
        name: "פאייה עוף ודגים – גרסה כשרה",
        cuisine: "ספרדי",
        dishType: "בשרי",
        dietaryOptions: ["כשר", "ללא גלוטן"],
        ingredients: [
          "1 כוס אורז עגול",
          "200 גרם חזה עוף – חתוך לקוביות",
          "150 גרם פילה דג לבן (למשל מושט)",
          "1 בצל קצוץ",
          "1 פלפל אדום – חתוך לרצועות",
          "1 עגבנייה קצוצה",
          "2.5 כוסות מים או ציר עוף",
          "½ כפית פפריקה מתוקה",
          "¼ כפית כורכום",
          "½ כפית מלח",
          "3 כפות שמן זית"
        ],
        instructions: [
          "מטגנים בצל, פלפל ועגבנייה עם שמן ותבלינים",
          "מוסיפים את העוף והדג, מבשלים 5 דקות",
          "מוסיפים אורז ומים, מכסים ומבשלים עד שהאורז רך",
          "מניחים 5 דקות לפני ההגשה, מקשטים בלימון"
        ],
        tags: ["עיקרית", "כשר", "ים־תיכוני"]
      }
    }
  }
];