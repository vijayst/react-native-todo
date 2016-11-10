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

The iOS app used `TabBarIOS` component for displaying tabs. For Android, the `TabBarIOS` component needs to be replaced with `ToolbarAndroid` component. The render method of `index.android` component is shown below.


```
 render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          actions={actions}
          onActionSelected={this.handleActionSelected}
          style={styles.toolbar}
          subtitle={this.state.actionText}
        />
        <ViewPagerAndroid
          ref={c => { this.pager = c; }}
          style={styles.viewPager}
          initialPage={0}
        >
          <View>
            <List
              todos={this.state.todos}
              onDeleteTodo={this.handleDeleteTodo}
            />
          </View>
          <View>
            <Add onAddTodo={this.handleAddTodo} />
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}
```
The two views - `Add` and `List` are embedded in `ViewPagerAndroid` component. The List component lists all the Todo items. The Add component adds a new Todo item. `ToolbarAndroid` has `onActionSelected` event which must be handled to switch to a new view.

```
  handleActionSelected(position) {
    this.setState({
      actionText: actions[position].title,
    });
    this.pager.setPage(position);
  }
```
The reason we moved TabBarIOS to ToolbarAndroid is because of the native experience we get. The following video highlights the native experience when we select the toolbar actions.

![Native experience](https://cdn.filestackcontent.com/3jwvOzfmSlqbHmGti381 "Native experience")

React Native components renders as native components in each platform. Components suffixed with `IOS` are available only for iOS platform. Components suffixed with `Android` are available only for Android platform. For displaying progress, `ProgressViewIOS` and `ProgressBarAndroid` are equivalent React Native components for each platform.


### C. Android only components
`ToastAndroid` is an API available only for Android. It displays a `toast` or message that appears for a short duration. The `handleAddTodo` method adds a Todo item to the Todo list. After the item is added, a toast message is displayed.

```
  handleAddTodo(todo) {
    let { todos } = this.state;
    todos = todos.slice();
    todos.push(todo);
    this.setState({ todos });
    ToastAndroid.showWithGravity('Todo is added', ToastAndroid.LONG, ToastAndroid.TOP);
  }
```

![Toast](https://cdn.filestackcontent.com/fpEiXjCT6iROoghFaXp7 "Toast")

We have already seen `ToolbarAndroid` and `ViewPagerAndroid` components which exists only for the Android platform. [DrawerLayoutAndroid](https://facebook.github.io/react-native/docs/drawerlayoutandroid.html) is another Android only React component that wraps the DrawerLayout. DrawerLayout renders the navigation view which can pulled from the side of the app.

### D. Other differences
Platform differences can be explicitly handled with React components. For example, for the `TextInput` component, we don't want to show a border for the Android platform.

```
import { Platform, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: (Platform.OS === 'ios') ? 1 : 0,
    borderRadius: 5,
  },
});
```
React Native components are configured using props. Some props are available only for Android platform. For example, the `numberOfLines` and `returnLabel` props in `TextInput` are available only for the Android platform. The `keyboardType` prop in `TextInput` deserves mention. Not all the keyboard types are available in both platforms. Only `default`, `numeric`, `email-address` and `phone-pad` are available cross-platform.

### E. Wrapping up
While extending an iOS only React Native app to the Android platform, the following points should be kept in mind:

1. There are platform specific components. Whenever an iOS only component is used, an equivalent Android only component should be used.
2. There are Android only components which should be used to enhance the native experience.
3. Most of the React Native components are cross-platform. There are minor difference in the props available to each platform.

The underlying idea behind React Native is to provide the native experience to the user. There may be occasions where developers prefer to use JavaScript components to have the same look-and-feel across iOS and Android. A better approach is to take advantage of platform specific features to provide a better native experience. Native experience is preferred over consistent look-and-feel.

There is an accompanying [GitHub project](https://github.com/vijayst/react-native-todo) to the tutorial.
