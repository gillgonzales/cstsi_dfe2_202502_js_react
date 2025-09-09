import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}