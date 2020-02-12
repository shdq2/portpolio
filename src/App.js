import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage : ""
    }
  }

  onClickTitle = (e)=>{
    console.log(e.target.getAttribute('name'));
  }
  render(){
    return (
          <div className="App">
            <header className="App-header">
              <div className="header-title" name="home" onClick={this.onClickTitle}><label>Home</label></div>
              <div className="header-title" name="about" onClick={this.onClickTitle}><label>About</label></div>
              <div className="header-title" name="skills" onClick={this.onClickTitle}><label>My Skills</label></div>
              <div className="header-title" name="portfolio" onClick={this.onClickTitle}><label>PortFolio</label></div>
              <div className="header-title" name="contact" onClick={this.onClickTitle}><label>Contact</label></div>
            </header>
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
