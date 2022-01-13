const AdvertImage = (props) => {
  console.log(props); // HERE!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <figure>
      <img
        src={props.posterImage}
        alt={props.altTextImage}
        className="advert-img"
      />
      <figcaption className="sold-status">{props.soldStatus}</figcaption>
    </figure>
  );
};
export default AdvertImage;
