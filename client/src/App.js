import React, { Component } from 'react';
import './App.css';
import Square from './Square.js';
import PopUp from './PopUp.js';
import Sound from 'react-sound';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {popUpUser: 'overlay', popUpComputer: 'overlay', popUpTie: 'overlay', userWins: false, computerWins: false, times:0, squares:[{name: 'one', classCircle:'hide', classCross:'hide'}, {name: 'two', classCircle:'hide', classCross:'hide'}, {name: 'three', classCircle:'hide', classCross:'hide'}, {name: 'four', classCircle:'hide', classCross:'hide'}, {name: 'five', classCircle:'hide', classCross:'hide'}, {name: 'six', classCircle:'hide', classCross:'hide'}, {name: 'seven', classCircle:'hide', classCross:'hide'}, {name: 'eight', classCircle:'hide', classCross:'hide'}, {name: 'nine', classCircle:'hide', classCross:'hide'}]};
    this.onClickSquare = this.onClickSquare.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.userOneChoice = this.userOneChoice.bind(this);
  }


  findIndex(name){
    for (var i = 0; i< this.state.squares.length; i++){
      if (this.state.squares[i].name === name){
        return i;
      };
    };
  };

  userOneChoice(index){
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

  userTwoChoice(index){
    this.setState((prev)=>{
      let newTimes = prev.times + 1;
      let newSquares = prev.squares.map((item, i)=>{
        if (i === index){
          item.clicked = true;
          item.classCircle = 'circle';
        }
      return item;
      });
      return ({times:newTimes, squares: newSquares});
    }, ()=>{
      this.userTwoWin();
    }
  )
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
      if (this.state.times===9){
        console.log(this.state.times);
        this.setState({popUpTie:'overlay show'});
      }
    }
  }

  userTwoWin(){
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
      if(this.state.times % 2 === 0){
        this.userOneChoice(index);
      }else {
        this.userTwoChoice(index);
      }
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
      <h1>TIC TAC TOE</h1>
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
        <PopUp popUpKind={this.state.popUpUser} headline="X Wins!" closeButton={this.closeButton} text="Great game... Keep it up!!!"/>
        <PopUp popUpKind={this.state.popUpComputer} headline="O Wins!!" closeButton={this.closeButton} text="Great game... Keep it up!!!"/>
        <PopUp popUpKind={this.state.popUpTie} headline="It's a Tie!!" closeButton={this.closeButton} text="Why don't you try again?"/>
      </div>
      
    );
  }
}

export default App;

// {/* <Sound             
// url="Samurai_Collection_Rising_Sun_Amazing_Music.mp3"
//   playStatus={Sound.status.PLAYING}
//   playFromPosition={300 /* in milliseconds */}
//   onLoading={this.handleSongLoading}
//   onPlaying={this.handleSongPlaying}
//   onFinishedPlaying={this.handleSongFinishedPlaying}
//   autoPlay='true'
//   loop='true'
//   /> */}
