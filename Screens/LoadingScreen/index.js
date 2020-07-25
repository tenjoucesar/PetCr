import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const index = ({visible = true}) => (
  <Modal visible={visible}>
    <View style={styles.container}>
      <LottieView autoPlay loop source={require('../../assets/loading.json')} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default index;
