import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PopupContainer from './containers/PopupContainer';
import MenuContainer from './containers/MenuContainer';
// import Menu from './Menu'
// import Info from './Info'
class App extends Component{      
  render(){
    return (
      <div className="Container">
        <div className="mainView">
          <div className="menuSection">
            <div className="menuTitle">
              <div>김상몽 ( Ricky.kim )</div>
              
              <MenuContainer />
              
            </div>
            
            <PopupContainer />
            <div className="MainText">
              i'm ricky
              skill list : 
            </div>
          </div>
          <div className="imageSection">
            <img src="" />
          </div>
        </div>
        
        <div className="webPage">
        </div>
        <div className="skills">
        </div>
        <div className="contact">
        </div>
      </div>
    );
  }
}

export default App;
