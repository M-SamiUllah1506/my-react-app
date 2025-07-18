import "./ExpenseItem.css";
import "./Product.css";

function Product(props) {
  return (
    <div className="product-card">
      <img src={props.img} alt={props.name} className="product-image" />
      <p className="product-name">{props.name}</p>
      <p className="product-type">{props.type}</p>
      <h4 className="product-price">{props.price}</h4>
    </div>
  );
}

export default Product;

