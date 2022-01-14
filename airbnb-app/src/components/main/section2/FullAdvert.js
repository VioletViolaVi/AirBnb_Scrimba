// import advertPic from "../../images/swimmer.png";
// src={advertPic}
import star from "../../images/star.png";

const FullAdvert = ({
  posterImage,
  altTextImage,
  soldStatus,
  starRating,
  howManyReviews,
  location,
  lessonTitle,
  price,
}) => {
  return (
    <>
      <figure className="poster-img-container">
        <img src={posterImage} alt={altTextImage} className="advert-img" />
        <figcaption className="sold-status">{soldStatus}</figcaption>
      </figure>

      <div className="ad-info-custom-defaults">
        <div className="rating">
          <img src={star} alt={""} className="star-rating-img" />
          {starRating}
          <span>
            ({howManyReviews}) {location}
          </span>
        </div>

        <div className="lesson-name">{lessonTitle}</div>

        <div className="price">
          <b>From £{price}</b> / person
        </div>
      </div>
    </>
  );
};
export default FullAdvert;
