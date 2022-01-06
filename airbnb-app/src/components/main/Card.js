import swimmer from "../images/swimmer.png";

const Card = () => {
  return (
    <section className="main2">
      <figure>
        <img src={swimmer} alt={"Swimmer called katie Zaferes."} />
      </figure>
      <p>SOLD OUT</p>
      <ul className="bullet-points">
        <li>
          <span>
            <img src={"../images/star.png"} alt={""}/>
          </span>
          5.0
          <span className="country"> (6) USA </span>
        </li>
        <li>Life lessons with Katie Zaferes</li>
        <li>
          <b>From $136</b> / person
        </li>
      </ul>
    </section>
  );
};
export default Card;
