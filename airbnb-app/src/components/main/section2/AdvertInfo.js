import star from "../../images/star.png";

const AdvertInfo = (props) => {
  console.log(props); // HERE!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div className="ad-info-custom-defaults">
      <div className="rating">
        <img src={star} alt={""} className="star-rating-img" />
        {props.starRating}
        <span>
          ({props.howManyReviews}) {props.location}
        </span>
      </div>

      <div className="lesson-name">{props.lessonTitle}</div>

      <div className="price">
        <b>From £{props.price}</b> / person
      </div>
    </div>
  );
};
export default AdvertInfo;
