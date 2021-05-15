import React, {useEffect, useState} from 'react';
import RecipeDetails from './RecipeDetails';
import './App.css';
import Recipe from './Recipe';
import Home from './Home';
import { BrowserRouter as BrowserRouter, Route, Link,Switch  } from 'react-router-dom';

const App = () =>{

  const APP_ID="5cfc09a1";
  const APP_KEY="d3b9d5cb79494fed94ce999b67d2eb5a";

  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState("");
  const [query, setQuery]= useState('chicken');

  return (
    <div className="App">
    <Switch>
       <Route path="/description/:id" render={(props) => <RecipeDetails data={Recipe} {...props}  />} />

       <Route path="/">
         <Home />
       </Route>
     </Switch>
 </div>
  );
}

export default App;
