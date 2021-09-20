import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

//Vanilla Js adalah Pure Javascript tidak memerlukan Library tambahan

const Callapi = () => {
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

    //     //Cal API menggunakan Method GET
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    
    //     //Call API menggunakan Method POST
    //     const dataForAPI = {
    //             name: "morpheus",
    //             job: "leader"
    //     }

    //     console.log('data object: ', dataForAPI);
    //     console.log('data stringify: ', JSON.stringify(dataForAPI));
    //     fetch('https://reqres.in/api/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(dataForAPI)
    //     })
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log('post response: ', json)
    // })
    }, [])
    //END HERE

    //Pemanggilan menggunakan method GET
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)
        })
    }

    // Pemanggilan menggunakan method POST
    const postData = () => {
    
        //Call API menggunakan Method POST
        const dataForAPI = {
                name: "morpheus",
                job: "leader"
        }

        console.log('data object: ', dataForAPI);
        console.log('data stringify: ', JSON.stringify(dataForAPI));
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {
            console.log('post response: ', json)
            setDataPost(json)
        })
    }

    return (
        <View style={styles.container}>
        <Text style={{padding:10,fontSize:24,fontWeight:'bold'}}>Materi Call API menggunakan Vanilla JS</Text>
        <Button title="GET DATA" onPress={getData}/>
        <Text>Response GET DATA</Text>
        <Image source= {{uri: dataUser.avatar}} style={{width:100,height:100,borderRadius:100/2}} />
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

export default Callapi

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        padding: 10
    }
})
