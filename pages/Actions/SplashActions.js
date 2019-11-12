
import { SPLASH_TIME_OUT, USER_LOGGED_IN } from '../Constants';
export const splashTimeOut = (value) => {
    console.log(value);
    return ({
        type: SPLASH_TIME_OUT,
        payload: value

    });
};
export const userLoginStatus = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: USER_LOGGED_IN,
                payload: "1"
            });
        }, 2000);
    };

};