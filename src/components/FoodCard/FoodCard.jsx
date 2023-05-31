const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div className="card w-96 shadow-md">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded shadow-2xl 
          "
          />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          {price}$
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn bg-slate-200 border-b-4 text-orange-500 border-b-orange-600 shadow-xl border-0">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
