import HeroImg from "./hero/HeroImg";
import Text from "./hero/Text";
import dataArrOfObjs from "../data/data";
import FullAdvert from "./cards/FullAdvert";

const Main = () => {
  // mapping through card details
  const fullCardInfo = dataArrOfObjs.map((singleObj) => {
    return <FullAdvert key={singleObj.id} fullObj={singleObj} />;
  });

  // shows hero img, title and cards
  return (
    <main>
      <section>
        <HeroImg />
        <Text />
      </section>
      <section className="flex-container">{fullCardInfo}</section>
    </main>
  );
};
export default Main;
