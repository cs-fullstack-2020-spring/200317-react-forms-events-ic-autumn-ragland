import React, {Component} from 'react';
// component to display recipes passed from parent component
class RecipeDisplay extends Component{
    render(){
        // iterate through array passed from parent using map
        // for each recipe in the recipe array return a div (with a unique key) with child p tags for each property of the recipe
        return(
            <div>
                {
                    this.props.recipeArray.map((recipe, index) => {
                        return(
                            <div key = {index}>
                                <p>Title : {recipe.title}</p>
                                <p>Serving Size : {recipe.servingSize}</p>
                                <p>Make Time : {recipe.makeTime}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default RecipeDisplay;