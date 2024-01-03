import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, SafeAreaView, StatusBar, TextInput, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import TextInputComponent from '../components/text_input_component';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.image}>
          <Image
            source={require('../assets/images/Rectangle_Login_1.png')}
          />
          <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenue</Text>
            <TextInputComponent
              placeholder="Email Address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              iconSource={require('../assets/IconMail.png')}
            />
            <TextInputComponent
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              password = {true}
              iconSource={require('../assets/IconLock.png')}
            />
            <CheckBox
              title='Remember Password'
              checkedColor='green'
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
              >
            </CheckBox>
          </View>
        </View>

        <View style={styles.image}>
          <Image
            source={require('../assets/images/Rectangle_Login_2.png')}
          />
          <View style={styles.overlay}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forget Password</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
    </SafeAreaView>
  );
};

const WIDTH = Dimensions.get('window').width ;
const HEIGHT = Dimensions.get('window').height ;


const styles = StyleSheet.create({
  title : {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 10,
    marginBottom: 20,
  },
  emailInput: { 
    width: WIDTH * 0.6,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    elevation: 3,
  },
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'flex-start',
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.5,
    resizeMode: 'contain',
    position: 'relative',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    top: WIDTH * 0.1,
    left: 0,
    right: 0,
    alignItems: 'center', // Horizontalement
    justifyContent: 'center', // Verticalement
  },

  forgotPasswordText: {
    color: 'green',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
    left : WIDTH * 0.2,
    top : HEIGHT * 0.05
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop : 150, // à changer apres pour le responsive
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    backgroundColor: 'green',
    width : WIDTH * 0.3,
    height : HEIGHT * 0.05,
    borderRadius : 20,
    alignItems: 'center', 
    justifyContent: 'center',
    margin : 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default LoginScreen;
