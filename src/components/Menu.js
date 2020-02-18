import React from 'react';

const MenuComponent = ({onClickHandler})=>{
    const menuList = [
        'myInfo',
        'webPage',
        'skills',
        'contact'
    ]
    return (
        <div className="menu-items">
            {menuList.map((menu,i)=>{
                return(
                    <div className="menu" key={i} onClick={onClickHandler} target={menu}>
                        {menu}
                    </div>    
                )
            })}
        </div>
    )
}

export default MenuComponent;