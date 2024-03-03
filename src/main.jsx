import ReactDOM from 'react-dom';
import {ProductList} from './ProductList.jsx';
import {products} from './products';
import './index.css';

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<ProductList products={products} />);
