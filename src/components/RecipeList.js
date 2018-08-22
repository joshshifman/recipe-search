import React from 'react';
import Recipe from './Recipe';
import uuid from 'uuid-v4';


// Nested && operator within the ternary operator is a bit ugly

function RecipeList(props) {
  return (
    <div className="recipe-list">
      {props.recipes.length
        ? props.recipes.map(recipe =>
            <Recipe title={recipe.title} href={recipe.href} key={uuid()}/>
          )
        : props.hasSearched && <p>No results!</p>
      }
    </div>
  )
}

export default RecipeList;