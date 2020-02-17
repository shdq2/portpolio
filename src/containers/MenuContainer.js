import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuComponent from './../components/Menu';
import { PopupChange } from '../store/modules/popup';

class Menu extends Component{
    onClickHandler = (e) =>{        
        const target = e.target.getAttribute('target');
        if(target == "myInfo")
            this.props.PopupChange();
    }
    constructor(props){
        super(props);
    }

    render(){
        return <MenuComponent onClickHandler = {this.onClickHandler}/>
    }
}
const mapStateToProps = state =>({
    popupOnOff : state.popup.popupOnOff
})
const mapDispatchToProps = dispatch =>({
    PopupChange:()=> dispatch(PopupChange())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);