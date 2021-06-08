import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity,FlatList,Modal } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Favorite = ({navigation}) => {
    return (
        <View>
            <View style={{backgroundColor:'white',height:50,width:'100%',borderBottomColor:'grey',borderBottomWidth:0.3,alignItems:'center',flexDirection:'row',position:'absolute'}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name={'chevron-back'} size={25}/>
                </TouchableOpacity>
                <Text style={{fontSize:20,marginLeft:110}}>Món yêu thích</Text>
            </View>
            <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <MaterialCommunityIcons name={'star-circle'} size={80} color={'silver'} />
                <Text style={{fontWeight:'bold',fontSize:23,marginTop:20}}>Bạn chưa có món yêu thích</Text>
            </View>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({})
