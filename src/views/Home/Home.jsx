import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <section className="section-home">
      <h1>We have to develop the Home Page</h1>
      <button><Link to={`/products`}>Ir para produtos</Link></button>
      <button><Link to={`/`}>Voltar</Link></button>
    </section>
  )
}
export default Home