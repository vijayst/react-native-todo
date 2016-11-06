import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';

export default class Todo extends Component {

  constructor() {
    super();
    this.state = {};
    this.handleActionSelected = this.handleActionSelected.bind(this);
  }

  handleActionSelected(position) {
    this.setState({
      actionText: actions[position].title,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          actions={actions}
          onActionSelected={this.handleActionSelected}
          style={styles.toolbar}
          title={this.state.actionText}
        />
      </View>
    );
  }
}

const actions = [
  {
    title: 'Todo',
    show: 'always'
  },
  {
    title: 'Add',
    show: 'always'
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

AppRegistry.registerComponent('todo', () => Todo);
