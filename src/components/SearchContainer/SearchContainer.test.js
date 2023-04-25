import SearchContainer from "./SearchContainer";
import TweetsList from "../TweetsList";
import Tweet from "../Tweet";
import { Provider } from "react-redux";
import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import tweets from "../../../__mocks__/tweets.json";
import configureStore from "../../redux/store";

const store = configureStore();

test("Displays tweets", () => {
    let wrapper;
    let hashtags = [tweets[0].entities.hashtags[0].text];
    act(() => { wrapper = mount(
        <Provider store={store}>
            <SearchContainer tweets={tweets} hashtags={hashtags} filterTag="" />
        </Provider>
    ); });

    const tweetsList = wrapper.find(TweetsList);

    expect(tweetsList.find(Tweet).length).toEqual(2);
});

test("Filters tweets", () => {
    let wrapper;
    const hashtags = [tweets[0].entities.hashtags[0].text];
    const filterTag = hashtags[0];
    act(() => { wrapper = mount(
        <Provider store={store}>
            <SearchContainer tweets={tweets} hashtags={hashtags} filterTag={filterTag} />
        </Provider>
    ); });

    act(() => { wrapper.update(); });

    const tweetsList = wrapper.find(TweetsList);

    expect(tweetsList.find(Tweet).length).toEqual(1);

    const twTag = tweetsList.find(Tweet).first().prop("tweet").entities.hashtags[0].text;
    expect(twTag).toEqual(filterTag);
});
