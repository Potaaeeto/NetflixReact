import "./App.css";

// Import d'une image présente quelque part dans le dossier src
import netflixLogo from "./assets/imgs/netflix-logo.png";

import moviesJson from "./assets/movies_rnexgr.json";

import Section from "./assets/components/Section";

function App() {
  // console.log(Movies);
  return (
    <>
      <div className="netflix">
        <img className="netflixLogo" src={netflixLogo} alt="Netflix logo" />
        <div className="scrollbar">
          {/* {moviesJson.map((elem) => {
            // console.log(elem.category); affiche les titres de chaque categories
            return <p className="title"> Je suis {elem.category}</p>;
          })} */}

          {moviesJson.map((elem) => {
            // console.log(elem);
            return (
              <Section
                key={elem.category}
                title={elem.category}
                image={elem.images}
              />
              // <div>
              //   <p className="title">{elem.category}</p>
              //   <div className="movies">
              //     {elem.images.map((moviePoster) => {
              //       return <img src={moviePoster} alt="moviesPoster" />;
              //     })}
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
