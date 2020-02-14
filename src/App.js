import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Info from './Info'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      info: null
    }
  }
  changeinfo = (e)=>{
    console.log("test");
  }
  render(){
    return (
          <div className="Container">
            <div className="mainView">
              <div className="menuSection">
                <div className="menuTitle">
                  <div>김상몽 ( Ricky.kim )</div>
                  
                  <Menu Info={this.state.info}/>
                  
                </div>
                
                <Info infoDom={this.state.info} changeInfo={this.changeinfo}/>
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
// function App(){
//   contructor(props){
//     super(props);

//   }
//   onClickTopMenu = () =>{
//     alert();
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="header-title"><label>Home</label></div>
//         <div className="header-title"><label>About</label></div>
//         <div className="header-title"><label>My Skills</label></div>
//         <div className="header-title"><label>PortFolio</label></div>
//         <div className="header-title"><label>Contact</label></div>
//       </header>
//     </div>
//   );
// }

export default App;
