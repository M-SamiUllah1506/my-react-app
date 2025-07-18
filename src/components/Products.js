import Card from "./Card";
import Product from "./Product";
function Products(props)
{
  <Card className="items">
   <Product 
   img={props.items[0].img}
   name={props.items[0].name}
   type={props.items[0].type}
   price={props.items[0].price}
   />
  </Card>
}

export default Products;