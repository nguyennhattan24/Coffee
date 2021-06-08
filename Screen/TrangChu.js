import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableHighlight,TouchableOpacity,FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'
import Header from './header'
const TrangChu = ({navigation}) => {
    return (
        <View>
            <Header/> 
            <FlatList
                ListFooterComponent={()=>
                    <View>
                    <LinearGradient colors={['black', '#fe8f01', '#F2F2F2']} style={styles.linearGradient}>
                    <TouchableOpacity style={{width:'100%',height:270,marginTop:15}} onPress={()=>navigation.navigate('DatMon')}>
                    <Swiper style={styles.wrapper} 
                            index={0}
                            autoplay={true}
                            dot={
                                <View
                                    style={{
                                        backgroundColor: 'silver',
                                        width: 18,
                                        height: 3,
                                        marginBottom:8,
                                        marginHorizontal:2
                                    }}
                                />
                            }
                            activeDot={
                                <View
                                  style={{
                                    backgroundColor: 'white',
                                    width: 18,
                                    height: 3,
                                    marginBottom:8,
                                    marginHorizontal:2
                                  }}
                                />
                              }
                            >
                                <View style={styles.slide}>
                                    <View style={styles.slide1}>
                                        <Image
                                            source={require('../src/Image/3.jpg')}
                                            style={{
                                                width:'95%',
                                                height:'100%',
                                                alignSelf:'center',
                                                borderRadius:10,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.slide}>
                                    <View style={styles.slide1}>
                                        <Image
                                            source={require('../src/Image/2.jpg')}
                                            style={{
                                                width:'95%',
                                                height:'100%',
                                                alignSelf:'center',
                                                borderRadius:10,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.slide}>
                                    <View style={styles.slide1}>
                                        <Image
                                            source={require('../src/Image/1.jpg')}
                                            style={{
                                                width:'95%',
                                                height:'100%',
                                                alignSelf:'center',
                                                borderRadius:10,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.slide}>
                                    <View style={styles.slide1}>
                                        <Image
                                            source={require('../src/Image/4.jpg')}
                                            style={{
                                                width:'95%',
                                                height:'100%',
                                                alignSelf:'center',
                                                borderRadius:10,
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={styles.slide}>
                                    <View style={styles.slide1}>
                                        <Image
                                            source={require('../src/Image/5.jpg')}
                                            style={{
                                                width:'95%',
                                                height:'100%',
                                                alignSelf:'center',
                                                borderRadius:10,
                                            }}
                                        />
                                    </View>
                                </View>
                            </Swiper>
                    </TouchableOpacity>
                    <View style={styles.deli}>
                        <TouchableOpacity style={styles.Delivery} onPress={()=>navigation.navigate('DatMon')}>
                            <Image
                                source={require('../src/Icon/Order1.png')}
                                style={styles.DeliIcon}
                            />
                            <Text style={styles.txtDeli}>Giao tận nơi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Delivery} onPress={()=>navigation.navigate('DatMon')}>
                            <Image
                                source={require('../src/Icon/Order2.png')}
                                style={styles.DeliIcon}
                            />
                            <Text style={styles.txtDeli}>Tự đến lấy</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                {/*<View style={styles.Log}>
                    <Image
                        source={require('../src/Icon/Newbie.png')}
                        style={{
                            width:90,
                            height:65,
                            marginTop:16
                        }}
                    />
                    <View style={{width:'85%',marginTop:16}}>
                        <Text style={{textAlign:'center'}}>Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho thành viên bạn nhé !</Text>
                    </View>
                    <TouchableOpacity style={{marginTop:16,borderRadius:100,borderWidth:0.3,borderColor:'#DF7401',height:27,justifyContent:'center'}}>
                        <Text style={{textAlign:'center',color:'#DF7401',fontSize:16,fontWeight:'bold',marginHorizontal:20}}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.banner}>
                    <Image
                        source={require('../src/Image/Banner1.png')}
                        style={{
                            width:'100%',
                            height:150,
                            borderRadius:15,
                        }}
                    />
                </TouchableOpacity>
                 <View style={styles.reward}>
                    <Text style={{fontSize:12,color:'grey',marginTop:30}}>THE COFFEE HOUSE'S REWARD</Text>
                        <Text style={{fontSize:20,color:'black',marginTop:10,textAlign:'center',fontWeight:'bold',width:300}}>VỚI THE COFFEE HOUSE'S REWARD</Text>
                    <Image
                        source={require('../src/Icon/Reward1.png')}
                        style={{
                            width:130,
                            height:100,
                            marginTop:60
                        }}
                    />
                    <Text style={{marginTop:30,textAlign:'center',fontWeight:'bold',fontSize:15,color:'black'}}>Tích BEAN dễ dàng - Thăng hạng nhanh hơn</Text>
                    <Text style={{textAlign:'center',fontSize:15,width:300,color:'black'}}>Mô hình thăng hạng thành viên mới dễ dàng hơn</Text>
                    <Image
                        source={require('../src/Icon/Reward2.png')}
                        style={{
                            width:130,
                            height:120,
                            marginTop:60
                        }}
                    />
                    <Text style={{marginTop:30,textAlign:'center',fontWeight:'bold',fontSize:15,color:'black'}}>Cửa hàng ưu đãi</Text>
                    <Text style={{textAlign:'center',fontSize:15,width:300,color:'black'}}>Thoải mái đổi BEAN để nhận nhiều phần quà cực hấp dẫn!</Text>
                    <Image
                        source={require('../src/Icon/Reward3.png')}
                        style={{
                            width:150,
                            height:110,
                            marginTop:60
                        }}
                    />
                    <Text style={{marginTop:30,textAlign:'center',fontWeight:'bold',fontSize:15,color:'black'}}>Đặc quyền kim cương</Text>
                    <Text style={{textAlign:'center',fontSize:15,width:300,color:'black'}}>Tận hưởng các đặc quyền chỉ dành riêng cho thành viên Kim Cương</Text>
                    <TouchableOpacity style={{marginTop:16,borderRadius:100,borderWidth:0.3,borderColor:'#DF7401',height:30,justifyContent:'center'}}>
                        <Text style={{textAlign:'center',color:'#DF7401',fontSize:16,fontWeight:'bold',marginHorizontal:20}}>Đăng kí thành viên</Text>
                    </TouchableOpacity>
                </View> */}
                    <View style={styles.Notif}>
                        <Text style={{fontWeight:'bold',fontSize:18,margin:15}}>Thông báo mới</Text>
                        <View
                            style={{
                                width:'100%',
                                height:1,
                                backgroundColor:'#f2f2f2'
                            }}
                        />
                        <TouchableOpacity style={styles.Noti}>
                            <Image
                                source={require('../src/Image/Noti1.jpg')}
                                style={{
                                    width:40,
                                    height:40,
                                    borderRadius:8
                                }}
                            />
                            <View>
                                <Text style={styles.NotiTxt}>Chào bạn mới</Text>
                                <Text style={styles.NotiTxt}>2021/04/30 - 18:49</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                }
                style={styles.scroll}
            />
        </View>
    )
}

export default TrangChu

const styles = StyleSheet.create({
    scroll:{
        height:615
    },
    linearGradient:{
        width:'100%',
        height:400
    },
    slide:{
        justifyContent:'center',
        alignSelf:'center',
        width:'100%',
        height:'90%',
    },
    slide1: {
        flex: 1,
        width:'auto',
        height:'auto',
        marginRight:5
    },
    wrapper:{},
    deli:{
        width:'100%',
        height:100,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    Delivery:{
        width:'47%',
        height:100,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'silver',
    },
    DeliIcon:{
        width:40,
        height:40,
        marginLeft:10,
        marginTop:15
    },
    txtDeli:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:10,
        marginTop:10
    },
    Log:{
        width:'95%',
        height:200,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:8,
        alignItems:'center',
        borderWidth:0.3,
        borderColor:'silver',
    },
    banner:{
        width:'95%',
        height:150,
        alignSelf:'center',
        marginTop:20
    },
    reward:{
        width:'95%',
        height:1000,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:20,
        borderWidth:0.3,
        borderColor:'silver',
        borderRadius:10,
        marginBottom:20,
        alignItems:'center'
    },
    Notif:{
        width:'95%',
        height:'auto',
        backgroundColor:'white',
        alignSelf:'center',
        borderColor:'#f9f9f9',
        borderWidth:0.5,
        borderRadius:8,
    },
    Noti:{
        margin:15,
        flexDirection:'row'
    },
    NotiTxt:{
        marginLeft:20
    }
})
