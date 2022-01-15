import star from "../../images/star.png";

// props passed through in <FullAdvert />
const FullAdvert = ({ coverImg, title, openSpots, stats:{rating}, stats:{reviewCount}, location, price }) => {
  // decides what badgeText will be
  let badgeText;
  if (openSpots === 0) {
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
          src={`../../images/${coverImg}`}
          alt={title}
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
          {rating}
          <span>
            ({reviewCount}) {location}
          </span>
        </div>

        <div className="lesson-name">{title}</div>

        <div className="price">
          <b>From £{price}</b> / person
        </div>
      </div>
    </section>
  );
};
export default FullAdvert;
