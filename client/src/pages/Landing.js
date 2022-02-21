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
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Irure anim anim sit Lorem officia irure. Irure fugiat ullamco
            consectetur officia quis proident consectetur Lorem cillum do velit.
            Eu eu labore proident adipisicing officia amet velit sint cillum
            aliquip nisi commodo. Anim labore id voluptate deserunt id ex veniam
            fugiat labore non culpa mollit aliqua consequat.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
