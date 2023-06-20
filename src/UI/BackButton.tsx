import { Link } from "react-router-dom";
import { ImBackward } from "react-icons/im";
import classes from "./Button.module.css";

const BackButton = () => {
  return (
    <Link to="/" className={classes["exit-button"]}>
      <div>
        <ImBackward fontSize="larger" />
      </div>
    </Link>
  );
};

export default BackButton;
