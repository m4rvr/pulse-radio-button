# Pulse Radio Button
Type-safe dynamic stack icon animation written in TypeScript, styled with [tailwindcss](https://tailwindcss.com/) and animated with [GSAP](https://greensock.com/gsap/).
Comes with a solid [webpack](https://webpack.js.org/) configuration for developing & building. Supported by ESLint & Prettier for consistent code style.

![Pulse Radio Button](https://raw.githubusercontent.com/MarvinRudolph/pulse-radio-button/master/screenshots/pulse-radio-button.gif)

## Requirements
* Node 10+
* yarn/npm

## Installation
Download or clone this repository.

## Usage
### Development
1. Install dependencies with `yarn` or `npm install`
2. Run `yarn dev` or `npm run dev`. This starts the development mode with a server on `http://localhost:8080/`.
3. Go to `http://localhost:8080/`. Happy developing! :)

#### Build for production
You can build your production files by running one of the following scripts with `yarn`/`npm run` in front:
* `build:types`: Builds the TypeScript declaration files.
* `build:js`: Builds the (minified) CSS & JavaScript files.
* `build`: Builds both at the same time.

### Production
Use generated files in `dist` folder.

### Author
Marvin Rudolph, [info@marvin-rudolph.de](mailto:info@marvin-rudolph.de)

### License
pulse-radio-button is available under the MIT license. See the [LICENSE](https://github.com/MarvinRudolph/pulse-radio-button/blob/master/LICENSE) file for more info.