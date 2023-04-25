export const actionTypes = {
    REQUEST_TWEETS: "REQUEST_TWEETS",
    REQUEST_MORE_TWEETS: "REQUEST_MORE_TWEETS",
    RECEIVED_TWEETS: "RECEIVED_TWEETS",
    RECEIVED_MORE_TWEETS: "RECEIVED_MORE_TWEETS",
    ERROR_TWEETS: "ERROR_TWEETS",
    TOGGLE_FILTER: "TOGGLE_FILTER"
};

export const requestTweets = searchTerm => ({
    type: actionTypes.REQUEST_TWEETS,
    payload: { searchTerm }
});

export const requestMoreTweets = () => ({
    type: actionTypes.REQUEST_MORE_TWEETS,
    payload: {}
});

export const toggleFilter = hashtag => ({
    type: actionTypes.TOGGLE_FILTER,
    payload: { hashtag }
});