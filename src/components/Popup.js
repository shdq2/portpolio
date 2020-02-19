import React from 'react';
import './Popup.css'
//import {PopupChange} from '../store/modules/popup'


const Items = ()=>{    
    const obj = [
        {
            "title":"Skill",
            "value":[
                "c#","javaScript","c++","React","html","spring"
            ]        
        }   
        ,
        {
            "title":"test1",
            "value":[
                "c#","javaScript","c++","React","html","spring"
            ]        
        }  ,
        {
            "title":"test2",
            "value":[
                "c#","javaScript","c++","React","html","spring"
            ]        
        }        
    ]    //get data from db
    return(
        <div className="myInfo-body">
        {
            obj.map((key,idx)=>{
                return(
                    <div className="bodyItem" key={idx}>
                        <div className="detail-Title">
                            {key["title"]}
                        </div>
                        <div>
                            {key["value"].map((val,i)=>{
                                return(<div key={i}>{val}</div>)
                            })}
                            
                        </div>     
                    </div>
                )
            }
        )}
           
        </div>
    )
}
const Popup = ({OnOff,OnOffFnc}) =>{    
    
    const value =(OnOff ? '50%' : '100%') ;    

    return (
        <div className="myInfo" style={{right: value}}>
            <div className="Info_container">
                <div className="myInfo-title">
                    <div className="PopupTitle">
                        Resume
                    </div>
                    <div className="close" onClick={OnOffFnc}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="25.975 25.975 148.05 148.05" xmlns="http://www.w3.org/2000/svg" viewBox="25.975 25.975 148.05 148.05" role="img">
                            <g>
                                <path d="M172.9 167.6L105.3 100l67.6-67.6c1.5-1.5 1.5-3.8 0-5.3s-3.8-1.5-5.3 0L100 94.7 32.4 27.1c-1.5-1.5-3.8-1.5-5.3 0s-1.5 3.8 0 5.3L94.7 100l-67.6 67.6c-1.5 1.5-1.5 3.8 0 5.3s3.8 1.5 5.3 0l67.6-67.6 67.6 67.6c1.5 1.5 3.8 1.5 5.3 0s1.5-3.8 0-5.3z"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="ResumeBody">
                    Born : 1993<br />
                    Language : Korean,English<br />
                    Education : DongSeo University<br />                    
                </div>
                <hr />
                <Items />
                
            </div>
        </div>
    )
}

export default Popup;