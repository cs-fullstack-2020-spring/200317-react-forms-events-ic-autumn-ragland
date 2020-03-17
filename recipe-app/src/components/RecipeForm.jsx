import React, { Component } from 'react';
// component to display form to add a recipe to the recipe display component
class RecipeForm extends Component {
    constructor(props) {
        super(props);
        // define initial state
        this.state = {
            recipeTitle: "",
            recipeMakeTime: "",
            recipeServingSize: "",
            recipeArray: [],
        }
    }

    // event handler for when form is submitted
    handleSubmission = (event) => {
        event.preventDefault(); // keep page from reloading
        // add form values to recipe array
        this.state.recipeArray.push(
            {
                title: this.state.recipeTitle,
                makeTime: this.state.recipeMakeTime,
                servingSize: this.state.recipeServingSize,
            })
        // update recipe array value globally
        this.setState({
            recipeArray: this.state.recipeArray
        })
        // pass recipe array up to parent via callback function
        this.props.updateRecipeArray(this.state.recipeArray);
        // reset form field values
        this.setState({ recipeTitle: " ", recipeMakeTime: " ", recipeServingSize: " ", });
    }
    // event handler to conditionally update state property based on input field
    handleChange = (event) => {
        if (event.target.name === "recipeTitle") {
            this.setState({ recipeTitle: event.target.value })
        } else if (event.target.name === "recipeMakeTime") {
            this.setState({ recipeMakeTime: event.target.value })
        } else if (event.target.name === "recipeServingSize") {
            this.setState({ recipeServingSize: event.target.value })
        }
    }
    // render form
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add a New Recipe</legend>
                        <div className="formGroup">
                            <label htmlFor="recipeTitle">Title : </label>
                            <input type="text" id="recipeTitle" name="recipeTitle" onChange={this.handleChange} value={this.state.recipeTitle} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="recipeMakeTime">Make Time : </label>
                            <input type="text" name="recipeMakeTime" onChange={this.handleChange} value={this.state.recipeMakeTime} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="recipeServingSize">Serving Size : </label>
                            <input type="text" name="recipeServingSize" onChange={this.handleChange} value={this.state.recipeServingSize} />
                        </div>

                        <button onClick={this.handleSubmission}>Add Recipe</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}
export default RecipeForm;