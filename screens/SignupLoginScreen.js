import React, {Components} from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID : '',
            password : ''

        }
    }
    
    userSignUp = (emailID,password) =>{
     firebase.auth().createUsersWithEmailAndPassword(emailID,password)
     .then((response)=>{
         return Alert.alert("user sign up successful");
         
     })
     .catch(function(error){
         var errorCode = error.code;
         var errorMessage = error.message;
         return Alert.alert(errorMessage);
        })

    }
 

    userLogin = (emailID,password) =>{
        firebase.auth().signInWithEmailAndPassword(emailID,password)
        .then(()=>{
          return Alert.alert("login successful");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Text style = {styles.title}>Barter System App</Text>
                </View>
                <View>
                    <TextInput style = {styles.loginBox}
                    placeholder = "ABC@example.com"
                    keyboardType = "email-address"
                    onChangeText = {(text)=>{
                     this.setState = ({
                         emailID : text,
                     })
                    }}
                    />

                    <TextInput style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = "enter password"
                    onChangeText = {(text)=>{
                     this.setState = ({
                         password : text,
                     })
                    }}
                    />

                    <TouchableOpacity style = {[styles.signinbutton,{marginTop:20,marginBottom:20}]}
                    onPress = {()=>{
                        this.userSignUp(this.state.emailID,this.state.password)

                    }}>
                      <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                   
                    <TouchableOpacity style = {[styles.button,{marginTop:20,marginBottom:20}]}
                    onPress = {()=>{
                        this.userLogin(this.state.emailID,this.state.password)

                    }}>
                      <Text style = {styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
           
        )
    }
}
const styles = StyleSheet.create({
     container: {
       flex : 1,
       backgroundColor: 'grey',
       alignItems:'center',
       justifyContent: 'center',
      },
      title: {
        fontSize : 35,
        fontWeight : 100,
        color : 'grey'
       },
      button: {
       backgroundColor : 'green',
       margin : 55,
       padding : 50,
       width  : 100,
       height : 40,
       justifyContent : 'center',
       alignItems : 'center'
       },
       signinbutton: {
        backgroundColor : 'blue',
        margin : 55,
        padding : 50,
        width  : 100,
        height : 40,
        justifyContent : 'center',
        alignItems : 'center'
       },
       buttonText: {
        alignItems : 'center',
        fontSize : 20,
        fontWeight : 100,
        color : "black"
       },
       loginBox: {
         padding : 15,
         width: 100,
         height : 40,
         margin : 10,
         fontSize: 25,
       },
})