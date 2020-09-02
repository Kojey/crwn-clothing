import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

interface StripeCheckoutButtonProps {
  price: number
}
const StripeCheckoutButton = (props: StripeCheckoutButtonProps) => {
  const priceInCents = props.price*100
  const publishabeKey = 'pk_test_51HMqDoIc7OGarntig4NfwzysT3i0n0x0Fde11fmwzRHidZ5OjdPWXu0bCtsQehZsGK2mT1C0dNOZttcOrIPbPgz600On6gEWx4'
  const onToken = (token: Token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN clothing'
      image='https://svgshare.com/i/JVK.svg'
      description={`Your total is $${props.price}`}
      amount={priceInCents}
      billingAddress
      shippingAddress
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishabeKey}/>
  )
}

export default StripeCheckoutButton;
