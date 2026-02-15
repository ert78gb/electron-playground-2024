import { setTimeout } from "node:timers/promises";
import { expect, test } from "@playwright/test";
import { _electron } from "playwright";

test("should app start", async () => {
  const electronApp = await _electron.launch({ args: ["./src/main/index.js"] });

  const window = await electronApp.firstWindow();
  await setTimeout(5000);
  const screenshot = await window.screenshot();
  await expect(screenshot).toMatchSnapshot("app-started.png");
  await electronApp.close();
});
