import advertPic from "../../images/swimmer.png";

const AdvertImage = (props) => {
  console.log(props); // HERE!!!!!!!!!!!!!!!!!!!!!!!!!
  // src={props.posterImage}
  
  return (
    <figure className="poster-img-container">
      <img
        alt={props.altTextImage}
        src={advertPic}
        className="advert-img"
      />
      <figcaption className="sold-status">{props.soldStatus}</figcaption>
    </figure>
  );
};
export default AdvertImage;
