import Banner from "./Layout/banner";
import TodaysHotPick from "./Layout/todaysHotPick";
import PopularItems from "./Layout/popularItems";
import PopularLocalities from "./Layout/popularLocalities";
import ExploreOptions from "./Layout/ExploreOptions";
import Footer from "./Layout/footer";
import NavigationBar from "./Layout/NavgationBar";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Banner />
      <main className="container">
        <TodaysHotPick />
        <PopularItems />
        <PopularLocalities />
        <ExploreOptions />
      </main>
      <Footer />
    </>
  );
};

export default Home;
