import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/posts";
import * as api from "../api/posts";

function* getPosts() {
    try {
        const result = yield call(api.getPosts);
        yield put(actions.getPostsSuccess(result.data));
    }
    catch (error) {
        //yield put({ type: 'GET_POSTS_REQUEST_FAILED', error })
    }
}

function* watchGetPostsRequests() {
    yield takeEvery(actions.actions.GET_POSTS_REQUEST, getPosts);
}

const postsSagas = [
    fork(watchGetPostsRequests)
]
export default postsSagas;