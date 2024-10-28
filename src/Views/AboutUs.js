import { useEffect } from 'react';
import Swiper from 'swiper';  
import 'swiper/swiper-bundle.css';


function AboutUs() {
    useEffect(() => {
        new Swiper('.init-swiper', {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 40 },
            640: { slidesPerView: 4, spaceBetween: 40 },
            768: { slidesPerView: 6, spaceBetween: 40 },
            1200: { slidesPerView: 8, spaceBetween: 40 }
          }
        });
      }, []);
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
        <section id="about" className="about section light-background">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/about.jpg" className="img-fluid" alt="About Us" />
                <a href="https://www.youtube.com/watch?v=VET-tYA_ya8" className="glightbox pulsating-play-btn"></a>
              </div>

              <div className="col-lg-7 content" data-aos="fade-up" data-aos-delay="100">
                <h3>About Us</h3>
                <p>
                  Our speed governors and GPS trackers have strong stability and are easy to install. Speed Governor can force to limit the speed intelligently and safely, while GPS tracker locates the vehicle with driving behavior on time.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>GPS TRACKERS</h5>
                      <p>It is used for the surveillance of location through the Global Positioning System (GPS) to track the location of an entity or object remotely.</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>SPEED GOVERNORS</h5>
                      <p>A speed limiter prevents a car from travelling over a certain speed set by the government. Unlike cruise control, it doesn't maintain a set speed.</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Fleet and Fuel Management System</h5>
                      <p> Fuel-management system is used to maintain, control, and monitor fuel consumption and stock in any type of industry that uses transport.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Services That We Offer For You</p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Speed Governors Installations</h3>
                  </a>
                  <p>Get vehicle certification, speed governor installation and certificate renewals at competitive rates.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Car tracking</h3>
                  </a>
                  <p>With Sator Tracking device in your car, you will get to have a mobile application and an online platform (for using on computer). With this, you will always know the location of your car.</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Fleet and Fuel Management System</h3>
                  </a>
                  <p>Good stability: It uses the newest ultrasonic non-contact technology, compare with the traditional measuring method of direct contact, float-type, pressure-type, magnetic system of sliding, it does not contact with fuel level directly, could be sure of its stability and long-life.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients section">
  <div className="container" data-aos="fade-up" data-aos-delay="100">
    <div className="swiper init-swiper">
      
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="assets/img/1.png" alt="Client 1" style={{ maxWidth: '100px', height: 'auto' }} />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/2.png" alt="Client 2" style={{ maxWidth: '100px', height: 'auto' }} />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/3.png" alt="Client 3" style={{ maxWidth: '100px', height: 'auto' }} />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/4.png" alt="Client 4" style={{ maxWidth: '100px', height: 'auto' }} />
        </div>
        <div className="swiper-slide">
          <img src="assets/img/5.png" alt="Client 5" style={{ maxWidth: '100px', height: 'auto' }} />
        </div>
        
        
       
      </div>
      <div className="swiper-pagination"></div>
    </div>
  </div>
</section>

      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>SATOR RWANDA</h3>
              <p>
                Nyabugogo, Manu Plaza, 4th Floor, Room 20<br />
                <strong>Phone:</strong> (+250) 781 13 81 55<br />
                <strong>Email:</strong> info@satorrwanda.rw<br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-social">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>SATOR RWANDA</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
