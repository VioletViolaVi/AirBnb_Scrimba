import swimmer from "../images/swimmer.png";
import star from "../images/star.png";

const Card = () => {
  return (
    <>
      <div>
        <figure>
          <img
            className="advert-img"
            src={swimmer}
            alt={"Swimmer called katie Zaferes."}
          />
          <figcaption className="sold-status">SOLD OUT</figcaption>
        </figure>
      </div>

      <div>
        <div className="rating">
          <img src={star} alt={""} />
          5.0 (6) USA
        </div>

        <div className="lesson-name">Life lessons with Katie Zaferes</div>

        <div className="price">
          <b>From $136</b> / person
        </div>
      </div>
    </>
  );
};
export default Card;
