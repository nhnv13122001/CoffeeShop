import React from 'react'

const SmallImage = ({src}) => {
  return (
    <img style={{ width:"100px", height:"100px" }} src={src} alt=""/>
  )
}

export default SmallImage