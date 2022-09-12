import './App.css';
import photos from "./photos/photos.json"
import { useState } from 'react'
import { Fragment } from 'react'


const App = () => {
  const [largerImage, setLargerImage] = useState(false)
  const [imgClicked, setImgClicked] = useState({})
  const [aboutClicked, setAboutClicked] = useState(false)

  const extendImageToggler = (e) => {
    setLargerImage(!largerImage)
  }
  const onImgClick = (image) => {
    setImgClicked(image)
    setLargerImage(!largerImage)
  }

  const aboutClick = () => {
    setAboutClicked(!aboutClicked)
    setLargerImage(false)
  }

  const aboutDivClick = () => {
    setAboutClicked(!aboutClicked)
  }

  return (
    <div className="app">
      {!largerImage && !aboutClicked &&
        <Fragment>
          <div className="app__left">
            <h2 id="about-h2" onClick={aboutClick}>About</h2>
            <p>Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
              Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            </p>
          </div>

          <div className="app__right">
            <h1>My Portfolio</h1>
            <div className='app__right__image-list'>
              {photos.map(item =>
                <div id={item.id} key={item.id} className='app__right__image-list__photo-container' onClick={() => onImgClick(item)}>
                  <div className='div-img'>
                    <img src={require(`${item.path}`)} alt={item.name} ></img>
                  </div>
                  <div className='div-description'>
                    <h2>{item.name}</h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      }
      {largerImage && !aboutClicked &&
        <a href={`#${imgClicked.id}`}>
          <div className="large-img-page">
            <div className='large-img-page__img-container'>
              <img
                src={require(`${imgClicked.path}`)}
                alt={imgClicked.name}
                onClick={(e) => extendImageToggler(e)} />
            </div>
          </div>
        </a>
      }
      {aboutClicked &&
        <div className='about-page' onClick={aboutDivClick}>
          <h2> About</h2>
          <p>Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
            Tady je potřeba něco napsat o sobě, o tomto projektu, výtvorech, celkově zájmech či myšlenkách...
          </p>
        </div>
      }
    </div>
  )
}

export default App;
