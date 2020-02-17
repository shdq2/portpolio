const POPUP = 'popup/POPUP'

export const PopupChange = () =>({type:POPUP});

const initialState = {
    popupOnOff:false
};

export default function popup(state=initialState,action){
    switch(action.type){
        case POPUP:        
            return {
                ...state,
                popupOnOff:!state.popupOnOff
            }
        default:
            return state;
    }
}