import {all} from "redux-saga/effects";
import PostsSagas from "./posts";
import usersSagas from "./users";
import commentsSagas from "./comments";

export default function* rootSaga(){
    yield all([...PostsSagas, ...usersSagas, ...commentsSagas])
}