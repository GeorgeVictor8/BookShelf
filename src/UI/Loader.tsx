import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.loader} data-testid="loaderComponentId">
      <div className={classes["custom-loader"]}></div>
    </div>
  );
};

export default Loader;
