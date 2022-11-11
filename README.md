![Screen Shot 2020-11-15 at 2 36 19 AM](https://user-images.githubusercontent.com/59614789/99179398-65155900-26eb-11eb-80a2-209de4c8741b.png)

# React YouTube Music Player App

This demo app is meant to go alongside the live code demo of MyMTV App.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Emotion Styled-Components

Run "yarn add @emotion/styled @emotion/core @emotion/react". Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported. [https://emotion.sh/docs/introduction]

## React-You-Tube

A simple React component acting as a thin layer over the YouTube IFrame Player API. To install "yarn add react-youtube" For more information visit [https://www.npmjs.com/package/react-youtube].

## Deployment

This app was deployed with FIREBASE. To deploy, create your project in Firebase [https://firebase.google.com/] .\
 From the terminal "firebase init".\
 Select "Hosting" and find your project.\
 "Use as public directory" - input "build" (do not say 'yes' or the app will not deploy properly).\
 "Configure as a single-page app" - "yes".\
 "Setup automatic builds and deploys with GitHub?" - "no".\
 Before deployment run "yarn run build.\
 "Firebase deploy"
