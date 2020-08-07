import React from 'react'
import { useField } from 'formik';

export default function MyTextInput ({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <div className={'form-group '+(props.col||'col-12')}>
      <label htmlFor={label}>
        {label}</label>
        <input id={label}  className={`form-control  ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props}/>
        <div className='invalid-feedback'>{meta.error}</div>
    </div>
  );
};