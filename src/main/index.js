import { app, BrowserWindow } from "electron";
import path from "node:path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(import.meta.dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(import.meta.dirname, "../renderer/index.html"));
};

// eslint-disable-next-line unicorn/prefer-top-level-await
app.whenReady().then(() => {
  createWindow();
});
