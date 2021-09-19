import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const KomponenDasar = () => {
    return(
  
      <View style={{backgroundColor:'red'}}>
      {/* <Nama_Komponen /> */}
      <Image source={{uri: 'https:url.com'}} />
      <Text>Test World!</Text>
      <TextInput/>
  </View>
      )
  }

  export default KomponenDasar;