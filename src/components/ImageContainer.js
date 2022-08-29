import React from 'react'
import './imageContainer.css'

const ImageContainer = ({ item, extendImage }) => {

  return (
    <div className='app-sub__right__photo'>
      <img src={require(`${item.path}`)} alt={item.name} onClick={extendImage} />
      <p>{item.name}</p>
    </div>
  )

}

export default ImageContainer