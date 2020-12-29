/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  View,
  Text,
  NativeModules,
} from 'react-native';

_buttonAaction = () => {
  console.log(NativeModules.SwiftClass.return1())
}

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Button
        onPress={this._buttonAaction}
        title="Click me!"
      />
    </View>
  )
}

export default App;
