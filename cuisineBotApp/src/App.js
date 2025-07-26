import React, { useState } from "react";
import Header from "./components/Header";
import IngredientSearch from "./components/IngredientSearch";
import FilterPanel from "./components/FilterPanel.jsx";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import "./App.css";
import "./styles/FilterPanel.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({ cuisines: [], diets: [] });

  const handleSearch = (searchData) => {
    console.log('App: handleSearch called with:', searchData);
    setSearchResults(searchData);
  };

  const handleFilter = (filterData) => {
    setFilters(filterData);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <IngredientSearch onSearch={handleSearch} />
        <FilterPanel onFilter={handleFilter} />
        <RecipeList searchResults={searchResults} filters={filters} />
      </main>
      <Footer />
    </div>
  );
}

export default App; 