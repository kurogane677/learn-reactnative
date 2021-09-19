import React from 'react'
import { Image, ImageBase, StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import huruf from '../assets/icons/unnamed.jpg'


const Position = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:24}}>Materi Position</Text>
            <View style={styles.wrapper}>
                <View style={styles.cart}>
                    <Image source={huruf} style={styles.icon}/>
                    <Text style={styles.notif}>99</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit</Text>
            </View>
        </View>
    )
}

export default Position

const styles = StyleSheet.create({
    wrapper:{
        padding:20,
        alignItems:'center'
    },
    cart:{
        borderWidth:3,
        borderColor:'#0F0F0F',
        width:99,
        height:99,
        borderRadius:99/2,
        justifyContent:'center',
        position:'relative'
    },
    icon:{
        width:93,
        height:93,
        borderRadius: 93/2
    },
    notif:{
        fontSize:12,
        color:'#F0F0F0',
        backgroundColor:'green',
        padding:5,
        borderRadius:25,
        width:24,
        height:24,
        position:'absolute',
        top:0,
        right:0
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:10
    }
})
