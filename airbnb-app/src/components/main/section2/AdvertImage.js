// import advertPic from "../../images/swimmer.png";
// src={advertPic}

const AdvertImage = (props) => {
  console.log(props); // HERE!!!!!!!!!!!!!!!!!!!!!!!!!
  
  return (
    <figure className="poster-img-container">
      <img
        alt={props.altTextImage}
        className="advert-img"
        src={props.posterImage}
      />
      <figcaption className="sold-status">{props.soldStatus}</figcaption>
    </figure>
  );
};
export default AdvertImage;
