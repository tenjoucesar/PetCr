import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const PetContext = createContext({});

export const PetsProvider = ({ children }) => {
  const [pets, setPets ] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const petsDB = firestore().collection('pets');
    return petsDB.onSnapshot(querySnapshot => {
      const petsCollection = [];
      querySnapshot.forEach(doc => {
        const { name, img, gender, description, specie, yearOfBirth, adopted, } = doc.data();
        petsCollection.push({
          id: doc.id,
          name,
          img,
          gender,
          description,
          specie,
          yearOfBirth,
          adopted,
        });
      });
      setPets(petsCollection);
      if (loading) {
        setLoading(false);
      }
    });
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
      }}
    >
      {children}
    </PetContext.Provider>
  );
};