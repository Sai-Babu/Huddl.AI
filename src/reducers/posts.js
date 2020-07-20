import {actions} from "../actions/posts";

const INITIAL_STATE = {
    posts: []
}

export default function posts(state = INITIAL_STATE , action){
    switch(action.type){
        case actions.GET_POSTS_SUCCESS: {
            return {
                posts: action.payload
            }
        }
        default:{
            return state;
        }
    }
}