import React, { Component } from 'react';
import Header from './Header';
import RecipeDisplay from './RecipeDisplay';
import RecipeForm from './RecipeForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            recipeArray: [],
        }
    }
    // method to update the recipe array - called by child component
    updateRecipeArray = (updatedArray) => {
        this.setState({ recipeArray: updatedArray });
    }

    // render child components
    // pass name into Header component
    // pass call back function into RecipeForm component
    // pass recipe array (from state) to Recipe Display component
    render() {
        return (
            <div>

                <Header name="Autumn" />
                <RecipeForm updateRecipeArray={this.updateRecipeArray} />
                <RecipeDisplay recipeArray={this.state.recipeArray} />
            </div>
        )
    }
}
export default AppContainer;