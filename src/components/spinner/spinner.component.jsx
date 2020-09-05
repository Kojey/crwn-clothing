import React from 'react'

import {SpinnerContainer, SpinnerOverlay} from './spinner.styles'

const Spinner = WrappedComponent => ({isLoading, ...otherProps}) => (
  isLoading
  ? <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  : <WrappedComponent {...otherProps}/>
)

export default Spinner;