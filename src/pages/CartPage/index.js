import React, { useEffect } from "react";
import {
  useCreateCartItem,
  useDeleteCartItem,
  useEditCartItem,
  useGetCart,
} from "../../api/hooks/cartHook";
import { deleteCartItem, editCartItem } from "../../api/services";
//const mutation = useDeleteCartItem(2);

const CartPage = (props) => {
  const { isLoading, isError, data, error } = useGetCart(2);

  console.log("🚀 ~ file: index.js ~ line 9 ~ CartPage ~ data", data);
  //todo:optimize
  const deleteCartItemHandler = (id) => {
    deleteCartItem(id);
  };
  const updateCartItemHandler = (id) => {
    editCartItem(id);
  };

  return (
    <React.Fragment>
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Cart</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li class="breadcrumb-item active">Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-box-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="table-main table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.map((cartItem) => {
                      return (
                        <tr key={cartItem.id}>
                          <td class="thumbnail-img">
                            <a href="#">
                              <img
                                class="img-fluid"
                                src={
                                  "http://localhost:1337" +
                                  cartItem.product?.thumbnail?.url
                                }
                                alt={
                                  cartItem.product?.thumbnail?.alternativeText
                                }
                              />
                            </a>
                          </td>
                          <td class="name-pr">
                            {/* todo:make link */}
                            <a>{cartItem.product?.name}</a>
                          </td>
                          <td class="price-pr">
                            <p>{cartItem.product?.priceText}</p>
                          </td>
                          <td class="quantity-box">
                            <input
                              type="number"
                              size="4"
                              value={cartItem.number}
                              min="0"
                              step="1"
                              class="c-input-text qty text"
                              //todo: find way to use mutation
                              onChange={(e) => {
                                cartItem.number = e.target.value;
                                console.log("🚀 ~ file: index.js ~ line 92 ~ {data?.data?.map ~ cartItem.number", cartItem.number)
                                console.log(
                                  "🚀 ~ file: index.js ~ line 91 ~ {data?.data?.map ~ value",
                                  e.target.value
                                );

                                updateCartItemHandler(cartItem.id, {
                                  number: e.target.value,
                                });
                              }}
                            />
                          </td>
                          <td class="total-pr">
                            <p>$ 80.0</p>
                          </td>
                          <td class="remove-pr">
                            <a
                              onClick={() => deleteCartItemHandler(cartItem.id)}
                            >
                              <i class="fas fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-lg-6 col-sm-6">
              <div class="coupon-box">
                <div class="input-group input-group-sm">
                  <input
                    class="form-control"
                    placeholder="Enter your coupon code"
                    aria-label="Coupon code"
                    type="text"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-theme" type="button">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="update-box">
                <input value="Update Cart" type="submit" />
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-lg-8 col-sm-12"></div>
            <div class="col-lg-4 col-sm-12">
              <div class="order-box">
                <h3>Order summary</h3>
                <div class="d-flex">
                  <h4>Sub Total</h4>
                  <div class="ml-auto font-weight-bold"> $ 130 </div>
                </div>
                <div class="d-flex">
                  <h4>Discount</h4>
                  <div class="ml-auto font-weight-bold"> $ 40 </div>
                </div>
                <hr class="my-1" />
                <div class="d-flex">
                  <h4>Coupon Discount</h4>
                  <div class="ml-auto font-weight-bold"> $ 10 </div>
                </div>
                <div class="d-flex">
                  <h4>Tax</h4>
                  <div class="ml-auto font-weight-bold"> $ 2 </div>
                </div>
                <div class="d-flex">
                  <h4>Shipping Cost</h4>
                  <div class="ml-auto font-weight-bold"> Free </div>
                </div>
                <hr />
                <div class="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div class="ml-auto h5"> $ 388 </div>
                </div>
                <hr />{" "}
              </div>
            </div>
            <div class="col-12 d-flex shopping-box">
              <a href="checkout.html" class="ml-auto btn hvr-hover">
                Checkout
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </React.Fragment>
  );
};

export default CartPage;
