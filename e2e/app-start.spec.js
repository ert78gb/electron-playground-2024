import path from "node:path";
import { expect, test } from "@playwright/test";
import { _electron } from "playwright";

test("should app start", async () => {
  const appPath = path.join(
    import.meta.dirname,
    "..",
    "src",
    "main",
    "index.js",
  );
  const electronApp = await _electron.launch({ args: [appPath] });

  const window = await electronApp.firstWindow();
  const screenshot = await window.screenshot();
  await expect(screenshot).toMatchSnapshot("app-started.png");
  await electronApp.close();
});
