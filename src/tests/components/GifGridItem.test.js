import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Test in <GifGridItem/>", () => {
  const title = "Dragon ball";
  const url = "http://estoesunaimagen.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("it must have a paragraph with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("it must have the image equal to the url and the title of the props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("must have animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
