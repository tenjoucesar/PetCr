import React, { useState, useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
// import Masonry from 'react-native-masonry';
import PetGrid from "../../components/Grid/PetGrid";
import Loading from '../../components/Loading';
import { PetContext } from '../../Providers/PetsProvider';
import Tab from  '../../components/Tabs/Tab';
import { TAB_KEYS } from '../../components/Tabs/constants';

function PetsScreen({ navigation }) {
  const [activeTab, setActiveTab ] = useState(TAB_KEYS[0]);
  const { pets, loading } = useContext(PetContext);
  const tempPets = pets && pets.length >= 1 ? pets : [];
  debugger;
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
    let { img, id, name } = item;
    if (item.specie === activeTab.tabKey) {
      return (
        <PetGrid
          img={img}
          key={id}
          name={name}
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
          name={name}
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
      {/* <Masonry
  sorted // optional - Default: false
  columns={4} // optional - Default: 2
  bricks={[
    { uri: 'http://image1.jpg' },
    { uri: 'http://image2.jpg' },
    { uri: 'http://image3.jpg' }
  ]}
/> */}
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