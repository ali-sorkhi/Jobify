import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <img src={main} alt="job hunt" className="img main-img" />

        <div className="info">
          <h1>
            برنامه <span>کار</span> جو
          </h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
          <Link to="/register" className="btn btn-hero">
            ورود / ثبت نام
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
