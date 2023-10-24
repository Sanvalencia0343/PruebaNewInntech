import { useState } from 'react';

export const useUpdate = () => {
    const [formData, setFormData] = useState({
        id:'',
        fullname: '',
        email: '',
        phone: '',
        username: '',
      });      

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};

    if (!formData.fullname) {
      errors.fullname = 'Name is required.';
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
    }

    if (!formData.phone) {
      errors.phone = 'Phone is required.';
    }

    if (!formData.username) {
      errors.username = 'User is required.';
    }


    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return { formData, setFormData, errors, handleChange, validateForm };
}
