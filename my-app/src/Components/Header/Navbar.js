import HButton from '../UI/HeaderButton'
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h1>F-oddy</h1>
      <HButton/>
      <br/>
    </nav>
   
  );
};

export default Navbar;