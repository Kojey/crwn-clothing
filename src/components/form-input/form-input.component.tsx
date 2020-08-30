import React from 'react';

import './form-input.styles.scss';

interface FormInputProps{
  onChange: (value: string) => void
  name: string
  type: string
  value: string
  label?: string
  required?: boolean
}
const FormInput = (props: FormInputProps) => (
  <div className='group'>
    <input className='form-input' type={props.type} name={props.name} value={props.value}
            onChange={event => props.onChange(event.target.value)}/>
    {props.label?
      <label className={`${props.value.length? 'shrink': ''} form-input-label`}>
        {props.label}
      </label>
      : null}
  </div>
)

export default FormInput;

