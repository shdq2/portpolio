import React,{Component} from 'react';

class Test extends Component{
    constructor(props){
        super(props);
        this.state= {
            menuList:[
                'info',
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
                        <div className="menu" key={i}>
                            {menu}
                        </div>    
                    )
                    
                })}
            </div>
        )
    }
}

export default Test;