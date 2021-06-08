import React,{useState} from 'react'
import { StyleSheet, Text, View, Image, ScrollView,TouchableHighlight,TouchableOpacity,FlatList } from 'react-native'
import Header from './header'
import TichDiem1 from './TichDiem1'
import TichDiem2 from './TichDiem2'
import TichDiem3 from './TichDiem3'
const TichDiem = () => {
    const [SC,setScreen]=useState('TichDiem1');
    const ToggleScreen = () => {
        if (SC) {
          if (SC == 'TichDiem1') {
            return <TichDiem1/>;
          }
          if (SC == 'TichDiem2') {
            return <TichDiem2/>;
          }
          if (SC == 'TichDiem3') {
              return <TichDiem3/>
          }
        }
      };
    return (
        <View>
            <Header/>
            <View style={styles.Tab}>
                <TouchableOpacity onPress={() => setScreen('TichDiem1')} style={[styles.Stack,{borderBottomColor:SC=='TichDiem1',borderBottomWidth:2,borderBottomColor:SC=='TichDiem1'?'#fe8f01':'white'}]}>
                  <Text style={[styles.TitTab,{color:SC=='TichDiem1'?'#fe8f01':'grey'}]}>TÍCH ĐIỂM</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setScreen('TichDiem2')} style={[styles.Stack,{borderBottomColor:SC=='TichDiem2',borderBottomWidth:2,borderBottomColor:SC=='TichDiem2'?'#fe8f01':'white'}]}>
                  <Text style={[styles.TitTab,{color:SC=='TichDiem2'?'#fe8f01':'grey'}]}> ĐỔI ƯU ĐÃI</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setScreen('TichDiem3')} style={[styles.Stack,{borderBottomColor:SC=='TichDiem3',borderBottomWidth:2,borderBottomColor:SC=='TichDiem3'?'#fe8f01':'white'}]}>
                  <Text style={[styles.TitTab,{color:SC=='TichDiem3'?'#fe8f01':'grey'}]}>PHIẾU ƯU ĐÃI</Text>
                </TouchableOpacity>
            </View>
            <ToggleScreen/>
        </View>
    )
}

export default TichDiem

const styles = StyleSheet.create({
    Tab:{
        width:'100%',
        height:50,
        flexDirection:'row',
    },
    Stack:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    TitTab:{
        fontSize:15,
        fontWeight:'bold'
    }
})
