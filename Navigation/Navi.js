import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TrangChu from '../Screen/TrangChu'
import DatMon from '../Screen/DatMon'
import CuaHang from '../Screen/CuaHang'
import TichDiem from '../Screen/TichDiem'
import TichDiem1 from '../Screen/TichDiem1'
import TichDiem2 from '../Screen/TichDiem2'
import TichDiem3 from '../Screen/TichDiem3'
import Khac from '../Screen/Khac'
import Favorite from '../Screen/Favorite'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyTabs() {
  return (
    
    <Tab.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style:{
          backgroundColor:'white',
          height:50,
          alignItems:'center'
        }
      }}>
      <Tab.Screen name="TrangChu" component={TrangChu} options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require('../src/Icon/Home.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ?'#fe8f01' : 'grey'
                }}
              />
              <Text style={{color:focused ? '#fe8f01' :'grey', fontSize:10}}>TRANG CHỦ</Text>
            </View>
          },
        }}/>
      <Tab.Screen name="DatMon" component={DatMon}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require('../src/Icon/Order.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ?'#fe8f01' : 'grey'
                }}
              />
              <Text style={{color:focused ? '#fe8f01' :'grey', fontSize:10}}>ĐẶT MÓN</Text>
            </View>
          },
        }}/>
      <Tab.Screen name="CuaHang" component={CuaHang}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require('../src/Icon/Store.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ?'#fe8f01' : 'grey'
                }}
              />
              <Text style={{color:focused ? '#fe8f01' :'grey', fontSize:10}}>CỬA HÀNG</Text>
            </View>
          },
        }}/>
      <Tab.Screen name="TichDiem" component={TichDiem}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require('../src/Icon/Point.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: focused ?'#fe8f01' : 'grey'
                }}
              />
              <Text style={{color:focused ? '#fe8f01' :'grey', fontSize:10}}>TÍCH ĐIỂM</Text>
            </View>
          },
        }}/>
      <Tab.Screen name="Khac" component={Khac}  options={{
          tabBarIcon:({focused}) =>{
            return <View style={{alignItems:'center',justifyContent:'center'}}>
              <Ionicons name={'menu-sharp'} size={23} color={focused ?'#fe8f01' : 'grey'}/>
              <Text style={{color:focused ? '#fe8f01' :'grey', fontSize:10}}>KHÁC</Text>
            </View>
          },
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="DatMon" component={DatMon} />
        <Stack.Screen name="CuaHang" component={CuaHang} />
        <Stack.Screen name="TichDiem" component={TichDiem} />
        <Stack.Screen name="TichDiem1" component={TichDiem1} />
        <Stack.Screen name="TichDiem2" component={TichDiem2} />
        <Stack.Screen name="TichDiem3" component={TichDiem3} />
        <Stack.Screen name="Khac" component={Khac} />
        <Stack.Screen name="Favorite" component={Favorite}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
