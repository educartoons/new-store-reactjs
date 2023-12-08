import { expect, it, describe } from "vitest";
import { render, cleanup } from "@testing-library/react";

import Product from "../index";

const DATA_PRODUCT = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/1.jpg",
  ],
};

describe("<Product />", () => {
  it("renders an image", async () => {
    const product = render(<Product product={DATA_PRODUCT} />);

    const productImage = await product.findByRole("image");

    expect(productImage.src).toContain(
      "https://i.dummyjson.com/data/products/1/1.jpg"
    );
  });

  it("renders its title", () => {
    cleanup();
    const { getByTestId } = render(<Product product={DATA_PRODUCT} />);

    const productTitle = getByTestId("product-title");

    expect(productTitle.textContent).toContain("iPhone 9");
  });

  it("renders its price", () => {
    cleanup();
    const { getByTestId } = render(<Product product={DATA_PRODUCT} />);

    const productPrice = getByTestId("product-price");

    expect(productPrice.textContent).toContain("price: USD $549");
  });

  it("renders its category", () => {
    cleanup();
    const { getByTestId } = render(<Product product={DATA_PRODUCT} />);

    const productCategory = getByTestId("product-category");

    expect(productCategory.textContent).toContain("smartphones");
  });
});
