import React from 'react'

import './custom-button.styles.scss'

interface CustomButtonProps{
  value: string
  isGoogleSignIn?: boolean
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}
const CustomButton = (props: CustomButtonProps) => (
  <button className={`${props.isGoogleSignIn? 'google-sign-in' : ''} custom-button`} type={props.type} onClick={props.onClick}>{props.value}</button>
)

export default CustomButton;