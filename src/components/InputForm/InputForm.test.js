import InputForm from "./InputForm";
import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

test("Calls requestTweets after input", () => {
    const requestTweets = jest.fn();
    jest.useFakeTimers();

    let wrapper;
    act(() => { wrapper = mount(<InputForm requestTweets={requestTweets} />); });

    const input = wrapper.find("input");
    input.simulate('change', { preventDefault: jest.fn(), target: { value: "a" } });

    expect(requestTweets).toHaveBeenCalledTimes(1);

    act(() => { jest.runAllTimers(); });

    expect(requestTweets).toHaveBeenCalledTimes(2);
});
