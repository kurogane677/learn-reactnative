import React, { Component, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

// class FlexBox extends Component {

//     //
//     constructor(props){
//         super(props)
//         console.log("Im Constructor")
//         this.state = {
//             subscriber: 200,
//         }
//     }

//     //
//     componentDidMount(){
//         console.log("Im Did Mounted")
//         setTimeout(() => {
//             this.setState({
//             subscriber: 2,
//         })
//     }, 2000)
//     }

//     componentDidUpdate(){
//         console.log("Komponen telah diupdate")
//     }

//     render()    {
//         console.log("Render goess brrr")
//         return (
//             <View>
//                 <Text style={{color:'#0F0F0F',fontWeight:'bold', fontSize:24}}>Materi Flex Box</Text>
//                 <View style={{flexDirection:'row', backgroundColor:'grey', justifyContent:'space-between'}}>
//                     <View style={{backgroundColor:'#F01752',width:50,height:150}}></View>
//                     <View style={{backgroundColor:'#0F0174',flex:1,height:80}}></View>
//                     <View style={{backgroundColor:'#A51022',flex:1,height:100}}></View>
//                     <View style={{backgroundColor:'#1A1022',flex:1,height:200}}></View>
//                 </View>
//                 <View style={{flexDirection:'row',justifyContent:'space-around'}}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                 </View>
//                 <View style={{flexDirection:'row'}}>
//                     <Image source={{
//                         uri:'https://yt3.ggpht.com/ytc/AKedOLRUia5aiINxQYNdLpm88LodeQFdT-JVav8Mgxf74NdC9DOJH4jf-zVswMO_AdI0=s88-c-k-c0x00ffffff-no-rj-mo'
//                     }}
//                     style={{width:100,height:100,borderRadius:50,margin:10}} />
//                     <View style={{justifyContent:'center'}}>
//                         <Text style={{fontWeight:'bold', fontSize:24}}>Kurogane Yusril</Text>
//                         <Text style={{fontSize:18}}>{this.state.subscriber} Subscribers</Text>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

const FlexBox = () => {

    //
    const [subs, setSubs] = useState(200)
    useEffect(() => {
        console.log("Did Mount")
        setTimeout(() => {
            setSubs(1000)
        }, 2000);
        return () => {
            console.log("Did Update")
        }
    }, [subs])

    
    
    //Bisa Seperti ini
    // const [subs, setSubs] = useState(200);
    // useEffect(() => {
    //     console.log("did mount")
    // }, [])

    // useEffect(() => {
    //     console.log("did update")
    //     setTimeout(() => {
    //         setSubs(1000)
    //     }, 2000);
    // }, [subs])

    return (
        <View>
                <Text style={{color:'#0F0F0F',fontWeight:'bold', fontSize:24}}>Materi Flex Box</Text>
                <View style={{flexDirection:'row', backgroundColor:'grey', justifyContent:'space-between'}}>
                    <View style={{backgroundColor:'#F01752',width:50,height:150}}></View>
                    <View style={{backgroundColor:'#0F0174',flex:1,height:80}}></View>
                    <View style={{backgroundColor:'#A51022',flex:1,height:100}}></View>
                    <View style={{backgroundColor:'#1A1022',flex:1,height:200}}></View>
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
                        <Text style={{fontSize:18}}>{subs} Subscribers</Text>
                    </View>
                </View>
            </View>
    )
}

export default FlexBox;

const styles = StyleSheet.create({})
