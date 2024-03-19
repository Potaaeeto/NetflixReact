import "./App.css";

// Import d'une image présente quelque part dans le dossier src
import netflixLogo from "./assets/imgs/netflix-logo.png";

import moviesJson from "./assets/movies_rnexgr.json";

function App() {
  // console.log(Movies);
  return (
    <>
      <div className="netflix">
        <img className="netflixLogo" src={netflixLogo} alt="Netflix logo" />
        <div className="scrollbar">
          {moviesJson.map((elem) => {
            return <p className="title"> Je suis {elem.category}</p>;
          })}
          <div className="movies">
            {moviesJson.map((elem) => {
              return <img src={elem.images} alt="moviesPoster" />;
            })}
          </div>
          ;
        </div>
      </div>
    </>
  );
}

export default App;
