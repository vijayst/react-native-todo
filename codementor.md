## 1. Introduction to React native
React Native is a framework for building mobile apps using React and JavaScript. It has support for building mobile apps for the iOS and Android platforms. The framework is open-sourced by Facebook on March 2015. It is built on the premise: **Learn once, Write anywhere**.

Learning React is a one-time effort. Using React for UI, we can build web applications and mobile apps.  React Native facilitates building mobile apps using React. React Native has a set of React components for iOS and Android platforms.

The React components available with React Native gets translated to native components. This provides better-feeling experiences that are consistent with the mobile platform.

![Native experience](https://cdn.filestackcontent.com/UImfsa8oT293dLJNKxIa "Native experience")

The [Facebook post](https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/) explains why "native is necessary".

## 2. Tutorial
The tutorial extends a Todo iOS app built with React Native to the Android platform. The Todo app is super-simple. It has two tabs. The first tab has the Todo list.
![Todo list](https://cdn.filestackcontent.com/kKhQMm8sTuHcHRb9Q1xQ "Todo list")

When the Todo item is done, press the Done button. This will remove the Todo item from the list. The second tab has the `Add Todo` form.

![Add Todo](https://cdn.filestackcontent.com/dVQ4SriRSFmgmkJhQphZ "Add Todo")

The source code for the iOS app can be found in the [Github project](https://github.com/vijayst/react-native-todo). In this tutorial, we will retrofit the app for the Android platform.

### A. Getting started with Android in React Native.
There is a [Getting started](https://facebook.github.io/react-native/docs/getting-started.html) guide for setting up React native for Android app development. The precise steps vary based on the development OS - Mac, Linux and Windows. At high level, setting up React Native for Android involves:

1. Installing Node.
2. Installing Android Studio.
3. Setting the `ANDROID_HOME` path.
4. Creating a new AVD (Android virtual device or emulator)

Any new React Native project has an Android project.

![Android project](https://cdn.filestackcontent.com/VJHmFBfYTHC7ZsOUAJQ7 "Android project")

The `android` folder has the `app` folder which has the source code for the app and the `gradle` folder which has the associated build settings.

The entry point for the React Native app is `index.android.js`. On running the React Native app, the Todo component within `index.android.js` is rendered.

![Android home](https://cdn.filestackcontent.com/C2RgWBTQSWytI5W7QP06 "Android home")

### B.  Using equivalent Android components

(Moving TabBarIOS to ToolbarAndroid, DrawerLayoutAndroid)
handling progress

### C. Android only components

(ViewPager, Toast, TimePicker)

### D. Other differences

(keyboard handling, additional props, etc)

### E. Wrapping up
(Underlying idea - having a native feel)
Github project.
