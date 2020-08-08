import React from 'react';
import {Text, StyleSheet, ScrollView, Linking} from 'react-native';

const index = () => {
  const handleSubmit = async () => {
    try {
      await Linking.openURL(
        'whatsapp://send?text=' + message + '&phone=506' + '61198520',
      );
      console.log(data);
    } catch (error) {}
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.message}>
        Pueden ponerse en contacto con nosotros para donativos y para cualquier
        consulta relacionada con la app y con nuestro servicios.
      </Text>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {paddingVertical: 40, paddingHorizontal: 20},
  message: {fontSize: 16, textAlign: 'center'},
});
