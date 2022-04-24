import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

function SharedLayout() {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">افزودن شغل</Link>
        <Link to="all-jobs">همه شغل ها</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
}
export default SharedLayout;
