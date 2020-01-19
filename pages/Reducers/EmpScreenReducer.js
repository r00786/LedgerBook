import { NAME, ADDRESS, MOBILE, EMAIL,WAGE_TYPE,WAGE_PER_DAY,WAGE_PER_HALF_DAY,OVERTIME } from '../Constants'
import React from 'react';

const INITIAL_STATE = {
    name: React.createRef(), address: React.createRef(), mobile: React.createRef(), email: React.createRef(), wageperday: React.createRef(), wageperhalfday: React.createRef()
    , overtime: React.createRef(), wagetype: React.createRef()
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME:
            return { ...state, name: action.payload };
        case ADDRESS:
            return { ...state, address: action.payload };
        case MOBILE:
            return { ...state, mobile: action.payload };
        case EMAIL:
            return { ...state, email: action.payload };
        case WAGE_TYPE:
            return { ...state, wagetype: action.payload };
        case WAGE_PER_DAY:
            return { ...state, wageperday: action.payload };
        case WAGE_PER_HALF_DAY:
            return { ...state, wageperhalfday: action.payload };
        case OVERTIME:
            return { ...state, overtime: action.payload };
        default:
            return state;
    }
};