import { NAME, ADDRESS, MOBILE, EMAIL } from '../Constants'
import React from 'react';

const INITIAL_STATE = { name: React.createRef(), address: React.createRef(), mobile: React.createRef(), email: React.createRef() };

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
        default:
            return state;
    }
};