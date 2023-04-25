import TweetsList from "./TweetsList";
import Tweet from "../Tweet";
import React from "react";
import { shallow } from "enzyme";

test("Renders Tweet for each tweet", () => {
    const tweets = [{ id_str: "1" }, { id_str: "2" }];
    const requestMoreTweets = jest.fn();
    const wrapper = shallow(<TweetsList tweets={tweets} requestMoreTweets={requestMoreTweets} />);
    const tweetComponents = wrapper.find(Tweet);

    expect(tweetComponents.length).toEqual(2);
});

test("Calls requestMoreTweets on Load More click", () => {
    const tweets = [{ id_str: "1" }, { id_str: "2" }];
    const requestMoreTweets = jest.fn();
    const wrapper = shallow(<TweetsList tweets={tweets} requestMoreTweets={requestMoreTweets} />);
    const a = wrapper.find("a");
    a.simulate('click', { preventDefault: jest.fn() });

    expect(requestMoreTweets).toHaveBeenCalledTimes(1);
});
