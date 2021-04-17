const actualYear = new Date().getFullYear();

const validation = values => {
  const errors = {};
  const {name, specie, images, province, yearOfBirth} = values;
  debugger;
  if (!name.trim()) errors.name = 'El nombre es obligatorio';
  if (!specie) errors.specie = 'Seleccione la Especie';
  if (!images.length) errors.images = 'Selecciona una imagen';
  if (!province) errors.province = 'Selecciona una provincia';
  if (!yearOfBirth) errors.yearOfBirth = 'Selecciona un año de nacimiento';
  if (yearOfBirth.length != 4 || yearOfBirth > actualYear) errors.yearOfBirth = 'Selecciona un año de nacimiento valido';
  return errors;
};

export default validation;