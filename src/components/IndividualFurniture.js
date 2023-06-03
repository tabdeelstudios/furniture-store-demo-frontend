const IndividualFurniture = (props) => {
  return (
    <div className="furniture">
      <img src={props.imgSrc} />
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>
    </div>
  );
};

export default IndividualFurniture;
