import {createAction,handleActions} from 'redux-actions';
const POPUP = 'popup/POPUP'
const GET_CURRENT_PAGE = 'popup/GET_CURRENT_PAGE'

export const PopupChange = createAction(POPUP,currentPage=>currentPage);

const initialState = {
    popupOnOff:false
};

export default handleActions({
    
    [POPUP] : (state,action) =>({        
        ...state,
        popupOnOff:!state.popupOnOff
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