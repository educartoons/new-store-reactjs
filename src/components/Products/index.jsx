import Product from "../Product";

export default function Products(props) {
  const { products } = props;

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
