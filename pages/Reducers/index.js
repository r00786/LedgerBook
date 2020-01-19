import { combineReducers } from 'redux';
import SplashReducer from './SplashReducer';
import Screen1Reducer from './Screen1Reducer';
import EmpScreenReducer from './EmpScreenReducer';



export default combineReducers({
    splash: SplashReducer,
    screen1:Screen1Reducer,
    empscreen:EmpScreenReducer
});