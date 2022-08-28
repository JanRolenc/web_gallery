import './App.css';
import skull from "./photos/skull.jpg"
import { useState } from 'react'


function App() {
  const [largerImage, setLargerImage] = useState(false)

  const extendImage = () => {
    setLargerImage(!largerImage)
  }

  return (
    // <div className="app">
    !largerImage ? (
      <div className="app-sub">
        <div className="app-sub__left">
          <h2>Jan Rolenc</h2>
          <h2>About me</h2>
          <h2>Contact</h2>
        </div>
        <div className="app-sub__right">
          <h1>My Portfolio</h1>
          <div className="app-sub__right__photo">
            <img src={skull} alt="skull" onClick={extendImage} />
            <h2>Skull</h2>
          </div>
        </div>
      </div>
    ) :
      (
        <div className="app-sub2">
          <div className='largerImg'>
            <img src={skull} alt="skull" onClick={extendImage} />
          </div>

        </div>

      )
    // </div>
  );
}

export default App;
