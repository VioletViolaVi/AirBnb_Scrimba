import swimmer from "../images/swimmer.png";
import starInfo from "../images/starInfo.png";

const Card = () => {
  return (
    <section className="main2">
      <figure>
        <img src={swimmer} alt={"Swimmer called katie Zaferes."} />
      </figure>
      <p>SOLD OUT</p>
      <figure>
        <img src={starInfo} alt={"Info on what is above"} className="starInfo" />          
      </figure>

      {/* <ul className="bullet-points">
        <li>
          <span className={"star"}>
            <img src={star} alt={""}/>
          </span>
          5.0
          <span className="country"> (6) USA </span>
        </li>
        <li>Life lessons with Katie Zaferes</li>
        <li>
          <b>From $136</b> / person
        </li>
      </ul> */}
    </section>
  );
};
export default Card;
