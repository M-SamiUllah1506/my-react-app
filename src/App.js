import Expenses from "./components/Expenses";
import Product from "./components/Product";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "News  Paper",
      amount: 694.132,
      date: new Date(2020, 1, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 7699.439,
      date: new Date(2021, 4, 12),
    },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 2294.467,
      date: new Date(2021, 9, 28),
    },
    {
      id: "e4",
      title: "Table (Wooden)",
      amount: 3450,
      date: new Date(2721, 5, 112),
    },
  ];

  const items = [
    {
      name: "Purple Sneakers",
      price: "$24",
      type: "For Casual",
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933",
    },
    {
      name: "Black Sneakers",
      price: "$23",
      type: "Suit Wear",
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747",
    },
    {
      name: "Brown Sneakers",
      price: "$25",
      type: "Rear Wear",
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437",
    },
  ];
 const addExpenseHandler=expense=>{
  console.log('in_app.js')
  console.log(expenses);
}
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
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
