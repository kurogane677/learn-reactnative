import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import FlexBox from './src/components/belajar/FlexBox'
// import nama_var from './letak_files'

//Mengambil data dari file lain
import KomponenDasar from './src/components/belajar/SampleComponent'
import StylingRNC from './src/components/belajar/SampleStyle'

//Arrow Function
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <KomponenDasar/> */}
        {/* <StylingRNC/> */}
        <FlexBox/>
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