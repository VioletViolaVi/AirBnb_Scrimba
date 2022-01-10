import star from "../../images/star.png";

const AddInfo = () => {
  return (
    <div className="ad-info-custom-defaults">
      <div className="rating">
        <img src={star} alt={""} className="star-rating-img" />
        5.0
        <span>(6) USA</span>
      </div>

      <div className="lesson-name">Life lessons with Katie Zaferes</div>

      <div className="price">
        <b>From $136</b> / person
      </div>
    </div>
  );
};
export default AddInfo;
