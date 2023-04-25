import Chip from "./Chip";
import React from "react";
import { shallow } from "enzyme";

test("Renders hashtag", () => {
    const wrapper = shallow(<Chip hashtag="TEST" />);
      const divChip = wrapper.find(".chip");

      expect(divChip.text()).toBe("#TEST");
});
