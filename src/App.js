import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import { useGlobalContext } from "./context";

function App() {
  const {data,showData} = useGlobalContext()

  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center" }}>Enjoy Shopping</h3>
        <SearchBar  data={data}  />
        <ProductList data={showData} />
      </div>
    </div>
  );
}

export default App;
