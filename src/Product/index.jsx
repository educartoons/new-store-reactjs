export default function Product(props) {
  const { product } = props;
  return (
    <article className="w-1/5 p-2">
      <figure>
        <img role="image" src={product.images[0]} alt="" />
      </figure>
      <h2 data-testid="product-title">{product.title}</h2>
      <p>{product.description}</p>
      <p className="mt-2 font-bold" data-testid="product-price">
        price: USD ${product.price}
      </p>
      <div>
        <span
          className="inline-block p-2 border"
          data-testid="product-category"
        >
          {product.category}
        </span>
      </div>
    </article>
  );
}
