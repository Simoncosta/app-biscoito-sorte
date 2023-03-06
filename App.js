import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [textPhrase, setTextPhrase] = useState("");
  const [img, setImg] = useState(require('./src/assets/biscoito.png'));

  const phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ];

  function breakCookie() {
    const numberRandom = Math.floor(Math.random() * phrases.length);

    setTextPhrase(phrases[numberRandom]);
    setImg(require('./src/assets/biscoitoAberto.png'));
  }

  function reset() {
    setImg(require('./src/assets/biscoito.png'))
    setTextPhrase("");
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textPhrase}>
        {textPhrase}
      </Text>

      <TouchableOpacity style={styles.button} onPress={breakCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.text}>
            Quebrar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 15, borderColor: "#121212" }]} onPress={reset}>
        <View style={styles.btnArea}>
          <Text style={[styles.text, { color: "#121212" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230
  },
  textPhrase: {
    fontSize: 25,
    color: "#DD7B22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderColor: "#DD7B22",
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#DD7B22",
  }
});
