import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/SearchBar/Search";
import CardsList from "./components/PropertyCard/CardsList";
import Filters from "./components/Filters/Filters";
import FiltersContextProvider, { ThemeContext } from "./utils/FiltersContext";
import ThemeContextProvider from "./utils/FiltersContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="max-w-7xl m-auto">
        <ThemeContextProvider>
          <div className="block lg:flex justify-between my-4 px-4 w-full">
            <h2 class="font-medium leading-tight text-4xl my-auto text-blue-600">
              Search properties to rent
            </h2>
            <Search />
          </div>
          <Filters />
          <CardsList />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
