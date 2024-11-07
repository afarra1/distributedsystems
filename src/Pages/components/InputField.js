import React from 'react';

const InputField = ({ label, type = 'text', value, onChange, required = false }) => {
  return (
    <label>
      {label}
      <input
        type={type} 
        className='inputfield' 
        value={value} 
        onChange={onChange} 
        required
      />
    </label>
  );
};

export default InputField;

