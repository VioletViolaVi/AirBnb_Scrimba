import HeroImg from "./section1/HeroImg";
import Text from "./section1/Text";
import PosterAd from "./section2/PosterAd";
import AddInfo from "./section2/AddInfo";

const Main = () => {
  return (
    <main>
      <section>
        <HeroImg />
        <Text />
      </section>
      <section>
        <PosterAd />
        <AddInfo />
      </section>
    </main>
  );
};
export default Main;
