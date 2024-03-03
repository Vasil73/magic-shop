import PropTypes from "prop-types";
import './ProductList.css';
import {PriceWithSymbol} from "./PriceWithSymbol.jsx";


export function ProductList({products}) {
    return (
        <div className="product-container">
            <h1 className="product-title">Список продуктов</h1>
            <div className="card-container">
                {
                    products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.imageUrl} alt={product.title}/>
                            <p>
                                <span className="price">
                                    {product.discount ? (
                                        <PriceWithSymbol price={(product.price - (product.price * product.discount))}/>
                                    ) : (
                                        <PriceWithSymbol price={product.price}/>
                                    )}
                                </span>
                                {product.discount ? (
                                    <span className="old-price">
                                      <PriceWithSymbol price={product.price}/>
                                    </span>
                                ) : null}
                            </p>
                            <h2>
                                {product.title}
                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discount: PropTypes.number
        })
    ).isRequired
};