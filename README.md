# appstraction

A React Native companion app for an upcoming museum exhibit.

Introduction:
https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12

(Possibly) Relevant Resources—feel free to edit!
https://github.com/necolas/react-native-web
https://medium.com/@Or_yoffe/building-a-platform-agnostic-app-react-native-and-web-c0e82cbdda8
https://medium.com/one-more-thing-studio/native-react-native-or-pwa-what-should-i-choose-e63f18732b5e

## Deploying to PROD
Note: must be logged into heroku via `heroku login` (and have access to our instance via the web console)
```
yarn build-web
git add build && git status
git commit -m "rebuilt project"
git push heroku master
```

### Starter links

- [Original Github](https://medium.com/@yannickdot/write-once-run-anywhere-with-create-react-native-app-and-react-native-web-ad40db63eed0)
- [Flex box](https://blog.reactnativecoach.com/understanding-flex-in-react-native-b34dfb4b16d1)
- [React Icons](https://react-icons.netlify.com/#/icons/fa)
- [Animations with react-pose](https://medium.com/@joomiguelcunha/amazing-react-animation-with-react-pose-3b67d9eb6e07)
- [React Camera with HTML5](https://medium.com/20spokes-whiteboard/how-to-approach-a-react-task-using-html5-camera-as-an-example-e67f41d97b2a)
- [Accordion Menu](https://medium.com/@mheavers/collapsible-accordion-style-nav-in-react-native-with-scrolling-8d624842b247)
- [Sliding Menu + Sliding Homepage Tutorial](https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm)
    - [Another link](https://medium.com/front-end-developers/sliding-react-components-4873e232907e)
    - [Third](https://github.com/reactjs/react-transition-group/issues/136)
    - [Fourth](https://medium.com/@joomiguelcunha/amazing-react-animation-with-react-pose-3b67d9eb6e07)

### How to Add Fonts!

- See if the font you need is available on [fontcdn.org](https://fontcdn.org/). If it is, just select which font styles you need and copy the `@import` statement into `public/fonts.css`
- If the font is not on that website, search the internet for the `eot, svg, ttf, woff, woff2` font filetypes (you can usually find them on GitHub), and place them in a new folder under `public/fonts/fontname`. Then, reference the files in `public/fonts.css`, as is done for Gotham :)
- To set a backup font in a `styles.js` file, you can try `fontFamily: "Gotham, sans-serif"`, where sans-serif is the backup font in case Gotham doesn't exist/work

<hr>

# React Native Web Starter

Original Repo Link: https://github.com/joefazz/react-native-web-starter

## Introduction

This repo is intending to provide an easy starting point for developers looking to make fully cross platform applications across both web with [React Native Web](https://github.com/necolas/react-native-web) and mobile with [Expo](https://github.com/react-community/create-react-native-app).

It is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so you can run `yarn web` in order to start up the development web server with all the hot reloading goodness you've come to expect.

It has then been integrated with [Create React Native App](https://github.com/react-community/create-react-native-app) and running `yarn ios` or `yarn android` will start the Expo packager. You can also run the project from the Expo XDE program.

## Packages

| Package                 | Description                                                                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| redux                   | Implements redux reducers, actions, store and connection including example                                                                                                                                                                |
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
