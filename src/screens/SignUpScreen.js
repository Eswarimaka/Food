import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const SignUPScreen = ({navigation}) => {
  const [fullname,setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Create Account clicked", fullname, email, password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{
        position:"relative",
        height:100,
        marginBottom:10
      }}>
      <Image
     // source={require("../assets/grill-chicken.png")}
     
        source={{ uri: "https://static.vecteezy.com/system/resources/previews/055/263/364/non_2x/delicious-grilled-chicken-salad-with-fresh-vegetables-and-herbs-png.png" }}
        style={styles.headerImage}
        
      />
      </View>

      


     
      <View style={styles.tabContainer}>
        <TouchableOpacity>
                <Text style={styles.tabText}>sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={[styles.tabText,styles.activeTab]}>sign up</Text>
                </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullname}
          onChangeText={setFullname}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
         
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <Text style={{
        textAlign:'center',
        marginBottom: 20 }}>Sign in Using</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
          source={{
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ901eAwCHJkZ_K-vjQz9vX-WNgASX8gisXw&s"
          }}
          style={{
            width:30,
            height:33
          }}
          />
          {/* <Image
            source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF59o68iuZQepBGlrnOIyhEKAgsfGkrGACPg&s"}}
            // style={styles.socialIcon}
             style={{
            width:50,
            height:50
          }}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
          source={{
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZxC4F3pf5aWgQCUUQx9YdU2lCtzWi1x2fA&s"
          }}
          style={{
            width:35,
            height:34
          }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
          source={{ uri: "https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png" }}
            style={{
              width: 35,
              height: 35
            }}
          />
        </TouchableOpacity>
      </View>
       
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // position:"relative",
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems: 'center',
    padding: 7,
  },
  headerImage: {
    width: 150,
    height: 150,
    marginTop: 40,
    borderRadius: 50,
   position:"absolute",
   right:-70,
   top:-60

   
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems:"center",
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-around',
  },
  tabText: {
    fontSize: 18,
    color: '#888',
    paddingBottom: 3,
  },
  activeTab: {
    color: '#FF6600',
    borderBottomWidth: 2,
    borderBottomColor: '#FF6600',
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#888',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
  },
  // signInUsing: {
  //   color: '#888',
  //   marginBottom: 10,
  //   alignContent:"center",
  //   justifyContent:"center"
  // },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default SignUPScreen; 

