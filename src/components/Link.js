import React from 'react';
import './Link.css';
const LinkList = [
    {
        "title":"naver1",
        "link":"http://naver.com",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    },
    {
        "title":"daum",
        "link":"http://daum.net",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    },
    {
        "title":"naver3",
        "link":"http://naver.com",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    },
    {
        "title":"naver4",
        "link":"http://naver.com",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    },{
        "title":"naver5",
        "link":"http://naver.com",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    }
    ,
    {
        "title":"naver6",
        "link":"http://naver.com",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    }
    ,{
        "title":"naver7",
        "link":"http://naver.com",
        "thumbnail":"/img/naverIcon.jpg",
        "description":"naver Link test"
    }
]

const LinkPage = ({ClickEvent,OnOff,link})=>{
    return(
        <div id="LinkPage" style={{display:(OnOff?'block':'none')}}>
            <div>title : {link["title"]} / link : {link["link"]}</div>
            <div onClick={ClickEvent}>x</div>
        </div>
    )
}

const LinkComponent = ({ClickEvent,linkOnOff,link})=>{        
    return(
        <div className="LinkItems">
            {LinkList.map((link,i)=>{
                var jsonString = JSON.stringify(link);
                return(
                    
                    <div className="link-item" key={i}>
                        <img alt="" title={link["title"]} src={link["thumbnail"]} onClick={ClickEvent} link={link["link"]}  />
                        <br />
                        <label>{link["title"]}</label>
                    </div>
                )
            })}
            <LinkPage ClickEvent={ClickEvent} OnOff={linkOnOff} link={link}/>
        </div>
    )
}

export default LinkComponent;