import React, {Component} from 'react';

class PopUp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className={this.props.popUpKind}>
          <div className="popup">
            <h2 className="popUpHead">{this.props.headline}</h2>
            <button className="close" onClick={this.props.closeButton}>&times;</button>
            <div className="content">
                {this.props.text}
              {/* You are Great... You won the Computer!!! */}
            </div>
          </div>
        </div>
        );
    };
};

export default PopUp;