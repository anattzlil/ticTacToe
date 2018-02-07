import React, {Component} from 'react';

class Circle extends Component {
    render(){
        return(
            <div className={this.props.classCircle}></div>
        );
    };
};

export default Circle;