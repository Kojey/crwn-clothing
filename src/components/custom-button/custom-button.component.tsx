import React, { CSSProperties } from 'react'

import './custom-button.styles.scss'

interface CustomButtonProps{
  value: string
  isGoogleSignIn?: boolean
  type?: "button" | "submit" | "reset" | undefined
  style?: CSSProperties
  onClick?: () => void
}
const CustomButton = (props: CustomButtonProps) => (
  <button style={props.style} className={`${props.isGoogleSignIn? 'google-sign-in' : ''} custom-button`} type={props.type} onClick={props.onClick}>{props.value}</button>
)

export default CustomButton;