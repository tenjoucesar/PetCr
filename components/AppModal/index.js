
import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { MainButton } from '../Buttons';

const AppModal = ({ modalVisible, setModalVisible, questionText, functionToCallBack, extraParams}) => {
  const handleCallbackRequest = () => {
    setModalVisible(!modalVisible);
    return functionToCallBack(extraParams);
  };

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hola!</Text>
          <Text style={styles.modalText}>{questionText}</Text>

          <View style={styles.modalButtonsContainer}>
            <MainButton onPress={() => handleCallbackRequest()}>
                  Si
            </MainButton>
            <MainButton onPress={() => setModalVisible(!modalVisible)}>
              No
            </MainButton>
          </View>
        </View>
      </View>
    </Modal>
  );
}



export default AppModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    width: 170,
    justifyContent: 'space-between',
  }
});
