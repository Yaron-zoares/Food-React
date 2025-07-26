# CuisineBot - Recipe Discovery App

A modern, multilingual recipe discovery application built with React that allows users to search for recipes by ingredients and filter by various criteria. Discover delicious recipes from multiple cuisines including Italian, French, Spanish, Turkish, Middle Eastern, and Latin American.

## 🌟 Features

- **Ingredient-Based Search**: Search for recipes using available ingredients in your kitchen
- **Multi-Cuisine Support**: Explore recipes from 6+ different cuisines
- **Advanced Filtering**: Filter by cuisine type, dietary restrictions, cooking time, and difficulty level
- **Multilingual Support**: Interface available in multiple languages
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful, intuitive interface with smooth animations and transitions
- **Recipe Cards**: Detailed recipe information with ingredients, instructions, and cooking details
- **Real-time Search**: Instant search results as you type ingredients

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd cuisineBotApp
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Project Structure

```
cuisineBotApp/
├── public/                 # Static files and HTML template
│   ├── index.html         # Main HTML file
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO configuration
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Header.js      # Application header
│   │   ├── Footer.js      # Application footer
│   │   ├── IngredientSearch.js    # Ingredient search functionality
│   │   ├── FilterPanel.jsx        # Advanced filtering options
│   │   ├── RecipeList.js          # Recipe display component
│   │   ├── RecipeCard.js          # Individual recipe cards
│   │   └── LanguageSelector.js    # Language selection
│   ├── data/             # Recipe data and categories
│   │   ├── allRecipes.js          # Combined recipe collection
│   │   ├── italianRecipes.js      # Italian cuisine recipes
│   │   ├── frenchRecipes.js       # French cuisine recipes
│   │   ├── spanishRecipes.js      # Spanish cuisine recipes
│   │   ├── turkishRecipes.js      # Turkish cuisine recipes
│   │   ├── middleEasternRecipes.js # Middle Eastern recipes
│   │   ├── latinRecipes.js        # Latin American recipes
│   │   └── tagCategories.js       # Recipe categorization
│   ├── styles/           # CSS stylesheets
│   ├── utils/            # Utility functions
│   ├── translations/     # Internationalization files
│   ├── config.is/        # Configuration files
│   ├── App.js            # Main application component
│   ├── App.css           # Main application styles
│   └── index.js          # Application entry point
├── components/           # Additional components
├── screens/             # Screen components
├── services/            # API and service functions
├── logic/               # Business logic
├── assets/              # Static assets
├── docs/                # Documentation
├── package.json         # Dependencies and scripts
├── vercel.json          # Vercel deployment configuration
└── README.md            # Project documentation
```

## 🎨 Technologies Used

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Create React App 5.0.1
- **Styling**: CSS3 with modern features and responsive design
- **JavaScript**: ES6+ with modern syntax
- **Deployment**: Vercel for seamless deployment
- **Testing**: React Testing Library

## 🌍 Supported Cuisines

- **Italian**: Classic pasta, pizza, and Mediterranean dishes
- **French**: Elegant French cuisine and pastries
- **Spanish**: Traditional Spanish tapas and paella
- **Turkish**: Rich Turkish kebabs and mezze
- **Middle Eastern**: Authentic Middle Eastern flavors
- **Latin American**: Vibrant Latin American cuisine

## 🔧 Configuration

The app includes several configuration options:

- **Language Settings**: Multi-language support through translation files
- **Filter Categories**: Customizable recipe filtering options
- **Search Algorithms**: Advanced ingredient matching logic
- **Responsive Breakpoints**: Mobile-first responsive design

## 🚀 Deployment

### Vercel Deployment (Recommended)

This app is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the React app and deploy it

The app includes:
- `vercel.json` configuration file
- Proper build scripts (`vercel-build`)
- Static file serving configuration

### Manual Deployment

For other hosting providers:

1. Build the app: `npm run build`
2. Upload the `build` folder to your hosting provider
3. Configure your server to serve the static files

## 🧪 Testing

Run the test suite:

```bash
npm test
```

The app includes comprehensive tests for:
- Component rendering
- User interactions
- Search functionality
- Filter operations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Maintain responsive design principles
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Recipe data from various culinary sources
- React community for excellent documentation
- Vercel for seamless deployment platform

## 👨‍💻 Developers

- **Yaron Zoares** - [GitHub](https://github.com/yaronzoares) - yaronzoarez@gmail.com

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Made with ❤️ by the CuisineBot Team**
