import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeTitle: "",
            recipeMakeTime: "",
            recipeServingSize: "",
            recipeArray: [],
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.setState({ recipeTitle: " ", recipeMakeTime: " ", recipeServingSize: " ", });
        this.state.recipeArray.push(
            {
                title: this.state.recipeTitle,
                makeTime: this.state.recipeMakeTime,
                servingSize: this.state.recipeServingSize,
            })
        this.setState({
            recipeArray: this.state.recipeArray
        })
        console.log(this.state.recipeArray)
        this.props.updateRecipeArray(this.state.recipeArray)
    }
    handleChange = (event) => {
        if (event.target.name === "recipeTitle") {
            this.setState({ recipeTitle: event.target.value })
        } else if (event.target.name === "recipeMakeTime") {
            this.setState({ recipeMakeTime: event.target.value })
        } else if (event.target.name === "recipeServingSize") {
            this.setState({ recipeServingSize: event.target.value })
        }
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add a New Recipe</legend>
                        <div className="formGroup">
                            <label htmlFor="recipeTitle">Title : </label>
                            <input type="text" name="recipeTitle" onChange={this.handleChange} value={this.state.recipeTitle} />
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