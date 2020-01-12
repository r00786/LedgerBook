import { GET_DASHBOARD_ITEMS } from '../Constants';



const INITIAL_STATE = { items:[] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DASHBOARD_ITEMS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
};