
import PropTypes from "prop-types";
import './ProductList.css'; // Импортируем файл стилей

export function ProductList({ products }) {
    return (
        <div className="product-container">
            <h1 className="product-title">Список продуктов</h1>
            <div className="card-container">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.imageUrl} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>Цена: {product.price}</p>
                        {product.discount && <p>Скидка: {product.discount * 100}%</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discount: PropTypes.number,
            imageUrl: PropTypes.string.isRequired,
        })
    ).isRequired,
};
