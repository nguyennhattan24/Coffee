import React, { useState, useEffect } from 'react'
import { View, Image, Text, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { login, verifyCode } from '../reducer/authReducer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function Login(props) {
    const dispatch = useDispatch();
    const [isSubmitPhone, setIsSubmitPhone] = useState(false);
    const [phone, setPhone] = useState();
    const [code, setCode] = useState();

    const { isOpen, onclose } = props

    const userInfo = useSelector((store) => store.authReducer.userInfo);

    useEffect(() => {
        // userInfo && onclose && onclose()
        if (userInfo) {
            onclose && onclose()
        }
    }, [userInfo])

    const onChangePhone = (value) => {
        // setAccount(prev => ({ ...prev, [type]: value }))
        setPhone(value)
    }

    const onChangeCode = (value) => {
        setCode(value)
    }

    const handleLogin = () => {
        // call api here
        setIsSubmitPhone(true)
        phone ? dispatch(verifyCode({ phone, otp: code })) : dispatch(login({ phone }))
    }

    const handleClose = () => onclose && onclose()
    return (
        <Modal visible={isOpen}>
            <Image
                source={require('../src/Image/6.jpg')}
                style={{
                    width: '100%',
                    height: 350,
                    position: 'absolute'
                }}
            />
            <TouchableOpacity onPress={handleClose} >
                <AntDesign name={'closecircle'} size={30} color={'white'} style={{ alignSelf: 'flex-end', margin: 12 }} />
            </TouchableOpacity>
            <View style={styles.modalL}>
                <Text style={{ marginTop: 40, fontSize: 15, color: 'grey' }}>Chào mừng bạn đến với</Text>
                <Image
                    source={require('../src/Icon/Logo.png')}
                    style={{
                        width: 250,
                        height: 26,
                        marginLeft: 10,
                    }}
                />
                {!isSubmitPhone ?
                    <View style={styles.input}>
                        <Image
                            source={require('../src/Icon/flagred.png')}
                            style={{
                                width: 25,
                                height: 25,
                                alignSelf: 'center',
                                marginLeft: 10
                            }}
                        />
                        <Text style={{ alignSelf: 'center', fontSize: 16, marginLeft: 3 }}>+84</Text>
                        <View
                            style={{
                                width: 1,
                                height: '45%',
                                backgroundColor: 'silver',
                                alignSelf: 'center',
                                marginLeft: 15
                            }}
                        />
                        <TextInput
                            style={{ width: '65%', marginLeft: 15, fontSize: 16 }}
                            onChangeText={onChangePhone}
                            value={phone}
                            keyboardType="numeric"
                            placeholder='Nhập số điện thoại'
                        />
                        <TextInput />
                    </View>
                    :
                    <View style={styles.input}>
                        <Image
                            source={require('../src/Icon/flagred.png')}
                            style={{
                                width: 25,
                                height: 25,
                                alignSelf: 'center',
                                marginLeft: 10
                            }}
                        />
                        <Text style={{ alignSelf: 'center', fontSize: 16, marginLeft: 3 }}>+84</Text>
                        <View
                            style={{
                                width: 1,
                                height: '45%',
                                backgroundColor: 'silver',
                                alignSelf: 'center',
                                marginLeft: 15
                            }}
                        />
                        <TextInput
                            style={{ width: '65%', marginLeft: 15, fontSize: 16 }}
                            onChangeText={onChangeCode}
                            value={code}
                            keyboardType="numeric"
                            placeholder='Nhập số mã OTP'
                        />
                        <TextInput />
                    </View>
                }
                <TouchableOpacity style={{ width: '95%' }} onPress={handleLogin}>
                    <LinearGradient colors={['#CA4600', '#fe8f01', '#CA4600']} style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 8, }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Đăng nhập</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalL: {
        width: '100%',
        height: '85%',
        backgroundColor: 'white',
        marginTop: '35%',
        borderRadius: 30,
        borderColor: 'silver',
        borderWidth: 0.5,
        alignItems: 'center'
    },
    input: {
        width: '95%',
        height: 50,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'silver',
        borderRadius: 8,
        marginTop: 30
    },
})
