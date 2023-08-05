
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import {Ionicons} from '@expo/vector-icons';

//TodoList function takes props (item&deleteItem)
export default function TodoList({item, deleteItem}){
  

  
    return(
      
        
<View style={styles.container}>
      <View style={styles.listContainer}>
          <View>
          <Text style={styles.text}>{item.value}</Text>
        </View>
        <TouchableOpacity  style={styles.icon}  onPress={() => deleteItem(item.key)}>
        <Ionicons name='trash' size={24} color='#C1193B'/>
        </TouchableOpacity>
      </View>
    </View>
   
    )
}

const styles = StyleSheet.create({
    container:{
    flexDirection: 'row',
    justifyContent: 'center', 
    },
listContainer:{
    backgroundColor: '#F5F5F5',
    width: 350,
    marginBottom: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
},
 text:{
    color: '#3D0965',
    width: 260,
    fontSize: 25,
    fontWeight:'bold',
    marginTop: 10,
    marginRight: 20,
    padding: 10, 
    fontFamily: 'Ultra'
 },
 icon:{
    marginRight: 5,
    marginTop: 20,
    height: 40,  
 },
})

