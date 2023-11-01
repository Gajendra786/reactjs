import React, { memo } from 'react'

const UseCallbackChild = ({testCallback}) => {
    console.log("UseCallbackChild")
  return (
    <></>
  )
}

export default memo(UseCallbackChild)