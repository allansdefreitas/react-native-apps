import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Simples from './components/Simples'

export default class App extends React.Component {

    render() {
      return (
        <View style={myStyles.container}>
          <Text style={myStyles.font}>Shalom!!</Text>
          <Simples myText="Hello!!"/>
        </View>
      )
    }
}

const myStyles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    fontSize: 40
  }
})