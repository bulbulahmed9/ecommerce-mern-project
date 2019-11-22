import { SEE_DETAILS } from '../actions/types';


const initialState = {
    detail_product: null
}

export default function(state=initialState, action){
    const { type, payload } = action;

    switch(type){
        case SEE_DETAILS:
            return {
                ...state,
                detail_product: payload
            }
            default:
                return state;
    }


}