import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import Cart from './cart/Index'
import Product from './product'

const Communication = () => {
    const [total, setTotal] = useState(0)
    return (
        <View>
            <Text style={{padding:10,fontSize:24,fontWeight:'bold'}}>Materi Komunikasi Antar Komponen</Text>
            <Cart qty={total}/>
            <Product votes={() => setTotal(total + 1)}/>
        </View>
    )
}

export default Communication

const styles = StyleSheet.create({})
