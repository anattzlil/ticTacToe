import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import PopUp from './PopUp.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {popUpUser: 'overlay', popUpComputer: 'overlay', popUpTie: 'overlay', userWins: false, computerWins: false, times:0, squares:[{name: 'one', classCircle:'hide', classCross:'hide'}, {name: 'two', classCircle:'hide', classCross:'hide'}, {name: 'three', classCircle:'hide', classCross:'hide'}, {name: 'four', classCircle:'hide', classCross:'hide'}, {name: 'five', classCircle:'hide', classCross:'hide'}, {name: 'six', classCircle:'hide', classCross:'hide'}, {name: 'seven', classCircle:'hide', classCross:'hide'}, {name: 'eight', classCircle:'hide', classCross:'hide'}, {name: 'nine', classCircle:'hide', classCross:'hide'}]};
    this.onClickSquare = this.onClickSquare.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.computerChoice = this.computerChoice.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);
    this.closeButton = this.closeButton.bind(this);
  }

  findIndex(name){
    for (var i = 0; i< this.state.squares.length; i++){
      if (this.state.squares[i].name === name){
        return i;
      };
    };
  };

  computerChoice(){
    let random = Math.floor(Math.random()* 8);
    while (this.state.squares[random].clicked){
      random = Math.floor(Math.random()* 8);
    }
      this.setState((prev)=>{
        let newSquares = prev.squares.map((item, i)=>{
          if (i === random){
            item.clicked = true;
            item.classCircle = 'circle';
          }
          return item;
        });
        return ({squares: newSquares});
      }, ()=>{
        console.log(this.state);
        this.computerWin();
      })
  }

  userWin(){
    let squaresCompare = this.state.squares;
    if (squaresCompare[0].classCross =='cross' && squaresCompare[1].classCross =='cross' && squaresCompare[2].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    } else if (squaresCompare[3].classCross =='cross' && squaresCompare[4].classCross =='cross' && squaresCompare[5].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    } else if (squaresCompare[6].classCross =='cross' && squaresCompare[7].classCross =='cross' && squaresCompare[8].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    }else if (squaresCompare[0].classCross =='cross' && squaresCompare[4].classCross =='cross' && squaresCompare[8].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    }else if (squaresCompare[2].classCross =='cross' && squaresCompare[4].classCross =='cross' && squaresCompare[6].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    }else if (squaresCompare[0].classCross =='cross' && squaresCompare[3].classCross =='cross' && squaresCompare[6].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    }else if (squaresCompare[1].classCross =='cross' && squaresCompare[4].classCross =='cross' && squaresCompare[7].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    }else if (squaresCompare[2].classCross =='cross' && squaresCompare[5].classCross =='cross' && squaresCompare[8].classCross =='cross'){
      this.setState({userWins: true, popUpUser:'overlay show'});
    } else{
      if (this.state.times<=4){
        setTimeout(this.computerChoice,100);
      }else{
        this.setState({popUpTie:'overlay show'});
      }
    }
  }

  computerWin(){
    let squaresCompare = this.state.squares;
    if (squaresCompare[0].classCircle =='circle' && squaresCompare[1].classCircle =='circle' && squaresCompare[2].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    } else if (squaresCompare[3].classCircle =='circle' && squaresCompare[4].classCircle =='circle' && squaresCompare[5].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    } else if (squaresCompare[6].classCircle =='circle' && squaresCompare[7].classCircle =='circle' && squaresCompare[8].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    }else if (squaresCompare[0].classCircle =='circle' && squaresCompare[4].classCircle =='circle' && squaresCompare[8].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    }else if (squaresCompare[2].classCircle =='circle' && squaresCompare[4].classCircle =='circle' && squaresCompare[6].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    }else if (squaresCompare[0].classCircle =='circle' && squaresCompare[3].classCircle =='circle' && squaresCompare[6].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    }else if (squaresCompare[1].classCircle =='circle' && squaresCompare[4].classCircle =='circle' && squaresCompare[7].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    }else if (squaresCompare[2].classCircle =='circle' && squaresCompare[5].classCircle =='circle' && squaresCompare[8].classCircle =='circle'){
      this.setState({computerWins: true, popUpComputer:'overlay show'});
    }
  }

  onClickSquare(name){
    console.log(name);
    let index = this.findIndex(name);
    if (!this.state.squares[index].clicked && !this.state.computerWins && !this.state.userWins){
    this.setState((prev)=>{
      let newTimes = prev.times + 1;
      let newSquares = prev.squares.map((item, i)=>{
        if (i === index){
          item.clicked = true;
          item.classCross = 'cross';
        }
        return item;
      });
      return ({times:newTimes, squares: newSquares});
    }, ()=>{
        this.userWin();
      }
      )
    }
  }

  onRestartClick(){
    this.setState({userWins: false, computerWins: false, times:0, squares:[{name: 'one', classCircle:'hide', classCross:'hide'}, {name: 'two', classCircle:'hide', classCross:'hide'}, {name: 'three', classCircle:'hide', classCross:'hide'}, {name: 'four', classCircle:'hide', classCross:'hide'}, {name: 'five', classCircle:'hide', classCross:'hide'}, {name: 'six', classCircle:'hide', classCross:'hide'}, {name: 'seven', classCircle:'hide', classCross:'hide'}, {name: 'eight', classCircle:'hide', classCross:'hide'}, {name: 'nine', classCircle:'hide', classCross:'hide'}]});
  }

  closeButton(){
    this.setState({popUpUser: 'overlay', popUpComputer: 'overlay', popUpTie: 'overlay'});
  }

  render() {
    return (
      <div className="App">
        <div className="Board">
          <div className="row">
            <Square  onClickSquare={this.onClickSquare} classCross={this.state.squares[0].classCross} classCircle={this.state.squares[0].classCircle} name='one'/>
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[1].classCross} classCircle={this.state.squares[1].classCircle} name='two'/>
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[2].classCross} classCircle={this.state.squares[2].classCircle} name= 'three'/>
          </div>
          <div className="row">
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[3].classCross} classCircle={this.state.squares[3].classCircle} name='four'/>
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[4].classCross} classCircle={this.state.squares[4].classCircle} name='five'/>
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[5].classCross} classCircle={this.state.squares[5].classCircle} name='six'/>
          </div>
          <div className="row">
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[6].classCross} classCircle={this.state.squares[6].classCircle} name='seven'/>
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[7].classCross} classCircle={this.state.squares[7].classCircle} name='eight'/>
            <Square onClickSquare={this.onClickSquare} classCross={this.state.squares[8].classCross} classCircle={this.state.squares[8].classCircle} name='nine'/>
          </div>
          <button className="restartBtn" type="button" onClick={this.onRestartClick}>RESTART</button>
        </div>
        <PopUp popUpKind={this.state.popUpUser} headline="You Win!" closeButton={this.closeButton} text="You are Great... You won the Computer!!!"/>
        <PopUp popUpKind={this.state.popUpComputer} headline="Computer Wins!!" closeButton={this.closeButton} text="It's O.K... It was just a bad day!!!"/>
        <PopUp popUpKind={this.state.popUpTie} headline="It's a Tie!!" closeButton={this.closeButton} text="Why don't you try again?"/>
      </div>
      
    );
  }
}

export default App;
