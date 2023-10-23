# Google Extension

## Description
The following template allows you to get started with a Google Extension using the React language library. Webpack was used to build the project. Please refer to the following resources below.

**Getting Started**<br>
Webpack (allows the setup of a custom webpack project) - `npm install --save-dev webpack webpack-cli`

NOTE: NodeJS is required to build and develop on the project<br>
https://nodejs.org/en/download/

**Dependencies**<br>
React-dom (access and modify the DOM) - `npm install --save react react-dom`<br>
Babel (complile react to JS) `npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react`<br>
HTMLWebpackPlugin (generation of HTML files) - `npm install --save-dev html-webpack-plugin`<br>
CopyWebpackPlugin (copy all other files in src folder be built) - `npm install copy-webpack-plugin --save-dev`<br>

**How to build project using webpack**<br>
https://www.youtube.com/watch?v=8OCEfOKzpAw&t=424s

**Working with the manifest file**
https://www.youtube.com/watch?v=3Xq_QfYdmMQ&t=257s

The video link above will explain you the details of the manifest file (you only really need to watch the first 6 mins).

File Format: 
https://developer.chrome.com/docs/extensions/mv3/manifest/

**How to run build**
1. run `npm run build` to bundle react project in production mode
2. Go to chrome browser. Click on elipsis > More tools > Extensions
2. Load Unpacked on the top bar (ensure developer mode is turned on - found on top right)
3. Unpack directory folder named 'dist' (this is where your manifest.json file would be located)
4. On top right of browser click on puzzle icon to see all extensions. You may want to pin the desired extension.

Webpack documentation:<br>
https://webpack.js.org/concepts/

React documentation:<br>
https://reactjs.org/docs/getting-started.html

NOTES: 
The app can be viewed on the browser by going to https://chrome-extension://{extensionID}/popup.html where {extensionID} will be replaced with the extension ID found under the extension under manage extensions of your chrome browser. 