import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess(result.data));
    }
    catch (error) {
        //yield put({ type: 'GET_USERS_REQUEST_FAILED', error })
    }
}

function* watchGetUsersRequests() {
    yield takeEvery(actions.actions.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequests)
]
export default usersSagas;