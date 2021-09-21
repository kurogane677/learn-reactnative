import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Axios from 'axios'

const Datas = () => {
    return(
        <View style={{flexDirection:'row'}}>
            <Image source={{uri : 'https://i.pravatar.cc/150?img=5'}} style={{width:75,height:75, borderRadius:75}} />
            <View style={{padding:10, flex:1}}>
                <Text style={styles.nama}>Nama  :</Text>
                <Text>Email :</Text>
                <Text style={styles.umur}>Umur  :</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
        )
}

const Crud = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [umur, setUmur] = useState("")

    const submit = () => {
        const data = {
            //Jika Variable nya beda
            // nama_var: var2,
            // nama_var: var2,

            name: name,
            email: email,
            umur: umur
        }
        Axios.post('http://192.168.100.148:3000/users', data)
        .then(res => {
            console.log('Hasil: ' , res)
            setName("")
            setEmail("")
            setUmur("")
        })
        .catch(err => {
            console.log(err); 
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Membuat CRUD React Native</Text>
            <TextInput placeholder="Masukkan Nama Lengkap" style={styles.form} value={name} onChangeText={(value)=> setName(value)}/>
            <TextInput placeholder="Masukkan Email" style={styles.form} value={email} onChangeText={(value)=> setEmail(value)}/>
            <TextInput placeholder="Masukkan Umur" style={styles.form} value={umur} onChangeText={(value)=> setUmur(value)}/>
            <Button title="SIMPAN" onPress={submit} />
            <View style={{height:2,backgroundColor:'#0F0F0F',marginVertical:10}}></View>
            <Datas />
            <Datas />
            <Datas />
        </View>
    )
}

export default Crud;

const styles = StyleSheet.create({
    container: {
        padding:10,
    },
    textTitle:{
        fontSize:18,
        fontWeight:'bold',
    },
    form:{
        borderRadius:5,
        borderColor:"#0F0F0F",
        borderWidth:1,
        padding:10,
        margin:10,
    },
    nama:{
        fontSize:18,
        fontWeight:'bold',
    },
    umur:{
        marginTop:10,
    },
    delete:{
        fontSize:32,
        fontWeight:'bold',
        color:'red',
        marginTop:20,
    }
})
