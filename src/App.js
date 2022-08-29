import './App.css';
import photos from "./photos/photos.json"
import { useState } from 'react'


const App = () => {
  const [largerImage, setLargerImage] = useState(false)
  const [imgClicked, setImgClicked] = useState({})

  const extendImageToggler = () => {
    setLargerImage(!largerImage)
  }
  const onImgClick = (image) => {
    setImgClicked(image)
    setLargerImage(!largerImage)

  }

  return (

    !largerImage ? (
      <div className="app-sub">
        <div className="app-sub__left">
          <h2>Jan Rolenc</h2>
          <h2>About me</h2>
          <h2>Contact</h2>
        </div>
        <div className="app-sub__right">
          <h1>My Portfolio</h1>
          <div className='app-sub__right__image-list'>
            {photos.map(item =>
              <div className='app-sub__right__image-list__photo-container' onClick={() => onImgClick(item)}>
                <div className='div-img'>
                  <img src={require(`${item.path}`)}></img>
                </div>
                <div className='div-description'>
                  <h2>{item.name}</h2>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    ) :
      (
        <div className="app-sub2">
          <div className='largerImg'>
            <img src={require(`${imgClicked.path}`)} alt={imgClicked.name} onClick={extendImageToggler} />
          </div>

        </div>

      )
  );
}

export default App;
