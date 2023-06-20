import classes from "./Error.module.css";
import { ImSad } from "react-icons/im";

const Error = () => {
  return (
    <div className={classes.error}>
      <div>
      <ImSad className={classes.icon} />
         <p> 404 | Page Not Found</p>
      </div>
    </div>
  );
};

export default Error;
