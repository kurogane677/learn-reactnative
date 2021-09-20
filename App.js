import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

//Mengambil data dari file lain
// import nama_var from './letak_files'
import KomponenDasar from './src/components/belajar/SampleComponent'
import StylingRNC from './src/components/belajar/SampleStyle'
import FlexBox from './src/components/belajar/FlexBox'
import Position from './src/components/belajar/Position'
import PropsDinamis from './src/components/belajar/PropsDinamis'
import StateDinamis from './src/components/belajar/StateDinamis'
import Communication from './src/components/belajar/Communication'
import BasicJavascripts from './src/components/belajar/BasicJavascripts'
import Callapi from './src/components/belajar/Callapi'
import CallAxios from './src/components/belajar/CallAxios'

//Arrow Function
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <KomponenDasar/> */}
        {/* <StylingRNC/> */}
        {/* <FlexBox/> */}
        {/* <Position/> */}
        {/* <PropsDinamis/> */}
        {/* <StateDinamis/> */}
        {/* <Communication /> */}
        {/* <BasicJavascripts/> */}
        {/* <Callapi/> */}
        <CallAxios/>
        {/* <Text>Hello</Text> */}
      </ScrollView>
    </View>
  )
}

  // //Class Function
  // class Nama_Komponen extends Component {
  //   render(){
  //     return <Text>Contoh komponen class</Text>
  //   }
  // }
  

export default App;