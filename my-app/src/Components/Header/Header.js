import Food from "../../assets/food.jpg";
import Classes from "./Header.module.css";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className={Classes["main-image"]}>
        <img src={Food} alt="khanna" />
      </div>
    </>
  );
};
export default Header;
