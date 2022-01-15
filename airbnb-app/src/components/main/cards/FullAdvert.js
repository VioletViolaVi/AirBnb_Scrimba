import star from "../../images/star.png";

// props passed through in <FullAdvert />
const FullAdvert = ({ fullObj }) => {
  console.log(fullObj);
  // decides what badgeText will be
  let badgeText;
  if (fullObj.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (fullObj.location === "Online") {
    badgeText = "ONLINE";
  }

  // dynamically added card details
  return (
    <section>
      {/* image section */}
      <figure className="poster-img-container">
        <img
          src={`../../images/${fullObj.coverImg}`}
          alt={fullObj.title}
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
          {fullObj.stats.rating}
          <span>
            ({fullObj.stats.reviewCount}) {fullObj.location}
          </span>
        </div>

        <div className="lesson-name">{fullObj.title}</div>

        <div className="price">
          <b>From £{fullObj.price}</b> / person
        </div>
      </div>
    </section>
  );
};
export default FullAdvert;
