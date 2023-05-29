import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div>
      <SectionTitle
        subHeading="Check it out"
        heading="FEATURED ITEM"
      ></SectionTitle>
      <div className="md:flex justify-center items-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>May 29, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ab
            quis eveniet quibusdam, porro consequuntur quidem minima modi?
            Obcaecati fugiat suscipit consequatur quod optio amet fugit,
            praesentium non quidem dolor ex nesciunt maxime expedita, quae odio
            culpa eum veniam mollitia magnam. Cupiditate eligendi optio itaque
            tempore quasi assumenda similique sunt?
          </p>
          <button className="btn btn-outline border-b-4 text-orange-500 border-b-orange-600 shadow-xl border-0">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
