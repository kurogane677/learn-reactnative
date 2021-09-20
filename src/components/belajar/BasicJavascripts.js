import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascripts = () => {

    //Primitive variable
    const nama = 'Yusril' //String 
    const gender = true //boolean
    let usia = 20 //Integer atau Number

    //Complex variable
    const hewan = {
        nama: 'kitty',
        jenis: 'kucing',
        usia: 2,
        lokal: true,
        warna: 'putih',
        OrangTua: {
            jantan: 'meow',
            betina: 'nyaa',
        },
    } // Object

    const sapaOrang = (name, age) => {
        return console.log(`Hello ${name} usia Anda ${age}`)
    }//Function

    sapaOrang('Yusril',20)

    const namaOrang = ['Abay','Andi','Azza','Didan','Dimas'] // Object atau Array (biasa dipanggil Array)
    typeof namaOrang //Object

    // if (hewan.nama === 'kitty') {
    //     console.log('Hello Kitty');
    // }else{
    //     console.log('Hewan siapa');
    // }

    const sapaHewan = ObjectHewan => {
        // let hasil = "";
        // if (hewan.nama === 'kitty') {
        //     hasil = "Hello Kitty";
        // }else{
        //     hasil = "Kamu siapa";
        // }
        // return hasil

        //Ternary Operation
        //Hanya bisa digunakan satu kondisi
        return hewan.nama === 'kitty' ? 'Hello Kitty' : 'Hewan siapa'
    }

    return (
        <View style={{padding:10}}>
        <Text style={{padding:10,fontSize:24,fontWeight:'bold'}}>Materi Basic Javascript</Text>

        <Text>Nama : {nama}</Text>
        <Text>Umur : {usia} Tahun</Text>
        <Text>{sapaHewan(hewan)}</Text>

        {/* Pemanggilan Array */}
        <Text>{namaOrang[0]}</Text>
        <Text>{namaOrang[1]}</Text>
        <Text>{namaOrang[2]}</Text>
        <Text>================</Text>

        {/* Contoh Looping */}
        {namaOrang.map(orang =>
            <Text>{orang}</Text>
        )}
        </View>
    )
}

export default BasicJavascripts

const styles = StyleSheet.create({})
