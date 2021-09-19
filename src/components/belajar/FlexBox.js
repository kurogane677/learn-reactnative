import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class FlexBox extends Component {
    render()    {
        return (
            <View>
                <Text style={{color:'#0F0F0F',fontWeight:'bold', fontSize:24}}>Materi Flex Box</Text>
                <View style={{flexDirection:'row', backgroundColor:'grey'}}>
                    <View style={{backgroundColor:'#F01752',width:50,height:50}}></View>
                    <View style={{backgroundColor:'#0F0174',flex:1,height:60}}></View>
                    <View style={{backgroundColor:'#A51022',flex:1,height:70}}></View>
                    <View style={{backgroundColor:'#1A1022',flex:1,height:100}}></View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={{
                        uri:'https://yt3.ggpht.com/ytc/AKedOLRUia5aiINxQYNdLpm88LodeQFdT-JVav8Mgxf74NdC9DOJH4jf-zVswMO_AdI0=s88-c-k-c0x00ffffff-no-rj-mo'
                    }}
                    style={{width:100,height:100,borderRadius:50,margin:10}} />
                    <View style={{justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:24}}>Kurogane Yusril</Text>
                        <Text style={{fontSize:18}}>1M Subscribers</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default FlexBox;

const styles = StyleSheet.create({})
