import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CreateReservation from './CreateReservation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"red", fontSize:30, marginBottom:30}}>Create Reservation</Text>
      <CreateReservation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
