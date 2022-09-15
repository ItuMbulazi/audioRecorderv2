import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button,TextInput,Pressable } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

import {auth} from '../firebase'




export default function audio({navigation}){
const [email, setEmail] = useState('')
 const [password, setPassword]= useState('')




const register=()=>{

createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   alert("Account registered")
  
 
   // ...
 })
 .catch((error) => {
   const errorCode = error.message;
   console.log(errorCode)
alert(errorCode)
   // ..
 });
}

const signin=()=>{
 
 signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   navigation.navigate('home')
 

   
   

   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
  alert(errorCode)
 });
}

 /* const login=()=>{
   
    navigation.navigate('home')
  }*/
return(
<View>
<TextInput style={styles.input} placeholder={"Username"}  onChangeText={(e)=>setEmail(e)}></TextInput>

<TextInput style={styles.input} placeholder={"password"} onChangeText={(e)=>setPassword(e)}></TextInput>
<Pressable style={styles.btn} onPress={signin} >
<Text style={styles.txt} >login</Text>
</Pressable>
<Pressable style={styles.btn2} onPress={register}>
<Text style={styles.txt}> Sign-up </Text>
</Pressable>

</View>
)
}

const styles=StyleSheet.create({
  
  input:{
    width:500,
    height:50,
    borderRadius:50,
    borderColor:'gray',
    borderWidth:3,
  },
  btn:{
   alignItems: 'center',
   justifyContent: 'center',
   paddingVertical: 12,
   paddingHorizontal: 32,
   borderRadius: 20,
   elevation: 3,
   backgroundColor: 'black',
    width:150,
   height:50,
   margin:10,
   marginTop:10,
   marginLeft:200,
  },
  txt:{
    color:'white'
  },
  btn2:{
   alignItems: 'center',
   justifyContent: 'center',
   paddingVertical: 12,
   paddingHorizontal: 32,
   borderRadius: 20,
   elevation: 3,
   backgroundColor: 'black',
   width:150,
   height:50,
   margin:10,
   marginBottom:10,
    marginLeft:200,
  }
})

