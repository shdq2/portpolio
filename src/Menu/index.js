import React,{Component} from 'react';
import * as javascript from './../javascript'
class Menu extends Component{
    onClickHandler = (e) =>{        
        var target =e.target.getAttribute('target'); 
        var obj = javascript.getClass(target);
        obj[0].style.right = 50+'%';        
    }
    constructor(props){
        super(props);
        this.state= {
            menuList:[
                'myInfo',
                'link',
                'ppt',
                'contact'
            ]
        };
        
    }

    render(){
        return (
            <div className="menu-items">
                {this.state.menuList.map((menu,i)=>{
                    return(
                        <div className="menu" key={i} onClick={this.onClickHandler} target={menu}>
                            {menu}
                        </div>    
                    )
                    
                })}
            </div>
        )
    }
}

export default Menu;