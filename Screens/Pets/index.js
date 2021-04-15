import React, { useState, useContext } from 'react';
import { FlatList, SafeAreaView, View, StyleSheet } from 'react-native';

import { PetContext } from 'Providers/PetsProvider';

import PetGrid from 'Components/Grid/PetGrid';
import Loading from 'Components/Loading';
import Tabs from 'Components/Tabs';
import { TAB_KEYS } from 'Components/Tabs/constants';


function PetsScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState(TAB_KEYS[0]);
  const { pets, loading } = useContext(PetContext);

  const PetComponent = ({pet : {images, id, name, province} }) => (
    <PetGrid
      img={images[0]}
      key={id}
      name={name}
      province={province}
      onSelect={() =>
        navigation.navigate('PetDetails', {
          params: {item},
        })
      }
    />
  )

  const renderPetItem = ({item}) => {
    if (item.specie === activeTab.tabKey) {
      return <PetComponent pet={item} />
    } else if (activeTab.tabKey === 'allPets') {
      return <PetComponent pet={item} />
    }
  };

  return (
    <>
      <View style={styles.tabContainer}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      </View>
      {loading && <Loading />}
      <SafeAreaView>
        <FlatList
          data={pets}
          renderItem={renderPetItem}
          extraData={activeTab}
          numColumns={3}
        />
      </SafeAreaView>
    </>
  );
}

export default PetsScreen;


const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
});