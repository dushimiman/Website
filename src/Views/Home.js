import React from 'react';

function Home() {
  return (
    <>
       <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center dark-background">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">info@satorrwanda.rw</a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>(+250) 781 13 81 55</span>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>6017</span>
              </i>
              <i className="bi bi-geo-alt d-flex align-items-center ms-4">
                <span>Nyabugogo, Manu Plaza, 4th Floor, Room 20</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="Logo" />
            </a>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/Aboutus">About</a></li>
                <li><a href="#services">Media</a></li>
                
                <li><a href="#team">Team</a></li>
                
                
                <li><a href="#contact">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img src="assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />
          <div className="container position-relative">
            <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
              <h2>Welcome to Sator Rwanda Ltd</h2>
              <p>We provide good quality products and services</p>
            </div>

            <div className="content row gy-4">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                  <h3>Why Choose Our Services?</h3>
                  <p>
                    We are a leading company in Rwanda for delivering speed governors, with over 5 years of experience. Our speed governors and GPS trackers offer strong stability and easy installation. Speed governors limit speed intelligently, while GPS trackers provide real-time vehicle tracking.
                  </p>
                  <div className="text-center">
                    <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-center">
                  <div className="row gy-4">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                        <i className="bi bi-clipboard-data"></i>
                        <h4>Our Mission</h4>
                        <p>To consistently supply quality Speed Governors and GPS Trackers, meeting safety standards within and outside Rwanda.</p>
                      </div>
                    </div>

                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                        <i className="bi bi-gem"></i>
                        <h4>Our Vision</h4>
                        <p>To be the company of choice for quality brand products and support services in transport.</p>
                      </div>
                    </div>

                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                        <i className="bi bi-inboxes"></i>
                        <h4>Fleet and Fuel Management</h4>
                        <p>Utilizing ultrasonic sensor technology for precise fuel level measurement in tanks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="alt-services" className="alt-services section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/Speed Govonor.jpg" 
                     className="img-fluid w-100" 
                     style={{ height: '300px', objectFit: 'cover' }} 
                     alt="Speed Governor"/>
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Speed Governor</h3>
                </a>
                <p>A speed limiter prevents a car from travelling over a certain speed set by the government. Unlike cruise control, it doesn't maintain a set speed.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/tracker.jpg" 
                     className="img-fluid w-100" 
                     style={{ height: '300px', objectFit: 'cover' }} 
                     alt="GPS Tracker"/>
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>GPS Tracker</h3>
                </a>
                <p>It is used for the surveillance of location through the Global Positioning System (GPS) to track the location of an entity or object remotely.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/fuel.jpg" 
                     className="img-fluid w-100" 
                     style={{ height: '300px', objectFit: 'cover' }} 
                     alt="Fleet and Fuel Management System"/>
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Fleet and Fuel Management System</h3>
                </a>
                <p>Fuel-management system is used to maintain, control, and monitor fuel consumption and stock in any type of industry that uses transport.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="img">
                <img src="assets/img/xr.jpg" 
                     className="img-fluid w-100" 
                     style={{ height: '300px', objectFit: 'cover' }} 
                     alt="Asperiores Commodit"/>
              </div>
              <div className="details">
                <a href="service-details.html" className="stretched-link">
                  <h3>Asperiores Commodit</h3>
                </a>
                <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

        <footer id="footer" className="footer light-background">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/logo.png" alt="Logo" />
            </a>
                <div className="footer-contact pt-3">
                  <p>
Nyabugogo,Manu Plaza,4th Floor
Room 20</p>
                  <p><strong>Phone:</strong> (+250) 781 13 81 55
                  </p>
                  <p><strong>Email:</strong> info@satorrwanda.rw</p>
                </div>
                <div className="social-links d-flex mt-4">
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Tracking system
                  </a></li>
                  <li><a href="#">Fuel Management</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Speed Governors</a></li>
                  <li><a href="#">GPS Trackers</a></li>
                  <li><a href="#">Fleet and Fuel management</a></li>
                  <li><a href="#">Garage</a></li>
                 
                </ul>
              </div>

              <div className="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our newsletter to receive updates on our products and services.</p>
                <form action="forms/newsletter.php" method="post" className="php-email-form">
                  <input type="email" name="email" placeholder="Enter your email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <div className="copyright">
              &copy; 2024 <strong>Sator Rwanda Ltd</strong>. All Rights Reserved.
            </div>
            
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
