import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import Crud from './src/components/Crud'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

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
        {/* <CallAxios/> */}
        {/* <Crud /> */}
        {/* <Text>Hello</Text> */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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