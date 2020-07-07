import { FlatList, View, StyleSheet } from "react-native";

import React, {useState} from "react";
import PetGrid from "../../components/Grid/PetGrid";
import { connect } from 'react-redux';
import Tab from  '../../components/Tabs/Tab';
import { TAB_KEYS } from '../../components/Tabs/constants';

function PetsScreen({ navigation, pets }) {
  const [activeTab, setActiveTab ] = useState(TAB_KEYS[0]);

  const tabItem = TAB_KEYS.map((tab) => {
    return (
      <Tab
        activeTab={activeTab}
        name={tab.name}
        onPress={() => setActiveTab(tab)}
        key={tab.id}
        tabKey={tab.tabKey}
      />
    );
  });

  const renderPetItem = ({item}) => {
    let { img, id } = item;
    if (item.specie === activeTab.tabKey) {
      return (
        <PetGrid
          img={img}
          key={id}
          onSelect={() => navigation.navigate('PetDetailsScreen', {
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
          onSelect={() => navigation.navigate('PetDetailsScreen', {
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
      <FlatList data={pets} renderItem={renderPetItem} extraData={activeTab} numColumns={3} />
    </>
  );
};

const mapStateToProps = (state) => ({ pets: state.pets.pets });

export default connect(mapStateToProps)(PetsScreen);

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
  }
})