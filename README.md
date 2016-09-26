# React + Redux + Webpack + Unit test + CodeceptJS + Lint
Just another boilerplate.
To run the example 
* ```git clone https://github.com/gideonairex/test-server-rruc```.
* ```npm install``` on the test-server-rruc. This will serve as the api server.
* Inside the test-server-rruc run ```node test-server.js```. This will run on port 3000

### Commands available
* ```npm run test``` - runs mocha unit test
* ```npm start``` - starts the dev server running on localhost:9999
* ```npm run build:production``` - to build production code
* ```npm run lint``` - linting of code check .eslintrc for rules
* ```npm run e2e-test``` - to run end to end testing using codeceptjs
* ```npm run test-all``` - to all tests from mocha, lint and e2e test
* ```npm run check-updates``` - checks all vulnerable packages
* ```npm run check-updates -- -u``` - updates all vulnerable package

## React
* react
* react-dom

## REDUX
* redux
* react-redux

## Router
* react-router
* react-router-redux

## Webpack
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* babel-polyfill
* webpack-dev-server
* webpack
* react-hot-loader
* file-loader

## Unit test
* react-addons-test-utils
* mocha
* expect
* expect-jsx

## CodeceptJS
* webdriverio
* codeceptjs

### Installing selenium
* npm install selenium-standalone@latest -g
* selenium-standalone install
* selenium-standalone start

### Usage
* Start selenium server ```selenium-standalone start```
* Then run ```npm run e2e-test```

## Lint
* eslint
* eslint-plugin-react
* babel-eslint

### Usage
* ```npm run lint``` - linting of code rules are in ```.eslintrc```

## API
* superagent

## CSS
* node-sass
* sass-loader
* css-loader
* style-loader
* extract-text-webpack-plugin
* node-sass
* resolve-url-loader
* url-loader

## Development tools
User react-devtools extension.
* redux-devtools-dock-monitor
* redux-devtools
* redux-devtools-log-monitor
* redux-slider-monitor

### Usage
* toggleVisibilityKey='ctrl-w'
* changePositionKey='ctrl-q'
* changeMonitorKey='ctrl-m'

## Package check
* npm-check-updates

### Usage
* ```ncu``` - check for updates
* ```ncu -u``` - update all packages
