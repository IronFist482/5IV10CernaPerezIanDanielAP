import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contenedor</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBoton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBoton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:20,
    color:'ffffff',
    alignItems:'center'
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2192FF',

  },
  subcontainer:{
    height: 50,
    weight: '100%',
    padding:10,
    flexDirection:'row'
  },
  btn:{
    height:100,
    weight:100,
    padding:30,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#38E54D',
  },
  textBoton:{
    fontSize:40,
    color:'ffffff',
    fontWeight:'bold'
  },
  count:{
    flex1:1,
    justifyContent:'center',
    alignItems:'center'

  }

});
