const Section = (props) => {
  return (
    <div>
      <p className="title">{props.title}</p>
      <div className="movies">
        {props.image.map((moviePoster) => {
          return <img key={moviePoster} src={moviePoster} alt="moviesPoster" />;
        })}
      </div>
    </div>
  );
};

export default Section;
