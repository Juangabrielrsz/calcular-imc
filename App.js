import React,{useState} from 'react';
import { SafeAreaView,StyleSheet, Text,View,TouchableHighlight, TextInput, Image} from 'react-native';

export default function calcimc() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  const calcImc= ()=>{
    if(peso == 0 || !peso){
      alert('Informe o peso')
      return
    }
    if(altura == 0 || !altura){
      alert('Informe a altura')
      return
    }
    const r=peso/(Math.pow(altura,2))
    setResultado(r.toFixed(1))
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
      <Text style={{fontSize:20}}>Calculadora de IMC</Text>
      </View>

      <View style={styles.container}>
        <Text>Informe o seu Peso:</Text>
        <TextInput
        style={styles.txt}
        autoFocus={true}
        keyboardType={'numeric'}
        onChangeText={text=>setPeso(text)}
        >

        </TextInput>
        </View>

        <View style={styles.container}>
        <Text>Informe o sua Altura:</Text>
        <TextInput
        style={styles.txt}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={text=>setAltura(text)}
        >

        </TextInput>
        </View>

        <View style={styles.container}>
        <TouchableHighlight
        style={styles.btnCalc}
        onPress={()=>calcImc()}
        >
          <Text style={styles.txtBtn}>Calcular IMC</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.container}>
          <Text style={{fontSize:20}}>Resultado : {resultado}</Text>
        </View>
        <View>
          <Image 
          style={styles.img}
          source={require('./assets/tabela.jpg')}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginBottom:20,
  },
  body:{
    flex:1,
    backgroundColor:'#DCDCDC',
    padding:10,
    marginTop:25,
    
  },
  txt: {
    width:'100%',
    fontSize:20,
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },
  btnCalc:{
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:20,
  },
  txtBtn:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff',
  },
  img:{
    width: 370,
    height: 250,
  
    
  },

});
