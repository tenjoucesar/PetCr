import {useState, useCallback} from 'react';

const useForm = (initialState, validation, callback) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onChange = (text, name) => {
    setValues({...values, [name]: text});
  };

  const onSubmit = useCallback(() => {
    const newErrors = validation(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;
    setValues(initialState);
    callback();
  }, [values]);

  return {
    errors,
    onChange,
    onSubmit,
    values,
  };
};

export default useForm;
