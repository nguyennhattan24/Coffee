import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableHighlight,TouchableOpacity,FlatList } from 'react-native'

const header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../src/Icon/Logo.png')}
                style={{
                    width:180,
                    height:18,
                    marginLeft:10
                }}
            />
            <TouchableOpacity>
                <Image
                    source={require('../src/Icon/Bronze.png')}
                    style={{
                        width:35,
                        height:35,
                        marginRight:10
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default header

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:70,
        backgroundColor:'white'
    },
})
