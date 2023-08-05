import { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';


export default function AddInput({submitHandler}) {

  //useState for text input to adding tasks
    const [inputText, setInputText] = useState("");
      
    return (
      <View style={styles.containerMain}>
        <View style={styles.inputContainer}>
           <TextInput style={styles.input}
           value={inputText}
          placeholder="Add Task..." 
          onChangeText=  {text => setInputText(text)} /> 
        
        </View>
     
        <TouchableOpacity style={styles.submitButton} 
               onPress={() => {
               setInputText(submitHandler(inputText))
        }}>
         <Ionicons  name= 'add-circle' size={30} color='white' />
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    containerMain:{
        flexDirection:'row',      
    },
    inputContainer:{
        flexDirection: 'row',
        borderRadius: 10,     
    },
    input:{
        fontSize: 20,
        backgroundColor: 'white',
        width: 300,
        marginRight: 20,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
       fontFamily: 'Ultra'
    },
    submitButton:{
        width: 30,
        justifyContent: 'center',
        marginBottom: 20,
    }
  })