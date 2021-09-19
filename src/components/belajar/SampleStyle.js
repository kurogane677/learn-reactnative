import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import gambar from '../assets/images/sus.jpg'

//Basic Styling
const StylingRNC = () => {
    return (
      <View>
        <Text style={styles.content}>Styling Component</Text>
        <View style={{
          width:50,
          height:50,
          backgroundColor:'#F2F2F2',
          borderColor:'#F2F2F2',
          marginTop:10,
          marginLeft:10,
          borderRadius:10,
          }} />
          <View style={styles.container}>
            {/* <Image source={nama_var} style={{width:100, height:100}}/> */}
            <Image source={gambar} style={styles.images} />
            <Text style={{fontSize:14, fontWeight:'bold',marginTop:16}}>New AMOGUS 2020</Text>
            <Text style={{fontSize:12, fontWeight:'bold',marginTop:12,color:'#F2994A'}}>9.8/10.0 *****</Text>
            <Text style={{fontSize:12, fontWeight:'300',marginTop:12, color:'#0F0F0F'}}>In Elevator</Text>
            <View style={{backgroundColor:'green', borderRadius:16, paddingVertical:6, marginTop:12}}>
              <Text style={{fontSize:14, fontWeight:'600',color:'#F0F0F0',textAlign:'center'}}>Votes</Text>
            </View>
          </View>
      </View>
    )
  }
  
  export default StylingRNC;
  
  //Basic Styling
  const styles = StyleSheet.create({
    content:{
      fontSize:18,
      fontWeight:'bold',
      color:'#F0F0F0'
    },
    container:{
      marginLeft:10,
      marginTop:20,
      backgroundColor:'#F0F0F0',
      borderRadius:15,
      width:230,
      padding:10,
    },
    images:{
      width: 200,
      height: 100,
      borderRadius:10,
    }
  })
  