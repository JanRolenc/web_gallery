import './App.css';
import photos from "./photos/photos.json"
import { useState, useRef } from 'react'


const App = () => {
  const [largerImage, setLargerImage] = useState(false)
  const [imgClicked, setImgClicked] = useState({})

  const ref = useRef();
  // const vybranyImg;
  const extendImageToggler = (e) => {
    setLargerImage(!largerImage)
    // if (ref) {
    //   ref.current.focus()
    // }
    console.log('ref po kliku na velky img', ref)
    console.log('img po kliku na velky img', e.target)
    //  vybranyImg = ref. 
  }
  const onImgClick = (image) => {
    console.log('image po kliku na maly image', image)
    setImgClicked(image)
    setLargerImage(!largerImage)

    // console.log(ref)
  }

  return (

    !largerImage ? (
      <div className="app">
        <div className="app__left">
          {/* <h2>Sofie Rolencova</h2> */}
          <h2>About me</h2>
          {/* <h2>Contact</h2> */}
        </div>
        <div className="app__right">
          <h1>My Portfolio</h1>
          <div className='app__right__image-list'>
            {photos.map(item =>
              <div key={item.id} className='app__right__image-list__photo-container' onClick={() => onImgClick(item)}>
                <div className='div-img'>
                  <img src={require(`${item.path}`)} alt={item.name} ref={ref}></img>
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
            <img src={require(`${imgClicked.path}`)} alt={imgClicked.name} onClick={(e) => extendImageToggler(e)} />
          </div>

        </div>

      )
  );
}

export default App;
