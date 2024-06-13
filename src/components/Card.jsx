const Card = ({ searchData }) => {
  if (!searchData) {
    return null;
  }
  const { Poster, Title, Year, Genre, Plot, Director, Actors, imdbRating } =
    searchData;

  return (
    <div className="w-[350px] h-auto">
      <div className="w-full text-center">
        <img src={Poster} alt={`${Title} poster`} className="w-[100%] h-auto" />
        <h3>
          {Title} ({Year})
        </h3>
        <p>
          <strong>Genre:</strong> {Genre}
        </p>
        <button className="border border-solid border-black p-2 rounded-md">
          More
        </button>
      </div>
    </div>
  );
};

export default Card;
