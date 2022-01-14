import HeroImg from "./section1/HeroImg";
import Text from "./section1/Text";
// import AdvertImage from "./section2/AdvertImage";
// import AdvertInfo from "./section2/AdvertInfo";
import dataArrOfObjs from "../data/data";
import FullAdvert from "./section2/FullAdvert";

const Main = () => {
  console.log(dataArrOfObjs);

  const fullCardInfo = dataArrOfObjs.map((singleObj) => {
    return (
      <FullAdvert
        posterImage={singleObj.coverImg}
        altTextImage={singleObj.title}
        soldStatus={singleObj.soldStatus}
        starRating={singleObj.stats.rating}
        howManyReviews={singleObj.stats.reviewCount}
        location={singleObj.location}
        lessonTitle={singleObj.title}
        price={singleObj.price}
      />
    );
  });

  return (
    <main>
      <section>
        <HeroImg />
        <Text />
      </section>
      <section>{fullCardInfo}</section>
    </main>
  );
};
export default Main;
