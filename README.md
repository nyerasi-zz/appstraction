# appstraction
A React Native companion app for an upcoming museum exhibit.

Introduction:
https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12


(Possibly) Relevant Resources—feel free to edit!
https://github.com/necolas/react-native-web
https://medium.com/@Or_yoffe/building-a-platform-agnostic-app-react-native-and-web-c0e82cbdda8
https://medium.com/one-more-thing-studio/native-react-native-or-pwa-what-should-i-choose-e63f18732b5e

<hr>

# React Native Web Starter

Original Repo Link: https://github.com/joefazz/react-native-web-starter

## Introduction

This repo is intending to provide an easy starting point for developers looking to make fully cross platform applications across both web with [React Native Web](https://github.com/necolas/react-native-web) and mobile with [Expo](https://github.com/react-community/create-react-native-app).

It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so you can run `yarn web` in order to start up the development web server with all the hot reloading goodness you've come to expect.

It has then been integrated with [Create React Native App](https://github.com/react-community/create-react-native-app) and running `yarn ios` or `yarn android` will start the Expo packager. You can also run the project from the Expo XDE program.

## Packages

| Package                 | Description                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| redux                   | Implements redux reducers, actions, store and connection including example                                                                                               |
| navigation-react-router | Using [react-router-dom, react-router-native and react-router-navigation](https://reacttraining.com/react-router/web/guides/quick-start) in order to have a platform agnostic navigation solution including native look at feel on phones |

## React Router
This package allows you to set the page's components based on what the URL is. All you need to do is wrap the components by a `<Router>` tag and insert which components you want to modify using the `<Link>` tag.
 - Here is an example: https://reacttraining.com/react-router/web/guides/quick-start/example-basic-routing

## Get Started

Just run `npm install` and you're good to go. 🙂

A full list of the scripts defined in `package.json` is shown below.

| Script              | Action                                                  |
| ------------------- | ------------------------------------------------------- |
| `yarn web`          | Start CRA (Create React App) Development Build          |
| `yarn build-web`    | Create production build for web                         |
| `yarn eject-web`    | Eject from CRA                                          |
| `yarn start-native` | Start the Expo packager                                 |
| `yarn eject-native` | Eject from Expo                                         |
| `yarn android`      | Start expo packager and install app to Android Emulator |
| `yarn ios`          | Start expo packager and install app to iOS Simulator    |
| `yarn test-native`  | Run testing script for mobile app                       |
| `yarn test-web`     | Run testing script for web app                          |
| `yarn test`         | Run both testing scripts                                |
