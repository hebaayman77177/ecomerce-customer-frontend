import React from "react";
import { useGetProducts } from "../../api/hooks/productHooks";
import { Link } from "react-router-dom";
import { useCreateCartItem } from "../../api/hooks/cartHook";

const Home = (props) => {
  const { isLoading, isError, data, error } = useGetProducts();
  const mutation = useCreateCartItem(2);
  const addToCartHandler = (data) => {
    mutation.mutate(data);
  };
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ data", data);
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ error", error);
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ isError", isError);
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ isLoading", isLoading);
  //const { data: products } = data;
  console.log("🚀 ~ file: index.js ~ line 6 ~ Home ~ data", data?.data);

  return (
    <React.Fragment>
      <div class="products-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title-all text-center">
                <h1>Featured Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>

          {/*<div class="row">
            <div class="col-lg-12">
              <div class="special-menu text-center">
                <div class="button-group filter-button-group">
                  <button class="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".top-featured">Top featured</button>
                  <button data-filter=".best-seller">Best seller</button>
                </div>
              </div>
            </div>
          </div>*/}

          <div class="row special-list">
            {data?.data.map((product) => {
              return (
                <div class="col-lg-3 col-md-6 special-grid best-seller">
                  <div class="products-single fix">
                    <div class="box-img-hover">
                      <div class="type-lb">
                        <p class="sale">New</p>
                      </div>
                      <img
                        src={"http://localhost:1337" + product?.thumbnail?.url}
                        class="img-fluid"
                        alt={product?.thumbnail?.alternativeText}
                      />
                      <div class="mask-icon">
                        <ul>
                          <li>
                            <Link
                              to={`product/${product.id}`}
                              data-toggle="tooltip"
                              data-placement="right"
                              title="View"
                            >
                              <i class="fas fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Compare"
                            >
                              <i class="fas fa-sync-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Add to Wishlist"
                            >
                              <i class="far fa-heart"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          class="cart"
                          href="#"
                          onClick={() => {
                            //todo:make cartitem uniaque with product and customer
                            addToCartHandler({
                              product: product.id,
                              customer: 2,
                              number: 1,
                            });
                          }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div class="why-text">
                      <h4>{product.name}</h4>
                      <h5>{product.priceText}</h5>
                    </div>
                  </div>
                </div>
              );
            })}

            {/*<div class="col-lg-3 col-md-6 special-grid top-featured">
              <div class="products-single fix">
                <div class="box-img-hover">
                  <div class="type-lb">
                    <p class="new">New</p>
                  </div>
                  <img
                    src="images/img-pro-02.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i class="fas fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i class="fas fa-sync-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i class="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                    <a class="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $9.79</h5>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 special-grid top-featured">
              <div class="products-single fix">
                <div class="box-img-hover">
                  <div class="type-lb">
                    <p class="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-03.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i class="fas fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i class="fas fa-sync-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i class="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                    <a class="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $10.79</h5>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 special-grid best-seller">
              <div class="products-single fix">
                <div class="box-img-hover">
                  <div class="type-lb">
                    <p class="sale">Sale</p>
                  </div>
                  <img
                    src="images/img-pro-04.jpg"
                    class="img-fluid"
                    alt="Image"
                  />
                  <div class="mask-icon">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="View"
                        >
                          <i class="fas fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <i class="fas fa-sync-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Add to Wishlist"
                        >
                          <i class="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                    <a class="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
                <div class="why-text">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <h5> $15.79</h5>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
