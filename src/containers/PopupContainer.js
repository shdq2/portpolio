import React,{Component} from 'react';
import {connect} from 'react-redux';
import PopupComponent from './../components/Popup'
import * as popupActions from '../store/modules/popup'
import { bindActionCreators } from 'redux';
class MainContainer extends Component{
    handleSelect = ()=>{  
        const {popupActions} = this.props;
        popupActions.PopupChange();                        
    }
    render(){        
        const {popupOnOff} = this.props;                
        return (                        
            <PopupComponent OnOff={popupOnOff} OnOffFnc={this.handleSelect}/>            
        )
    }
}

const mapStateToProps = ({popup}) =>({
    popupOnOff : popup.popupOnOff
})
const mapDispatchToProps = dispatch =>({
    //PopupChange:()=> dispatch(PopupChange())
    popupActions:bindActionCreators(popupActions,dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);