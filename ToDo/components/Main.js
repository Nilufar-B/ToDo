import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import AddInput from './AddInput';
import TodoList from './TodoList';
import Header from './Header';
import Content from './Content';



export default function Main() {

const [data, setData] = useState([]);


//function to add task in list and checking if value is not empty
  const submitHandler =(value) => {
  if(!value){
    Alert.alert('Error', 'You trying to add an empty task.');
    return;
  }
      setData((prevTodo) => {
        return [
          {
            value: value,
            key: Math.random().toString(),
          },
          ...prevTodo,
        ];
      });
  }

  //function with alert to delete task from list
  const deleteItem =(key) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you completed this task?',
      [
        {
          text: 'No',
          style:'cancel'
        },
        {
          text: 'Yes',
          onPress:() => {
            setData((prevTodo) => {
              return prevTodo.filter((todo) => todo.key != key )
            })
          },
        },
      ],
      {cancelable: false}
    );
  };


  return (

    <LinearGradient colors={['#28C6BB','#D883ED']} style={styles.container}>

        <View>
           <FlatList
             data={data}
             ListHeaderComponent ={() => <Header />}
             ListEmptyComponent ={() => <Content />}
             keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
               <TodoList item={item} deleteItem={deleteItem}/>
             )}
           /> 
           <AddInput submitHandler={submitHandler}/>
          </View>     

       </LinearGradient>
    
     );
 }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
