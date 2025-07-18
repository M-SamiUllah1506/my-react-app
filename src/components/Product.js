import "./ExpenseItem.css";
function Product(props) {
  return (
    <div>
      <img src={props.img} />
      <p className="product-name">{props.name}</p>
      <p className="product-type">{props.type}</p>
      <h4 className="product-price">{props.price}</h4>
    </div>
  );
}

export default Product;
