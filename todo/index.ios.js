import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import Add from './components/add';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'todo'
    };
    this.handleListPress = this.handleListPress.bind(this);
    this.handleAddPress = this.handleAddPress.bind(this);
  }

  handleListPress() {
    this.setState({
      selectedTab: 'todo'
    });
  }

  handleAddPress() {
    this.setState({
      selectedTab: 'add'
    });
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Todo"
          systemIcon="recents"
          selected={this.state.selectedTab === 'todo'}
          onPress={this.handleListPress}
        >
          <Text>Hello world</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Add"
          systemIcon="more"
          selected={this.state.selectedTab === 'add'}
          onPress={this.handleAddPress}
        >
          <Add />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todo', () => Todo);
