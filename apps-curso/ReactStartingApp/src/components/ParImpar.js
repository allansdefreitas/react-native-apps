import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../styles/Padrao'

function ParOuImpar(num) {
    // if( num % 2 == 0){
    //     return <Text style={Padrao.exercise}>Par</Text>
    // }else{
    //     return <Text style={Padrao.exercise}>Ímpar</Text>
    // }

    const value = num % 2 == 0 ? 'Par' : 'Ímpar'
    return <Text style={Padrao.exercise}>{value}</Text>
}

export default props =>
    <View>
            { ParOuImpar(props.number) }
 
            {
                
                /* {
                props.number % 2== 0 
                ? <Text style={Padrao.exercise}>Par</Text>
                : <Text style={Padrao.exercise}>Ímpar</Text>
            } */}
    </View>


// export default props =>
//     <View>
//         <If test={props.number % 2 == 0}>
//             <Text style={Padrao.exercise}>Odd</Text>
//         </If>
//         <If test={props.number % 2 == 1}>
//           <Text style={Padrao.exercise}>Evend</Text>
//         </If>
      
//     </View>
