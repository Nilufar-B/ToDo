import { Text, Image, View, StyleSheet } from "react-native";


export default function Content() {

    return (  
      <View style={styles.container}>
        <Image style={styles.image}
          source={require('../assets/todo.png')}
        />
        <Text style={styles.text}>Today's To-Do list...</Text>
      </View>
     
    );
  }

  const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        height:400,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset:{
          width: 2,
          height: 0
        }
    },
    image:{
        width: '100%',
        height:'100%',
    },
    text:{
        color: 'white',
        fontWeight:'bold',
        marginTop: 20,
        fontSize: 50,
        fontFamily: 'Ultra',
        shadowColor: '#3E11A8',
        shadowOpacity: 0.5
    }
  })
  