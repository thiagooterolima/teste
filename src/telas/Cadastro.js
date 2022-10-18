import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Button from './src/telas/Button';

export default function App() { 
  const signIn = () =>{
    alert('LOGADO');
  }
  return (
    <View style={styles.container}>

      <Image
       source={require('./assets/android2.png')}
       style={estilos.logo}
        />
      <Text style={styles.login}> login: {'\n'} Senha : </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  logo :{
    width : 350,
    resizeMode:'contain',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent:'center',
  },
  
    login:{
    color:"black",
    fontSize:10,
    paddingRight:250,
  },


});
