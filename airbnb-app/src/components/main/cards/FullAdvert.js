import star from "../../images/star.png";

// props passed through in <FullAdvert />
const FullAdvert = ({ posterImage, altTextImage, soldOrOnline, starRating, howManyReviews, location, lessonTitle, price}) => {

  // decides what badgeText will be
  let badgeText;
  if (soldOrOnline === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  // dynamically added card details
  return (
    <section>
      {/* image section */}
      <figure className="poster-img-container">
        <img
          src={`../../images/${posterImage}`}
          alt={altTextImage}
          className="advert-img"
        />
        {/* (only) if badgeText has a value... */}
        {badgeText && (
          <figcaption className="sold-status">{badgeText}</figcaption>
        )}
      </figure>

      {/* text section */}
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
    </section>
  );
};
export default FullAdvert;
