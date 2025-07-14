// italianRecipes.js

export const italianRecipes = [
  {
    id: "italian_1",
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    dishType: "Meat",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Medium",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    servings: 4,
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale",
      "4 large eggs",
      "100g Pecorino Romano cheese",
      "100g Parmigiano Reggiano",
      "Black pepper",
      "Salt"
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti according to package directions",
      "Meanwhile, cut pancetta into small cubes and cook in a large skillet until crispy",
      "In a bowl, whisk together eggs, grated cheeses, and black pepper",
      "Drain pasta, reserving 1 cup of pasta water",
      "Add hot pasta to the skillet with pancetta",
      "Remove from heat and quickly stir in egg mixture, adding pasta water as needed",
      "Serve immediately with extra cheese and black pepper"
    ],
    image: "carbonara.jpg",
    tags: ["pasta", "classic", "quick"]
  },
  {
    id: "italian_2",
    name: "Margherita Pizza",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "15 minutes",
    servings: 4,
    ingredients: [
      "Pizza dough",
      "San Marzano tomatoes",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Salt"
    ],
    instructions: [
      "Preheat oven to 500°F (260°C) with pizza stone if available",
      "Roll out pizza dough to desired thickness",
      "Spread crushed tomatoes over dough",
      "Add torn mozzarella pieces",
      "Bake for 12-15 minutes until crust is golden",
      "Add fresh basil and drizzle with olive oil before serving"
    ],
    image: "margherita.jpg",
    tags: ["pizza", "classic", "vegetarian"]
  },
  {
    id: "italian_3",
    name: "Osso Buco",
    cuisine: "Italian",
    dishType: "Meat",
    dietaryOptions: ["Gluten-Free"],
    difficulty: "Hard",
    prepTime: "20 minutes",
    cookTime: "2 hours",
    servings: 4,
    ingredients: [
      "4 veal shanks",
      "1 onion, diced",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "4 garlic cloves, minced",
      "1 cup white wine",
      "2 cups beef broth",
      "1 can diced tomatoes",
      "Fresh parsley",
      "Gremolata for garnish"
    ],
    instructions: [
      "Season veal shanks with salt and pepper",
      "Brown shanks in olive oil on all sides",
      "Remove shanks and sauté vegetables until softened",
      "Add wine and deglaze pan",
      "Return shanks to pan with broth and tomatoes",
      "Simmer covered for 2 hours until meat is tender",
      "Serve with gremolata and risotto"
    ],
    image: "osso-buco.jpg",
    tags: ["braised", "comfort", "winter"]
  },
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
    id: "italian_7",
    name: "Chicken Milanese",
    cuisine: "Italian",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Medium",
    prepTime: "30 minutes",
    cookTime: "16 minutes",
    servings: 2,
    ingredients: [
      "2 chicken breasts",
      "½ cup breadcrumbs",
      "1 egg",
      "¼ teaspoon salt",
      "¼ teaspoon pepper",
      "3 tablespoons oil for frying"
    ],
    instructions: [
      "Dip chicken breast in egg, then in breadcrumbs",
      "Fry for 3 minutes on each side until golden",
      "Bake for 10 minutes in preheated oven at 180°C"
    ],
    image: "chicken-milanese.jpg",
    tags: ["crispy", "main course"]
  },
  {
    id: "italian_8",
    name: "Eggplant Parmigiana",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "50 minutes",
    cookTime: "40 minutes",
    servings: 6,
    ingredients: [
      "1 large eggplant",
      "1 cup tomato sauce",
      "½ cup grated mozzarella cheese",
      "¼ cup grated Parmesan cheese",
      "¼ teaspoon salt",
      "Olive oil for baking"
    ],
    instructions: [
      "Slice eggplant and roast slices for 15 minutes in oven",
      "Layer eggplant, sauce, and cheeses in baking dish",
      "Bake for 25 minutes at 190°C until cheese melts and is golden"
    ],
    image: "eggplant-parmigiana.jpg",
    tags: ["baked", "hot dish"]
  },
  {
    id: "italian_9",
    name: "Minestrone Soup",
    cuisine: "Italian",
    dishType: "Vegan",
    dietaryOptions: ["Vegan", "Kosher", "Gluten-Free"],
    difficulty: "Easy",
    prepTime: "40 minutes",
    cookTime: "30 minutes",
    servings: 6,
    ingredients: [
      "1 carrot, chopped",
      "1 onion, chopped",
      "1 tomato, grated",
      "½ cup cooked beans",
      "1 cup chopped zucchini",
      "1 tablespoon olive oil",
      "½ teaspoon salt",
      "4 cups water or vegetable broth"
    ],
    instructions: [
      "Sauté onion and carrot in olive oil for 5 minutes",
      "Add remaining vegetables, water, and seasonings",
      "Cook for 30 minutes until vegetables are tender"
    ],
    image: "minestrone-soup.jpg",
    tags: ["soup", "vegetarian", "complete meal"]
  },
  {
    id: "italian_10",
    name: "Classic Beef Lasagna",
    cuisine: "Italian",
    dishType: "Meat",
    dietaryOptions: ["Kosher"],
    difficulty: "Hard",
    prepTime: "60 minutes",
    cookTime: "40 minutes",
    servings: 8,
    ingredients: [
      "500g ground beef",
      "1 onion, chopped",
      "2 cups tomato sauce",
      "9 lasagna sheets",
      "2 cups grated mozzarella cheese",
      "1 cup ricotta cheese",
      "½ teaspoon salt"
    ],
    instructions: [
      "Sauté beef and onion, add sauce and cook for 10 minutes",
      "Layer lasagna sheets, cheeses, and sauce in baking dish",
      "Bake for 40 minutes in oven at 180°C"
    ],
    image: "beef-lasagna.jpg",
    tags: ["rich", "family meal"]
  },
  {
    id: "italian_11",
    name: "Spinach and Ricotta Gnocchi",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "35 minutes",
    cookTime: "3 minutes",
    servings: 4,
    ingredients: [
      "250g fresh spinach",
      "250g ricotta cheese",
      "1 egg",
      "½ cup flour",
      "¼ teaspoon salt"
    ],
    instructions: [
      "Steam spinach and squeeze out excess liquid",
      "Mix with ricotta, egg, flour, and salt",
      "Form into balls and cook for 3 minutes in boiling water until they float"
    ],
    image: "spinach-gnocchi.jpg",
    tags: ["soft", "nutritious"]
  },
  {
    id: "italian_12",
    name: "Pasta Pesto",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Easy",
    prepTime: "20 minutes",
    cookTime: "10 minutes",
    servings: 4,
    ingredients: [
      "250g pasta",
      "½ cup basil leaves",
      "2 tablespoons pine nuts",
      "2 garlic cloves",
      "¼ cup olive oil",
      "2 tablespoons Parmesan cheese"
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Grind basil, garlic, pine nuts, Parmesan, and olive oil into pesto",
      "Mix pesto with pasta and serve"
    ],
    image: "pasta-pesto.jpg",
    tags: ["quick", "summer"]
  },
  {
    id: "italian_13",
    name: "Classic Tiramisu",
    cuisine: "Italian",
    dishType: "Vegetarian",
    dietaryOptions: ["Vegetarian", "Kosher"],
    difficulty: "Medium",
    prepTime: "30 minutes + cooling",
    cookTime: "0 minutes",
    servings: 8,
    ingredients: [
      "200g ladyfinger cookies (non-alcoholic)",
      "250g mascarpone cheese",
      "3 egg yolks",
      "3 tablespoons sugar",
      "1 cup strong coffee, cooled",
      "2 tablespoons cocoa powder"
    ],
    instructions: [
      "Beat egg yolks with sugar until pale and creamy",
      "Fold in mascarpone cheese",
      "Dip ladyfingers in coffee and layer in serving dish",
      "Spread mascarpone mixture over cookies",
      "Repeat layers and dust with cocoa powder",
      "Refrigerate for at least 4 hours before serving"
    ],
    image: "tiramisu.jpg",
    tags: ["dessert", "coffee", "classic"]
  }
]; 