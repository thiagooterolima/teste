import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Button from './src/telas/Button';

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" componet={Login} />
    </Stack.Navigator>
  );
}

export default function App(Navigator) { 
  const signIn = () =>{
    alert('LOGADO');
    navigator.reset({
    routes : [{name:"Cadastro"}]
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.botao}>
      <Button labelButton="Cadastrar" onpress={signIn}/>
      </Text>
      <Image
       source={require('./assets/android2.png')}
       style={estilos.logo}
        />
      <Text style={styles.titulo}> Hello World </Text>
      <Text style={styles.login}> Login  : {'\n'} Senha : </Text>
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
  titulo:{
  color:"white",
  fontSize:25,
  position:'absolute',
  },

  login:{
    color:"black",
    fontSize:20,
    paddingRight:250,
  },
  botao:{
    color:'white',
  }


});
