import React, { Component, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter = () =>   {
    const [count, setCount] = useState(0);
    return(
        <View>
            <Text style={styles.textTitle}>Kamu telah mengklik {count} kali</Text>
            <Button 
                onPress={() => setCount(count + 1)} 
                title="Tambah" />
        </View>
    )
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>Belajar Komponen dengan State Dinamis Hooks</Text>
            <Counter/>
            <Counter/>
            <Counter/>

            <Text style={styles.textTitle}>Belajar Komponen dengan State Dinamis Class</Text>
            <CounterClass />
            <CounterClass />
        </View>
    )
}

class CounterClass extends Component{

    state ={
        number: 0
    }
    render(){
        return(
            <View>
                <Text style={styles.textTitle}>Kamu telah mengklik {this.state.number} kali</Text>
                <Button 
                onPress={() => this.setState({number: this.state.number + 1})} 
                title="Tambah" />
            </View>
        )
    }
}


export default StateDinamis;

const styles = StyleSheet.create({
    wrapper:{
        padding:20,
    },
    textTitle:{
        textAlign:'center',
        padding:10,
        fontSize:18,
    }
})