import React, {Component} from 'react';
// component to display page title
class Header extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to {this.props.name}'s Recipe Site</h1>
            </div>
        )
    }
}
export default Header;