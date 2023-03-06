import { Link } from "react-router-dom";
import '../Home/home.css'

export function Home(){
  return(<>
  <section className="section-home">
  <h1>We have to develop the Home Page</h1>
  <button><Link to={`/`}>Voltar</Link></button>


  </section>
  </>);
}