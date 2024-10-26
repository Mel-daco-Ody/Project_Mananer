import { View, Text, Image, StyleSheet , TouchableOpacity} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Login() {
    return (
        <View style={{alignItems:'center'}}>
            <Image source={require('./../../../assets/images/login.png')}
                style = {styles.loginImage}
            />
            <View style = {styles.subContainer}>
                <Text style = {{fontSize: 25, color: Colors.WHITE, 
                        textAlign: 'center', paddingTop: 20}}>Chào mừng đến với</Text>
                <Text style = {{fontSize: 34, fontWeight: 'bold', 
                        color: Colors.WHITE, textAlign: 'center', paddingTop: 5}}>Extra Hand</Text>
                <Text style = {{fontSize: 15, color: Colors.WHITE, 
                        textAlign: 'center', paddingTop: 22}}>Nơi cung cấp cho bạn những dịch vụ dọn dẹp và sửa chữa uy tín nhất, bảo vệ mái ấm của bạn</Text>
                <Text></Text>
                <TouchableOpacity style={styles.button}
                                    onPress={()=> console.log("Let's go")}>
                    <Text style={{textAlign: 'center', 
                    fontSize: 17, 
                    color: Colors.PRIMARY}}>Let's go</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    loginImage :{
        width: 230,
        height: 450,  
        marginTop: '20%',
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 30
    },
    subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        margin: 20
    }
})