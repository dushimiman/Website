import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

function Media() {
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
                <li><a href="/Media">Media</a></li>
                <li><a href="/OurTeam">Team</a></li>
                <li><a href="/Contactus">Contact</a></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <section id="about" className="about section light-background">
          <div className="container-fluid steps py-5">
            <div className="container py-5">
              <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
                <h1 className="display-5 text-capitalize text-white mb-3">Central<span className="text-primary"> Process</span></h1>
                <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="steps-item p-4 mb-4">
                    <h4>Come In Contact</h4>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div className="steps-number">01.</div>
                  </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="steps-item p-4 mb-4">
                    <h4>Choose A Car</h4>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div className="steps-number">02.</div>
                  </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="steps-item p-4 mb-4">
                    <h4>Enjoy Driving</h4>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <div className="steps-number">03.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer light-background">
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">About Us</h4>
                  <p className="mb-3">We are a leading company in Rwanda...</p>
                  <div className="position-relative">
                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                    <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                  </div>
                </div>
              </div>
              {/* Remaining footer columns */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Media;
