const Collapse = (collapse) => {
  return (
    <div className="collapse m-3 w-full max-w-[300px] sm:max-w-[500px] md:max-w-[300px] 2xl:max-w-[350px]">
      <input type="checkbox" className="peer" />
      <div className="prose max-w-full collapse-title bg-primary text-white peer-checked:bg-secondary peer-checked:text-secondary-content">
        <h2>{collapse.clickText}</h2>
      </div>
      <div className="prose max-w-full collapse-content bg-primary text-white peer-checked:bg-secondary rounded-b-xl drop-shadow-lg">
        <p>{collapse.hiddenText}</p>
      </div>
    </div>
  );
};

export default Collapse;
