import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    
    <ImageBackground
      source={require('../../../food/assets/bgimg.jpg')}// Your background image
      resizeMode="cover"
      style={{flex:1,height:"100%"}}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Yummies</Text>
        <Text style={styles.subtitle}>tasty meals delivered to your doorstep</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Replace 'Home' with your screen name
              navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // transparent black overlay
    padding: 100,
    alignItems: 'center',
    flex:1,
    height:"100%",
    justifyContent:"flex-end"
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginButton:100,
    marginStart:20,
    
  },
  subtitle: {
    fontSize: 20,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
