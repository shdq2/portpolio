import React from 'react';
import './Menu.css';
const MenuComponent = ({onClickHandler})=>{
    const menuList = [{
            'key':'myInfo',
            'title':'My Info'
        }
        ,
        {
            'key':'webPage',
            'title':'Link'
        }
        ,
        {
            'key':'skills',
            'title':'My Skills'
        }
        ,
        {
            'key':'contact',
            'title':'Contact'
        }
        
    ]
    return (
        <div className="menu-items">
            {menuList.map((menu,i)=>{
                return(
                    <div className="menu" key={i} onClick={onClickHandler} target={menu['key']}>
                        {menu['title']}
                    </div>    
                )
            })}
        </div>
    )
}

export default MenuComponent;