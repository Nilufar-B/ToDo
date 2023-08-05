import { View, Text, StyleSheet } from "react-native";

//show the current date
const today = new Date().toISOString().slice(0,10);

export default function Header(){
  return(
   
        <View style={styles.containerHeader}>
        <Text style={styles.headerList}>{today}</Text>
        </View>
    
  )

}

const styles = StyleSheet.create({
    containerHeader:{
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20
    },
    headerList:{
        color: '#5213B0',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 20,
        fontFamily: 'Date'
    }
})