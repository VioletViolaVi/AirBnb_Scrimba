import HeroImg from "./section1/HeroImg";
import Text from "./section1/Text";
import AdvertImage from "./section2/AdvertImage";
import AdvertInfo from "./section2/AdvertInfo";

const Main = () => {
  return (
    <main>
      <section>
        <HeroImg />
        <Text />
      </section>
      <section>
        <AdvertImage
          posterImage="static/media/swimmer.4dcb2224d553ccd977a4.png"
          altTextImage="Swimmer called katie Zaferes."
          soldStatus="SOLD OUT"
        />
        <AdvertInfo
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
