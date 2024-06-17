# Electron Playground 2024

This is an example app how to setup a new electron app with vanilla js.

Electron@28 started to support ES6 module system so it enough stable to use it in production.

The example setup uses

- electron-builder. Read the electron builder documentation how to setup for production.
- eslint
- playwright, for testing e2e included.
- prettier
- stylint
- typescript, validate js files with typescript compiler.

IDE/Editor config files of

- Webstorm
- Zed

## npm scripts

- `npm start` - Start the app in development mode
- `npm run lint` - Run eslint, stylint and type checks
- `npm test` - Run test

## TODO

- Snapshot support for multiple OS. Every OS has different image manipulation libraries so the created images are not same. In development time maybe not the 3 main OS available, so need 3 github action that generate/update the image snapshots of each OS.
