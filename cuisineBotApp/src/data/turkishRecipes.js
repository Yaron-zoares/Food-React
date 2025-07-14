// turkishRecipes.js

export const turkishRecipes = [
  {
    id: 'turkish_1',
    name: 'Menemen',
    cuisine: 'Turkish',
    dishType: 'Vegetarian',
    dietaryOptions: ['Vegetarian'],
    difficulty: 'Easy',
    prepTime: '5 minutes',
    cookTime: '10 minutes',
    servings: 2,
    ingredients: ['eggs', 'tomatoes', 'green peppers', 'onion', 'olive oil', 'salt', 'black pepper'],
    instructions: [
      'Heat olive oil in a pan and sauté onions and peppers until soft.',
      'Add chopped tomatoes and cook until they break down.',
      'Add eggs and stir gently until just set.',
      'Season with salt and pepper and serve hot.'
    ],
    image: 'https://source.unsplash.com/300x180/?eggs',
    tags: ['eggs', 'vegetarian', 'turkish'],
    translations: {
      he: {
        name: 'מנמן',
        cuisine: 'טורקי',
        dishType: 'צמחוני',
        dietaryOptions: ['צמחוני'],
        ingredients: ['ביצים', 'עגבניות', 'פלפלים ירוקים', 'בצל', 'שמן זית', 'מלח', 'פלפל שחור'],
        instructions: [
          'מחממים שמן זית במחבת ומטגנים בצל ופלפלים עד ריכוך.',
          'מוסיפים עגבניות קצוצות ומבשלים עד שהן מתרככות.',
          'מוסיפים ביצים ומערבבים בעדינות עד שהן מתייצבות.',
          'מתבלים במלח ופלפל ומגישים חם.'
        ],
        tags: ['ביצים', 'צמחוני', 'תורכי']
      }
    }
  },
  {
    id: 'turkish_2',
    name: 'Köfte Meatballs',
    cuisine: 'Turkish',
    dishType: 'Meat',
    dietaryOptions: [],
    difficulty: 'Medium',
    prepTime: '15 minutes',
    cookTime: '15 minutes',
    servings: 4,
    ingredients: ['ground beef', 'onion', 'parsley', 'bread crumbs', 'egg', 'spices', 'salt', 'pepper'],
    instructions: [
      'Mix all ingredients together and form into small balls.',
      'Grill or fry until cooked through.',
      'Serve with salad or rice.'
    ],
    image: 'https://source.unsplash.com/300x180/?meatballs',
    tags: ['meat', 'grilled', 'turkish'],
    translations: {
      he: {
        name: 'קציצות קופטה',
        cuisine: 'טורקי',
        dishType: 'בשר',
        dietaryOptions: [],
        ingredients: ['בשר טחון', 'בצל', 'פטרוזיליה', 'פירורי לחם', 'ביצה', 'תבלינים', 'מלח', 'פלפל'],
        instructions: [
          'מערבבים את כל החומרים ויוצרים קציצות קטנות.',
          'צולים או מטגנים עד שהקציצות מוכנות.',
          'מגישים עם סלט או אורז.'
        ],
        tags: ['בשר', 'תורכי', 'צלייה']
      }
    }
  },
  {
    id: 'turkish_3',
    name: 'Börek',
    cuisine: 'Turkish',
    dishType: 'Pastry',
    dietaryOptions: ['Vegetarian'],
    difficulty: 'Easy',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['phyllo dough', 'feta cheese', 'spinach', 'egg', 'olive oil', 'salt', 'pepper'],
    instructions: [
      'Mix cheese, spinach, egg, salt, and pepper.',
      'Layer phyllo dough, fill with mixture, roll and bake until golden.',
      'Serve warm.'
    ],
    image: 'https://source.unsplash.com/300x180/?pastry',
    tags: ['pastry', 'cheese', 'spinach', 'turkish'],
    translations: {
      he: {
        name: 'בורק',
        cuisine: 'טורקי',
        dishType: 'מאפה',
        dietaryOptions: ['צמחוני'],
        ingredients: ['בצק פילו', 'גבינה בולגרית', 'תרד', 'ביצה', 'שמן זית', 'מלח', 'פלפל'],
        instructions: [
          'מערבבים גבינה, תרד, ביצה, מלח ופלפל.',
          'מניחים שכבות בצק, ממלאים, מגלגלים ואופים עד הזהבה.',
          'מגישים חם.'
        ],
        tags: ['מאפה', 'גבינה', 'תרד', 'תורכי']
      }
    }
  },
  {
    id: 'turkish_4',
    name: 'Red Lentil Soup',
    cuisine: 'Turkish',
    dishType: 'Soup',
    dietaryOptions: ['Vegan'],
    difficulty: 'Easy',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 4,
    ingredients: ['red lentils', 'onion', 'carrot', 'potato', 'tomato paste', 'olive oil', 'spices', 'water'],
    instructions: [
      'Sauté onion, carrot, and potato in olive oil.',
      'Add lentils, tomato paste, spices, and water.',
      'Cook until lentils are soft. Blend for a smooth texture.',
      'Serve hot.'
    ],
    image: 'https://source.unsplash.com/300x180/?soup',
    tags: ['vegan', 'soup', 'turkish'],
    translations: {
      he: {
        name: 'מרק עדשים אדומות',
        cuisine: 'טורקי',
        dishType: 'מרק',
        dietaryOptions: ['טבעוני'],
        ingredients: ['עדשים אדומות', 'בצל', 'גזר', 'תפוח אדמה', 'רסק עגבניות', 'שמן זית', 'תבלינים', 'מים'],
        instructions: [
          'מטגנים בצל, גזר ותפוח אדמה בשמן זית.',
          'מוסיפים עדשים, רסק עגבניות, תבלינים ומים.',
          'מבשלים עד שהעדשים רכות. טוחנים למרקם חלק.',
          'מגישים חם.'
        ],
        tags: ['טבעוני', 'מרק', 'תורכי']
      }
    }
  },
  {
    id: 'turkish_5',
    name: 'Mücver (Zucchini Fritters)',
    cuisine: 'Turkish',
    dishType: 'Vegetarian',
    dietaryOptions: ['Vegetarian'],
    difficulty: 'Easy',
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['zucchini', 'egg', 'flour', 'dill', 'feta cheese', 'salt', 'pepper', 'oil'],
    instructions: [
      'Grate zucchini and squeeze out excess water.',
      'Mix with egg, flour, dill, cheese, salt, and pepper.',
      'Fry spoonfuls in oil until golden on both sides.',
      'Serve warm.'
    ],
    image: 'https://source.unsplash.com/300x180/?zucchini',
    tags: ['fritters', 'vegetarian', 'turkish'],
    translations: {
      he: {
        name: 'מוקבר',
        cuisine: 'טורקי',
        dishType: 'לביבות',
        dietaryOptions: ['צמחוני'],
        ingredients: ['קישוא', 'ביצה', 'קמח', 'שמיר', 'גבינה בולגרית', 'מלח', 'פלפל', 'שמן'],
        instructions: [
          'מגרדים קישוא וסוחטים נוזלים.',
          'מערבבים עם ביצה, קמח, שמיר, גבינה, מלח ופלפל.',
          'מטגנים כפות מהתערובת עד הזהבה משני הצדדים.',
          'מגישים חם.'
        ],
        tags: ['לביבות', 'ירקות', 'צמחוני']
      }
    }
  },
  {
    id: 'turkish_6',
    name: 'Sautéed Chicken Fillet',
    cuisine: 'Turkish',
    dishType: 'Chicken',
    dietaryOptions: [],
    difficulty: 'Easy',
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servings: 2,
    ingredients: ['chicken fillet', 'onion', 'garlic', 'bell pepper', 'tomato', 'oil', 'spices'],
    instructions: [
      'Sauté onion and garlic in oil.',
      'Add chicken and cook until browned.',
      'Add bell pepper and tomato, cook until soft.',
      'Season and serve.'
    ],
    image: 'https://source.unsplash.com/300x180/?chicken',
    tags: ['chicken', 'stir-fry', 'turkish'],
    translations: {
      he: {
        name: 'פילה עוף סוטה',
        cuisine: 'טורקי',
        dishType: 'עוף',
        dietaryOptions: [],
        ingredients: ['פילה עוף', 'בצל', 'שום', 'פלפל', 'עגבנייה', 'שמן', 'תבלינים'],
        instructions: [
          'מטגנים בצל ושום בשמן.',
          'מוסיפים עוף ומבשלים עד השחמה.',
          'מוסיפים פלפל ועגבנייה, מבשלים עד ריכוך.',
          'מתבלים ומגישים.'
        ],
        tags: ['עוף', 'מוקפץ', 'תורכי']
      }
    }
  },
  {
    id: 'turkish_7',
    name: 'Stuffed Peppers',
    cuisine: 'Turkish',
    dishType: 'Vegan',
    dietaryOptions: ['Vegan'],
    difficulty: 'Medium',
    prepTime: '20 minutes',
    cookTime: '25 minutes',
    servings: 4,
    ingredients: ['bell peppers', 'rice', 'onion', 'tomato', 'parsley', 'olive oil', 'spices'],
    instructions: [
      'Mix rice, onion, tomato, parsley, oil, and spices.',
      'Stuff mixture into peppers.',
      'Bake until peppers are tender.',
      'Serve warm.'
    ],
    image: 'https://source.unsplash.com/300x180/?stuffed-peppers',
    tags: ['vegan', 'rice', 'turkish'],
    translations: {
      he: {
        name: 'פלפלים ממולאים',
        cuisine: 'טורקי',
        dishType: 'טבעוני',
        dietaryOptions: ['טבעוני'],
        ingredients: ['פלפלים', 'אורז', 'בצל', 'עגבנייה', 'פטרוזיליה', 'שמן זית', 'תבלינים'],
        instructions: [
          'מערבבים אורז, בצל, עגבנייה, פטרוזיליה, שמן ותבלינים.',
          'ממלאים את התערובת בפלפלים.',
          'אופים עד שהפלפלים רכים.',
          'מגישים חם.'
        ],
        tags: ['ירקות', 'טבעוני', 'אורז']
      }
    }
  },
  {
    id: 'turkish_8',
    name: 'Pide',
    cuisine: 'Turkish',
    dishType: 'Pastry',
    dietaryOptions: [],
    difficulty: 'Easy',
    prepTime: '15 minutes',
    cookTime: '20 minutes',
    servings: 4,
    ingredients: ['flatbread', 'cheese', 'ground beef', 'egg', 'parsley', 'spices'],
    instructions: [
      'Prepare flatbread dough and shape into boats.',
      'Fill with cheese, beef, egg, parsley, and spices.',
      'Bake until golden and cooked through.',
      'Serve warm.'
    ],
    image: 'https://source.unsplash.com/300x180/?flatbread',
    tags: ['pastry', 'cheese', 'beef', 'turkish'],
    translations: {
      he: {
        name: 'פידֶה',
        cuisine: 'טורקי',
        dishType: 'מאפה',
        dietaryOptions: [],
        ingredients: ['מאפה שטוח', 'גבינה', 'בשר טחון', 'ביצה', 'פטרוזיליה', 'תבלינים'],
        instructions: [
          'מכינים בצק שטוח ויוצרים "סירות".',
          'ממלאים בגבינה, בשר, ביצה, פטרוזיליה ותבלינים.',
          'אופים עד הזהבה ובישול מלא.',
          'מגישים חם.'
        ],
        tags: ['מאפה', 'גבינה', 'בשר', 'תורכי']
      }
    }
  },
  {
    id: 'turkish_9',
    name: 'Kisir Salad',
    cuisine: 'Turkish',
    dishType: 'Salad',
    dietaryOptions: ['Vegan'],
    difficulty: 'Easy',
    prepTime: '10 minutes',
    cookTime: '10 minutes',
    servings: 4,
    ingredients: ['bulgur', 'tomato paste', 'cucumber', 'tomato', 'parsley', 'mint', 'olive oil', 'lemon juice', 'spices'],
    instructions: [
      'Soak bulgur in hot water until soft.',
      'Mix with tomato paste, vegetables, herbs, oil, lemon, and spices.',
      'Serve cold.'
    ],
    image: 'https://source.unsplash.com/300x180/?salad',
    tags: ['bulgur', 'vegan', 'salad', 'turkish'],
    translations: {
      he: {
        name: 'סלט קיסיר',
        cuisine: 'טורקי',
        dishType: 'סלט',
        dietaryOptions: ['טבעוני'],
        ingredients: ['בורגול', 'רסק עגבניות', 'מלפפון', 'עגבנייה', 'פטרוזיליה', 'נענע', 'שמן זית', 'מיץ לימון', 'תבלינים'],
        instructions: [
          'משרים בורגול במים חמים עד ריכוך.',
          'מערבבים עם רסק עגבניות, ירקות, עשבי תיבול, שמן, לימון ותבלינים.',
          'מגישים קר.'
        ],
        tags: ['בורגול', 'ירקות', 'טבעוני']
      }
    }
  },
  {
    id: 'turkish_10',
    name: 'Simit',
    cuisine: 'Turkish',
    dishType: 'Pastry',
    dietaryOptions: [],
    difficulty: 'Medium',
    prepTime: '20 minutes',
    cookTime: '20 minutes',
    servings: 6,
    ingredients: ['flour', 'yeast', 'water', 'sugar', 'salt', 'sesame seeds'],
    instructions: [
      'Mix flour, yeast, water, sugar, and salt to form dough.',
      'Shape into rings, dip in sesame seeds.',
      'Bake until golden brown.',
      'Serve for breakfast or snack.'
    ],
    image: 'https://source.unsplash.com/300x180/?bagel',
    tags: ['pastry', 'sesame', 'breakfast', 'turkish'],
    translations: {
      he: {
        name: 'סימיט',
        cuisine: 'טורקי',
        dishType: 'מאפה',
        dietaryOptions: [],
        ingredients: ['קמח', 'שמרים', 'מים', 'סוכר', 'מלח', 'שומשום'],
        instructions: [
          'מערבבים קמח, שמרים, מים, סוכר ומלח לבצק.',
          'יוצרים טבעות, טובלים בשומשום.',
          'אופים עד הזהבה.',
          'מגישים לארוחת בוקר או כנשנוש.'
        ],
        tags: ['מאפה', 'שומשום', 'ארוחת בוקר']
      }
    }
  },
  {
    id: 'turkish_11',
    name: 'Lahmacun',
    cuisine: 'Turkish',
    dishType: 'Meat',
    dietaryOptions: [],
    difficulty: 'Medium',
    prepTime: '30 minutes',
    cookTime: '60 minutes',
    servings: 4,
    ingredients: ['flatbread', 'ground beef', 'onion', 'tomato', 'parsley', 'spices'],
    instructions: [
      'Mix ground beef with onion, tomato, parsley, and spices.',
      'Spread thinly on flatbread.',
      'Bake until meat is cooked and bread is crispy.',
      'Serve with lemon and salad.'
    ],
    image: 'https://source.unsplash.com/300x180/?lahmacun',
    tags: ['meat', 'flatbread', 'main', 'turkish'],
    translations: {
      he: {
        name: 'לחמג׳ון',
        cuisine: 'טורקי',
        dishType: 'בשר',
        dietaryOptions: [],
        ingredients: ['מאפה שטוח', 'בשר טחון', 'בצל', 'עגבנייה', 'פטרוזיליה', 'תבלינים'],
        instructions: [
          'מערבבים בשר טחון עם בצל, עגבנייה, פטרוזיליה ותבלינים.',
          'מורחים דק על מאפה שטוח.',
          'אופים עד שהבשר מוכן והמאפה פריך.',
          'מגישים עם לימון וסלט.'
        ],
        tags: ['בשר טחון', 'ירקות', 'מאפה דק', 'תורכי']
      }
    }
  }
]; 