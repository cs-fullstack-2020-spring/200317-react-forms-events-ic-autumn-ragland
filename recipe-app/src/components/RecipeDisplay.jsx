import React, {Component} from 'react';

class RecipeDisplay extends Component{
    render(){
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