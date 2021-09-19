import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

//Mengambil data dari file lain
// import nama_var from './letak_files'
import KomponenDasar from './src/components/belajar/SampleComponent'
import StylingRNC from './src/components/belajar/SampleStyle'
import FlexBox from './src/components/belajar/FlexBox'

//Arrow Function
const App = () => {
  return (
    <View>
        {/* <KomponenDasar/>
        <StylingRNC/> */}
        <FlexBox/>
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