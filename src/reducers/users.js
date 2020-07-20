import {actions} from "../actions/users";

const INITIAL_STATE = {
    users: []
}

export default function users(state = INITIAL_STATE , action){
    switch(action.type){
        case actions.GET_USERS_SUCCESS: {
            return {
                users: action.payload
            }
        }
        default:{
            return state;
        }
    }
}