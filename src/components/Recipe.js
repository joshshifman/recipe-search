import React from 'react';

function Recipe(props){
  return (
	  <div className="recipe">
		  <a href={props.href}>{props.title}</a>
	  </div>
  )
}

export default Recipe;
