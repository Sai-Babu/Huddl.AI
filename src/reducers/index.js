import {combineReducers} from "redux";
import PostsReducer from "./posts";
import UsersReducer from "./users";
import CommentsReducer from "./comments";

export default combineReducers({
    posts: PostsReducer,
    users: UsersReducer,
    comments: CommentsReducer
});