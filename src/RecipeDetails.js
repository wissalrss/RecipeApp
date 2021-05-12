
import React from 'react';
import {Link} from 'react-router-dom';

const RecipeDetails = ({title, ingredients}) =>{
    return(<>
        <div className="description">
        {ingredients.text}
        </div>
        {/* <Link to={{pathname:"/"}}>Back to home</Link> */}
        </>);
    }
    export default RecipeDetails;