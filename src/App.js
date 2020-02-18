import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PopupContainer from './containers/PopupContainer';
import MenuContainer from './containers/MenuContainer';
// import Menu from './Menu'
// import Info from './Info'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      webpage :null,
      skills : null,
      contact : null
    }
    this.container = null;
  }
  getContainer = (page)=>{
    
    const location = this.state[page.toLowerCase()].scrollIntoView();    
  }
  render(){
    const value = "500px";
    const border = "1px solid";     
    return (
      <div className="Container">
        <div className="mainView">
          <div className="menuSection">
            <div className="menuTitle">
              <div>김상몽 ( Ricky.kim )</div>
              
              <MenuContainer getContainer={this.getContainer}/>
              
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
        
        <div className="webPage"style = {{height:value,border:border}} ref= {ref => {this.state.webpage = ref}}>
          webPage
        </div>
        <div className="skills" style = {{height:value,border:border}} ref= {ref => {this.state.skills = ref}}>
          skill
        </div>
        <div className="contact" style = {{height:value,border:border}} ref= {ref => {this.state.contact = ref}}>
          contact
        </div>
      </div>
    );
  }
}

export default App;
