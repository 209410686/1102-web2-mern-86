import React from 'react'

import {useAppContext}from'../context/appContext_86'

const Alert_86 = () => {
    const {alertText,alertType}=useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default Alert_86
