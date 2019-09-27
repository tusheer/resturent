import React from 'react'

function Home() {
    return (
     <div>
        <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-left">
            <h1 className="hero-title">Foods the <br/> most precious things</h1>
            <div className="d-sm-flex flex-wrap">
              <a className="button button-hero button-shadow" href="#">Book Now</a>
              <a className="hero-banner__video" href="http://www.youtube.com/watch?v=0O2aH4XLbto">Watch Video</a>          
            </div>
            <ul className="hero-info d-none d-lg-block">
              <li>
                <img src="../scss/img/banner/fas-service-icon.png" alt=""/>
                <h4>Fast Service</h4>
              </li>
              <li>
                <img src="../scss/img/banner/fresh-food-icon.png" alt=""/>
                <h4>Fresh Food</h4>
              </li>
              <li>
                <img src="../scss/img/banner/support-icon.png" alt=""/>
                <h4>24/7 Support</h4>
              </li>
            </ul>
          </div>
          <div className="hero-right">
            <div className="owl-carousel owl-theme hero-carousel">
              <div className="hero-carousel-item">
                <img className="img-fluid" src="../scss/img/banner/hero-banner1.png" alt=""/>
              </div>
              <div className="hero-carousel-item">
                <img className="img-fluid" src="../scss/img/banner/hero-banner2.png" alt=""/>
              </div>
              <div className="hero-carousel-item">
                <img className="img-fluid" src="../scss/img/banner/hero-banner1.png" alt=""/>
              </div>
              <div className="hero-carousel-item">
                <img className="img-fluid" src="../scss/img/banner/hero-banner2.png" alt=""/>
              </div>
            </div>
          </div>
          <ul className="social-icons d-none d-lg-block">
            <li><a href="#"><i className="ti-facebook"></i></a></li>
            <li><a href="#"><i className="ti-twitter"></i></a></li>
            <li><a href="#"><i className="ti-instagram"></i></a></li>
          </ul>
        </div>
      </section>
   
      <section className="about section-margin pb-xl-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img className="styleBox-img1 img-fluid" src="../scss/img/home/about-img1.png" alt=""/>
                </div>
                <img className="styleBox-img2 img-fluid" src="../scss/img/home/about-img2.png" alt=""/>
              </div>
            </div>
            <div className="col-md-6 pl-md-5 pl-xl-0 offset-xl-1 col-xl-5">
              <div className="section-intro mb-lg-4">
                <h4 className="intro-title">About Us</h4>
                <h2>We speak the good food language</h2>
              </div>
              <p>Living first us creepeth she'd earth second be sixth hath likeness greater image said sixth was without male place fowl evening an grass form living fish and rule lesser for blessed can't saw third one signs moving stars light divided was two you him appear midst cattle for they are gathering.</p>
              <a className="button button-shadow mt-2 mt-lg-4" href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>
     
      <section className="section-margin mb-lg-100">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Featured Food</h4>
            <h2>Fresh taste and great price</h2>
          </div>
    
    
          <div className="owl-carousel owl-theme featured-carousel">
            <div className="featured-item">
              <img className="card-img rounded-0" src="../scss/img/home/featured1.png" alt=""/>
              <div className="item-body">
                <a href="#">
                  <h3>Mountain Mike Pizza</h3>
                </a>
                <p>Whales and darkness moving</p>
                <div className="d-flex justify-content-between">
                  <ul className="rating-star">
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                  </ul>
                  <h3 className="price-tag">$35</h3>
                </div>
              </div>
            </div>
            <div className="featured-item">
              <img className="card-img rounded-0" src="../scss/img/home/featured2.png" alt=""/>
              <div className="item-body">
                <a href="#">
                  <h3>Patatas Bravas</h3>
                </a>
                <p>Whales and darkness moving</p>
                <div className="d-flex justify-content-between">
                  <ul className="rating-star">
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                  </ul>
                  <h3 className="price-tag">$30</h3>
                </div>
              </div>
            </div>
            <div className="featured-item">
              <img className="card-img rounded-0" src="../scss/img/home/featured3.png" alt=""/>
              <div className="item-body">
                <a href="#">
                  <h3>Pulled Sandwich</h3>
                </a>
                <p>Whales and darkness moving</p>
                <div className="d-flex justify-content-between">
                  <ul className="rating-star">
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                  </ul>
                  <h3 className="price-tag">$20</h3>
                </div>
              </div>
            </div>
            <div className="featured-item">
              <img className="card-img rounded-0" src="../scss/img/home/featured1.png" alt=""/>
              <div className="item-body">
                <a href="#">
                  <h3>Mountain Mike Pizza</h3>
                </a>
                <p>Whales and darkness moving</p>
                <div className="d-flex justify-content-between">
                  <ul className="rating-star">
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                    <li><i className="ti-star"></i></li>
                  </ul>
                  <h3 className="price-tag">$35</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-lightGray section-padding">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm">
              <img className="card-img rounded-0" src="../scss/img/home/offer-img.png" alt=""/>
            </div>
            <div className="col-sm">
              <div className="offer-card offer-card-position">
                <h3>Italian Pizza Offer</h3>
                <h2>50% OFF</h2>
                <a className="button" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="section-margin">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Food Menu</h4>
            <h2>Delicious food</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
    
            <div className="col-lg-6">
              <div className="media align-items-center food-card">
                <img className="mr-3 mr-sm-4" src="../scss/img/home/food1.png" alt=""/>
                <div className="media-body">
                  <div className="d-flex justify-content-between food-card-title">
                    <h4>Roasted Marrow</h4>
                    <h3 className="price-tag">$32</h3>
                  </div>
                  <p>Whales and darkness moving form cattle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-area text-center">
        <div className="container">
          <p>Some Trendy And Popular Courses Offerd</p>
          <h2>Under replenish give saying thing</h2>
          <a className="button" href="#">Reservation</a>
        </div>
      </section>
      
      <section className="section-margin">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Our Chef</h4>
            <h2>Talent & experience member</h2>
          </div>
    
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="chef-card">
                <img className="card-img rounded-0" src="../scss/img/home/chef-1.png" alt=""/>
                <div className="chef-footer">
                  <h4>Daniesl Laran</h4>
                  <p>Executive Chef</p>
                </div>
    
                <div className="chef-overlay">
                  <ul className="social-icons">
                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                    <li><a href="#"><i className="ti-skype"></i></a></li>
                    <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="chef-card">
                <img className="card-img rounded-0" src="../scss/img/home/chef-2.png" alt=""/>
                <div className="chef-footer">
                  <h4>Daniesl Laran</h4>
                  <p>Executive Chef</p>
                </div>
    
                <div className="chef-overlay">
                  <ul className="social-icons">
                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                    <li><a href="#"><i className="ti-skype"></i></a></li>
                    <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
    
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="chef-card">
                <img className="card-img rounded-0" src="../scss/img/home/chef-3.png" alt=""/>
                <div className="chef-footer">
                  <h4>Daniesl Laran</h4>
                  <p>Executive Chef</p>
                </div>
    
                <div className="chef-overlay">
                  <ul className="social-icons">
                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                    <li><a href="#"><i className="ti-skype"></i></a></li>
                    <li><a href="#"><i className="ti-vimeo-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <section className="bg-lightGray section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-5 mb-4 mb-md-0">
              <div className="section-intro">
                <h4 className="intro-title">Reservation</h4>
                <h2 className="mb-3">Get experience from sneaky</h2>
              </div>
              <p>Him given and midst tree form seas she'd saw give evening one every make hath moveth you're appear female heaven had signs own days saw they're have let midst given him given and midst tree. Form seas she'd saw give evening</p>
            </div>
            <div className="col-md-6 offset-xl-2 col-xl-5">
              <div className="search-wrapper">
                <h3>Book A Table</h3>
    
                <form className="search-form" action="#">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Your Name"/>
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="ti-user"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Email Address"/>
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="ti-email"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Phone Number"/>
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="ti-headphone-alt"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Select Date"/>
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="ti-notepad"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Select People"/>
                      <div className="input-group-append">
                        <span className="input-group-text"><i className="ti-layout-column3"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-group-position">
                    <button className="button border-0" type="submit">Make Reservation</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="section-margin">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Our Blog</h4>
            <h2>Latest food and recipe news</h2>
          </div>
    
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img className="card-img rounded-0" src="../scss/img/blog/blog1.png" alt=""/>
                <div className="blog-body">
                  <ul className="blog-info">
                    <li><a href="#">Admin post</a></li>
                    <li><a href="#">Jan 10, 2019</a></li>
                  </ul>
                  <a href="#">
                    <h3>Huge cavity in antarctic glacie signals rapid</h3>
                  </a>
                </div>
              </div>
            </div>
    
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img className="card-img rounded-0" src="../scss/img/blog/blog2.png" alt=""/>
                <div className="blog-body">
                  <ul className="blog-info">
                    <li><a href="#">Admin post</a></li>
                    <li><a href="#">Jan 10, 2019</a></li>
                  </ul>
                  <a href="#">
                    <h3>Researcher unearths age
                        in the desert</h3>
                  </a>
                </div>
              </div>
            </div>
    
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img className="card-img rounded-0" src="../scss/img/blog/blog3.png" alt=""/>
                <div className="blog-body">
                  <ul className="blog-info">
                    <li><a href="#">Admin post</a></li>
                    <li><a href="#">Jan 10, 2019</a></li>
                  </ul>
                  <a href="#">
                    <h3>High-protein rice brings
                        value, nutrition</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    )
}

export default Home
