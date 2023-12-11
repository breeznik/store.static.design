const Categories = () => {
  const categories = [
    'Misty Store',
    'Electronics & Lights',
    'Hardware & Tools',
    'Points & Chemicals',
    'Playwood & Boards',
    'Sanitory & Plumbing',
  ];
  return (
    <section className="section-categories">
      <div className="container-fluid">
        <div className=" row justify-content-start justify-content-lg-center align-items-center flex-nowrap overflow-scroll">
          {categories.map((cat, index) => {
            return (
              <div className="col-cat col-auto d-flex flex-column align-items-center cursor-pointer" key={index}>
                <div className="cat-image-wrapper rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                  <img className="rounded-circle" src={`/cat-img/image-${index + 1}.png`} alt="iamge" />
                </div>
                <span className="text-center">{cat}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
