import React, { createContext, useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const PetContext = createContext({});

export const PetsProvider = ({ children }) => {
  const [pets, setPets ] = useState(null);
  const [pet, setPet ] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = firestore().collection('pets');

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { name, img, gender, description, specie, yearOfBirth, adopted, } = doc.data();
        list.push({
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
      setPets(list);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  async function AddNewPet() {
    await ref.add({
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