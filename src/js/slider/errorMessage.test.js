import config from "./config";
import { errorMessage } from "./errorMessage";

describe("errorMessage", () => {
  it("starterSlider with setTimeout", () => {
    // document.body.innerHTML = "";
    const bullitListBf = document.getElementById(config.message);
    expect(bullitListBf).toBe(null);
    errorMessage("Test");
    const bullitListAf = document.getElementById(config.message);
    const isTrue = bullitListAf.classList.contains(config.message);
    expect(isTrue).toBe(true);
  });
});
