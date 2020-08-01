import React, { useState, useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import PetGrid from "../../components/Grid/PetGrid";
import Loading from '../../components/Loading';
import { PetContext } from '../../Providers/PetsProvider';
import Tab from  '../../components/Tabs/Tab';
import { TAB_KEYS } from '../../components/Tabs/constants';

function PetsScreen({ navigation }) {
  const [activeTab, setActiveTab ] = useState(TAB_KEYS[0]);
  const { pets, loading } = useContext(PetContext);

  const tabItem = TAB_KEYS.map((tab) => (
    <Tab
      activeTab={activeTab}
      name={tab.name}
      onPress={() => setActiveTab(tab)}
      key={tab.id}
      tabKey={tab.tabKey}
    />
  ));

  const renderPetItem = ({item}) => {
    let { img, id } = item;

    if (item.specie === activeTab.tabKey) {
      return (
        <PetGrid
          img={img}
          key={id}
          onSelect={() => navigation.navigate('PetDetails', {
            params: { item },
          })}
        />
      )
    }
    else if (activeTab.tabKey === 'allPets') {
      return (
        <PetGrid
          img={img}
          key={id}
          onSelect={() => navigation.navigate('PetDetails', {
            params: { item },
          })}
        />
      )
    }
  }

  return(
    <>
      <View style={styles.tabContainer}>
        {tabItem}
      </View>
      { loading &&
        <Loading />
      }
      <FlatList data={pets} renderItem={renderPetItem} extraData={activeTab} numColumns={3} />
    </>
  );
};

export default PetsScreen;

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
  }
})