import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Buscador de <span>trabajos</span> app
          </h1>
          <p>
            Crea, gestiona y edita tus ofertas de empleo, con nuestro
            administrador podrás ver tus estádisticas y los trabajos que más te
            convienen.
          </p>
          <Link to="/register" className="btn btn-hero">
            Inicia Sesión / Registrate
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
