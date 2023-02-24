import NavigationBar from "./Layout/NavgationBar";
import PopularItems from "./Layout/popularItems";

const Menu = () => {
  return (
    <>
      <NavigationBar />
      <div className="container mt-5 pt-5">
        <PopularItems />
      </div>
    </>
  );
};

export default Menu;
