import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://www.canva.com/p/templates/EAFMNm9ybqQ-gold-luxury-initial-circle-logo/"}

const App = () => (
  <SafeAreaView style={styles.container}>
   
      <View style={styles.text}>Elements</View>
      <Text style={styles.text}>in Front of</Text>
      <Text style={styles.text}>Background</Text>
   
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:40
  },
 
  text: {
    color: 'green',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow',
    borderRadius:10,
  },
});

export default App;
