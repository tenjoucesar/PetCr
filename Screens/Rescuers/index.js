import React, { useContext } from "react";
import { FlatList, StyleSheet } from "react-native";
//Missing
import { AuthContext } from 'Providers/AuthProvider';
import RescuersGrid from "Components/Grid/RescuersGrid";

const RescuersScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  const renderRescuerIterm = ({item: {owner, name, images}, item}) => (
    <RescuersGrid
      name={name}
      protective={owner.name}
      img={images.length ? images[0] : ''}
      // Missing
      // onSelect={() => navigation.navigate("PetDetails", { params: item })}
    />
  );

  return (
    <FlatList
      style={styles.container}
      data={user}
      keyExtractor={item => item.id}
      renderItem={renderRescuerIterm}
    />
  );
};

export default RescuersScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});