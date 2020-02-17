import React,{Component} from 'react';
import {connect} from 'react-redux';
import PopupComponent from './../components/Popup'
import {PopupChange} from '../store/modules/popup'

class MainContainer extends Component{
    handleSelect = ()=>{        
        this.props.PopupChange();        
    }
    render(){
        const {popupOnOff} = this.props;
        
        return (            
            //    <input type="button" value={popupOnOff} onClick={this.handleSelect} />
                <PopupComponent OnOff={popupOnOff} OnOffFnc={this.handleSelect}/>            
        )
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
)(MainContainer);