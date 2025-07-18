import Expenses from "./components/Expenses";
import Product from "./components/Product";

function App() {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14) },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
  ];

  const items = [
    { name: "Purple Sneakers", price: "$24", type: "For Casual", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" },
    { name: "Black Sneakers", price: "$23", type: "Suit Wear", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747" },
    { name: "Brown Sneakers", price: "$25", type: "Rear Wear", img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437" },
  ];

  return (
    <div>
    <div className="product-row">
  {items.map((item, index) => (
    <Product
      key={index}
      img={item.img}
      name={item.name}
      type={item.type}
      price={item.price}
    />
  ))}
</div>

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
