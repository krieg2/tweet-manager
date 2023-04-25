import { put, takeLatest, all, call, select } from 'redux-saga/effects';
import { actionTypes } from "./actions";
import * as api from "../utils/api";

function* fetchTweetsSaga(action) {
    const { searchTerm } = action.payload;

    try {
        const searchTermTrim = searchTerm.trim();
        if (searchTermTrim !== "") {
            const results = yield call(api.searchTweets, searchTermTrim);

            yield put({ type: actionTypes.RECEIVED_TWEETS, payload: { tweets: results.statuses }});
        } else {
            yield put({ type: actionTypes.RECEIVED_TWEETS, payload: { tweets: [] }});
        }
    } catch (error) {
        yield put({ type: actionTypes.ERROR_TWEETS, payload: { error }});
    }
}

const getMaxIdFromTweets = (tweets) => {
    let maxId = null;
    if (tweets.length > 0) {
        maxId = tweets[0].id;
        for (let i=1; i < tweets.length; i++) {
            if (tweets[i].id < maxId) maxId = tweets[i].id;
        }
    }
    return maxId;
};

function* fetchMoreTweetsSaga() {
    const searchTerm = yield select((state) => state.searchTerm);
    const tweets = yield select((state) => state.tweets);

    try {
        let maxId = getMaxIdFromTweets(tweets);
        const searchTermTrim = searchTerm.trim();
        if (searchTermTrim !== "") {
            const results = yield call(api.searchTweets, searchTermTrim, maxId);

            yield put({ type: actionTypes.RECEIVED_MORE_TWEETS, payload: { tweets: results.statuses }});
        } else {
            yield put({ type: actionTypes.RECEIVED_MORE_TWEETS, payload: { tweets: [] }});
        }
    } catch (error) {
        yield put({ type: actionTypes.ERROR_TWEETS, payload: { error }});
    }
}

function* handleActions() {
    yield takeLatest(actionTypes.REQUEST_TWEETS, fetchTweetsSaga);
    yield takeLatest(actionTypes.REQUEST_MORE_TWEETS, fetchMoreTweetsSaga);
}
export default function* rootSaga() {
  yield all([handleActions()]);
}