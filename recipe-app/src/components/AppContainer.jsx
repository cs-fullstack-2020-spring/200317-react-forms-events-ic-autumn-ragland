import React, {Component} from 'react';
import Header from './Header';
import RecipeDisplay from './RecipeDisplay';
import RecipeForm from './RecipeForm';

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipeArray : [],
        }
    }

    updateRecipeArray = (updatedArray) => {
        this.setState({recipeArray : updatedArray})
    }

    render(){
        return(
            <div>
                
                <Header name = "Autumn"/>
                <RecipeForm updateRecipeArray = {this.updateRecipeArray}/>
                <RecipeDisplay recipeArray = {this.state.recipeArray}/>
            </div>
        )
    }
}
export default AppContainer;