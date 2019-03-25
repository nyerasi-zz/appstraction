# appstraction

### ⚠️ Note: this README is currently under construction ⚠️

A React Native companion app for an upcoming museum exhibit.

Introduction:
https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12

(Possibly) Relevant Resources—feel free to edit!
https://github.com/necolas/react-native-web
https://medium.com/@Or_yoffe/building-a-platform-agnostic-app-react-native-and-web-c0e82cbdda8
https://medium.com/one-more-thing-studio/native-react-native-or-pwa-what-should-i-choose-e63f18732b5e

## Deploying to PROD

```
yarn build
now
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
