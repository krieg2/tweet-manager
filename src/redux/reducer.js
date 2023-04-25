import { actionTypes } from './actions';

const initialState = {
    tweets: [],
    hashtags: [],
    filterTag: "",
    searchTerm: "",
    searching: false,
    error: null
};

const getHashtagsFromTweets = (tweets) => {
    let results = [];
    let tagsHash = {};

    if (tweets && tweets.length > 0) {

        tweets.forEach(tweet => {
            const { hashtags } = tweet.entities;

            if (hashtags.length > 0) {
                hashtags.forEach(tag => {
                    tagsHash[tag.text] = true;
                });
            }
        });

        results = Object.keys(tagsHash);
    }

    return results;
}

const removeDuplicateTweets = (newTweets, previousTweets) => {
    let result = newTweets;

    const ids = {};
    previousTweets.forEach(tweet => { ids[tweet.id] = true; })

    result = result.filter(tweet => !ids[tweet.id]);

    return result;
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REQUEST_TWEETS: {
            const { searchTerm } = action.payload;
            return { ...state, searching: true, searchTerm };
        }
        case actionTypes.REQUEST_MORE_TWEETS: {
            return { ...state, searching: true };
        }
        case actionTypes.RECEIVED_TWEETS: {
            const { tweets } = action.payload;
            const hashtags = getHashtagsFromTweets(tweets);
            return {
                ...state,
                searching: false,
                tweets,
                hashtags
            };
        }
        case actionTypes.RECEIVED_MORE_TWEETS: {
            let newTweets = action.payload.tweets;
            newTweets = removeDuplicateTweets(newTweets, state.tweets);
            const tweets = state.tweets.concat(newTweets);
            const hashtags = getHashtagsFromTweets(tweets);
            return {
                ...state,
                searching: false,
                tweets,
                hashtags
            };
        }
        case actionTypes.ERROR_TWEETS:
            return { ...state, searching: false, error: action.payload.error };
        case actionTypes.TOGGLE_FILTER: {
            const { hashtag } = action.payload;
            const result = state.filterTag === hashtag ? "" : hashtag;
            return { ...state, filterTag: result };
        }
        default:
            return state;
    }
}