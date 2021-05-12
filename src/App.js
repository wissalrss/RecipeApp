import React, {useEffect, useState} from 'react';
import RecipeDetails from './RecipeDetails';
import './App.css';
import Recipe from './Recipe';
import { BrowserRouter as BrowserRouter, Route, Link,Switch  } from 'react-router-dom';

const App = () =>{

  const APP_ID="5cfc09a1";
  const APP_KEY="d3b9d5cb79494fed94ce999b67d2eb5a";

  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState("");
  const [query, setQuery]= useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = e =>{
    setSearch(e.target.value);
  }


  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }
  
  const getRecipes = async () => {
     const response = await fetch(
       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
       );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }

  return (
    <div className="App">
       
     <div className="container">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
     {recipes.map(recipe => (
       <Recipe
       key={recipe.recipe.label}  
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories}
       ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image} />
     ))}
     </div>
    </div>
  );
}

export default App;
