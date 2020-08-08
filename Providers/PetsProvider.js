import React, {createContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export const PetContext = createContext({});

export const PetsProvider = ({children}) => {
  const [pets, setPets] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePetsRequest = (province, desiredPet) => {
    // Missing to create a request based   on  this values, since we are missing more pets i'm going to create a ticket

    const petsDB = firestore().collection('pets');
    return petsDB.onSnapshot(querySnapshot => {
      const petsCollection = [];
      querySnapshot.forEach(doc => {
        const {
          name,
          province,
          images,
          gender,
          description,
          specie,
          yearOfBirth,
          adopted,
          owner,
        } = doc.data();
        petsCollection.push({
          id: doc.id,
          name,
          province,
          images,
          gender,
          description,
          specie,
          yearOfBirth,
          adopted,
          owner,
        });
      });
      setPets(petsCollection);
      if (loading) {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    return handlePetsRequest();
  }, []);

  async function AddNewPet() {
    await petsDB.add({
      name: 'test',
      adopted: 'test',
    });
  }
  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        AddNewPet,
        handlePetsRequest,
      }}>
      {children}
    </PetContext.Provider>
  );
};
