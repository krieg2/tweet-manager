import FilterBox from "./FilterBox";
import Chip from "../Chip";
import React from "react";
import { shallow } from "enzyme";

test("Renders chips for each hashtag", () => {
    const hashtags = ["TEST1", "TEST2"];
    const wrapper = shallow(<FilterBox hashtags={hashtags} />);
    const chips = wrapper.find(Chip);

    expect(chips.length).toEqual(2);
});
