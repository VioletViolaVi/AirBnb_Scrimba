import HeroImg from "./hero/HeroImg";
import Text from "./hero/Text";
import dataArrOfObjs from "../data/data";
import FullAdvert from "./cards/FullAdvert";

const Main = () => {
  // mapping through card details
  const fullCardInfo = dataArrOfObjs.map((singleObj) => {
    return (
      <FullAdvert
        // use this way when you want to pass the obj straight to the component's function
        key={singleObj.id}
        {...singleObj}

        /* 
          // use this way when using custom props ('variables')
          key={singleObj.id}
          posterImage={singleObj.coverImg}
          altTextImage={singleObj.title}
          soldOrOnline={singleObj.openSpots}
          starRating={singleObj.stats.rating}
          howManyReviews={singleObj.stats.reviewCount}
          location={singleObj.location}
          lessonTitle={singleObj.title}
          price={singleObj.price}
      */
      /* 
          // use this way when you want to pass whole object in component's function w/ a custom prop ('variable')
          key={singleObj.id}
          fullObj={singleObj}
      */
      />
    );
  });
  console.log(fullCardInfo);

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
