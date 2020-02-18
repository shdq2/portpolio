import React, {Component} from 'react';
import { connect } from 'react-redux';
import MenuComponent from './../components/Menu';
import * as popupActions from '../store/modules/popup';
import { bindActionCreators } from 'redux';

class Menu extends Component{
    onClickHandler = (e) =>{        
        const target = e.target.getAttribute('target');
        const {popupActions} = this.props;
        
        
        if(target == "myInfo"){            
            popupActions.PopupChange(target);
        }else{
            this.props.getContainer(target);
        }
        
    }
    constructor(props){
        super(props);
    }

    render(){
        return <MenuComponent onClickHandler = {this.onClickHandler}/>
    }
}
const mapStateToProps = ({popup}) =>({
    popupOnOff:popup.popupOnOff,
    currentPage:popup.currentPage
})
const mapDispatchToProps = dispatch =>({
    popupActions : bindActionCreators(popupActions,dispatch)
    //PopupChange:()=> dispatch(PopupChange())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);