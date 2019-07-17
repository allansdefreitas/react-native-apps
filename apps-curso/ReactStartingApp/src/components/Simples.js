import React from 'react'
import {View, Text} from 'react-native'

// My files: compoenents, styles etc.
import Padrao from '../styles/Padrao'

//export default function(props) {
//    return <Text>{props.myText}</Text>
//}

// Arrow Function: Return one component (Text)
// the resturn satatement and brackets are hidden
export default props => 
    // {[]} array with many styles...
    <Text style={[Padrao.exercise]}>Arrow Function: {props.myText}</Text>

// Arrow function: return one component (View) with many components (Text) inside 
//export default props => 
//<View>
//  <Text>Arrow Function: {props.myText}</Text>
//  <Text>Arrow Function2: {props.myText}</Text>
//</View>

// Arrow function: return many components with an array of components 
//export default props => [
//  <Text>Arrow Function: {props.myText}</Text>,
//  <Text>Arrow Function2: {props.myText}</Text>
//]

//export default props => [
//    <Text key={1}>Arrow Function: {props.myText}</Text>,
//    <Text key={2}>Arrow Function2: {props.myText}</Text>
//  ]

// This code above is the same of:

//export default props => {
//    return [
//        <Text key={1}>Arrow Function: {props.myText}</Text>,
//        <Text key={2}>Arrow Function2: {props.myText}</Text>
//    ]
//}