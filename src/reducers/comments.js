import {actions} from "../actions/comments";

const INITIAL_STATE = {
    comments: []
}

export default function comments(state = INITIAL_STATE , action){
    switch(action.type){
        case actions.GET_COMMENTS_SUCCESS: {
            return {
                comments: action.payload
            }
        }
        default:{
            return state;
        }
    }
}