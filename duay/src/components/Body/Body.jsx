import DuayDetelis from "../DuayDetelis/DuayDetelis";
function Body({subCategories}) {
  return (
      <div className="lg:h-[84vh] lg:overflow-y-scroll mt-2 ">
        <DuayDetelis subCategories ={subCategories}/>
      </div>
  );
}

export default Body;
