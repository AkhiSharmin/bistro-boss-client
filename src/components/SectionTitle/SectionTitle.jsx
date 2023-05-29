const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 my-14">
      <p className="text-yellow-600 text-center mb-4">--- {subHeading} ---</p>
      <p className="text-3xl text-center uppercase border-y-4 py-4 ">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
