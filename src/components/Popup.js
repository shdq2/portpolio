import React from 'react';
import './Popup.css'
import {PopupChange} from '../store/modules/popup'
const handleChange = ()=>{
    console.log(this.props);
    //this.props.PopupChange();
}
const Popup = ({OnOff,OnOffFnc}) =>{    
    
    const value =(OnOff ? '50%' : '100%') ;    
    
    return (
        <div className="myInfo" style={{right: value}}>
            <div className="Info_container">
                <div className="myInfo-title">
                    <div>
                    testPage
                    </div>
                    <div className="close" onClick={OnOffFnc}>
                        x
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;