import SectionTitle from "../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
  return (
    <div>
      <div>
        <SectionTitle
          heading="Should Try"
          subHeading="Chef RECOMMENDS"
        ></SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-14">
        <div className="card w-96 shadow-md">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="Shoes"
              className="rounded shadow-2xl 
          w-[424px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caesar Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-slate-200 border-b-4 text-orange-500 border-b-orange-600 shadow-xl border-0">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-md">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="Shoes"
              className=" rounded shadow-2xl 
          w-[424px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caesar Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-slate-200 border-b-4 text-orange-500 border-b-orange-600 shadow-xl border-0">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-md">
          <figure className="px-10 pt-10">
            <img
              src={img1}
              alt="Shoes"
              className=" rounded shadow-2xl 
          w-[424px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caesar Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn bg-slate-200 border-b-4 text-orange-500 border-b-orange-600 shadow-xl border-0">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
