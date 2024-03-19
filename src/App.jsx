import "./App.css";

// Import d'une image présente quelque part dans le dossier src
import netflixLogo from "./assets/imgs/netflix-logo.png";

import Movies from "./assets/movies_rnexgr.json";

function App() {
  // console.log(Movies);
  return (
    <>
      <div className="netflix">
        <img className="netflixLogo" src={netflixLogo} alt="Netflix logo" />
      </div>
    </>
  );
}

export default App;
