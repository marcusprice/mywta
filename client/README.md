# mywta client
The mywta client is bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The purpose of this readme is to give an overview of the directory structure of the client as well as provide the scripts available for create react app.

## Proxied Requests
API requests are proxied to the backend, which normally runs on port 5000. If for any reason you need to change the port of the backend server, be sure to update the package.json proxy property with the correct port number. If you change this, you will need to restart create react app for the setting to register.

## Directory Structure
The directory structure is pretty standard in terms of a react app, but I wanted to make note of a couple things.

### public directory
Here you will find favicons, the manifest.json file, images for the google markerclusterer plus utility and the minified overlapping spiderfier library (OMS) library.

Originally I intented to use the npm package for OMS, but it requires that that the google maps resources are loaded and available before it's imported. Because the google maps resources and OMS are loaded within the Map component, it threw an error when I tried to import the OMS library. To avoid this error, the OMS library is added by appending a script tag after the map has loaded instead of an es6 import. This can potentially be fixed with conditional importing or maybe a react hook, but importying via script tag seems to work best for now.

### src directory
The App component is the main access point for the react app. Global CSS styles are found in the App.css file. 

The child componments are found in their own directories in the components directory and are accompanied by related css files. Eventually there will be unit tests for the components which will be stored in their respective component directories. I've done my best to document all of the functions & functionality of the components in the files themselves. The Map component may benefit with it's own readme at some point since there is a lot of logic for the map behavior.

## Available Scripts for Create React App:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.