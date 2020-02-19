import React, {Component} from 'react';
import { connect } from 'react-redux';
import LinkComponent from './../components/Link';
import * as popupActions from '../store/modules/popup';
import { bindActionCreators } from 'redux';

class LinkContainer extends Component{
    LinkToPage = (e)=>{        
        const {popupActions} = this.props;        
        var title = e.target.getAttribute('title');
        var link = e.target.getAttribute('link');
        popupActions.LinkPageChange(title,link);
        
        //window.open(e.target.getAttribute("link"),"_blank");        
    }
    render(){        
        const {linkOnOff,link} = this.props;                
        return(
            <LinkComponent ClickEvent={this.LinkToPage} linkOnOff={linkOnOff} link={(link == null)?'':link}/>
        )
    }
}

const mapStateToProps = ({popup})=>({    
    linkOnOff:popup.linkOnOff,
    link:popup.link
})

const mapDispathToProps = dispatch =>({
    popupActions:bindActionCreators(popupActions,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispathToProps
)(LinkContainer);