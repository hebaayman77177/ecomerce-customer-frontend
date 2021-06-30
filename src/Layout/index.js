import React from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/*main header*/}
      <header className="main-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-controls="navbars-rs-food"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" className="logo" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                class="nav navbar-nav ml-auto"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li class="dropdown megamenu-fw">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown"
                  >
                    Product
                  </a>
                  <ul class="dropdown-menu megamenu-content" role="menu">
                    <li>
                      <div class="row">
                        <div class="col-menu col-md-3">
                          <h6 class="title">Top</h6>
                          <div class="content">
                            <ul class="menu-col">
                              <li>
                                <a href="shop.html">Jackets</a>
                              </li>
                              <li>
                                <a href="shop.html">Shirts</a>
                              </li>
                              <li>
                                <a href="shop.html">Sweaters & Cardigans</a>
                              </li>
                              <li>
                                <a href="shop.html">T-shirts</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-menu col-md-3">
                          <h6 class="title">Bottom</h6>
                          <div class="content">
                            <ul class="menu-col">
                              <li>
                                <a href="shop.html">Swimwear</a>
                              </li>
                              <li>
                                <a href="shop.html">Skirts</a>
                              </li>
                              <li>
                                <a href="shop.html">Jeans</a>
                              </li>
                              <li>
                                <a href="shop.html">Trousers</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-menu col-md-3">
                          <h6 class="title">Clothing</h6>
                          <div class="content">
                            <ul class="menu-col">
                              <li>
                                <a href="shop.html">Top Wear</a>
                              </li>
                              <li>
                                <a href="shop.html">Party wear</a>
                              </li>
                              <li>
                                <a href="shop.html">Bottom Wear</a>
                              </li>
                              <li>
                                <a href="shop.html">Indian Wear</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-menu col-md-3">
                          <h6 class="title">Accessories</h6>
                          <div class="content">
                            <ul class="menu-col">
                              <li>
                                <a href="shop.html">Bags</a>
                              </li>
                              <li>
                                <a href="shop.html">Sunglasses</a>
                              </li>
                              <li>
                                <a href="shop.html">Fragrances</a>
                              </li>
                              <li>
                                <a href="shop.html">Wallets</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown"
                  >
                    SHOP
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="shop-detail.html">Shop Detail</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="service.html">
                    Our Service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact-us.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div class="attr-nav">
              <ul>
                <li class="search">
                  <a href="#">
                    <i class="fa fa-search"></i>
                  </a>
                </li>
                <li class="side-menu">
                  <a href="#">
                    <i class="fa fa-shopping-bag"></i>
                    <span class="badge">3</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="side">
            <a href="#" class="close-side">
              <i class="fa fa-times"></i>
            </a>
            <li class="cart-box">
              <ul class="cart-list">
                <li>
                  <a href="#" class="photo">
                    <img
                      src="images/img-pro-01.jpg"
                      class="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Delica omtantur </a>
                  </h6>
                  <p>
                    1x - <span class="price">$80.00</span>
                  </p>
                </li>
                <li>
                  <a href="#" class="photo">
                    <img
                      src="images/img-pro-02.jpg"
                      class="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Omnes ocurreret</a>
                  </h6>
                  <p>
                    1x - <span class="price">$60.00</span>
                  </p>
                </li>
                <li>
                  <a href="#" class="photo">
                    <img
                      src="images/img-pro-03.jpg"
                      class="cart-thumb"
                      alt=""
                    />
                  </a>
                  <h6>
                    <a href="#">Agam facilisis</a>
                  </h6>
                  <p>
                    1x - <span class="price">$40.00</span>
                  </p>
                </li>
                <li class="total">
                  <a href="#" class="btn btn-default hvr-hover btn-cart">
                    VIEW CART
                  </a>
                  <span class="float-right">
                    <strong>Total</strong>: $180.00
                  </span>
                </li>
              </ul>
            </li>
          </div>
        </nav>
      </header>

      {children}
      {/*footer*/}
      <footer>
        <div class="footer-main">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="footer-widget">
                  <h4>About ThewayShop</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="footer-link">
                  <h4>Information</h4>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">Our Sitemap</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div class="footer-link-contact">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <p>
                        <i class="fas fa-map-marker-alt"></i>Address: Michael I.
                        Days 3756 <br />
                        Preston Street Wichita,
                        <br /> KS 67213{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fas fa-phone-square"></i>Phone:{" "}
                        <a href="tel:+1-888705770">+1-888 705 770</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class="fas fa-envelope"></i>Email:{" "}
                        <a href="mailto:contactinfo@gmail.com">
                          contactinfo@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="footer-copyright">
        <p class="footer-company">
          All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By
          :<a href="https://html.design/">html design</a>
        </p>
      </div>
      {/*<a href="#" id="back-to-top" title="Back to top" style={{"display: none"}}>*/}
      {/*&uarr;
      </a>*/}
    </React.Fragment>
  );
};

export default Layout;
