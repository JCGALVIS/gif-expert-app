import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test in <GifGridItem/>", () => {
  test("should display the component correctly", async () => {
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
