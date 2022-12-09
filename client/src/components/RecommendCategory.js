import React from 'react'

const RecommendCategory = ({image, name}) => {
  return (
    <div style={{ position: "relative" }}>
      <img className="img-rcmCate" src={image} alt="" />
      <div id="shape"></div>
      <h5>{name}</h5>
    </div>
  )
}

export default RecommendCategory