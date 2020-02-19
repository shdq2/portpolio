import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import PopupContainer from './containers/PopupContainer';
import MenuContainer from './containers/MenuContainer';
import LinkContainer from './containers/LinkContainer';
// import Menu from './Menu'
// import Info from './Info'
class App extends Component{
  constructor(props){
    super(props);
    this.wp = React.createRef();
  }
  getContainer = (page)=>{        
    
    this[page.toLowerCase()].scrollIntoView();    
  }
  render(){
    const value = "500px";
    const border = "1px solid";     
    return (
      <div className="Container">
        <div className="mainView">
          <div className="menuSection">
            <div className="menuTitle">
              <div className="name">김상몽 ( Ricky.kim )</div>
              
              <MenuContainer getContainer={this.getContainer}/>
              
            </div>
            
            <PopupContainer />
            <div className="MainText">
              I'm <br />
              <h1>Ricky</h1>
              <div className="jobDiv"> web Publisher / c# programer / web Programer</div>
            </div>
          </div>
          <div className="imageSection">
            <img src="" alt=""/>
          </div>
        </div>
        
        <div className="webPage menuContainer"  ref= {ref => {this.webpage = ref}}>
          <LinkContainer />
        </div>
        <div className="skills menuContainer"  ref= {ref => {this.skills = ref}}>
          skill
        </div>
        <div className="contact menuContainer" ref= {ref => {this.contact = ref}}>
          contact
        </div>
      </div>
    );
  }
}

export default App;
