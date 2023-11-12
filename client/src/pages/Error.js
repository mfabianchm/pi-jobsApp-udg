import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Página no encontrada</h3>
        <p>Parece que la dirección que buscas no existe.</p>
        <Link to="/">Regresar al inicio</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
