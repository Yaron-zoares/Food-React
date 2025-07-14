# Language Support Documentation
## 📖 דוגמה לשימוש באפליקציה

להלן דוגמה לאופן השימוש באפליקציה:

1. 🔍 **הכנס מרכיבים לחיפוש**  
   בשדה החיפוש בראש הדף, כתוב לדוג' `ביצים, עגבניות` ולחץ על כפתור החיפוש.

2. 🥗 **סנן לפי סוג מטבח או דיאטה**  
   השתמש בלחצני הסינון (למשל: 🇮🇱 ישראלי, 🇹🇷 טורקי, 🥦 צמחוני, 🥩 בשרי) כדי לצמצם את התוצאות.

3. 🌐 **החלף שפה**  
   לחץ על כפתור השפה (🇬🇧/🇮🇱) בפינה העליונה כדי להחליף בין עברית לאנגלית.

4. 📋 **עיין במתכונים**  
   לחץ על כרטיס מתכון כדי לראות את כל הפרטים, כולל מצרכים, הוראות הכנה, זמן בישול ורמת קושי.

5. ❤️ **הוסף למועדפים**  
   לחץ על אייקון הלב ליד מתכון כדי להוסיף אותו למועדפים שלך.

---

**דוגמה לתצוגת כרטיס מתכון:**

## Overview
The FoodAPP supports both English and Hebrew languages. Users can switch between languages using the language selector, and all recipes can be displayed in their preferred language.

---

## How the App Works

The application allows users to search for recipes by ingredients, filter results by cuisine, dish type, and dietary preferences, and view recipe details. When a user enters ingredients or keywords, the app displays matching recipes. Filters can be applied to narrow down the results. The language selector enables users to instantly switch the interface and recipe information between English and Hebrew. All user interactions and displayed content update according to the selected language.

---

## 🚀 To Start the App

> **Always run npm commands from the `cuisineBotApp` directory!**

### 📁 Directory Structure
Your project files are located in:
```
```

## 📁 Directory Structure:
```
FoodAPP/
├── cuisineBotApp/          ← Run npm commands here
│   ├── package.json        ← Contains the scripts
│   ├── src/
│   │   └── components/
│   │       └── Header.js   ← Your moved component
│   └── App.js
└── package-lock.json       ← This is in the wrong place
```

## 🚀 To start the app in the future:
1. Open terminal
2. Navigate to: `D:\קורס מפתחי AI\PROJECT AI\FoodAPP\cuisineBotApp`
3. Run: `npm start`

The app should now be running on `http://localhost:3000`! 🎉
