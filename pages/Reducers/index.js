import { combineReducers } from 'redux';
import SplashReducer from './SplashReducer';
import Screen1Reducer from './Screen1Reducer';


export default combineReducers({
    splash: SplashReducer,
    screen1:Screen1Reducer
});