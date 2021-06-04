import Loader from "react-loader-spinner";
import { background_purple } from "../../constants";

const LoadingSpinner = () => {
  return (
    <Loader type="Puff" color={background_purple} height={100} width={100} />
  );
};

export default LoadingSpinner;
