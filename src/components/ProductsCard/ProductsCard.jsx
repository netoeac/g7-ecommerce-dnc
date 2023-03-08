import { Link } from "react-router-dom";
import "./index.scss";

const ProductsCard = ({ data }) => {
  return (
    <div className="home__card">
        <div className="home__card--card">
            <img src={data.imgPath} alt="model" />
            <div className="home__card--description">
                <p>{data.title}</p>
                <button>
                <Link to={`/products/${data.id}`}>Ver mais</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard