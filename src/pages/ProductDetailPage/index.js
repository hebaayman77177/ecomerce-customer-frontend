import React from "react";
import { useParams } from "react-router-dom";

import { useGetProduct } from "../../api/hooks/productHooks";

const ProductDetailPage = (props) => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useGetProduct(id);
  console.log("🚀 ~ file: index.js ~ line 8 ~ ProductDetailPage ~ data", data);
  const product = data?.data;
  return (
    <React.Fragment>
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Product details</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Product</a>
                </li>
                <li class="breadcrumb-item active">Product Detail </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="shop-detail-box-main">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-6">
              <div
                id="carousel-example-1"
                class="single-product-slider carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    {" "}
                    <img
                      class="d-block w-100"
                      src={"http://localhost:1337" + product?.thumbnail?.url}
                      alt="First slide"
                    />{" "}
                  </div>
                  {/*<div class="carousel-item">
                    {" "}
                    <img
                      class="d-block w-100"
                      src="images/big-img-02.jpg"
                      alt="Second slide"
                    />{" "}
                  </div>
                  <div class="carousel-item">
                    {" "}
                    <img
                      class="d-block w-100"
                      src="images/big-img-03.jpg"
                      alt="Third slide"
                    />{" "}
                  </div>*/}
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carousel-example-1"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carousel-example-1"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                  <span class="sr-only">Next</span>
                </a>
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-1"
                    data-slide-to="0"
                    class="active"
                  >
                    <img
                      class="d-block w-100 img-fluid"
                      src={"http://localhost:1337" + product?.thumbnail?.url}
                      alt=""
                    />
                  </li>
                  {/*<li data-target="#carousel-example-1" data-slide-to="1">
                    <img
                      class="d-block w-100 img-fluid"
                      src="images/smp-img-02.jpg"
                      alt=""
                    />
                  </li>
                  <li data-target="#carousel-example-1" data-slide-to="2">
                    <img
                      class="d-block w-100 img-fluid"
                      src="images/smp-img-03.jpg"
                      alt=""
                    />
                  </li>*/}
                </ol>
              </div>
            </div>

            <div class="col-xl-7 col-lg-7 col-md-6">
              <div class="single-product-details">
                <h2>{product?.name}</h2>
                <h5>
                  {" "}
                  {/*<del>$ 60.00</del>*/}
                  {product?.price}
                </h5>
                <p class="available-stock">
                  <span> {product?.priceText}</span>
                </p>
                <h4>Short Description:</h4>
                <p>{product?.description}. </p>
                <ul>
                  <li>
                    <div class="form-group size-st">
                      <label class="size-label">Size</label>
                      <select
                        id="basic"
                        className="selectpicker show-tick form-control"
                      >
                        <option value="0">Size</option>
                        <option value="0">S</option>
                        <option value="1">M</option>
                        <option value="1">L</option>
                        <option value="1">XL</option>
                        <option value="1">XXL</option>
                        <option value="1">3XL</option>
                        <option value="1">4XL</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="form-group quantity-box">
                      <label class="control-label">Quantity</label>
                      <input
                        class="form-control"
                        value="0"
                        min="0"
                        max="20"
                        type="number"
                      />
                    </div>
                  </li>
                </ul>

                <div class="price-box-bar">
                  <div class="cart-and-bay-btn">
                    <a class="btn hvr-hover" data-fancybox-close="" href="#">
                      Buy New
                    </a>
                    <a class="btn hvr-hover" data-fancybox-close="" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>

                <div class="add-to-btn">
                  <div class="add-comp">
                    <a class="btn hvr-hover" href="#">
                      <i class="fas fa-heart"></i> Add to wishlist
                    </a>
                    <a class="btn hvr-hover" href="#">
                      <i class="fas fa-sync-alt"></i> Add to Compare
                    </a>
                  </div>
                  <div class="share-bar">
                    <a class="btn hvr-hover" href="#">
                      <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a class="btn hvr-hover" href="#">
                      <i class="fab fa-google-plus" aria-hidden="true"></i>
                    </a>
                    <a class="btn hvr-hover" href="#">
                      <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a class="btn hvr-hover" href="#">
                      <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                    <a class="btn hvr-hover" href="#">
                      <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-lg-12">
              <div class="title-all text-center">
                <h1>Featured Products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
              <div class="featured-products-box owl-carousel owl-theme">
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
                      <img
                        src="images/img-pro-01.jpg"
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
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
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
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
                      <img
                        src="images/img-pro-01.jpg"
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
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
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
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="products-single fix">
                    <div class="box-img-hover">
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
                      <h5> $9.79</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailPage;
