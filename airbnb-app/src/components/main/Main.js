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
        <PosterAd
          posterImage="static/media/swimmer.4dcb2224d553ccd977a4.png"
          altTextImage="Swimmer called katie Zaferes."
          soldStatus="SOLD OUT"
        />
        <AddInfo
          starRating={5.0}
          howManyReviews={6}
          location="USA"
          lessonTitle="Life lessons with Katie Zaferes"
          price={136}
        />
      </section>
    </main>
  );
};
export default Main;
