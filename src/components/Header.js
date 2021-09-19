// //Membuat Header mirip Youtube
// //Source https://www.youtube.com/watch?v=WK17ZDi1yCs 

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Icon from 'react-native-vector-icons/Ionicons'

// export default function Header() {
//     return (
//         <View style={styles.header}>
            
//             <View style={{flexDirection:'row'}}>
//                 <AntDesign name="youtube" size={32} color="#4F8EF7" />
//                 <Text style={styles.judul}>TestTube</Text>

//             <View style={{
//                 flexDirection:'row'
//                 ,justifyContent:'space-around'
//                 ,position:'absolute'
//                 ,right:0
//                 ,top:2
//                 ,width:150}}>
//                 <Icon name='ios-videocam' size={32} color='#0F0F0F'/>
//                 <AntDesign name="search1" size={32} color="#0F0F0F" />
//                 <Icon name='ios-person' size={32} color='#0F0F0F'/>
//             </View>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     header:{
//         height:45,
//         padding:3,
//         backgroundColor:'#f0f0f0',
//         justifyContent:'space-between',
//     },
//     judul:{
//         top:5,
//         marginLeft:5,
//         fontSize:24,
//         fontWeight:'bold',
//     }
// })


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const Header    =   ()  => {
//     return (
//         <View style={styles.head}>
//             <Text style={styles.judul}>Login My Apps</Text>
//         </View>
//     );
// };

// // export default function Header;s

// const styles = StyleSheet.create({
//     head:{
//         height:50,
//         backgroundColor:'#F0F0F0',
//         alignItems:'center',
//     },
//     judul:{
//         fontSize:24,
//         fontWeight:'bold',
//         top:10,
//     },
// });
