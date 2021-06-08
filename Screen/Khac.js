import React,{ useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image,Modal, ScrollView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from './header'
import Login from './Login'
const Khac = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLogin = () => setIsOpen(true)
    const onclose = () => setIsOpen(false)
    return (
        <View style>
            <Header />
            <FlatList
                ListFooterComponent={() =>
                    <View>
                        <Text style={styles.title}>Tiện ích</Text>
                        <View style={{ width: '95%', height: 120, alignSelf: 'center', marginTop: 5, flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../src/Icon/History.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Lịch sử đơn hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../src/Icon/Term.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Điều khoản</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '95%', height: 120, alignSelf: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../src/Icon/Music.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Nhạc đang phát</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Option}>
                                <Image
                                    source={require('../src/Icon/News.png')}
                                    style={styles.Img}
                                />
                                <Text style={styles.CataTxt}>Tin tức & Khuyến ...</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Hỗ trợ</Text>
                        <View style={styles.Sp}>
                            <TouchableOpacity style={styles.ChildSp}>
                                <View style={styles.KidSp}>
                                    <FontAwesome name={'star'} size={22} color={'#61380B'} />
                                    <Text style={{ fontSize: 16, width: 160 }}>Gửi đánh giá và góp ý</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <View
                                style={{
                                    height: 1,
                                    width: '95%',
                                    backgroundColor: '#f2f2f2',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            <TouchableOpacity style={styles.ChildSp}>
                                <View style={styles.KidSp}>
                                    <MaterialCommunityIcons name={'message-text'} size={22} color={'#61380B'} />
                                    <Text style={{ fontSize: 16, width: 160 }}>Liên hệ</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Tài khoản</Text>

                        <View style={styles.User}>
                            <TouchableOpacity style={styles.ChildSp}>
                                <View style={styles.KidSp}>
                                    <Ionicons name={'person'} size={22} color={'#61380B'} />
                                    <Text style={{ fontSize: 16, width: 160 }}>Thông tin cá nhân</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <View
                                style={{
                                    height: 1,
                                    width: '95%',
                                    backgroundColor: '#f2f2f2',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            <TouchableOpacity style={styles.ChildSp}>
                                <View style={styles.KidSp}>
                                    <Ionicons name={'ios-bookmark'} size={22} color={'#61380B'} />
                                    <Text style={{ fontSize: 16, width: 160 }}>Địa chỉ đã lưu</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <View
                                style={{
                                    height: 1,
                                    width: '95%',
                                    backgroundColor: '#f2f2f2',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            <TouchableOpacity style={styles.ChildSp}>
                                <View style={styles.KidSp}>
                                    <Ionicons name={'settings-sharp'} size={22} color={'#61380B'} />
                                    <Text style={{ fontSize: 16, width: 160 }}>Cài đặt</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                            <View
                                style={{
                                    height: 1,
                                    width: '95%',
                                    backgroundColor: '#f2f2f2',
                                    alignSelf: 'flex-end'
                                }}
                            />
                            <TouchableOpacity style={styles.ChildSp} onPress={handleLogin} >
                                <View style={styles.KidSp}>
                                    <Image
                                        source={require('../src/Icon/Login.png')}
                                        style={{
                                            width:30,
                                            height:30,
                                            tintColor:'#61380B'
                                        }}
                                    />
                                    <Text style={{fontSize:16,width:160}}>Đăng nhập</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{marginRight:10}} />
                            </TouchableOpacity>
                            <Login isOpen={isOpen} onclose={onclose}/>
                            {/* <TouchableOpacity style={styles.ChildSp} onPress={handleLogin}>
                                <View style={styles.KidSp}>
                                    <Image
                                        source={require('../src/Icon/Logout.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            tintColor: '#61380B'
                                        }}
                                    />
                                    <Text style={{ fontSize: 16, width: 160 }}>Đăng xuất</Text>
                                </View>
                                <AntDesign name={'right'} size={18} color={'silver'} style={{ marginRight: 10 }} />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                }
                style={{
                    height: 615
                }}
            />
        </View>
    )
}

export default Khac

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 20
    },
    Option: {
        flex: 1,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        borderBottomWidth: 0.4,
        borderBottomColor: 'silver'
    },
    Img: {
        width: 50,
        height: 50,
        margin: 13
    },
    CataTxt: {
        fontSize: 16,
        marginLeft: 15
    },
    Sp: {
        width: '95%',
        height: 110,
        marginTop: 20,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomWidth: 0.4,
        borderBottomColor: 'silver'
    },
    ChildSp: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    KidSp: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 220
    },
    User: {
        width: '95%',
        height: 220,
        marginTop: 20,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomWidth: 0.4,
        borderBottomColor: 'silver',
        marginBottom: 20,
    },
})
