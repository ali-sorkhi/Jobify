import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>صفحه مورد نظر یافت نشد !</h3>
        <Link to="/">صفحه اصلی</Link>
      </div>
    </Wrapper>
  );
}
export default Error;
