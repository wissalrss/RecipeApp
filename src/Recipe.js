import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import RecipeDetails from './RecipeDetails';

const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div>
               <Card>
               <img src={image} alt="" />
                <Card.Body>
                    <Card.Title><h1>{title}</h1></Card.Title>
                    <Card.Text>
                    <p><span className="title">Calories: </span> {calories}</p>
                    <ul><span className="title"> Ingredients:</span>
                    {ingredients.map(ingredient=>(
                            <li>{ingredient.text}</li>
                    ))} 
                    </ul>
                    </Card.Text>
                     <Link to={{pathname:`/${Recipe.title}`}}>Read more</Link> 
                </Card.Body>
                </Card>
        </div>
        
    );
}
export default Recipe;