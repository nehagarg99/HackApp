import React from "react";
import { StyleSheet, TextInput, Text, View, Button, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useForm } from 'react-hook-form';

const CreateReservation = () => {
  const [eventText, onChangeEventText] = React.useState("");
  const [customerName, onChangeCustomerName] = React.useState("");
  const [reservationDate, onChangeReservationDate] = React.useState("");
  const [reservationHour, onChangeReservationHour] = React.useState("");
  const [guestCount, onChangeGuestCount] = React.useState(0);
  const [mobileNumber, onChangeMobile] = React.useState(0);
  const { handleSubmit } = useForm();
  const onSubmit = formData => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            id: "15",
            reservationDate: reservationDate,
            reservationHour: reservationHour,
            mobileNumber: mobileNumber,
            guestCount: guestCount,
            customerName: customerName
        })
    };
    fetch('https://l38yxogorf.execute-api.us-east-1.amazonaws.com/default/api/Reservation', requestOptions)
        .then(response => Alert.alert(JSON.stringify(response)))
        .then(data => {});
  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCustomerName}
        value={customerName}
      />
      <Text>Mobile Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeMobile}
        value={mobileNumber}
      />
      <Text>Event</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEventText}
        value={eventText}
      />
      <Text>Number of guests</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeGuestCount}
        value={guestCount}
      />
      
      <Text>Reservation Date</Text>
      {/* <DateTimePicker
        style={{width: 200}}
        mode="date"
        value={reservationDate}
        onChange={onChangeReservationDate}
      /> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeReservationDate}
        value={reservationDate}
      />
      <Text>Reservation Hour</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeReservationHour}
        value={reservationHour}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateReservation;