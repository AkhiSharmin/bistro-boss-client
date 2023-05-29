import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="FEATURED ITEM"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>May 29, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ab
            quis eveniet quibusdam, porro consequuntur quidem minima modi?
            Obcaecati fugiat suscipit consequatur quod optio amet fugit,
            praesentium non quidem dolor ex nesciunt maxime expedita, quae odio
            culpa eum veniam mollitia magnam. Cupiditate eligendi optio itaque
            tempore quasi assumenda similique sunt?
          </p>
          <button className="btn btn-outline border-b-4 text-white border-b-orange-600 shadow-xl border-0">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
