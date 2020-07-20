import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/comments";
import * as api from "../api/comments";

function* getComments() {
    try {
        const result = yield call(api.getComments);
        yield put(actions.getCommentsSuccess(result.data));
    }
    catch (error) {
        //yield put({ type: 'GET_COMMENTS_REQUEST_FAILED', error })
    }
}

function* watchGetCommentsRequests() {
    yield takeEvery(actions.actions.GET_COMMENTS_REQUEST, getComments);
}

const commentsSagas = [
    fork(watchGetCommentsRequests)
]
export default commentsSagas;