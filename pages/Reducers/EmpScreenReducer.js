import { NAME } from '../Constants';
import React from 'react';




const INITIAL_STATE = { name:React.createRef()};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAME:
            return { ...state, name: action.payload };
        default:
            return state;
    }
};