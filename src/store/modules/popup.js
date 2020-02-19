import {createAction,handleActions} from 'redux-actions';
const POPUP = 'popup/POPUP'
const LINKPAGE = 'popup/LINKPAGE'

export const PopupChange = createAction(POPUP);
export const LinkPageChange = createAction(LINKPAGE,(title,link)=>({title,link}));

const initialState = {
    popupOnOff:false,
    linkOnOff:false,
    DetailLink:{
        title:'',
        link:''
    }
};

export default handleActions({
    
    [POPUP] : (state,action) =>({        
        ...state,
        popupOnOff:!state.popupOnOff
    }),
    [LINKPAGE]:(state,action) =>({
        ...state,
        linkOnOff:!state.linkOnOff,
        link:{
            title:action.payload.title,
            link:action.payload.link
        }
    })
},
initialState)
// export default function popup(state=initialState,action){
//     console.log(action);
//     switch(action.type){
//         case POPUP:        
//             return {
//                 ...state,
//                 popupOnOff:!state.popupOnOff
//             }
//         default:
//             return state;
//     }
// }