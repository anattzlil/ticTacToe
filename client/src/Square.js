import React, {Component} from 'react';
import Cross from './Cross';
import Circle from './Circle.js';

class Square extends Component{
    constructor(props){
        super(props)
        this.onClickSquare = this.onClickSquare.bind(this);
    }

    onClickSquare(){
        this.props.onClickSquare(this.props.name);
    }

    render(){
        return(
            <div>
                <div className="square" onClick={this.onClickSquare}>
                    <div className="square-inner">
                        <Cross classCross={this.props.classCross}/>
                        <Circle classCircle={this.props.classCircle}/>
                    </div>
                </div>
            </div>

        );
    };
};

export default Square;