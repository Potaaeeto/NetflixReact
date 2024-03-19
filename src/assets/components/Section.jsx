const Section = (props) => {
  return (
    <div>
      <p className="title">{props.title}</p>
      <div className="movies">
        {elem.images.map((moviePoster) => {
          return <img src={props.image} alt="moviesPoster" />;
        })}
      </div>
    </div>
  );
};

export default Section;
