import { getGifs } from "../../helpers/getGifs";

describe("Test in getGifs fecth", () => {
  test("it should return 10 elements", async () => {
    const gifs = await getGifs("One push");
    expect(gifs.length).toBe(10);
  });

  test("must receive a category", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
