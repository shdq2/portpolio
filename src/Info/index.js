import React,{Component} from 'react';

class Info extends Component{
    constructor(props){
        super(props);
        this.info = null;
        
        
    }
    close = ()=>{
        this.info.style.right = 100+'%';
    }
    render(){
        return(
            <div className="myInfo" ref={ref => {this.info = ref}} onLoad={this.getInfo}>
                <div className="myInfo-title">
                    <div>
                    testPage
                    </div>
                    <div className="close" onClick={this.close}>
                        x
                    </div>
                </div>
            </div>
        )
    }
}
export default Info;