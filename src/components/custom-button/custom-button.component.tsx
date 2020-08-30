import React from 'react'

import './custom-button.styles.scss'

interface CustomButtonProps{
  value: string
  type: "button" | "submit" | "reset" | undefined
}
const CustomButton = (props: CustomButtonProps) => (
<button className='custom-button' type={props.type}>{props.value}</button>
)

export default CustomButton;