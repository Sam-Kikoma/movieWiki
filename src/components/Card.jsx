const Card = () => {
  return (
    <div className="w-[350px] h-[300px]">
      <div className="w-full text-center">
        <img
          src="https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Movie image"
          className="w-[100%] h-auto"
        />
        <p>Batman</p>
        <button>More</button>
      </div>
    </div>
  );
};

export default Card;
