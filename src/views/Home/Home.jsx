import { Link } from "react-router-dom";
import "./index.scss";
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import banner from '../../assets/images/banner_1.png'
import ProductsCard from "../../components/ProductsCard/ProductsCard";

const Home = ({ data }) => {
  return (
    <div className="home">
      <HeaderMenu />
      <img src={banner} alt="banner" />
      
      <div className="home__products">
      {data.map((product) => (
        <ProductsCard key={product.id} data={product} />
      ))}
      </div>
    </div>
  )
}
export default Home