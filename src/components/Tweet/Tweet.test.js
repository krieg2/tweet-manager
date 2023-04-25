import Tweet from "./Tweet";
import React from "react";
import { shallow } from "enzyme";
import tweet from "../../../__mocks__/tweet.json";

test("Renders tweet content", () => {
    const wrapper = shallow(<Tweet tweet={tweet} />);
    const p = wrapper.find("p");
    const h3 = wrapper.find("h3");

    expect(p.text()).toBe("The Biden admin is making 500 million at-home COVID tests available for free: Beginning next month, the fed governm https://t.co/JWCW5e2Mzm");
    expect(h3.text()).toBe(`@${tweet.user.screen_name}`);
});
