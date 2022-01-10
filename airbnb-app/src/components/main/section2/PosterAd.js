import swimmer from "../../images/swimmer.png";

const PosterAd = () => {
  return (
    <figure>
      <img
        className="advert-img"
        src={swimmer}
        alt={"Swimmer called katie Zaferes."}
      />
      <figcaption className="sold-status">SOLD OUT</figcaption>
    </figure>
  );
};
export default PosterAd;
