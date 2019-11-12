import { SPLASH_TIME_OUT, USER_LOGGED_IN } from '../Constants';



const INITIAL_STATE = { splashScreenChange: false, alreadyLoggedIn: null };

export default (state = INITIAL_STATE, action) => {
    console.log('reducer called');
    switch (action.type) {
        case SPLASH_TIME_OUT:
            console.log('reducer called');
            return { ...state, splashScreenChange: action.payload };
        case USER_LOGGED_IN:
            console.log(action.payload + "------->>");
            return { ...state, alreadyLoggedIn: action.payload };
        default:
            return state;
    }
};