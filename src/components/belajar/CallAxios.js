import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import Axios from 'axios'

//Vanilla Js adalah Pure Javascript tidak memerlukan Library tambahan

const CallAxios = () => {
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    })  

    const [dataPost, setDataPost] = useState({
        name: '',
        job: '',
        id: ''
    })

    useEffect(() => {
    }, [])

    //Pemanggilan menggunakan method GET
    const getData = () => {
        Axios.get('https://reqres.in/api/users/4')
        .then(res => {
            setDataUser(res.data.data)
            // console.log(res);
        })
        .catch(err => {
            console.error(err); 
        })
    }

    // Pemanggilan menggunakan method POST
    const postData = () => {
    
        //Call API menggunakan Method POST
        const dataForAPI = {
                name: "morpheus",
                job: "leader"
        }

        Axios.post('https://reqres.in/api/users', dataForAPI)
        .then(res => {
            // console.log(res)
            setDataPost(res.data)
        })
        .catch(err => {
            console.error(err); 
        })
    }

    return (
        <View style={styles.container}>
        <Text style={{padding:10,fontSize:24,fontWeight:'bold'}}>Materi Call API menggunakan Axios</Text>
        <Button title="GET DATA" onPress={getData}/>
        <Text>Response GET DATA</Text>
        {dataUser.avatar.length > 0 && (
            <Image source= {{uri: dataUser.avatar}} style={{width:100,height:100,borderRadius:100/2}} />
        )}
        <Text>Nama : {`${dataUser.first_name} ${dataUser.last_name}`}</Text>
        <Text>Email : {`${dataUser.email}`}</Text>
        <View style={{height:2,backgroundColor:'#0F0F0F',marginVertical:10}}></View>
        <Button title="POST DATA" onPress={postData}/>
        <Text>Response POST DATA</Text>
        <Text>ID : {`${dataPost.id}`}</Text>
        <Text>Name : {`${dataPost.name}`}</Text>
        <Text>Job : {`${dataPost.job}`}</Text>
        </View>
    )
}

export default CallAxios

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding: 10
    }
})
