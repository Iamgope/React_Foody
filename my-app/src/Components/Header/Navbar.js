import HButton from '../UI/HeaderButton'
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <h1>F-oddy</h1>
      <HButton onClick={props.showModal}/>
      <br/>
    </nav>
   
  );
};

export default Navbar;