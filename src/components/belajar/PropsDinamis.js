import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
    return (
        <View style={{alignItems:'center',padding:10}}>
            <Image source={{
                uri: props.images
            }}
            style={{width :70,height:70, borderRadius:70/2}} />
            <Text style={{marginTop:5}}>{props.title}</Text>
        </View>
    )
}


const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Props Dinamis</Text>
            <ScrollView horizontal>
            <View style={{flexDirection:'row'}}>
                <Story 
                    title="Lorem Ipsum" 
                    images="https://yt3.ggpht.com/ytc/AKedOLRUia5aiINxQYNdLpm88LodeQFdT-JVav8Mgxf74NdC9DOJH4jf-zVswMO_AdI0=s88-c-k-c0x00ffffff-no-rj-mo" />
                <Story
                    title="dolor sit"
                    images="https://i.ytimg.com/vi/KId6eunoiWk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_gmE2HS4dYI3Ns4GFtgocgXdqYw" />
                <Story 
                    title="Lorem Ipsum" 
                    images="https://yt3.ggpht.com/ytc/AKedOLRUia5aiINxQYNdLpm88LodeQFdT-JVav8Mgxf74NdC9DOJH4jf-zVswMO_AdI0=s88-c-k-c0x00ffffff-no-rj-mo" />
                <Story
                    title="dolor sit"
                    images="https://i.ytimg.com/vi/KId6eunoiWk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_gmE2HS4dYI3Ns4GFtgocgXdqYw" />
                <Story 
                    title="Lorem Ipsum" 
                    images="https://yt3.ggpht.com/ytc/AKedOLRUia5aiINxQYNdLpm88LodeQFdT-JVav8Mgxf74NdC9DOJH4jf-zVswMO_AdI0=s88-c-k-c0x00ffffff-no-rj-mo" />
                <Story
                    title="dolor sit"
                    images="https://i.ytimg.com/vi/KId6eunoiWk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA_gmE2HS4dYI3Ns4GFtgocgXdqYw" />
            </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis

const styles = StyleSheet.create({})
