import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableHighlight,TouchableOpacity,FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const DATATICKET =[
    {
        id:1,
        name:'- Giảm 35% cho đơn hàng từ 5 món, tối đa 59K...',
        Photo: 'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png',
        Date:'Hết hạn 31/05/2021',
    },
    {
        id:2,
        name:'Giảm 30k cho đơn hàng 149k...',
        Photo: 'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png',
        Date:'Hết hạn 31/05/2021',
    },
    {
        id:3,
        name:'Combo 1 Cà phê Việt Nam size L và 2 bánh mì...',
        Photo: 'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png',
        Date:'Hết hạn 31/05/2021',
    },
]
const DATAEXCHANGE=[
    {
        id:1,
        name:'MYTOUR',
        script:'Ưu đãi 15% đặt phòng khách sạn tại Mytour',
        Bean:'59',
        ExchageImg:'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png'
    },
    {
        id:2,
        name:'NHA KHOA KIM',
        script:'Ưu đãi 50% dịch vụ tổng quát tại Nha Khoa Kim',
        Bean:'99',
        ExchageImg:'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png'
    },
    {
        id:3,
        name:'NHA KHOA KIM',
        script:'Ưu đãi 25% dịch vụ thẩm mỹ tại Nha Khoa Kim',
        Bean:'99',
        ExchageImg:'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png'
    },
]
const TichDiem1 = () => {
    const [SC,setScreen]=useState('TichDiem1');
    const renderItem1 = ({ item }) => (
        <TouchableOpacity style={styles.Coupon}>
            <Image
                source={require('../src/Icon/Coupon.png')}
                style={styles.SaleComp}
            />
            <Image
                source={{uri :item.Photo}}
                style={styles.Sale}
            />
            <View style={styles.CoupChild}>
                <Text style={styles.CoupTxt1}>{item.name}</Text>
                <Text style={styles.CoupTxt2}>{item.Date}</Text>
            </View>
        </TouchableOpacity>
      );
      const renderItem2 = ({ item }) => (
        <View>
            <TouchableOpacity style={{flexDirection:'row',width:'100%',height:100,justifyContent:'center',alignItems:'center'}}>
            <Image
                source={{uri :item.ExchageImg}}
                style={styles.ExchageImg}
            />
            <View>
                <Text style={styles.CoupTxt3}>{item.name}</Text>
                <Text style={styles.CoupTxt4}>{item.script}</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',width:50,height:50}}>
                <View style={{backgroundColor:'#A9F5BC',width:40,height:30,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                    <Text style={{color:'#088A29'}}>{item.Bean}</Text>
                </View>
                <Text style={{fontSize:16,marginTop:5}}>BEAN</Text>
            </View>
        </TouchableOpacity>
        <View
        style={{
            width:'95%',
            height:1,
            backgroundColor:'#F2F2F2',
            alignSelf:'center',
        }}
        />
        </View>
      );
    return (
            <FlatList
                showsVerticalScrollIndicator={false}
                ListFooterComponent={()=>
                <View>
            {/* <LinearGradient colors={['#F2F2F2', '#fe8f01', 'black']} style={styles.linearGradient1} start={{x: 0, y: 0.01}} end={{x: 2.5, y: 1.5}}
  locations={[0,0,1]}>
                <Text style={styles.DetailTxt}>Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành cho thành viên bạn nhé !</Text>
                <TouchableOpacity style={styles.btn}>
                <LinearGradient colors={['#F2F2F2', '#fe8f01', '#585858']} style={styles.linearGradient2} start={{x: 0, y: 0.01}} end={{x: 2.5, y: 1.5}}
  locations={[0,0,1]}>
                    <Text style={styles.LogTxt}>ĐĂNG NHẬP</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </LinearGradient> */}
                    <LinearGradient colors={['black','#F2F2F2']} style={styles.linearGradient}/>
                    <View elevation={5} style={styles.ContainerDad}>
                            <Image
                                source={require('../src/Icon/Code.png')}
                                style={{
                                    width:220,
                                    height:70
                                }}
                            />
                            <Text>M161467451</Text>
                            <LinearGradient elevation={5}colors={['#F2F2F2', '#fe8f01', 'black']} style={styles.Container} start={{x: 0, y: 0.01}} end={{x: 2.5, y: 1.5}}
        locations={[0,0,1]}>
                                <Text style={[styles.TextContai,{fontSize:23}]}>TÂN NGUYỄN</Text>
                                <Text style={[styles.TextContai,{fontSize:17}]}>Mới</Text>
                                <Text style={[styles.TextContai,{fontSize:12,fontWeight:'bold'}]}>0 BEAN</Text>
                            </LinearGradient>
                            <View style={styles.ContaiSub}>
                                <Text style={styles.TxtU}>MỚI</Text>
                                <Text style={styles.TxtU}>ĐỒNG</Text>
                            </View>
                            <View style={styles.Line}>
                                <LinearGradient colors={['#F2F2F2', '#fe8f01', 'black']} style={{width:'100%',borderRadius:8,height:10,position:'absolute'}} start={{x: 0, y: 0.01}} end={{x: 2.5, y: 1.5}}
        locations={[0,0,1]}/>
                                <Image
                                    source={require('../src/Icon/Seed.png')}
                                    style={{
                                        width:30,
                                        height:30,
                                        marginLeft:-3
                                    }}
                                />
                                    <View
                                        style={{
                                            width:4,
                                            height:4,
                                            backgroundColor:'white',
                                            borderRadius:100,
                                            marginRight:3
                                        }}
                                    />
                            </View>
                            <Text style={styles.TextSub}>Còn 100 BEAN nữa bạn sẽ thăng hạng.</Text>
                            <Text style={styles.TextSub}>Đổi quà không ảnh hưởng tới việc thăng hạng của bạn</Text>
                            <Text style={styles.TextSub}>Chưa tích điểm</Text>
                        </View>
                        <View style={{width:'95%',height:120,alignSelf:'center',marginTop:5,flexDirection:'row'}}>
                        <TouchableOpacity style={styles.Option} >
                            <Image
                                source={require('../src/Icon/Point2.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Đổi ưu đãi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../src/Icon/Point3.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Phiếu ưu đãi của b...</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{width:'95%',height:120,alignSelf:'center',flexDirection:'row'}}>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../src/Icon/Point1.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Lịch sử giao dịch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Option}>
                            <Image
                                source={require('../src/Icon/Point4.png')}
                                style={styles.Img}
                            />
                            <Text style={styles.CataTxt}>Quyền lợi của bạn</Text>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Phiếu ưu đãi của bạn</Text>
                        <View style={styles.CoupContain}>
                            <FlatList
                                data={DATATICKET}
                                renderItem={renderItem1}
                                keyExtractor={item => item.id}
                                ListFooterComponent={()=>
                                    <View>
                                        <Text style={styles.title}>Đổi ưu đãi</Text>
                                        <View style={{width:'100%',height:'auto'}}>
                                            <TouchableOpacity style={styles.ChangeCoup}>
                                                <FlatList
                                                    data={DATAEXCHANGE}
                                                    renderItem={renderItem2}
                                                    keyExtractor={item => item.id}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                }
                                style={{marginBottom:20}}
                            />
                        </View>
                </View>
                }
                style={{
                    height:565,
                }}
            />
    )
}

export default TichDiem1

const styles = StyleSheet.create({
    // linearGradient1:{
    //     width:'95%',
    //     height:200,
    //     alignSelf:'center',
    //     borderRadius:20,
    //     alignItems:'center',
    //     justifyContent:'center',
    //     marginTop:15
    // },
    // linearGradient2:{
    //     width:180,
    //     height:25,
    //     borderRadius:20,
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    // DetailTxt:{
    //     textAlign:'center',
    //     color:'white',
    //     marginBottom:15,
    //     width:300
    // },
    // LogTxt:{
    //     textAlign:'center',
    //     color:'white',
    //     fontWeight:'bold'
    // },
    linearGradient:{
        width:'100%',
        height:250,
        position:'absolute',
    },
    ContainerDad:{
        marginTop:15,
        width:'95%',
        height:400,
        alignSelf:'center',
        borderRadius:8,
        backgroundColor:'white',
        alignItems:'center',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1.0,
        marginBottom:10
    },
    Container:{
        width:'100%',
        height:155,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 5
        },
        shadowRadius: 10,
        shadowOpacity: 1.0
    },
    TextContai:{
        color:'white',
        marginBottom:2
    },
    ContaiSub:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
    },
    TxtU:{
        fontSize:15,
        color:'#585858',
        marginTop:15
    },
    Line:{
        width:'95%',
        height:30,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    TextSub:{
        color:'#2E2E2E'
    },
    Option:{
        flex:1,
        margin:5,
        backgroundColor:'white',
        borderRadius:8,
        borderBottomWidth:0.4,
        borderBottomColor:'silver'
    },
    Img:{
       width:50,
       height:50,
       margin:13 
    },
    CataTxt:{
        fontSize:16,
        marginLeft:15
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:25,
        marginLeft:15,
        marginBottom:20
    },
    CoupContain:{
        width:'100%',
        height:'auto',
        alignSelf:'center',
    },
    Coupon:{
        width:'95%',
        height:120,
        borderRadius:10,
        borderBottomWidth:0.5,
        borderColor:'silver',
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center'
    },
    SaleComp:{
        width:'100%',
        height:'100%',
        borderRadius:15,
        position:'absolute'
    },
    Sale:{
        width:90,
        height:90,
        marginLeft:20,
    },
    CoupChild:{
        width:'110%',
        height:120,
        justifyContent:'space-around'
    },
    CoupTxt1:{
        marginLeft:45,
        width:'50%',
        fontSize:16
    },
    CoupTxt2:{
        marginLeft:45,
        width:'55%',
        fontSize:16,
        color:'grey'
    },
    ChangeCoup:{
        width:'100%',
        height:'auto',
        backgroundColor:'white'
    },
    ExchageImg:{
        width:80,
        height:80,
        marginLeft:15
    },
    CoupTxt3:{
        fontSize:13,
        marginLeft:15,
        color:'#2e2e2e',
        fontWeight:'bold',
    },
    CoupTxt4:{
        fontSize:17,
        marginLeft:15,
        color:'black',
        width:220,
    },
})
